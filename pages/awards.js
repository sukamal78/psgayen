import Head from 'next/head'
import Image from 'next/image'


export default function awards() {
  return (
    <>
      <Head>
        <title>Parthasarathi Gayen</title>
        <meta name="description" content="Awards of Parthasarathi Gayan" />
      
      </Head>

      <div style={{ backgroundImage:"url(/image/award.png)", backgroundSize:"cover"}}
      className='w-full h-screen'>
        <div className=' max-w-sm h-screen bg-black bg-opacity-60'>
          <div>
            
            <h1 className='text-white font-bold flex justify-center py-5'>উল্লেখযোগ্য পুরস্কার</h1>
            <div className='text-white p-3'>
              
                <li>২০১০ সালে ভাষাবিদ ডঃ শহীদুল্লাহ স্মৃতি পুরস্কার।</li>
                <li>২০১১ সালে বনানী সাহিত্য স্মৃতি পুরস্কার। </li>
                <li> ২০১২ সালে পণ্ডিত মদনমোহন তর্কালঙ্কার স্মৃতি       পুরস্কার ।</li>
                <li>২০১৩ সালে বনানী ও কবি নিত্যানন্দ পুরস্কার। </li>
                <li>২০১৪ সালে বঙ্কিম সাহিত্য স্মৃতি পুরস্কার।</li>
                <li>2017 শিরাকোল ম্যানগ্রোভ স্মৃতি সম্মান পুরস্কার।</li>
                <li>২০১৮ বকখালি সাহিত্য সম্মাননা </li>
                <p className='mt-20 px-3'>এছাড়াও পেয়েছেন টাঙ্গাইল, ঢাকা, বিক্রমপুর (বাংলাদেশ) সাহিত্য সম্মাননা। 
                  তাঁর ‘ম্যানগ্রোভ’ উপন্যাসটি চলচিত্রায়িত হয়ে বেশ সাড়া জাগিয়েছে।</p>
             
            </div>
          </div>

        </div>

      </div>
    </>
  )
}
