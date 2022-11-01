import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Bookmodel from '../../components/Bookmodel'


export default function Home() {
  const books =[
    {
      id: 1,
      path: "/image/book1.jpg"
    },
    {
      id: 2,
      path: "/image/book2.jpg"
    },
    {
      id: 3,
      path: "/image/book3.jpg"
    },
    {
      id: 4,
      path: "/image/book4.jpg"
    },
    {
      id: 5,
      path: "/image/book5.jpg"
    },
    {
      id: 6,
      path: "/image/book6.jpg"
    },
    {
      id: 7,
      path: "/image/book7.jpg"
    },
    {
      id: 8,
      path: "/image/book8.jpg"
    },
    {
      id: 9,
      path: "/image/book9.jpg"
    },
    {
      id: 10,
      path: "/image/book10.jpg"
    },
    {
      id: 11,
      path: "/image/book11.jpg"
    },
    {
      id: 12,
      path: "/image/book12.jpg"
    },
    {
      id: 13,
      path: "/image/book13.jpg"
    },
    {
      id: 14,
      path: "/image/book14.jpg"
    },
    {
      id: 15,
      path: "/image/book15.jpg"
    }
  ]
  const [showmodel, setShowmodel]=useState(false)
  return (
    <>
      <Head>
        <title>Parthasarathi Gayen</title>
        <meta name="description" content="Books written by Parthasarathi Gayan" />
      
      </Head>

      <div>
        <div className=' grid grid-cols-1 sm:grid-cols-5'>
        
        {
          books.map((book)=>
            <div className=' m-5 max-w-sx rounded overflow-hidden shadow-lg' key={book.id}>
            <img className='w-full' src={book.path}  />
            <div className='py-3 flex justify-center'>
              <button className='px-5 py-2 text-white rounded-2xl bg-cyan-500 hover:bg-cyan-700 '>View Details</button>
            </div>
            
          </div>
          )
        }

          
        </div>
      </div>
      <Bookmodel visible={showmodel}/>
    </>
  )
}
