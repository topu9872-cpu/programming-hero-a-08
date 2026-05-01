import Image from 'next/image';
import icon from '@/assets/icons8-profile.gif';

const MyProfilePage = () => {
  return (
    <div className='mx-auto text-center my-10'>
   <span className='flex justify-center'> <Image src={icon} weidth={90} height={90} alt={'ds'} className='object-cover rounded-full'   /></span>
    <h1 className='text-2xl pt-1 font-bold'>Name</h1>
    </div>
  );
};

export default MyProfilePage;