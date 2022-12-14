import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon, FaPlay } from "react-icons/fa";
import Link from "next/link";
export default function Resources() {
  const [videoss, setVideoss] = useState(null);
  const [loadmore, setLoadmore] = useState("hi");
  const [fullblog, setFullblog] = useState(null);
  const loadclick = (videoss) => {
    setVideoss(videoss);
    setFullblog(1);
  };
  const { asPath } = useRouter();
  useEffect(() => {
    const hashes = ["Videos", "Blogs", "News"];
    const whichButton = hashes.indexOf(asPath.split("#")[1]);

    setButtonIndex(whichButton === -1 ? 0 : whichButton);
  }, [asPath]);

  const [buttonIndex, setButtonIndex] = useState(0);
  const buttonClick = (x) => {
    setButtonIndex(x);
  };

  const discover = [
    {
      name: "Videos",
      img: "/discover/discover1.png",
      para: "",
      desc: "",
      blogsdata: [
        {
          name: "video",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatum cupiditate possimus dolore voluptatibus similique optioducimus provident,",
          imgs: "/events/first.png",
          vidoes: (
            <iframe
              width="100%"
              height="100%"
              src=""
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ),
        },

        // {
        //   name: "loremipsum",
        //   desc: " ",
        //   imgs: "/yogatv/2.jpg",
        //   vidoes: (
        //     <iframe
        //       width="100%"
        //       height="100%"
        //       src=""
        //       title="YouTube video player"
        //       frameBorder="0"
        //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //       allowFullScreen="allowfullscreen"
        //     ></iframe>
        //   ),
        // },
        // {
        //   name: "loremipsum",
        //   desc: " similique optioducimus provident, ",
        //   imgs: "/yogatv/3.jpg",
        //   vidoes: (
        //     <iframe
        //       width="100%"
        //       height="100%"
        //       src=""
        //       title="YouTube video player"
        //       frameBorder="0"
        //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //       allowFullScreen="allowfullscreen"
        //     ></iframe>
        //   ),
        // },
      ],
      blogsdatafull: [],
    },
    {
      name: "Blogs",
      id: 2,
      img: "/discover/discover2.jpg",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          ser: "/blogs/blog1",
          name: "title",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
      ],
    },
    {
      name: "News",
      id: 3,
      img: "/discover/discover2.jpg",
      desc: "From Ashtanga to Vinyasa, make mindful movement a daily ritual.",
      blogsdata: [
        {
          ser: "/blogs/blog1",
          name: "Case Studies",
          small: "title",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos a eveniet sequi similique expedita id obcaecati velit suscipit consequuntur excepturi repellendus iste illo blanditiis possimus fugit dol",
          imgs: "/pause/PAUSE3.PNG",
        },
      ],
    },
  ];

  return (
    <section className="bg-lightgray">
      <section className="md:container mx-auto">
        <div className="py-5  md:py-10">
          <section className=" ">
            <p className="text-3xl font-bah  title-font text-black text-center mb-2"></p>
            <div className="md:container flex justify-center md:mx-auto">
              <ul className="grid grid-flow-col gap-4 w-full md:w-1/2 mt-5 text-center  text-black  rounded-full p-1">
                {discover.map(({ name }, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        buttonClick(index);
                      }}
                    >
                      <p
                        className={`${
                          index === buttonIndex
                            ? " text-blue text-2xl font-bold font-bah border-blue border-b-4"
                            : ""
                        } flex justify-center text-xl  font-bah  title-font text-black   mb-4 hover:cursor-pointer`}
                      >
                        {name}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
          {/* <p className="text-black text-xl font-bah text-center p-8">
            "Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem
            accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut
            perspiciatis unde omnis iste."
          </p> */}

          <div className="grid gap-6 mt-8 row-gap-5 mb-8 lg:grid-cols-1 justify-center sm:row-gap-6 sm:grid-cols-2">
            {discover[buttonIndex].blogsdata.map(
              ({ name, imgs, desc, vidoes }, index) => {
                if (buttonIndex === 0) {
                  return (
                    <div
                      key={index}
                      onClick={() => loadclick(vidoes)}
                      href="/"
                      aria-label="View Item"
                    >
                      <p className="text-xl h-80  text-center w-full font-bah">Coming Soon</p>
                      {/* <div className="relative rounded shadow-lg  hover:shadow-2xl">
                        <img
                          className="object-cover w-full h-56 md:h-64 xl:h-80"
                          src={imgs}
                          alt=""
                        />
                        <div className="absolute top-[30%] left-[40%] animate-pulse duration-100 ">
                          <FaPlay color="slate" size={80} />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                          <p className="text-sm font-medium font-bah tracking-wide text-white">
                            {name}
                          </p>
                        </div>
                      </div> */}
                    </div>
                  );
                } else {
                  return (
                    //         <div
                    //         key={index}
                    //         className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
                    //       >
                    //         <img
                    //           src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                    //           className="object-cover w-full h-64"
                    //           alt=""
                    //         />
                    //         <div className="p-2  border-t-0">
                    //           <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    //             <a
                    //               href=""
                    //               className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                    //               aria-label="Category"
                    //               title="traveling"
                    //             >
                    //             {name}
                    //             </a>
                    //           </p>
                    //           <a
                    //             href=""
                    //             aria-label="Category"
                    //             title="Visit the East"
                    //             className="inline-block mb-3 font-bah text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                    //           >
                    //             Title
                    //           </a>
                    //           <p className="mb-2 text-gray-700 font-bah">
                    //             Lorem ipsum dolor sit amet, consectetur adipisicing
                    //             elit. Dignissimos a eveniet sequi similique expedita id
                    //             obcaecati velit suscipit consequuntur excepturi
                    //             repellendus iste illo blanditiis possimus fugit
                    //             doloribus, numquam, maxime ratione!
                    //           </p>
                    //           <div className="flex justify-center">
                    // <Link href=" /reso/reso1">
                    //   <button className="mt-8 font-bah  bg-white border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg transition-all">
                    //     READ MORE
                    //   </button>
                    // </Link>
                    // </div>
                    //         </div>
                    //       </div>
                    <div className="text-xl h-80 font-bah flex justify-center"> <p className="text-cent">Coming Soon</p></div>
                  );
                }
              }
            )}
          </div>
          {videoss && (
            <div
              className={`fixed flex justify-center items-center bg-opacity-80  z-50 top-0   left-0 w-screen h-screen bg-black`}
            >
              <div
                className={` "border w-full lg:w-fit lg:h-[90%]  h-full   flex flex-row lg:flex-col justify-center items-center bg-gray bg-opacity-100"`}
              >
                <div className="lg:w-full bg-opacity-0 h-fit    bg-white flex flex-col  overflow-auto w-full">
                  <div
                    onClick={() => loadclick(null)}
                    className=" hover:cursor-pointer text-xl text-white text-end font-extrabold  animate-bounce  w-full"
                  >
                    X
                  </div>
                  <div className="md:w-[1000px] flex-3 w-full  h-[600px]  md:h-[500px] flex justify-center">
                    {videoss}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="text-center flex justify-center">
            <button className="mt-8 font-bah   border-2 border-blue text-blue font-bold text-xs hover:text-white hover:bg-blue p-3 rounded-lg">
              Watch More
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
