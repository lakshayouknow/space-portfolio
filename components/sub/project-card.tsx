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
      className="relative h-full overflow-hidden rounded-xl shadow-lg border border-purple-500/30 hover:border-purple-500/80 transition-all duration-300 group bg-gradient-to-br from-purple-900/10 to-cyan-900/10 backdrop-blur-sm flex flex-col"
    >
      {/* Image Container */}
      <div className="relative w-full h-56 bg-gradient-to-br from-purple-900/50 to-cyan-900/50 overflow-hidden">
        {!imageError ? (
          <Image
            src={src}
            alt={title}
            width={1000}
            height={600}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => {
              setImageError(true);
            }}
            loading="lazy"
            priority={false}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-cyan-600">
            <p className="text-white text-center px-4 font-semibold">{title}</p>
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
      </div>

      {/* Content Container */}
      <div className="relative flex-1 p-5 md:p-6 bg-gradient-to-r from-[#0a0e27]/80 to-[#1a1a3e]/80 backdrop-blur-sm flex flex-col justify-between group-hover:from-purple-900/30 group-hover:to-cyan-900/30 transition-all duration-300 border-t border-purple-500/20">
        <div>
          <h2 className="text-lg md:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-300 line-clamp-2">
            {title}
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-300 group-hover:text-gray-100 transition-colors duration-300 line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* View More indicator */}
        <div className="mt-4 flex items-center gap-2 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300 text-sm font-medium">
          <span>View Project</span>
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
      </div>
    </Link>
  );
};
