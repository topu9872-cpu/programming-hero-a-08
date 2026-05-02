// "use client";
// import { createContext, useState } from "react";

// export const UserContext = createContext();

// const ContextProveder = ({ children }) => {
//   const [user, setUser] = useState(null);
//   return (
//     <div>
//       <UserContext.Provider value={{ user, setUser }}>
//         {children}
//       </UserContext.Provider>
//     </div>
//   );
// };

// export default ContextProveder;

"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { data, isPending } = authClient.useSession();
  const [user, setUser] = useState(null);

  // 🔥 session → context sync
  useEffect(() => {
    if (data?.user) {
      setUser(data.user);
    } else {
      setUser(null);
    }
  }, [data]);

  return (
    <UserContext.Provider value={{ user, setUser, isPending }}>
      {children}
    </UserContext.Provider>
  );
};

// custom hook
export const useUser = () => useContext(UserContext);