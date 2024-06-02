"use client"
import { db } from '@/configs'
import { JsonForms } from '@/configs/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import FormListItemResp from './_components/FormListItemResp'

function Responses() {

    const {user}=useUser();
    const [formList,setFormList]=useState();


    useEffect(()=>{
        user&&getFormList();
    },[user])

    const getFormList=async()=>{
        const result=await db.select().from(JsonForms)
        .where(eq(JsonForms.createdBy,user?.primaryEmailAddress?.emailAddress))
        
        setFormList(result);
    }
  return formList&&(
    <div className='p-4'>
        <h2 className='flex items-center justify-between text-3xl font-bold'>Responses</h2>
        <div className='grid grid-cols-1 gap-2 mt-4 md:grid-cols-2 lg:grid-cols-3'>
            {formList&&formList?.map((form,index)=>(
                <FormListItemResp
                formRecord={form}
                jsonForm={JSON.parse(form.jsonform)}
                />
            ))}
        </div>
    </div>
  )
}

export default Responses