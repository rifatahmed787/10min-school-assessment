
import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";
import Heading from "./Heading";

interface IInfoWrapperProps {
  heading: string;
  children: ReactNode;
  className?: string;
}

const InfoWrapper: FC<IInfoWrapperProps> = ({
  heading,
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "border overflow-hidden rounded-md my-8 duration-150 transition-all",
        className
      )}
    >
      <div className="border-b bg-muted">
        <Heading className="py-1 px-4" variant="highlight">
          {heading}
        </Heading>
      </div>
      <div className="px-4 py-2">{children}</div>
    </div>
  );
};

export default InfoWrapper;
