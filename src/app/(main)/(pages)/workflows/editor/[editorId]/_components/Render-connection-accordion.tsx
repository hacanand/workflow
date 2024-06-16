"use client";
import { Connections } from "@/lib/types";
import { useNodeConnections } from "@/providers/connections-provider";
import { EditorState } from "@/providers/editor-provider";
import { useWorkflowStore } from "@/store";

type Props = {};
const RenderConnectionAccordion = ({
  connection,
  state,
}: {
  connection: Connections;
  state: EditorState;
}) => {
  const {
    title,
    description,
    image,
    connectionKey,
    accessTokenKey,
    alwaysTrue,
    slackSpecial,
  } = connection;
  const { nodeConnection } = useNodeConnections();
  const { slackChannels, selectedSlackChannels, setSelectedSlackChannels } = useWorkflowStore()
  const connectionData = (nodeConnection as any)[connectionKey]
  const isConnected=alwaysTrue||(nodeConnection[connectionKey] && accessTokenKey && connectionData[accessTokenKey!])
  return <div>
    
  </div>;
};
export default RenderConnectionAccordion;
