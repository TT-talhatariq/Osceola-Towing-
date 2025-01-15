import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
function Gallery() {
  return (
    <div>
      <div className="flex raleway justify-between mt-32 items-center lg:px-24 px-5">
        <div>
          <h1 className="lg:text-[22px] text-[12px] lg:text-start text-center  lg:text-[#096656] text-[#F6B620] font-medium">
            Our Gallery
          </h1>
          <h1 className="lg:text-[36px] text-[25px] lg:text-start text-center font-bold">
            Our Tow Trucks In Action.
          </h1>
          <Image
            src="/assets/green-vector.svg"
            alt="circle"
            width={326}
            height={7}
            className="lg:block hidden"
          />
          <Image
            src="/assets/yellow-vector.svg"
            alt="circle"
            width={326}
            height={7}
            className="lg:w-[326px] lg:mx-0 mx-auto  lg:hidden block w-[200px]"
          />
        </div>
        <div className="lg:block hidden">
          <Button title="View All Our Gallery" width={"lg:w-[251px]"} />
        </div>
      </div>
      <div className="lg:flex items-center mt-20 px-5 lg:px-20">
        <Image
          src="/assets/gallery-image-one.svg"
          alt="circle"
          width={505}
          height={351}
        />{" "}
        <Image
          src="/assets/gallery-image-two.svg"
          alt="circle"
          width={400}
          height={351}
        />{" "}
        <Image
          src="/assets/gallery-image-three.svg"
          alt="circle"
          width={295}
          height={351}
        />
      </div>
      <div className="lg:flex items-center   px-5 lg:px-20">
        <Image
          src="/assets/gallery-image-four.svg"
          alt="circle"
          width={400}
          height={351}
        />{" "}
        <Image
          src="/assets/gallery-image-five.svg"
          alt="circle"
          width={295}
          height={351}
        />{" "}
        <Image
          src="/assets/gallery-image-six.svg"
          alt="circle"
          width={505}
          height={351}
        />
      </div>
    </div>
  );
}

export default Gallery;
