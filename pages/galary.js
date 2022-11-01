import Head from "next/head";


export default function Galary() {
  return (
    <>
      <Head>
        <title>Parthasarathi Gayen</title>
        <meta name="description" content="Image of Parthasarathi Gayen" />
      </Head>

      <div className="overflow-hidden text-gray-700">
        <div className="container px-5 py-2 mx-auto lg:pt-8 lg:px-8">
          <div className=" grid grid-cols-1 md:grid-cols-2">
            <div>
              <div className="grid grid-cols-2">
                <div className="p-1 md:p-2">
                  <img
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src="/image/galary1.jpeg"
                  />
                </div>
                <div className="p-1 md:p-2">
                  <img
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src="/image/galary2.jpeg"
                  />
                </div>
              </div>
              <div className="p-1 md:p-2">
                <img
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/image/galary3.jpeg"
                />
              </div>
            </div>
            <div>
              <div className="p-1 md:p-2">
                <img
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="/image/galary5.jpeg"
                />
              </div>
              <div className="grid grid-cols-2">
                <div className="p-1 md:p-2">
                  <img
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src="/image/galary6.jpeg"
                  />
                </div>
                <div className="p-1 md:p-2">
                  <img
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src="/image/galary8.jpeg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="p-1 md:p-2">
              <img
                class="block object-cover object-center w-full h-full rounded-lg"
                src="/image/galary9.jpeg"
              />
            </div>
            <div className="p-1 md:p-2">
              <img
                class="block object-cover object-center w-full h-full rounded-lg"
                src="/image/gal1.jpg"
              />
            </div>
            <div className="p-1 md:p-2">
              <img
                class="block object-cover object-center w-full h-full rounded-lg"
                src="/image/gal2.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
