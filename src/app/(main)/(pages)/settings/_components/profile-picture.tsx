'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { X } from "lucide-react";
// import UploadCareButton from "./uploadcare-button";
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";

type Props = {
  onDelete: () => void;
  onUpload:  (Image: string) => void;
  userImage: string | null;
};

const ProfilePicture = ({ onDelete, onUpload, userImage }: Props) => {

    const router = useRouter();
  const [files, setFiles] = useState<any[]>([]);
 // console.log(files);
     const handleChangeEvent = (items:any) => {
       setFiles([
         ...items.allEntries.filter((file: { status: string; }) => file.status === "success"),
       ]);
     };
    const onRemoveProfilePicture = async () => {
        const response = onDelete();
        if (response !== undefined) {
            router.refresh();
        }
  };
  //console.log(files[0]?.cdnUrl);
   const handleUpload = async () => {
     const res =  await onUpload(files[0]?.cdnUrl);
     if (res !== undefined) {
       router.refresh();
     }
   };
    return (
      <div className="flex flex-col">
        <p className="text-lg text-white capitalize">profile picture</p>
        <div className="flex h-[30vh] flex-col items-center justify-center">
          {userImage ? (
            <>
              <div className="relative h-full w-6/12">
                <Image
                  src={userImage}
                  alt={files[0]?.uuid}
                  layout="fill"
                 
                  objectFit=""
                />
                 
              </div>
              <Button
                onClick={onRemoveProfilePicture}
                className="bg-transparent text-red-500 hover:text-red-700 mt-4 hover:bg-transparent"
              >
                <X /> Remove Picture
              </Button>
            </>
          ) : (
            <FileUploaderRegular
              onChange={handleChangeEvent}
              pubkey="33cf260e673da7b89303"
              className="my-config fileUploaderWrapper "
              onDoneClick={handleUpload}
            />
          )}
        </div>
      </div>
    );
};

export default ProfilePicture;
