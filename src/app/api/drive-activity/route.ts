import { google } from "googleapis";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.OAUTH2_REDIRECT_URI
    );

    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const clerkResponse = await clerkClient.users.getUserOauthAccessToken(
      userId,
      "oauth_google"
    );

    const accessToken = clerkResponse?.data[0]?.token;
    if (!accessToken) {
      return NextResponse.json({ message: "Access token not found" }, { status: 401 });
    }

    oauth2Client.setCredentials({
      access_token: accessToken,
    });

    const drive = google.drive({
      version: "v3",
      auth: oauth2Client,
    });

    const channelId = uuidv4();
//console.log(drive)
    const startPageTokenRes = await drive.changes.getStartPageToken();
   // console.log(startPageTokenRes)
    const startPageToken = startPageTokenRes?.data?.startPageToken;
   // console.log(startPageToken)
    if (!startPageToken) {
      throw new Error("startPageToken is unexpectedly null");
    }

    const listener = await drive.changes.watch({
      pageToken: startPageToken,
      supportsAllDrives: true,
      supportsTeamDrives: true,
      requestBody: {
        id: channelId,
        type: "web_hook",
        address: `${process.env.NGROK_URI}/api/drive-activity/notification`,
        kind: "api",
      },
    });  
    
  //  console.log(listener)
    if (listener.status === 200) {
      const channelStored = await db.user.updateMany({
        where: {
          clerkId: userId,
        },
        data: {
          googleResourceId: listener.data.resourceId,
        },
      });

      if (channelStored) {
        return new NextResponse("Listening to changes...", { status: 200 });
      }
    }

    return new NextResponse("Oops! something went wrong, try again", { status: 500 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}