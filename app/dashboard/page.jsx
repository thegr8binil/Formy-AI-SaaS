import React from 'react'
import CreateForm from './_components/CreateForm'
import FormList from './_components/FormList'

function Dashboard() {
    return (
        <div className='p-10'>
            <div className='flex items-center justify-between text-3xl font-bold'>
                <h1>Dashboard</h1>
                <CreateForm/>
            </div>
            <FormList/>
        </div>
    )
}

export default Dashboard