"use client";

import { AnimatePresence, motion } from "framer";
import { FaArrowRight, FaBan, FaCheckCircle } from "react-icons/fa";
import FooterButton from "../components/FooterButton";
import PageTitle from "../components/PageTitle";
import { ChangeEventHandler, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button, message } from "antd";
import emailjs from "@emailjs/browser";

const inputClassName =
  "md:text-xl bg-transparent border dark:border-gray-500 border-gray-400 rounded w-full px-3 py-2 outline-none hover:outline-blue-200 dark:hover:outline-primaryRed hover:border-primaryBlue dark:hover:border-primaryRed duration-200";
const formGroupClassName = "flex flex-col items-start gap-2 md:gap-4 w-full";
const labelClassName = "capitalize font-semibold md:text-xl";

type formDataProps = {
  name: string;
  email: string;
  subject: string;
  mail: string;
  message: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<formDataProps>({
    name: "",
    mail: "",
    email: "",
    message: "",
    subject: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const contacts = [
    {
      title: "Mail",
      id: 1,
      url: "chulocr8v@gmail.com",
      name: "chulocr8v",
    },
    {
      title: (
        <p className="">
          Social<span className="block text-2xl md:text-4xl">Medias</span>
        </p>
      ),
      id: 2,
      subMenu: [
        {
          url: "https://x.com/chulocr8v",
          title: "Twitter",
        },
        {
          url: "www.linkedin.com/in/bonaventure-nkematu-77b563148",
          title: "LinkedIn",
        },
        { url: "https://wa.me/+2348138369977", title: "whatsapp" },
      ],
    },
  ];

  useEffect(() => {
    emailjs.init("Ydvd-cirhqFpWFG-U");
  }, []);

  const emailIsValid = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSendMail = async () => {
    setIsLoading(true);
    try {
      await emailjs.send("service_c02ype3", "template_sy9xbpx", {
        from_name: formData.name,
        to_name: "Nkematu Bonaventure",
        subject: formData.subject,
        mail: formData.mail,
        reply_to: formData.email,
      });
      message.success("Mail sent successfully");
      formData.name = "";
      formData.email = "";
      formData.subject = "";
      formData.mail = "";
    } catch (error) {
      console.log(error);
      message.error("Unable to send mail! Please try again.");
    }
    setIsLoading(false);
  };

  const handleInputChange = (e: {
    target: { value: string; name: string };
  }) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const disabled =
    formData.name === "" ||
    formData.email === "" ||
    formData.mail === "" ||
    !emailIsValid(formData.email);

  return (
    <AnimatePresence>
      <div className="overflow-hidden flex items-center justify-center min-h-screen w-full ">
        <motion.section
          className="pt-24 xl:pt-40 pb-32 px-4 w-full flex items-center justify-center"
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100vw", opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
        >
          <div className="wrapper max-w-7xl w-full xl:grid grid-cols-2 gap-24">
            <div className="">
              <PageTitle title={"Contact"} />
              <div className="flex flex-col gap-6 mt-12 w-full">
                {contacts.map((c) => (
                  <div className="grid grid-cols-2" key={c.id}>
                    <p className="font-semibold text-xl md:text-2xl">
                      {" "}
                      {c.title}
                    </p>
                    {!c.subMenu ? (
                      <a
                        href="mailto:nkematubona@gmail.com"
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
                            target="_blank"
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
              <form className="flex flex-col items-start gap-4 w-full">
                <div className="text-center w-full py-12 border dark:border-gray-500 border-gray-400 rounded-2xl bg-gray-100/40 dark:bg-gray-900/40 backdrop-blur">
                  <p className="text-3xl md:text-4xl font-semibold">Mail Me</p>
                  <p className=" mt-1 md:text-xl text-gray-500 dark:text-gray-400">
                    Reach out to me via my inbox
                  </p>
                </div>
                <div className="w-full space-y-6 md:space-y-0 md:grid md:grid-cols-2 gap-4 mt-4">
                  {" "}
                  <FormGroup
                    label={"name"}
                    placeholder={"Enter name here"}
                    type={"text"}
                    handleChange={handleInputChange}
                    name="name"
                    value={formData.name}
                  />
                  <div className="relative">
                    <FormGroup
                      label={"email"}
                      placeholder={"Enter your email address"}
                      type={"text"}
                      handleChange={handleInputChange}
                      name="email"
                      value={formData.email}
                    />
                    {formData.email !== "" && (
                      <div className="absolute right-0">
                        {emailIsValid(formData.email) ? (
                          <p className="flex items-center gap-2 text-sm justify-end text-green-600 font-semibold mt-2">
                            <FaCheckCircle /> Valid Email Address.
                          </p>
                        ) : (
                          <p className="flex items-center gap-2 text-sm justify-end text-red-600 dark:text-yellow-600 font-semibold mt-2">
                            <FaBan /> Invalid Email Address!
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                  <FormGroup
                    label={"Subject"}
                    placeholder={"Enter subject here"}
                    type={"text"}
                    handleChange={handleInputChange}
                    name="subject"
                    value={formData.subject}
                  />
                </div>

                <div className={formGroupClassName}>
                  <label
                    className={twMerge(
                      labelClassName,
                      "flex items-center gap-1"
                    )}
                  >
                    mail
                    <span className="text-yellow-600">*</span>
                  </label>
                  <textarea
                    name={"mail"}
                    className={twMerge(
                      inputClassName,
                      " bg-gray-100/40 dark:bg-gray-900/40 backdrop-blur-lg rounded-lg text-sm"
                    )}
                    placeholder="Write me a mail"
                    rows={4}
                    onChange={handleInputChange}
                    value={formData.mail}
                  />
                </div>
                <p className=" text-sm place-self-end dark:text-yellow-600 text-red-600">
                  <span className="font-bold">Note:</span> (
                  <span className="font-bold text-xl leading-none">*</span>)
                  indicates required information.
                </p>
                <Button
                  loading={isLoading}
                  disabled={disabled || isLoading}
                  onClick={handleSendMail}
                  className={twMerge(
                    "place-self-end md:text-xl mt-4 md:mt-4 bg-gray-700 hover:bg-black duration-200 text-white font-semibold w-[130px] py-2 rounded text-sm flex items-center justify-center gap-2",
                    (disabled || isLoading) &&
                      "dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300 dark:opacity-30"
                  )}
                >
                  Send{" "}
                  <FaArrowRight
                    className={twMerge("text-sm leading-none h-3")}
                  />
                </Button>
              </form>
            </div>
          </div>
        </motion.section>
      </div>
      <FooterButton
        prevTitle={"Projects"}
        nextTitle={"Resume"}
        icon={false}
        nextLink="https://drive.google.com/file/d/1_GrUJZrN3gDWy4CyNfniFKPY1v5Z-WTh/view?usp=sharing"
        nextExternal
        prevLink="/projects"
      />
    </AnimatePresence>
  );
};

export default Contact;

const FormGroup = (props: {
  label: string;
  value: string;
  name: string;
  placeholder: string;
  type: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div
      className={twMerge(
        formGroupClassName,
        props.name === "subject" && "col-span-2"
      )}
    >
      <label className={labelClassName}>
        {props.label}{" "}
        {props.name !== "subject" && (
          <span className="dark:text-yellow-600 text-red-600">*</span>
        )}
      </label>
      <input
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        className={twMerge(
          inputClassName,
          " bg-gray-100/40 dark:bg-gray-900/40 backdrop-blur-lg rounded-lg h-12 text-sm"
        )}
        onChange={props.handleChange}
        name={props.name}
      />
    </div>
  );
};
