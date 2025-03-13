import { Text } from '@chakra-ui/react';

const Banner = () => {
  return (
    <div className="py-[48px]">
      <div className="flex justify-center gap-2 text-[14px] mb-[24px]">
        <Text>Trang chủ {'>'}</Text>
        <Text>Tài Nguyên {'>'}</Text>
        <Text className="font-bold">Blog</Text>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-center items-center text-[34px] lg:text-[64px]">
          <div>
            Blog <span className="font-bold text-[#53B086]">FOSO</span> -
          </div>
          <div>
            Cập Nhật Tin Tức{' '}
            <span className="relative font-bold">
              <Text className="relative z-10 inline">Mới nhất</Text>
              <div className="absolute bottom-1 left-0 w-full h-[30px] rounded-[32px] bg-[#A3EED6] z-0"></div>
            </span>
          </div>
        </div>
        <Text className="text-[14px] lg:text-[18px]">
          Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
        </Text>
      </div>
    </div>
  );
};

export default Banner;
