
import Image from 'next/image'


export default function Bookmodel({visible}) {
    if (visible===false) return null;
     return (
    <>
      
        <div className='h-screen w-full bg-black bg-opacity-50 fixed inset-0'>
        <div className='h-[80%] w-[80%] bg-black bordered m-auto pt-10'>
            <h1 className='text-white'>This is page</h1>
        </div>
        </div>
      
    </>
  )
}