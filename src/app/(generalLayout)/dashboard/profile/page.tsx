import AContainer from "@/components/AContainer";
import { Metadata } from "next";
import Profile from "./Profile";

export const metadata: Metadata = {
  title: "Profile",
};

const ProfilePage = () => {
  return (
    <main>
      <AContainer>
        <Profile />
      </AContainer>
    </main>
  );
};

export default ProfilePage;
