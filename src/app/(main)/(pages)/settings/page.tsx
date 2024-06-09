import React from "react";
import ProfileForm from "@/components/forms/Profile-form";
import ProfilePicture from "./_components/profile-picture";
import { db } from "@/lib/db";
import {   currentUser } from "@clerk/nextjs/server";

type Props = {};

const Settings = async (props: Props) => {
  // const { userId } = auth()
  // console.log(userId)
  //update imageUrl in clerk

  const authUser = await currentUser()
   //console.log(authUser)
  if (!authUser) return null;
  const user = await db.user.findUnique({ where: { clerkId: authUser?.id } });
 // console.log(user)
  const removeProfilePicture = async () => {
    "use server";
    const response = await db.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        profileImage: '',
      },
    });
    //console.log(response);
    return response;
  };
  const uploadProfilePicture = async (Image: string) => {
    "use server";
    const response = await db.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        profileImage: Image,
      },
    });
    //console.log(response);
    return response;
  };
  const updateUserInfo = async (name: string) => {
    "use server";
    const response = await db.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        name,
      },
    });
    
    return response;
  };
  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-10 flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        <span>Settings</span>
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
          <ProfilePicture
            onDelete={removeProfilePicture}
            userImage={user?.profileImage|| ""}
            onUpload={uploadProfilePicture}
          />
          <ProfileForm user={user} onUpdate={updateUserInfo} />
        </div>
      </div>
    </div>
  );
};

export default Settings;
