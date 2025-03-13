import BannerBookLeft from '@/components/banner/BannerBookLeft';
import BannerBookRight from '@/components/banner/BannerBookRight';
import Header from '@/components/header/Header';
import BlogFeature from '@/module/blog/BlogFeature';

export default function Blog() {
  return (
    <div className="relative lg:px-[40px] xl:px-[100px] 2xl:px-[240px]">
      <div className="py-6">
        <Header />
      </div>
      <div className="py-[24px]">
        <BlogFeature />
      </div>
      <BannerBookLeft />
      <BannerBookRight />
    </div>
  );
}
