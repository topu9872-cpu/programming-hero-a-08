import Image from "next/image";
import bookData from "../../../../public/bookApi.json";
import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";
const DetailsPage = async ({ params }) => {
  const { id } = await params;

  console.log(id);
  const card = bookData.find((item) => item.id == id);

  return (
    <div className="container mt-6  mx-auto">
<Link href={'/'}>      <h1 className="text-[#fa3d3b] font-bold flex items-center "><BiLeftArrowAlt /> Back</h1></Link>
      <div className="flex border-4 my-5 border-[#fa3d3b] rounded-xl p-2 shadow-md">
        <div>
          <Image
            src={card.image_url}
            width={130}
            height={110}
            alt={card.title}
            className="object-cover  "
          />
        </div>
        <div className="ml-10">
          <h1 className="text-2xl font-bold">{card.title}</h1>
          <h3 className="text-xl font-medium">{card.author}</h3>
          <p className="opacity-80">{card.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
