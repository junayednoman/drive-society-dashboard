"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Define the Zod validation schema for new password
const newPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .max(50, "Password cannot exceed 50 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Infer the form data type from the schema
type TNewPasswordFormValues = z.infer<typeof newPasswordSchema>;

const NewPasswordForm = () => {
  // Initialize the form with React Hook Form and Zod resolver
  const form = useForm<TNewPasswordFormValues>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  // Handle form submission
  const onSubmit = (data: TNewPasswordFormValues) => {
    // Simulate an API call
    console.log("New password submitted:", data);
    // Add your password update logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-[600px] bg-card rounded-2xl p-8 shadow-lg">
        {/* Header */}
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
        <div className="text-center mb-8 mt-10">
          <h1 className="text-2xl font-bold text-card-foreground mb-2">
            Set New Password
          </h1>
          <p className="text-muted-foreground text-sm">
            Create a new password for your account
          </p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* New Password Field */}
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-card-foreground font-medium">
                    New Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter new password"
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12 rounded-lg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password Field */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-card-foreground font-medium">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm new password"
                      className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12 rounded-lg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 rounded-lg font-medium"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Saving..." : "Save New Password"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default NewPasswordForm;