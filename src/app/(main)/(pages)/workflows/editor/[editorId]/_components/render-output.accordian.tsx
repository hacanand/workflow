import { ConnectionProviderProps } from "@/providers/connections-provider"
import { EditorState } from "@/providers/editor-provider"
import { useWorkflowStore } from "@/store"


type Props = {
    state: EditorState
    nodeConnection: ConnectionProviderProps
}
 export const RenderOutputAccordion = ({ state, nodeConnection }: Props) => {
    const {
        googleFile, setGoogleFile,
        selectedSlackChannels, setSelectedSlackChannels
        
    } = useWorkflowStore()
    return (
        <div>
            <h1>RenderOutputAccordian</h1>
        </div>
    )
}