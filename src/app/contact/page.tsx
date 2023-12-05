"use client";

import { AnimatePresence, motion } from "framer";
import { FaArrowRight } from "react-icons/fa";
import FooterButton from "../components/FooterButton";
import PageTitle from "../components/PageTitle";
import Button from "../components/Button";

type Props = {};

const Contact = (props: Props) => {
  const contacts = [
    {
      title: "Mail",
      url: "chulocr8v@gmail.com",
      name: "chulocr8v",
    },
    {
      title: (
        <p className="">
          Social<span className="block text-2xl">Medias</span>
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
    "bg-transparent border dark:border-gray-500 border-gray-400 rounded w-full px-3 py-2 outline-none hover:outline-blue-200 dark:hover:outline-primaryRed hover:border-primaryBlue dark:hover:border-primaryRed duration-200";
  const formGroupClassName = "flex flex-col items-start gap-2 w-full";
  const labelClassName = "capitalize font-semibold";

  const FormGroup = (props: {
    label: string;
    placeholder: string;
    name: string;
    type: string;
  }) => {
    return (
      <div className={formGroupClassName}>
        <label
          data-type="hidden"
          data-name={props.name}
          className={labelClassName}
        >
          {props.label}
        </label>
        <input
          type="text"
          placeholder={props.placeholder}
          className={inputClassName}
        />
      </div>
    );
  };

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
              <div className="grid grid-cols-2" key={index}>
                <p className="font-semibold text-xl "> {c.title}</p>
                {!c.subMenu ? (
                  <a
                    href="mailto:email@example.com"
                    className="flex items-center gap-2 group hover:text-primaryBlue dark:hover:text-primaryRed capitalize pl-16"
                  >
                    <FaArrowRight className="-rotate-45 group-hover:rotate-0 duration-200" />
                    {c.name}
                  </a>
                ) : (
                  <div className="flex flex-col items-start ">
                    {c?.subMenu?.map((s, index) => (
                      <a
                        href={s.url}
                        className="flex items-center gap-2 group hover:text-primaryBlue dark:hover:text-primaryRed pl-16"
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
          <div className="form mt-24 border dark:border-gray-500 border-gray-400 rounded p-3 pb-12">
            <form
              name="contact clever"
              method="POST"
              data-netlify="true"
              className="flex flex-col items-start gap-4 w-full"
            >
              <div className="text-center w-full py-12 border dark:border-gray-500 border-gray-400 rounded">
                <p className="text-3xl font-semibold">Message Me</p>
                <p className=" mt-1 text-gray-500 dark:text-gray-400">
                  Patiently waiting....
                </p>
              </div>

              <FormGroup
                label={"name"}
                placeholder={"Enter name here"}
                name={"name"}
                type={"hidden"}
              />
              <FormGroup
                label={"email"}
                placeholder={"Enter email here"}
                name={"email"}
                type={"hidden"}
              />

              <div className={formGroupClassName}>
                <label htmlFor="" className={labelClassName}>
                  Message
                </label>
                <textarea
                  className={inputClassName}
                  placeholder="Write me a message"
                  cols={12}
                  data-name={"message"}
                  data-type={"hidden"}
                />
              </div>
              <Button title={"Send"} className="mt-4" />
            </form>
          </div>
        </motion.section>
      </div>
      <FooterButton
        prevTitle={"Projects"}
        nextTitle={"Resume"}
        icon={false}
        nextLink="/resume"
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
