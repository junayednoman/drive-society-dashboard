import Image from "next/image";
import loading from "@/assets/loading.svg";

const ASpinner = ({ cl, size = 100 }: { cl?: string; size?: number }) => {
  return (
    <div className={`${cl} flex items-center justify-center`}>
      <Image src={loading} alt="loader" width={size} height={size} />
    </div>
  );
};

export default ASpinner;
