import React from "react";
import Button from "./Button";

type Props = {
  prevTitle: string;
  nextTitle: string;
  prevLink?: string;
  nextLink?: string;
  icon?: boolean;
};

const FooterButton = (props: Props) => {
  return (
    <div className="fixed bottom-10 w-full px-4">
      <div className="container flex justify-between items-center bg-gray-700 text-white px-2 py-3 shadow border border-opacity-50 rounded-md">
        <Button
          title={props.prevTitle}
          link={props.prevLink}
          icon={props.icon}
          prevBtn
        />
        <Button
          title={props.nextTitle}
          link={props.nextLink}
          icon={props.icon}
        />
      </div>
    </div>
  );
};

export default FooterButton;
