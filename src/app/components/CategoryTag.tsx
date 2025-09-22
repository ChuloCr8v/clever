import { Tag } from "antd";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  category: string;
  className?: string;
};

const categoryColors: Record<string, string> = {
  "web applications": "#1890FF", // blue
  "mobile application": "#52C41A", // green
  "full stack application": "#00B8D4", // purple
  frontend: "#FAAD14", // gold
  backend: "#FA541C", // volcano
};

const CategoryTag = ({ category, className }: Props) => {
  const color = categoryColors[category.toLowerCase()] || "#d9d9d9";

  return (
    <Tag
      className={twMerge(
        `w-fit rounded-full font-semibold capitalize px-3 py-1
         backdrop-blur-md transition-all duration-300`,
        className
      )}
      style={{
        color: `${color}`,
        border: `1px solid ${color}66`, // 40% opacity border
        background: `linear-gradient(135deg, ${color}33, ${color}1A)`, // glassy tint
      }}
    >
      {category}
    </Tag>
  );
};

export default CategoryTag;
