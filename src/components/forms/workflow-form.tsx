import { WorkflowFormSchema } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Card } from '../ui/card';

type Props = {
    title?: string;
    subtitle?: string;
}

const WorkflowForm = ({ title, subtitle }: Props) => {
    const form = useForm<z.infer<typeof WorkflowFormSchema>>({
        mode: 'onChange',
        resolver: zodResolver(WorkflowFormSchema),
        defaultValues: {
            name: '',
            description: '',
        },
        
    })
    const isLoading = form.formState.isLoading
    const router=useRouter()
    
  return (
      <Card className='w-full'>
          
    </Card>
  )
}

export default WorkflowForm