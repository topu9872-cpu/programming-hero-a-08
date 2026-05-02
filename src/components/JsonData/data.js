export const getBookData= async () => {
  try {
    const res = await fetch('http://localhost:3000/bookApi.json', { 
   cache:'no-store'
    });

    if (!res.ok) throw new Error('Failed to fetch data');

    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return []; 
  }
};
export const getCategoryData= async () => {
  try {
    const res = await fetch('http://localhost:3000/category.json', { 
      cache:'no-store'
    });

    if (!res.ok) throw new Error('Failed to fetch data');

    return await res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return []; 
  }
};
