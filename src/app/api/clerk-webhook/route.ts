import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
   // console.log("🚀", body);
    const { id, email_addresses, first_name, image_url } = body?.data;
    const email = email_addresses[0]?.email_address;
    //console.log("✅", body);
   // console.log("✅", email_addresses);

    await db.user.upsert({
      where: { clerkId: id },
      update: {
        name: first_name,
        email:email,
        profileImage: image_url,
      },
      create: {
        clerkId: id,
        name: first_name || "",
        email,
        profileImage: image_url || '',
      },
    });
    return new NextResponse("User updated in database successfully", {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating database:", error);
    return new NextResponse("Error updating user in database", { status: 500 });
  }
}
