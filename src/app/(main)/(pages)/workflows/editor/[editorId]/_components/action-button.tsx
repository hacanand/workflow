'use client'
import { ConnectionProviderProps } from '@/providers/connections-provider'
import React, { useCallback } from 'react'
import { Option } from './content-based-on-title'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { postContentToWebHook } from '@/app/(main)/(pages)/connections/_components/_actions/discord-connection'
import { toast } from 'sonner'
import { onCreateNodeTemplate } from '../../../_actions/workflow-connections'

type Props = {
    currentService: string,
    nodeConnection: ConnectionProviderProps
    channels?: Option[]
    setChannels?: ({}: Option[]) => void
}

const ActionButton = ({
  currentService,
  nodeConnection,
  channels,
  setChannels,
}: Props) => {
  const pathname = usePathname();
  const onSendDiscordMessage = useCallback(async () => {
    const response = await postContentToWebHook(
      nodeConnection.discordNode.content,
      nodeConnection.discordNode.webhookURL
    )
    if (response.message == 'success') {
      nodeConnection.setDiscordNode((prev: any) => ({
        ...prev,
        content: '',
      }))
    }
  },[nodeConnection.discordNode])
  const onCreateLocalNodeTemplate = useCallback(async () => {
    if (currentService === 'Discord') {
      const response = await onCreateNodeTemplate(
        nodeConnection.discordNode.content,
        currentService,
        pathname.split('/').pop()!
      )
      if (response) {
        toast.message(response)
      }
    }
    if (currentService === 'Slack') {
      
    }
},[])

  const renderActionButton = () => {
    switch (currentService) {
      case 'Discord':
        return (
          <>
            <Button variant='outline' onClick={onSendDiscordMessage}>
              Test Message
              </Button>
              <Button onClick={onCreateLocalNodeTemplate} variant='outline'>
                Save Template
              </Button>
          </>
        )
        break;
      default:
        <div>df</div>
        break;
    }
  }
  return <div>ActionButton</div>;
};

export default ActionButton;