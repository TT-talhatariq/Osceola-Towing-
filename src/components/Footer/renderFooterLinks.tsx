import React from "react";
import { RenderSectionProps } from "./type";
import Link from "next/link";

function RenderSection({
  title,
  items,
  visible = "block",
}: RenderSectionProps) {
  return (
    <div className={`${visible} lg:mt-0 mt-12 raleway`}>
      <h1 className="text-[#232323]  lg:text-[24px]  text-[20px]  font-medium">
        {title}
      </h1>
      <div className="mt-[14px] ">
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <Link href={item.link} key={index}>
              <h1 className="text-[#666666] mt-5 z-20 hover:text-yellow-700 cursor-pointer ;g:text-[18px] text-[16px]">
                {item.name}
              </h1>
            </Link>
          ))
        ) : (
          <h1 className="text-gray-400">Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default RenderSection;
