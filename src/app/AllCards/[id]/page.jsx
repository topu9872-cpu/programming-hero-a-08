import Image from "next/image";
import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";
import { getBookData } from "@/components/JsonData/data";

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const bookData = await getBookData();

  const card = bookData.find((item) => item.id == id);

  if (!card) {
    return (
      <div className="container mt-6 mx-auto">
        <h1 className="text-xl">Book not found</h1>
        <Link href="/" className="text-[#fa3d3b] underline">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-6 mx-auto">
      <Link href={"/"}>
        <h1 className="text-[#fa3d3b] font-bold flex items-center cursor-pointer">
          <BiLeftArrowAlt /> Back
        </h1>
      </Link>

      <div className="flex border-4 my-5 border-[#fa3d3b] rounded-xl p-2 shadow-md">
        <div className="flex">
          <Image
            src={card.image_url}
            width={130}
            height={110}
            alt={card.title}
            className="object-cover"
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
