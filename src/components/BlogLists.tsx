'use client';
import { cn } from '@/lib/utils';
import { Grid3x2, List } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from './ui/button';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';

type Blog = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

interface BlogListProps {
  title: string;
  description: string;
  position: 'top' | 'bottom';
  blogs: Blog[];
}

const BlogLists = ({ title, description, position, blogs }: BlogListProps) => {
  const [view, setView] = useState<'list' | 'grid'>('grid');

  return (
    <section className='space-y-10'>
      {/* title  */}
      <div className='flex flex-wrap justify-between'>
        <h1 className='text-5xl font-bold'>{title}</h1>

        {/* for positioning view all at top  */}
        {position === 'top' && (
          <div className='flex justify-end'>
            <Button variant='secondary' asChild>
              <a
                target='blank'
                href='https://www.koenigsegg.com/model/sadairs-spear'
              >
                View all
              </a>
            </Button>
          </div>
        )}
      </div>

      {/* header description  */}
      <div>
        <p className='text-md text-justify'>{description}</p>
      </div>

      {/* toggling views  */}

      <div>
        <ToggleGroup
          type='single'
          value={view}
          onValueChange={(val) => val && setView(val as 'list' | 'grid')}
        >
          <ToggleGroupItem value='list' aria-label='List view'>
            <List />
          </ToggleGroupItem>
          <ToggleGroupItem value='grid' aria-label='Grid view'>
            <Grid3x2 />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* blog card details  */}
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
              'hover:shadow-lg transition rounded-md overflow-hidden',
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
                className='object-cover rounded-md'
              />
            </div>

            {/* title description section */}
            <div className='p-2  flex-1'>
              <p className='font-semibold line-clamp-2'>{blog.title}</p>
              <p className='text-sm text-gray-600 line-clamp-2'>
                {blog.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {position === 'bottom' && (
        <div className='flex justify-center'>
          <Button variant='secondary' asChild>
            <a
              target='blank'
              href='https://www.koenigsegg.com/model/sadairs-spear'
            >
              View all
            </a>
          </Button>
        </div>
      )}
    </section>
  );
};

export default BlogLists;
