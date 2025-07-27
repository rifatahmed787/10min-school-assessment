import Image from "next/image";
import { appConfiguration } from "@/utils/constant/appConfiguration";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Image
        width={800}
        height={500}
        priority
        src={appConfiguration?.loader}
        alt="10min-school-loader"
        className="w-fit h-fit animate-pulse"
      />
    </div>
  );
};

export default Loader;
