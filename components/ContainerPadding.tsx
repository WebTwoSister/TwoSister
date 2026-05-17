import { ReactNode, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function ContainerPadding({
  children,
  className = "",
  ...rest
}: ContainerProps) {
  return (
    <div
      className={`
        px-[clamp(2rem,8vw,15rem)] mx-auto w-full
        ${className}
      `}
    >
      {children}
    </div>
  );
}
