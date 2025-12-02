import BlogLists from '@/components/BlogLists';
import React from 'react';

const blogsData = [
  {
    id: '1',
    title: 'McLaren P1',
    description:
      "The McLaren P1 is a limited-production, hybrid hypercar known for its extreme performance, officially produced from 2013 to 2015. It features a 3.8-liter twin-turbocharged V8 engine combined with an electric motor, producing a combined 916 horsepower, enabling it to accelerate from 0–100 km/h in 2.8 seconds. The P1 is also recognized for its advanced aerodynamics and driver-focused design, drawing heavily on McLaren's Formula 1 racing technology.",
    imageUrl: '/image/mclaren.jpg',
  },
  {
    id: '2',
    title: 'Porsche 911 GTR',
    description:
      "The McLaren P1 is a limited-production, hybrid hypercar known for its extreme performance, officially produced from 2013 to 2015. It features a 3.8-liter twin-turbocharged V8 engine combined with an electric motor, producing a combined 916 horsepower, enabling it to accelerate from 0–100 km/h in 2.8 seconds. The P1 is also recognized for its advanced aerodynamics and driver-focused design, drawing heavily on McLaren's Formula 1 racing technology.",
    imageUrl: '/image/mclaren.jpg',
  },
  {
    id: '3',
    title: 'Lamborghini Countach',
    description:
      "The McLaren P1 is a limited-production, hybrid hypercar known for its extreme performance, officially produced from 2013 to 2015. It features a 3.8-liter twin-turbocharged V8 engine combined with an electric motor, producing a combined 916 horsepower, enabling it to accelerate from 0–100 km/h in 2.8 seconds. The P1 is also recognized for its advanced aerodynamics and driver-focused design, drawing heavily on McLaren's Formula 1 racing technology.",
    imageUrl: '/image/mclaren.jpg',
  },
  {
    id: '4',
    title: 'Nissan Skyline GTR',
    description:
      "The McLaren P1 is a limited-production, hybrid hypercar known for its extreme performance, officially produced from 2013 to 2015. It features a 3.8-liter twin-turbocharged V8 engine combined with an electric motor, producing a combined 916 horsepower, enabling it to accelerate from 0–100 km/h in 2.8 seconds. The P1 is also recognized for its advanced aerodynamics and driver-focused design, drawing heavily on McLaren's Formula 1 racing technology.",
    imageUrl: '/image/mclaren.jpg',
  },
  {
    id: '5',
    title: 'Mazda RX7',
    description:
      "The McLaren P1 is a limited-production, hybrid hypercar known for its extreme performance, officially produced from 2013 to 2015. It features a 3.8-liter twin-turbocharged V8 engine combined with an electric motor, producing a combined 916 horsepower, enabling it to accelerate from 0–100 km/h in 2.8 seconds. The P1 is also recognized for its advanced aerodynamics and driver-focused design, drawing heavily on McLaren's Formula 1 racing technology.",
    imageUrl: '/image/mclaren.jpg',
  },
];

const BlogPage = () => {
  return (
    <div className='container mx-auto py-10'>
      <BlogLists
        title='Latest Blogs'
        position='bottom'
        blogs={blogsData}
        description='A supercar is a high‑performance sports vehicle built for speed, precision, and luxury. Featuring powerful engines, lightweight materials, and advanced aerodynamics, it delivers thrilling acceleration and handling. Beyond performance, supercars symbolize exclusivity and innovation, blending cutting‑edge technology with striking design to create an aspirational driving experience admired worldwide.'
      />
    </div>
  );
};

export default BlogPage;
