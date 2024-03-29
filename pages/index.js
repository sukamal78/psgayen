import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>Parthasarathi Gayen</title>
        <meta name="description" content="Generated by create next app" />
      
      </Head>

      <div style={{ backgroundImage:"url(/image/pic1.webp)", backgroundSize:"cover"}}
      className=' block object-cover object-center w-full h-full'>
           <div className=' grid grid-cols-1 md:grid-cols-1'>
            <div className='grid md:grid-cols-2'>
            <div className='my-20 mx-10 '>
              <Image
              className='rounded-full'
              src="/image/home1.jpeg"
              height={400}
              width={400}
              />
            </div>
            <div className='mx-[100px] mt-24 mb-[150px] p-5 text-xl bg-black/30 text-white'>
              <p>চড়াই উৎরাইময় প্রবহমান জীবনের নানা কৌণিক প্রান্তবিন্দু ছুঁয়ে ছুঁয়ে তাঁর অফুরাণ পথ চলা।
               চলার নেশায় তিনি চল-চঞ্চল। রক্তঝরা পথে রক্তের আলপনা আঁকতে আঁকতে তিনি 
               রক্তকরবীর সন্ধানে বাউল পথিক।  রক্তঝরা পথে রক্তের আলপনা আঁকতে আঁকতে তিনি 
               রক্তকরবীর সন্ধানে বাউল পথিক।</p>
            </div>
            </div>
           <div>
           <div className='pt-16 px-20  text-xl text-justify text-white
            hover:text-gray-500 '>
            <p>চড়াই উৎরাইময় প্রবহমান জীবনের নানা কৌণিক প্রান্তবিন্দু ছুঁয়ে ছুঁয়ে তাঁর অফুরাণ পথ চলা।
               চলার নেশায় তিনি চল-চঞ্চল। রক্তঝরা পথে রক্তের আলপনা আঁকতে আঁকতে তিনি 
               রক্তকরবীর সন্ধানে বাউল পথিক।</p>
           </div>
           <div className='pt-10 px-20  text-xl text-justify text-white
           hover:text-gray-500'>
            <p>কলকাতা বিশ্ববিদ্যালয়ের এই স্নাতক ১৯৭৮ সালে WBCS পরীক্ষায় এ গ্রুপ এ উত্তীর্ণ হয়ে
               কর্মজীবনে প্রবেশ করেন। নানা পথ পরিক্রমা শেষে 2013 সালে খাদ্যবিভাগের ডাইরেক্টর
                হিসেবে তাঁর কর্ম জীবনের পরিসমাপ্তি ।</p>
           </div>
           <div className='pt-10 px-20  text-xl text-justify text-white 
           hover:text-gray-500'>
            <p>নানা বর্ণে, নানা ছন্দে কুাটিকাময় সমকাল তাঁর কবিতায় গল্পে-উপন্যাসে প্রবন্ধে ও 
              নাটকে স্পন্দিত-নন্দিত। তাঁর লিখিত নাটক রাশিয়াতেও অভিনীত ও প্রশংসিত। </p>
           </div>
      </div>
      <div className='mx-auto'><p>পার্থসারথি গায়েন</p></div>
      </div>
      </div>
    </>
  )
}
