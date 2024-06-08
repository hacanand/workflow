'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { X } from "lucide-react";
import UploadCareButton from "./uploadcare-button";

type Props = {
  onDelete: () => void;
  onUpload: () => void;
  userImage: string | null;
};

const ProfilePicture = ({ onDelete, onUpload, userImage }: Props) => {
        const router = useRouter();
    const onRemoveProfilePicture = async () => {
        const response = onDelete();
        if (response !== undefined) {
            router.refresh();
        }
    };
    return (
        <div className="flex flex-col">
            <p className="text-lg text-white capitalize">profile picture</p>
            <div className="flex h-[30vh] flex-col items-center justify-center">
                {userImage ? (
                    <>
                        <div className="relative h-full w-2/12">
                        <Image
                            src={userImage}
                            alt="profile picture"
                            layout="fill"
                            objectFit="cover"
                        />
                        </div>
                        <Button
                            onClick={onRemoveProfilePicture}
                            className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
                        >
                          <X/>  Remove Logo
                        </Button>
                    </>
                ) : (
                         "asdf"
                )}
                
                
            </div>
        </div>
    );
};

export default ProfilePicture;
