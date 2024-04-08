"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BtnBack = () => {
  const router = useRouter();
  return (
    <div className="text-primary hover:bg-secondary rounded-full p-2">
      <ArrowLeft size={23} role="button" onClick={() => router.back()} />
    </div>
  );
};

export default BtnBack;
