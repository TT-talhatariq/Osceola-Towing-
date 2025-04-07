import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

function Wrapper({ children, className = "" }: WrapperProps) {
  return (
    <div className={`max-w-[1440px] mx-auto ${className}`}>{children}</div>
  );
}

export default Wrapper;
