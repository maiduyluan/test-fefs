import { Text } from '@chakra-ui/react';
import { FC, useMemo, useState } from 'react';
import postData from '@/utils/listBlogData';
import listBlogData from '@/utils/listBlogData';
import PostCard from '../components/PostCard';
import RelatedSection from '../components/RelatedSection';
import BannerBlog from './components/BannerBlog';
import BlogDetail from './components/BlogDetail';
import EmojiBlog from './components/EmojiBlog';
import ContentSectionBlog from './components/ContentSectionBlog';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

interface BlogDetailFeatureProps {
  blogId: any;
}

const BlogDetailFeature: FC<BlogDetailFeatureProps> = ({ blogId }) => {
  const [isDropdownContentSection, setIsDropDownContentSection] =
    useState(false);

  const postDetailData = useMemo(
    () => postData.find((item) => item.id === blogId),
    [blogId]
  );

  const handleDropdownContentSection = () => {
    setIsDropDownContentSection(!isDropdownContentSection);
  };

  return (
    <div>
      <div className="flex justify-start gap-2 text-[14px] mb-[48px]">
        <Text>Trang chủ {'>'}</Text>
        <Text>Tài nguyên {'>'}</Text>
        <Text>Blog {'>'}</Text>
        <Text className="font-bold">Quản Lý Sản Xuất</Text>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-8 px-[36px]">
        <div className="w-full lg:w-3/4 flex flex-col gap-4">
          <Text className="text-[36px] font-bold">
            Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết
          </Text>
          <BannerBlog />
          <BlogDetail />
          <EmojiBlog />
          <Text className="text-[36px] font-bold">Bài viết liên quan</Text>
          <div className="py-[16px] lg:py-[24px] xl:py-[48px] flex flex-wrap w-full gap-8">
            {listBlogData.map((post, i) => (
              <div key={i} className="w-full md:w-[47%] lg:w-[47%] xl:w-[30%]">
                <PostCard listBlogData={post} />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/4">
          <div className="flex flex-col gap-6">
            <div
              className="flex justify-between items-center hover:text-[#15AA7A] cursor-pointer"
              onClick={handleDropdownContentSection}
            >
              <Text className="text-[24px]">Nội dung bài viết</Text>
              {isDropdownContentSection ? (
                <MdOutlineKeyboardArrowUp className="text-[32px]" />
              ) : (
                <MdKeyboardArrowDown className="text-[32px]" />
              )}
            </div>
            {isDropdownContentSection && <ContentSectionBlog />}
            <RelatedSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailFeature;
