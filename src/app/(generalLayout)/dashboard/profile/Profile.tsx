"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileHeader from "./ProfileHeader";
import EditProfileForm from "./EditProfileForm";
import ChangePasswordForm from "./ChangePasswordForm";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("edit-profile");

  // Sample user data - replace with actual data
  const userData = {
    name: "Sunan Rahman",
    role: "Admin",
    avatar: "/placeholder.svg?height=120&width=120",
    userName: "Justyna Bronowicka",
    email: "Camille@gmail.com",
    contactNo: "+99007007007",
  };

  const handleEditProfile = (data: any) => {
    console.log("Edit Profile Data:", data);
    // Handle profile update logic here
  };

  const handleChangePassword = (data: any) => {
    console.log("Change Password Data:", data);
    // Handle password change logic here
  };

  const handleBack = () => {
    console.log("Navigate back");
    // Handle navigation back
  };

  return (
    <div className="min-h-screen bg-card p-6 rounded-lg">
      <div className="max-w-2xl mx-auto space-y-8">
        <ProfileHeader
          name={userData.name}
          role={userData.role}
          avatar={userData.avatar}
          onBack={handleBack}
        />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-transparent p-0 h-auto">
            <TabsTrigger
              value="edit-profile"
              className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-0 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none border-b-2 border-transparent pb-2 text-primary-foreground text-[16px]"
            >
              Edit Profile
            </TabsTrigger>
            <TabsTrigger
              value="change-password"
              className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-0 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none border-b-2 border-transparent pb-2 text-primary-foreground text-[16px]"
            >
              Change Password
            </TabsTrigger>
          </TabsList>

          <div className="mt-8">
            <TabsContent value="edit-profile" className="mt-0">
              <EditProfileForm
                defaultValues={{
                  userName: userData.userName,
                  email: userData.email,
                  contactNo: userData.contactNo,
                }}
                onSubmit={handleEditProfile}
              />
            </TabsContent>

            <TabsContent value="change-password" className="mt-0">
              <ChangePasswordForm onSubmit={handleChangePassword} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
