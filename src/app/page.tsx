import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Hey there!</h1>
       <div className='flex flex-row '  > 
       <Link className='pr-10' href={"/login"}> Login  </Link> 
        <Link className='pl-10' href={"/signup"}> Register New </Link></div>
    </main>
  )
}
