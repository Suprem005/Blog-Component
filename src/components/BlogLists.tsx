'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type Blog = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

interface BlogListProps {
  title: string;
  view: 'list' | 'grid';
  blogs: Blog[];
}

const BlogLists = ({ title, view, blogs }: BlogListProps) => {
  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-5xl font-bold'>{title}</h1>
      </div>
      <div
        className={cn(
          'gap-4',
          view === 'grid'
            ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
            : 'flex flex-col'
        )}
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className={cn(
              'hover:shadow-lg transition border rounded-md overflow-hidden',
              view === 'list' && 'flex flex-row items-center gap-4'
            )}
          >

            {/* image section */}
            <div
              className={cn(
                'relative w-full h-48',
                view === 'list' && 'w-48 h-32'
              )}
            >
              <Image
                fill
                src={blog.imageUrl}
                alt={blog.title}
                className='object-cover'
              />
            </div>

            {/* title description section */}
            <div className='p-3 flex-1'>
              <p className='font-semibold'>{blog.title}</p>
              <p className='text-sm text-gray-600 line-clamp-2'>
                {blog.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogLists;
