import { useRouter } from 'next/router';
import React from 'react';

import { Navbar } from '@/navigation/Navbar';

const blogs = [
  {
    id: '1',
    image: '/images/blog1.jpg',
    author: 'Phoenix Baker',
    date: '19 Jan 2022',
    title: 'Migrating to Linear 101',
    content:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
  },
  {
    id: '2',
    image: '/images/blog2.jpg',
    author: 'Lana Steiner',
    date: '18 Jan 2022',
    title: 'Building your API Stack',
    content:
      'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
  },
  {
    id: '3',
    image: '/images/blog3.jpg',
    author: 'Alec Whitten',
    date: '17 Jan 2022',
    title: 'Bill Walsh leadership lessons',
    content:
      'Like to know the secrets of transforming a 2-14 team into a 3× Super Bowl winning Dynasty?',
  },
];

const BlogDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <div className="mx-auto max-w-7xl px-4 py-8">Blog not found!</div>;
  }

  return (
    <>
      <div className="fixed z-[5000] w-full">
        <Navbar />
      </div>
      <div className="mx-auto max-w-4xl px-4 py-8 pt-32">
        <h1 className="text-3xl font-bold text-gray-800">{blog.title}</h1>
        <p className="mt-2 text-sm text-gray-500">
          {blog.author} • {blog.date}
        </p>
        <img
          src={blog.image}
          alt={blog.title}
          className="my-6 h-64 w-full rounded-lg object-cover"
        />
        <p className="text-lg text-gray-700">{blog.content}</p>
      </div>
    </>
  );
};

export default BlogDetail;
