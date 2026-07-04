"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-purple-500 transition-all duration-300 group"
    >
      <div className="relative w-full h-64 bg-gradient-to-br from-purple-900/50 to-cyan-900/50 overflow-hidden">
        {!imageError ? (
          <Image
            src={src}
            alt={title}
            width={1000}
            height={600}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => {
              console.log(`[v0] Failed to load project image: ${src}`);
              setImageError(true);
            }}
            loading="lazy"
            priority={false}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-cyan-600">
            <p className="text-white text-center px-4">{title}</p>
          </div>
        )}
      </div>

      <div className="relative p-4 bg-gradient-to-r from-[#0a0e27] to-[#1a1a3e] group-hover:from-purple-900/20 group-hover:to-cyan-900/20 transition-colors duration-300">
        <h1 className="text-2xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
          {title}
        </h1>
        <p className="mt-2 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
      </div>
    </Link>
  );
};
