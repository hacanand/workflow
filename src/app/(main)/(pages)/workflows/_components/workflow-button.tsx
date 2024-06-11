'use client'
import WorkflowForm from '@/components/forms/workflow-form'
import CustomModal from '@/components/global/custom-modal'
import { Button } from '@/components/ui/button'
import { useModal } from '@/providers/modal-provider'
import { Plus } from 'lucide-react'
import React from 'react'

type Props = {}

const WorkflowButton = (props: Props) => {
  const {setOpen,setClose} = useModal()
  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subheading="Workflows are a powerful that help you automate tasks and processes."
      >
        <WorkflowForm />
      </CustomModal>
    );
  };
  return (
      <Button size={'icon'} onClick={handleClick}>
        <Plus/>
    </Button>
  )
}

export default WorkflowButton