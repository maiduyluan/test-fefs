import { Image, Link, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { CiCalendar } from 'react-icons/ci';
import { FaArrowRight } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';

interface PostCardProps {
  listBlogData: {
    id: string;
    category: string;
    title: string;
    date: string;
    time: string;
  };
}

const PostCard: FC<PostCardProps> = ({ listBlogData }) => {
  return (
    <div className="">
      <Link href={`/tainguyen/blog/${listBlogData.id}`}>
        <Image src="/images/image.svg" className="w-full" />
        <div className="flex flex-col py-[24px] gap-4   ">
          <Text className="px-2 py-1 bg-[#E2F0FE] text-[#0F4F9E] text-xs w-[114px] rounded-lg">
            {listBlogData.category}
          </Text>
          <Text className="text-[24px] font-bold">{listBlogData.title}</Text>
          <div className="flex gap-3 text-[16px] text-[#667F93]">
            <div className="flex gap-2 items-center">
              <CiCalendar />
              <Text>{listBlogData.date}</Text>
            </div>
            <div className="flex gap-2 items-center">
              <IoMdTime />
              <Text>{listBlogData.time}</Text>
            </div>
          </div>
          <div className="flex gap-4 items-center text-[#667F93]">
            <Text>Khám phá thêm</Text>
            <FaArrowRight />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
