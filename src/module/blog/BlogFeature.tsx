'use client';

import { Image, Input, Text } from '@chakra-ui/react';
import Banner from './components/Banner';
import Link from 'next/link';
import PostCard from './components/PostCard';
import { FiSearch } from 'react-icons/fi';
import CategoryCard from './components/CategoryCard';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import listBlogData from '@/utils/listBlogData';
import categoryData from '@/utils/categoryData';
import RelatedSection from './components/RelatedSection';
import { FaArrowLeft } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa6';

const BlogFeature = () => {
  const [page, setPage] = useState(1);
  const handlePageClick = (data: any) => {
    setPage(data.selected);
  };

  // const postData = useMemo(() => [
  //     {
  //       id: '1',
  //       category: 'Quản lý sản xuất',
  //       title: 'Tại sao BOM quan trọng trong xử lý sản xuất?',
  //       date: '17/11/2022',
  //       time: '10 phút đọc',
  //     },
  //     {
  //       id: '2',
  //       category: 'Quản lý sản xuất',
  //       title: 'Tại sao BOM quan trọng trong xử lý sản xuất?',
  //       date: '17/11/2022',
  //       time: '10 phút đọc',
  //     },
  //     {
  //       id: '3',
  //       category: 'Quản lý sản xuất',
  //       title: 'Tại sao BOM quan trọng trong xử lý sản xuất?',
  //       date: '17/11/2022',
  //       time: '10 phút đọc',
  //     },
  //     {
  //       id: '4',
  //       category: 'Quản lý sản xuất',
  //       title: 'Tại sao BOM quan trọng trong xử lý sản xuất?',
  //       date: '17/11/2022',
  //       time: '10 phút đọc',
  //     },
  //   ], [])

  return (
    <div>
      <Banner />
      <div className="w-full flex flex-col lg:flex-row gap-8 px-[20px] py-[36px] lg:py-[96px]">
        <div className="w-full lg:w-3/4">
          <Text className="text-[36px] font-bold mb-[20px]">
            Tất cả bài viết
          </Text>
          <Link href={'/'}>
            <Image src="/images/banner.svg" className="w-full"></Image>
          </Link>
          <div className="py-[16px] lg:py-[24px] xl:py-[48px] flex flex-wrap w-full gap-8">
            {listBlogData.map((post, i) => (
              <div
                key={i}
                className="w-full md:w-[47%] lg:w-[47%] xl:w-[48%] 2xl:w-[47%]"
              >
                <PostCard listBlogData={post} />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/4">
          <div className="flex flex-col gap-6">
            <Text className="text-[36px] font-bold">Tìm kiếm</Text>
            <div className="relative w-full h-[72px]">
              <Input
                type="text"
                className="relative w-full h-full border border-[#919EAB29] shadow-lg py-3 pl-6 pr-[70px] text-[16px] rounded-xl"
                placeholder="Tìm kiếm bài viết"
              />
              <div className="absolute w-[48px] h-[48px] p-3 bg-[#15AA7A] flex justify-center items-center rounded-xl  top-[12px] right-[12px]">
                <FiSearch className=" text-white text-[18px]" />
              </div>
            </div>
            <Text className="text-[36px] font-bold">Danh mục</Text>
            {categoryData.map((category, i) => (
              <CategoryCard key={i} categoryData={category} />
            ))}
            <RelatedSection />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center text-[#4D5F6E] mb-[56px]">
        <div className="flex items-center gap-2">
          <FaArrowLeft />
          <Text>Trang trước</Text>
        </div>
        <ReactPaginate
          previousLabel={false}
          nextLabel={false}
          breakLabel={'...'}
          pageCount={10}
          marginPagesDisplayed={page}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="flex space-x-2"
          activeClassName="bg-[#D1F7EA] font-bold"
          pageClassName="px-4 py-2 border-none rounded cursor-pointer"
          previousClassName="px-4 py-2 border rounded hidden"
          nextClassName="px-4 py-2 border rounded hidden"
          breakClassName="px-4 py-2 border-none rounded "
        />
        <div className="flex items-center gap-2">
          <Text>Trang kế tiếp</Text>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default BlogFeature;
