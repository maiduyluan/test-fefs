import { Image, Link } from '@chakra-ui/react';

const RelatedSection = () => {
  return (
    <div className="flex w-full lg:flex-col gap-6">
      <Link href={'/'}>
        <Image src="/images/banner-section.svg" className="w-full"></Image>
      </Link>
      <Link href={'/'}>
        <Image src="/images/banner-section2.svg" className="w-full"></Image>
      </Link>
    </div>
  );
};

export default RelatedSection;
