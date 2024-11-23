'use client';

import React, { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import BlogCard from '@/components/BlogCard';

const BlogList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const blogsPerPage = 4;
  const blogs = [
    {
      id: '1',
      image: '/images/blog1.jpg',
      author: 'Phoenix Baker',
      date: '19 Jan 2022',
      title: 'Migrating to Linear 101',
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      tags: ['Product', 'Tools', 'SaaS'],
      link: '#',
    },
    {
      id: '2',
      image: '/images/blog2.jpg',
      author: 'Lana Steiner',
      date: '18 Jan 2022',
      title: 'Building your API Stack',
      description:
        'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
      tags: ['Software Development', 'Tools'],
      link: '#',
    },
    {
      id: '3',
      image: '/images/blog3.jpg',
      author: 'Alec Whitten',
      date: '17 Jan 2022',
      title: 'Bill Walsh leadership lessons',
      description:
        'Like to know the secrets of transforming a 2-14 team into a 3× Super Bowl winning Dynasty?',
      tags: ['Leadership', 'Management'],
      link: '#',
    },
    {
      id: '4',
      image: '/images/blog4.jpg',
      author: 'Emma Clarke',
      date: '16 Jan 2022',
      title: 'How to start in SaaS',
      description:
        'An introductory guide to building SaaS applications from scratch.',
      tags: ['Startup', 'SaaS'],
      link: '#',
    },
    {
      id: '5',
      image: '/images/blog4.jpg',
      author: 'Emma Clarke',
      date: '16 Jan 2022',
      title: 'How to start in SaaS',
      description:
        'An introductory guide to building SaaS applications from scratch.',
      tags: ['Startup', 'SaaS'],
      link: '#',
    },
    {
      id: '6',
      image: '/images/blog4.jpg',
      author: 'Emma Clarke',
      date: '16 Jan 2022',
      title: 'How to start in SaaS',
      description:
        'An introductory guide to building SaaS applications from scratch.',
      tags: ['Startup', 'SaaS'],
      link: '#',
    },
  ];

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
