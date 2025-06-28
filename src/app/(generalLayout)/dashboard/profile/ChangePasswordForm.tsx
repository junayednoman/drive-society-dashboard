"use client";

import { Button } from "@/components/ui/button";
import AForm from "@/components/form/AForm";
import { AInput } from "@/components/form/AInput";
import {
  ChangePasswordFormProps,
  ChangePasswordFormValues,
  changePasswordSchema,
} from "@/validations/auth.validation";

const ChangePasswordForm = ({ onSubmit }: ChangePasswordFormProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-primary-foreground text-center">
        Change Password
      </h3>

      <AForm<ChangePasswordFormValues>
        schema={changePasswordSchema}
        defaultValues={
          { currentPassword: "", newPassword: "", confirmPassword: "" } as
            | ChangePasswordFormValues
            | undefined
        }
        onSubmit={onSubmit}
      >
        <AInput
          name="currentPassword"
          label="Current Password"
          type="password"
          placeholder="Enter current password"
          required
        />
        <AInput
          name="newPassword"
          label="New Password"
          type="password"
          placeholder="Enter new password"
          required
        />
        <AInput
          name="confirmPassword"
          label="Confirm New Password"
          type="password"
          placeholder="Confirm new password"
          required
        />
        <Button type="submit" className="w-full h-[50px]">
          Save & Change
        </Button>
      </AForm>
    </div>
  );
};

export default ChangePasswordForm;
