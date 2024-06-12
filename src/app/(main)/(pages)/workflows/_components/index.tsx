import React from 'react'
import Workflow from './workflow'

type Props = {}

const Workflows = (props: Props) => {
  return (

      <div className='relative flex flex-col gap-4'>
          <section className='flex flex-col gap-4 p-6'>
              <Workflow description='This is a description' id='1' name='Workflow 1' publish={false}/>
              <Workflow description='This is a description' id='1' name='Workflow 1' publish={false}/>
              <Workflow description='This is a description' id='1' name='Workflow 1' publish={false}/>
              
          </section>
      </div>
  )
}

export default Workflows