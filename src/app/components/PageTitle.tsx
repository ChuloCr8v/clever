import React from "react";

type Props = { title: string };

const PageTitle = (props: Props) => {
  return (
    <h2 className="w-full flex gap-3 basis-full text-4xl font-semibold leading-none">
      {props.title}
      <span className="border-b border-black dark:border-gray-200 basis-full"></span>
    </h2>
  );
};

export default PageTitle;
