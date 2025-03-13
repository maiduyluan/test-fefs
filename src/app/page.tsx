import Header from '@/components/header/Header';
import HomePage from '@/module/home/HomePage';

export default function Home() {
  return (
    <div className="lg:px-[40px] xl:px-[100px] 2xl:px-[240px]">
      <div className="py-6">
        <Header />
      </div>
      <div className="py-[24px]">
        <HomePage />
      </div>
    </div>
  );
}
