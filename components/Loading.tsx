import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Image
        src="/spinner.svg"
        alt="spinner"
        width={30}
        height={30}
        className="animate-spin"
      />
    </div>
  );
};

export default Loading;
