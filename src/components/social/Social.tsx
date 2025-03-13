import { Image, Text } from '@chakra-ui/react';

const Social = () => {
  return (
    <div className="flex flex-col gap-2 sticky">
      <Text className="text-[16px] font-bold">Chia sẽ</Text>
      <div className="border border-[#15AA7A] rounded-2xl p-3  flex justify-center items-center">
        <Image src="/images/Icon_of_Zalo.svg" className="w-6 h-6"></Image>
      </div>
      <div className="border border-[#15AA7A] rounded-2xl p-3 flex justify-center items-center">
        <Image src="/images/facebook.svg" className="w-6 h-6"></Image>
      </div>
      <div className="border border-[#15AA7A] rounded-2xl p-3 flex justify-center items-center">
        <Image src="/images/Social_Icons.svg" className="w-6 h-6"></Image>
      </div>
      <div className="border border-[#15AA7A] rounded-2xl p-3 flex justify-center items-center">
        <Image src="/images/Social_Icons2.svg" className="w-6 h-6"></Image>
      </div>
      <div className="border border-[#15AA7A] rounded-2xl p-3 flex justify-center items-center">
        <Image src="/images/Social_Icons3.svg" className="w-6 h-6"></Image>
      </div>
    </div>
  );
};

export default Social;
