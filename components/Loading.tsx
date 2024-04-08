import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <LoaderCircle size={30} className="text-primary animate-spin" />
    </div>
  );
};

export default Loading;
