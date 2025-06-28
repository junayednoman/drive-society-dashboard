"use client";

import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import panda from "@/assets/panda.png";

interface ProfileHeaderProps {
  name: string;
  role: string;
  avatar: string;
  onBack?: () => void;
}

const ProfileHeader = ({ name, role }: ProfileHeaderProps) => {
  return (
    <div className="space-y-6">
      {/* Profile Avatar and Info */}
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <Image
            src={panda}
            alt={name}
            width={120}
            height={120}
            className="rounded-full"
          />
          <Button
            size="icon"
            className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-primary hover:bg-primary/90"
          >
            <Edit className="h-4 w-4" />
          </Button>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-primary-foreground">
            {name}
          </h2>
          <p className="text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
