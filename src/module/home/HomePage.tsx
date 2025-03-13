import { Text } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <Text className="text-[36px]">Trang chủ</Text>
      <Text>
        {' '}
        Hover vào Tài Nguyên {'>'} Blog {'>'} Chọn một blog bất kì
      </Text>
    </div>
  );
};

export default HomePage;
