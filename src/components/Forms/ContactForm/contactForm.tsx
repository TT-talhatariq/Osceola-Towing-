"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "./schema";
import { FormDataType } from "./type";
import { toast } from "sonner";
import Image from "next/image";
import { EmailTemplate } from "@/utils/emailTemplate";
import { motion } from "framer-motion";
const defaultValues: FormDataType = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormDataType> = async (data) => {
    const loadingToast = toast.loading("Sending message...");
    setIsLoading(true);

    try {
      const formPayload = new FormData();
      formPayload.append("email", process.env.NEXT_PUBLIC_CLIENT_EMAIL || "");
      formPayload.append("subject", "New query from Osceola Towing");
      formPayload.append("html", EmailTemplate({ values: data }));
      const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL || "", {
        method: "POST",
        body: formPayload,
      });

      if (!response.ok) throw new Error("Failed to submit form");
      toast.dismiss(loadingToast);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.dismiss(loadingToast);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          type="text"
          placeholder="Full Name"
          className="rounded-xl lg:p-5 p-3 w-full shade outline-none text-[#666666] text-[14px] lg:text-[18px]"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          {...register("email")}
          type="text"
          placeholder="Email Address"
          className="rounded-xl lg:p-5 p-3 mt-5 w-full shade outline-none text-[#666666] text-[14px] lg:text-[18px]"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          {...register("phone")}
          type="text"
          placeholder="Phone Number"
          className="rounded-xl lg:p-5 p-3 w-full mt-5 shade outline-none text-[#666666] text-[14px] lg:text-[18px]"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

        <select
          {...register("service")}
          className="rounded-xl lg:p-5 p-3 w-full mt-5 shade outline-none text-[#666666] text-[14px] lg:text-[18px]"
        >
          <option value="">Choose Your Service</option>
          <option value="web-design">Web Design</option>
          <option value="seo">SEO Optimization</option>
          <option value="content-writing">Content Writing</option>
          <option value="digital-marketing">Digital Marketing</option>
        </select>
        {errors.service && (
          <p className="text-red-500">{errors.service.message}</p>
        )}

        <textarea
          {...register("message")}
          className="rounded-xl lg:p-5 p-3 w-full h-[175px] text-start my-5 shade outline-none text-[#666666] text-[14px] lg:text-[18px]"
          defaultValue="Message"
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}

        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-3 bg-[#096656] justify-center  text-white text-center rounded-full w-[182px] h-[53px]"
        >
          <button className="text-[18px]" type="submit">
            {" "}
            {isLoading ? "Sending..." : "Submit Now"}
          </button>
          <Image
            src="./assets/arrow-icon.svg"
            alt="logo"
            width={15}
            height={15}
          />
        </motion.div>
      </form>
    </div>
  );
}

export default ContactForm;
