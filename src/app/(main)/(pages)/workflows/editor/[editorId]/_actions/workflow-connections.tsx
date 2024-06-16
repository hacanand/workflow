'use server'
import { db } from '@/lib/db'
export const onCreateNodesEdges = async (flowId: string, nodes: string, edges: string, flowPath: string) => {
    const flow = await db.workflows.update({
        where: {
            id:flowId
        },
        data: {
            nodes,
            edges,
            flowPath
        }
    })
    if(flow) return { message: 'Flow Automation Created' }
}
export const onFlowPublish = async (flowId: string, status: boolean) => {
    const flow = await db.workflows.update({
        where: {
            id: flowId
        },
        data: {
            publish: status
        }
    })
    if (flow) return { message: 'Workflow Published' }
    return { message: 'Workflow Not Published' }
}