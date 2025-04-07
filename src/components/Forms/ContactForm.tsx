"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import Button from "../Button";

// Form schema validation
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
});

type FormDataType = z.infer<typeof contactFormSchema>;

const defaultValues: FormDataType = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function Form() {
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
      formPayload.append(
        "email",
        process.env.NEXT_PUBLIC_CLIENT_EMAIL || "dispatch@osceolatowing.com"
      );
      formPayload.append("subject", "New query from Osceola Towing");
      formPayload.append("html", JSON.stringify(data)); // Replace with your email template

      const response = await fetch(
        process.env.NEXT_PUBLIC_API_BASE_URL ||
          "https://stag.api.carzoomo.com/socially/send-email",
        {
          method: "POST",
          body: formPayload,
        }
      );

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
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register("name")}
          type="text"
          placeholder="Full Name"
          className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[#096656] outline-none transition-colors text-[15px]"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("email")}
          type="email"
          placeholder="Email Address"
          className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[#096656] outline-none transition-colors text-[15px]"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("phone")}
          type="tel"
          placeholder="Phone Number"
          className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[#096656] outline-none transition-colors text-[15px]"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register("message")}
          placeholder="Message"
          rows={4}
          className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[#096656] outline-none transition-colors text-[15px] resize-none"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <div className="!mt-8">
        <Button
          title={isLoading ? "Sending..." : "Submit Now"}
          width="w-full"
          bgcolor="bg-[#096656]"
          center=""
        />
      </div>
    </form>
  );
}

export default Form;
