import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    name: string
    description: string
    id: string
    publish: boolean|null
}

const Workflow = ({description,id,name,publish}: Props) => {
  return (
      <Card className='flex w-full items-center justify-between'>
          <CardHeader className='flex flex-col gap-4'>
              <Link href={`/workflows/editor/${id}`}>
                  <div className='flex flex-row gap-2'>
                      <Image
                          src='/googleDrive.png'
                          alt='google drive'
                          width={30}
                                height={30}
                          className='object-contain'
                      />
                      <Image
                          src='/notion.png'
                          alt='notion'    
                            width={30}
                          height={30} 
                            className='object-contain'
                      />
                      <Image
                          src='/discord.png'
                          alt='discord'
                          width={30}
                          height={30}
                          className='object-contain'
                      />  
                  </div>
                  <div>
                      <CardTitle className='text-lg '>{name}</CardTitle>
                      <CardDescription>{ description}</CardDescription>
                  </div>
                </Link>
          </CardHeader>
          <div className='flex flex-col items-center gap-2 p-4'>
              <Label htmlFor='airplane-mode' className='text-muted-foreground'>On</Label>
              <Switch>
                  
              </Switch>
          </div>
    </Card>
  )
}

export default Workflow