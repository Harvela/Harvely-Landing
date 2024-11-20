'use client';

import Link from 'next/link';
import React from 'react';

type BlogCardProps = {
  id: string;
  image: string;
  author: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
};

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  image,
  author,
  date,
  title,
  description,
  tags,
}) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <div className="text-sm text-gray-500">
          <span className="font-semibold">{author}</span> • {date}
        </div>

        <Link
          href={`/blog/${id}`}
          rel="noopener noreferrer"
          className="mt-2 block text-xl font-bold text-gray-800 hover:text-back-100"
        >
          {title} <span className="inline-block">↗</span>
        </Link>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-200 px-3 py-1 text-xs text-gray-700 transition hover:bg-back-100 hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
