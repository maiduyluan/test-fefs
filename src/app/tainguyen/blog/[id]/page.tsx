'use client';
import Header from '@/components/header/Header';
import Social from '@/components/social/Social';
import BlogDetailFeature from '@/module/blog/blog-detail/BlogDetailFeature';
import { useParams } from 'next/navigation';

export default function BlogDetail() {
  const params = useParams();
  const id = params?.id;

  return (
    <div className="lg:px-[40px] xl:px-[100px] 2xl:px-[240px]">
      <div className="py-6">
        <Header />
      </div>
      <div className="py-[24px]">
        <BlogDetailFeature blogId={id} />
      </div>
      <div className="hidden xl:block xl:absolute xl:top-[45%]  xl:left-[3%] 2xl:top-[35%] 2xl:left-[6%]">
        <Social />
      </div>
    </div>
  );
}
