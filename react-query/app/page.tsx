import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <h1 className='text-center mt-10 text-2xl'>React-Query</h1>
      <div className='flex'>
      <div className='ml-5'>
        <Link href="/Home">
          Home
        </Link>
      </div>
      <div className='ml-5'>
        <Link href="/Superheroes">
          Superheroes
        </Link>
      </div>
      <div className='ml-5'>
        <Link href="/RqHeroes">
          RQ Heroes
        </Link>
      </div>
      </div>
    </div>
  )
}
