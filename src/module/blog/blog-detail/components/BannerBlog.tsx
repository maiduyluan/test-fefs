import { Image, Text } from '@chakra-ui/react';
import { IoMdTime } from 'react-icons/io';
import { CiCalendar } from 'react-icons/ci';

const BannerBlog = () => {
  return (
    <div className="flex flex-col py-6">
      <Text className="px-2 py-1 bg-[#E2F0FE] text-[#0F4F9E] text-xs w-[120px] rounded-lg">
        Quản Lý Sản Xuất
      </Text>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="w-[64px] h-[64px] flex justify-center items-center rounded-[40px] border border-[#F1F5F7]">
            <Image
              src="/images/Logo_pattern.svg"
              className="w-[33px] h-[33px]"
            ></Image>
          </div>
          <div className="flex flex-col">
            <Text className="text-[14px] text-[#667F93]">Tác giả</Text>
            <Text className="font-bold text-[16px]">FOSO Creator</Text>
          </div>
        </div>

        <div className="flex gap-3 text-[16px] text-[#667F93]">
          <div className="flex gap-2 items-center">
            <CiCalendar />
            <Text>17/11/2022</Text>
          </div>
          <div className="flex gap-2 items-center">
            <IoMdTime />
            <Text>10 giờ trước</Text>
          </div>
        </div>
      </div>
      <Image src="/images/image-post.svg" className="w-full"></Image>
      <span className="text-[16px] text-[#667F93] text-center py-2">
        Quy trình 5s là gì
      </span>

      <div className="">
        <Text className="text-[20px] px-[61px] pt-[12px] pb-[8px] text-center">
          Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây
          dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn
          thông tin chi tiết về mô hình này cũng như yếu tố tạo nên thành công
          của quy trình bạn nhé.
        </Text>
      </div>
    </div>
  );
};

export default BannerBlog;
