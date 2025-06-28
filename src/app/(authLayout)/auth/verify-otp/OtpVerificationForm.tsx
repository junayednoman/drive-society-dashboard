"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { otpSchema } from "@/validations/auth.validation";

// Infer the form data type from the schema
type TOtpVerificationFormValues = z.infer<typeof otpSchema>;

const OtpVerificationForm = () => {
  // Initialize the form with React Hook Form and Zod resolver
  const form = useForm<TOtpVerificationFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  // Handle form submission
  const onSubmit = (data: TOtpVerificationFormValues) => {
    // Simulate an API call
    console.log("OTP submitted:", data);
    // Add your OTP verification logic here (e.g., API call)
  };

  // Simulate resend code (e.g., after 60 seconds)
  const handleResendCode = () => {
    console.log("Resend code requested");
    // Add your resend logic here (e.g., API call, timer)
  };

  return (
    <div className="w-[450px]">
      <div className="my-8">
        <h1 className="text-3xl font-bold mb-2">Verify you OTP</h1>
        <p className="text-card-foreground text-sm">
          Please enter your 6 digit otp
        </p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* OTP Field */}
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP
                    maxLength={6}
                    {...field}
                    onChange={(value) => field.onChange(value)}
                    className="flex !justify-center"
                  >
                    <InputOTPGroup className="space-x-2">
                      <InputOTPSlot
                        index={0}
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground h-15 w-15 rounded-lg text-center"
                      />
                      <InputOTPSlot
                        index={1}
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground h-15 w-15 rounded-lg text-center"
                      />
                      <InputOTPSlot
                        index={2}
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground h-15 w-15 rounded-lg text-center"
                      />
                    </InputOTPGroup>
                    <InputOTPSeparator className="text-muted-foreground" />
                    <InputOTPGroup className="space-x-2">
                      <InputOTPSlot
                        index={3}
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground h-15 w-15 rounded-lg text-center"
                      />
                      <InputOTPSlot
                        index={4}
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground h-15 w-15 rounded-lg text-center"
                      />
                      <InputOTPSlot
                        index={5}
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground h-15 w-15 rounded-lg text-center"
                      />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Resend Code */}
          <div>
            <p className="text-muted-foreground text-sm mb-2">
              Didn&apos;t receive the code?{" "}
              <button
                type="button"
                onClick={handleResendCode}
                className="text-primary hover:underline"
              >
                Resend Code
              </button>
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Verifying..." : "Verify OTP"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default OtpVerificationForm;
