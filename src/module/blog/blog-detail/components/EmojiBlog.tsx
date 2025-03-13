import { Image, Text } from '@chakra-ui/react';

const EmojiBlog = () => {
  return (
    <div className="py-[48px]">
      <div className="px-[100px]py-[24px] bg-white rounded-[24px] shadown-lg">
        <div className="flex flex-col items-center gap-6">
          <Text className="text-[20px] font-bold">
            Bạn thấy bài viết như thế nào?
          </Text>
          <Text className="text-[16px]">4 phản hồi</Text>
          <div className="flex flex-wrap justify-between gap-2 lg:gap-5 xl:gap-8">
            <div className="flex flex-col items-center border border-[#10805B] p-1 w-[90px] text-[#10805B] rounded">
              <Image src="/images/thumbs_up.svg"></Image>
              <Text>1</Text>
              <Text>Hữu ích</Text>
            </div>
            <div className="flex flex-col items-center border p-1 w-[90px] rounded">
              <Image src="/images/green_heart.svg"></Image>
              <Text>2</Text>
              <Text>Yêu thích</Text>
            </div>
            <div className="flex flex-col items-center border p-1 w-[90px] rounded">
              <Image src="/images/star-struck.svg"></Image>
              <Text>0</Text>
              <Text>Thú vị</Text>
            </div>
            <div className="flex flex-col items-center border p-1 w-[90px] rounded">
              <Image src="/images/hushed_face.svg"></Image>
              <Text>1</Text>
              <Text>Bất ngờ</Text>
            </div>
            <div className="flex flex-col items-center border p-1 w-[90px rounded">
              <Image src="/images/yawning_face.svg"></Image>
              <Text>0</Text>
              <Text>Nhàm chán</Text>
            </div>
            <div className="flex flex-col items-center border p-1 w-[90px]">
              <Image src="/images/pouting_face.svg"></Image>
              <Text>0</Text>
              <Text>Tức giận</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmojiBlog;
