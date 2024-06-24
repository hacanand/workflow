import React from "react";
import Workflow from "./workflow";
import { onGetWorkflows } from "../_actions/workflow-connections";
import { divMode } from "@tsparticles/engine";

type Props = {};

const Workflows = async (props: Props) => {
  const workflows = await onGetWorkflows();
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col gap-4 p-6">
        {workflows?.length
          ? workflows.map((flow ) => (
              <Workflow
                  key={flow.id}
                  id={flow.id}
                  publish={flow.publish!}
                  description={flow.description}
                  name={flow.name}
                />
            ))
          : ( <div className="text-center mt-28 flex items-center justify-center text-muted-foreground">No workflows found</div>)}

      </section>
    </div>
  );
};

export default Workflows;
