import { EditorCanvasCardType } from '@/lib/types'
import { useEditor } from '@/providers/editor-provider'
import React, { useMemo } from 'react'
import { Position, useNodeId } from 'reactflow'
import EditorCanvasIconHelper from './editor-canvas-icon-helper'
import CustomHandle from './custom-handle'

type Props = {}

const EditorCanvasCardSingle = ({ data }: { data: EditorCanvasCardType }) => {
    const { dispatch, state } = useEditor();
    const nodeId = useNodeId();
    const logo = useMemo(() => {
        return <EditorCanvasIconHelper type={data.type}/>
    },[data])
    return (
        <>
            {data.type !== 'Trigger' && data.type !== 'Google Drive' && (
                <CustomHandle
                    type='target'
                    position={Position.Top}
                    style={{ zIndex: 100 }}
                />
            )}
        </>
   )
}

export default EditorCanvasCardSingle