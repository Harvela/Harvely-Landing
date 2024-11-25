'use client';

import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import BlogCard from '@/components/BlogCard';
import { blogs } from '@/utils/blogs';

const BlogList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const blogsPerPage = 4;

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const displayedBlogs = blogs.slice(
    currentPage * blogsPerPage,
    (currentPage + 1) * blogsPerPage,
  );

  const goToPrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  return (
    <div id="blog" className="mx-auto px-4 py-16 md:px-32">
      <div className="mb-6">
        <h1 className="text-[24px] font-bold text-back-100 dark:text-white md:text-[32px]">
          Nos Blogs
        </h1>
        <p className="mt-4 text-[14px] font-light text-black/60 dark:text-white/80 md:text-[18px]">
          Découvrez les derniers articles et ressources sur les outils, la
          productivité, et les meilleures pratiques.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-4">
        {displayedBlogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={goToPrevious}
          disabled={currentPage === 0}
          className={`flex items-center gap-2 rounded bg-gray-200 px-4 py-2 text-sm font-semibold hover:bg-back-100 hover:text-white ${
            currentPage === 0 && 'cursor-not-allowed opacity-50'
          }`}
        >
          <FiArrowLeft />
        </button>
        <button
          onClick={goToNext}
          disabled={currentPage === totalPages - 1}
          className={`flex items-center gap-2 rounded bg-gray-200 px-4 py-2 text-sm font-semibold hover:bg-back-100 hover:text-white ${
            currentPage === totalPages - 1 && 'cursor-not-allowed opacity-50'
          }`}
        >
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BlogList;
