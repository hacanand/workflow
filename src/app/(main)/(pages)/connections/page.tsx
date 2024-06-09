import { CONNECTIONS } from "@/lib/constants";
import React from "react";
import ConnectionCard from "./_components/connection-card";

type Props = {};

const Connections = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex justify-between items-center border-b ">
        Connections
      </h1>
      <div className="relative flex flex-col gap-4">
        <section className="flex flex-col gap-4 p-6 text-muted-foreground">
          Connect all your apps directly from here.You may need to connect these
          apps regularly to refresh verification...
          {CONNECTIONS?.map((connection: any) => (
            <ConnectionCard
              key={connection.title}
              type={connection.title}
              title={connection.title}
              icon={connection.image}
              description={connection.description}
            connected={undefined}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Connections;
