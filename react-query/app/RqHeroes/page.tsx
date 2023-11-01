'use client'
import React from 'react'
import CustomeQueryHook from '../../components/CustomeQueryHook/page'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
const RQHeroes = () => {

  const { isLoading, isError, data, error } = CustomeQueryHook()

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }
  console.log(">>>", data);

  return (
    <div>
      <h1>RQHeroes</h1>

      {data?.length > 0  && data?.map((items: any) => {
        return <Link className='text-slate-500 underline mx-5' href={`/HeroDetails?id=${items?.id}`} key={items.id}>{items.name}</Link>
      })}
    </div>
  )
}

export default RQHeroes