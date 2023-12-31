"use client";

import { AnimatePresence, motion } from "framer";
import { FaArrowRight } from "react-icons/fa";
import FooterButton from "../components/FooterButton";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";
import { ChangeEventHandler, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {};

const Contact = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const contacts = [
    {
      title: "Mail",
      url: "chulocr8v@gmail.com",
      name: "chulocr8v",
    },
    {
      title: (
        <p className="">
          Social<span className="block text-2xl md:text-4xl">Medias</span>
        </p>
      ),
      subMenu: [
        { url: "chulocr8v@gmail.com", title: "Facebook" },
        { url: "chulocr8v@gmail.com", title: "Instagram" },
        { url: "chulocr8v@gmail.com", title: "Twitter" },
        { url: "chulocr8v@gmail.com", title: "LinkedIn" },
        { url: "chulocr8v@gmail.com", title: "whatsapp" },
      ],
    },
  ];

  const inputClassName =
    "md:text-xl bg-transparent border dark:border-gray-500 border-gray-400 rounded w-full px-3 py-2 outline-none hover:outline-blue-200 dark:hover:outline-primaryRed hover:border-primaryBlue dark:hover:border-primaryRed duration-200";
  const formGroupClassName = "flex flex-col items-start gap-2 md:gap-4 w-full";
  const labelClassName = "capitalize font-semibold md:text-xl";

  const FormGroup = (props: {
    label: string;
    placeholder: string;
    type: string;
    handleChange: ChangeEventHandler<HTMLInputElement>;
  }) => {
    return (
      <div className={formGroupClassName}>
        <label className={labelClassName}>{props.label}</label>
        <input
          type={props.type}
          placeholder={props.placeholder}
          className={inputClassName}
          onChange={() => props.handleChange}
        />
      </div>
    );
  };

  const mailtoLink = `mailto:${"chulocr8v@gmail.com"}?subject=${subject}&body=${message}`;

  return (
    <AnimatePresence>
      <div className="overflow-hidden flex items-center justify-center min-h-screen w-full ">
        <motion.section
          className="pt-24 xl:pt-40 pb-32 px-6 w-full flex items-center justify-center"
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100vw", opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
        >
          <div className="wrapper max-w-7xl w-full xl:grid grid-cols-2 gap-24">
            <div className="">
              <PageTitle title={"Contact"} />
              <div className="flex flex-col gap-6 mt-12 w-full">
                {contacts.map((c, index) => (
                  <div className="grid grid-cols-2" key={index}>
                    <p className="font-semibold text-xl md:text-2xl">
                      {" "}
                      {c.title}
                    </p>
                    {!c.subMenu ? (
                      <a
                        href="mailto:email@example.com"
                        className="flex items-center gap-2 group hover:text-primaryBlue dark:hover:text-primaryRed capitalize pl-16 md:text-xl"
                      >
                        <FaArrowRight className="-rotate-45 group-hover:rotate-0 duration-200" />
                        {c.name}
                      </a>
                    ) : (
                      <div className="flex flex-col items-start ">
                        {c?.subMenu?.map((s, index) => (
                          <a
                            href={s.url}
                            className="flex items-center gap-2 group hover:text-primaryBlue dark:hover:text-primaryRed pl-16 md:text-xl"
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
            </div>
            <div className="form mt-24 xl:mt-0 pb-12">
              <form
                action={"/"}
                name="contact clever"
                method="POST"
                data-netlify="true"
                className="flex flex-col items-start gap-4 md:gap-6 w-full"
              >
                <div className="text-center w-full py-12 border dark:border-gray-500 border-gray-400 rounded">
                  <p className="text-3xl md:text-4xl font-semibold">
                    Message Me
                  </p>
                  <p className=" mt-1 md:text-xl text-gray-500 dark:text-gray-400">
                    Reach out to me via my inbox
                  </p>
                </div>
                <div className="w-full grid md:grid-cols-2 gap-4 md:mt-4">
                  {" "}
                  <FormGroup
                    label={"name"}
                    placeholder={"Enter name here"}
                    type={"text"}
                    handleChange={(e) => setName(e.target.value)}
                  />
                  <FormGroup
                    label={"Subject"}
                    placeholder={"Enter subject here"}
                    type={"text"}
                    handleChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div className={formGroupClassName}>
                  <label
                    htmlFor=""
                    className={labelClassName}
                    data-type="hidden"
                  >
                    Message
                  </label>
                  <textarea
                    className={inputClassName}
                    placeholder="Write me a message"
                    rows={6}
                    data-name={"message"}
                    data-type={"hidden"}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      console.log(message);
                    }}
                  />
                </div>
                <a
                  href={mailtoLink}
                  className="md:text-xl md:mt-6 bg-gray-700 hover:bg-black duration-200 text-white font-semibold w-[130px] py-2 rounded text-sm flex items-center justify-center gap-2"
                >
                  Send{" "}
                  <FaArrowRight
                    className={twMerge("text-sm leading-none h-3")}
                  />
                </a>
              </form>
            </div>
          </div>
        </motion.section>
      </div>
      <FooterButton
        prevTitle={"Projects"}
        nextTitle={"Resume"}
        icon={false}
        nextLink="https://drive.google.com/file/d/1Q3lzQXxLMaa1sTxISBE8MwPYa7AGFuSr/view?usp=sharing"
        nextExternal
        prevLink="/projects"
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
