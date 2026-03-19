import Link from "next/link";
export const Logo = () => {
  return (
    <>
      <Link href={"/home"}>
        <div className="rounded-lg inline-flex items-center gap-2 text-2xl">
          <h1 className="bg-blue-500 text-white py-2 px-2 rounded-lg">
            Adriano
          </h1>
          <strong className="text-gray-500 font-extrabold">
            Rogerio
          </strong>
        </div>
      </Link>
    </>
  );
};
