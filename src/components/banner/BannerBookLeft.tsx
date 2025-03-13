import { Image } from '@chakra-ui/react';

const BannerBookLeft = () => {
  return (
    <div className="hidden 2xl:block 2xl:absolute 2xl:left-0 2xl:top-[10%]">
      <Image src="/images/Frame_160.svg" className="2xl:w-[195px]"></Image>
    </div>
  );
};

export default BannerBookLeft;
