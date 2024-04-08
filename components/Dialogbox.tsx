import React, { PropsWithChildren } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { cn } from "@/lib/utils";
import useMounted from "@/hooks/use-mounted";

type Props = PropsWithChildren & {
  title?: string;
  description?: string;
  Trigger: React.ReactNode;
  open: boolean;
  setOpen: (val: boolean) => void;
  className?: string;
};

const DialogBox = ({
  title,
  description,
  children,
  Trigger,
  open = false,
  setOpen,
  className = "",
}: Props) => {
  const mounted = useMounted();
  if (!mounted) return;
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{Trigger}</DialogTrigger>
      <DialogContent
        className={cn(
          "max-w-[500px] bg-secondary border-gray-100 border-0",
          className
        )}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-start font-normal">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
