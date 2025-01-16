import React from "react";
import Image from "next/image";
function Form() {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Full Name"
          className="rounded-xl lg:p-5 p-3 w-full shade outline-none text-[#666666] text-[14px] lg:text-[18px]"
        />
        <input
          type="text"
          placeholder="Email Address"
          className="rounded-xl lg:p-5 p-3 mt-5 w-full shade outline-none text-[#666666] text-[14px] lg:text-[18px]"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="rounded-xl lg:p-5 p-3 w-full mt-5 shade outline-none text-[#666666] text-[14px] lg:text-[18px]"
        />
        <select className="rounded-xl lg:p-5 p-3 w-full mt-5 shade outline-none text-[#666666] text-[14px] lg:text-[18px]">
          <option>Choose Your Service</option>
          <option>Choose Your Service</option>
        </select>
        <textarea
          className="rounded-xl lg:p-5 p-3 w-full h-[175px] text-start my-5 shade outline-none text-[#666666] text-[14px] lg:text-[18px]"
          defaultValue="Message"
        />

        <div className="flex items-center gap-3 bg-[#096656] justify-center  text-white text-center rounded-full w-[182px] h-[53px]">
          <button className="text-[18px] ">Submit Now</button>
          <Image
            src="./assets/arrow-icon.svg"
            alt="logo"
            width={15}
            height={15}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
