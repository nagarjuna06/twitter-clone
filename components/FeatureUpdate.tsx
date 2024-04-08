import Image from "next/image";
import React from "react";

const FeatureUpdate = () => {
  return (
    <div className="flex flex-col gap-3 items-center h-full justify-center">
      <Image
        src="/feature.png"
        alt="feature"
        width={0}
        height={0}
        sizes="100vw"
        className="w-auto max-h-[100px]"
      />
      <p className="text-secondary/80 text-sm">
        This feature will be added in future updates.
      </p>
    </div>
  );
};

export default FeatureUpdate;
