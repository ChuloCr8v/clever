"use client";

import React from "react";
import FooterButton from "../components/FooterButton";
import { AnimatePresence, motion } from "framer";
import PageTitle from "../components/PageTitle";
import { FaArrowRight } from "react-icons/fa";

type Props = {};

const Contact = (props: Props) => {
  const contacts = [
    {
      title: "Mail",
      url: "chulocr8v@gmail.com",
    },
    {
      title: "Social Media",
      subMenu: [
        { url: "chulocr8v@gmail.com", title: "Facebook" },
        { url: "chulocr8v@gmail.com", title: "Instagram" },
        { url: "chulocr8v@gmail.com", title: "Twitter" },
        { url: "chulocr8v@gmail.com", title: "LinkedIn" },
        { url: "chulocr8v@gmail.com", title: "whatsapp" },
      ],
    },
  ];

  return (
    <AnimatePresence>
      <div className="overflow-hidden flex items-center justify-center min-h-screen w-full">
        <motion.section
          className="pt-24 pb-32 px-6 w-full"
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100vw", opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
        >
          <PageTitle title={"Contact"} />
          <div className="flex flex-col gap-6 mt-12 w-full">
            {contacts.map((c, index) => (
              <div className="flex justify-between items-start" key={index}>
                <p className="font-semibold text-xl"> {c.title}</p>
                {!c.subMenu ? (
                  <a
                    href="mailto:email@example.com"
                    className=" flex items-center gap-2 group hover:text-primaryBlue dark:hover:text-primaryRed"
                  >
                    <FaArrowRight className="-rotate-45 group-hover:rotate-0 duration-200" />
                    {c.url}
                  </a>
                ) : (
                  <div className="flex flex-col items-start">
                    {c?.subMenu?.map((s, index) => (
                      <a
                        href={s.url}
                        className=" flex items-center gap-2 group hover:text-primaryBlue dark:hover:text-primaryRed"
                        key={index}
                      >
                        <FaArrowRight className="-rotate-45 group-hover:rotate-0 duration-200" />
                        {s.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>
      </div>
      <FooterButton
        prevTitle={"About Me"}
        nextTitle={"Contact"}
        icon={false}
        nextLink="/contact"
        prevLink="/about"
      />
    </AnimatePresence>
  );
};

export default Contact;

//   <AnimatePresence>
//     <div className="overflow-hidden">
//       <motion.section
//         className="pt-24 pb-32 px-6"
//         initial={{ x: "100vw", opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         exit={{ x: "-100vw", opacity: 0 }}
//         transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
//       >
//         <PageTitle title={"Contact"} />
//         <div className="">
//           {contacts.map((c, index) => (
//             <div className="" key={index}>
//               <p className="">{c.title}</p>
//               {!c.subMenu ? (
//                 <ContactComponent data={c} />
//               ) : (
//                 c?.subMenu?.map((s, index) => (
//                   <div className="" key={index}>
//                     <ContactComponent data={s} />
//                   </div>
//                 ))
//               )}
//             </div>
//           ))}
//         </div>
//       </motion.section>
//     </div>
//     <FooterButton
//       prevTitle={"About Me"}
//       nextTitle={"Contact"}
//       icon={false}
//       nextLink="/contact"
//       prevLink="/about"
//     />
//   </AnimatePresence>;
