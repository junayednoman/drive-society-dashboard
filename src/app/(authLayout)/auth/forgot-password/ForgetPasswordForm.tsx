"use client";

import * as z from "zod";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import AForm from "@/components/form/AForm";
import { AInput } from "@/components/form/AInput";
import { forgetPasswordValidation } from "@/validations/auth.validation";
import { Button } from "@/components/ui/button";

const ForgetPasswordForm = () => {
  const onSubmit = async (data: z.infer<typeof forgetPasswordValidation>) => {
    console.log("Form submitted:", data);
    // handle reset logic here
  };

  return (
    <div className="w-[600px] bg-card rounded-2xl">
      {/* Back Button */}
      <Button
        type="button"
        variant="link"
        className="text-card-foreground p-0 h-auto text-lg font-medium"
      >
        <Link href="/auth/login" className="flex items-center gap-3">
          <ArrowLeft className="!w-5 !h-5" />
          <span>Back to login</span>
        </Link>
      </Button>

      <div className="my-8 mt-20">
        <h1 className="text-3xl font-bold mb-2">Forgot Password</h1>
        <p className="text-card-foreground text-sm">
          Please enter your email to reset your password
        </p>
      </div>

      {/* Form */}
      <AForm schema={forgetPasswordValidation} onSubmit={onSubmit}>
        <AInput name="email" label="Email address" type="email" required />

        <Button type="submit" className="h-12 w-full">
          Send Code
        </Button>
      </AForm>
    </div>
  );
};

export default ForgetPasswordForm;
