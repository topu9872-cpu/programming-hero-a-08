'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const DetailsBtn = ({ card }) => {
  const router = useRouter();
const session=authClient();
if(!session){
return toast.error('Lognin')
}
  
  return (
    <div className="card-actions justify-center mt-4">
      <button
        onClick={() => router.push(`/AllCards/${card.id}`)}
        className="btn bg-[#fa3d3b] hover:bg-white hover:text-[#fa3d3b] text-white w-full"
      >
       View Details
      </button>
    </div>
  );
};

export default DetailsBtn;