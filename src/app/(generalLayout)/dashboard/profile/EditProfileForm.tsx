"use client";

import { Button } from "@/components/ui/button";
import { AInput } from "@/components/form/AInput";
import AForm from "@/components/form/AForm";
import {
  EditProfileFormValues,
  editProfileSchema,
} from "@/validations/profile.validation";

interface EditProfileFormProps {
  defaultValues?: Partial<EditProfileFormValues>;
  onSubmit: (data: EditProfileFormValues) => void;
}

const EditProfileForm = ({ defaultValues, onSubmit }: EditProfileFormProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-primary-foreground text-center">
        Edit Your Profile
      </h3>

      <AForm<EditProfileFormValues>
        schema={editProfileSchema}
        defaultValues={defaultValues as EditProfileFormValues | undefined}
        onSubmit={onSubmit}
      >
        <AInput
          name="userName"
          label="User Name"
          placeholder="Enter your name"
          required
        />
        <AInput
          name="email"
          label="Email"
          type="email"
          disabled
          placeholder="Enter your email"
          required
        />
        <AInput
          name="contactNo"
          label="Contact no"
          type="tel"
          placeholder="Enter your contact number"
          required
        />
        <Button type="submit" className="w-full h-[50px]">
          Save & Change
        </Button>
      </AForm>
    </div>
  );
};

export default EditProfileForm;
