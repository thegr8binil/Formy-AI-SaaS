import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import CreateForm from './_components/CreateForm'
import FormList from './_components/FormList'

function Dashboard() {
    return (
        <div className='p-10'>
            <h2 className='flex items-center justify-between text-3xl font-bold'>Dashboard
                <CreateForm/>
            </h2>
            <FormList/>
        </div>
    )
}

export default Dashboard