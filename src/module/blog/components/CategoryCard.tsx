import { Text } from '@chakra-ui/react';
import { FC } from 'react';

interface CategoryCardProps {
  categoryData: {
    id: string;
    title: string;
    count: number;
  };
}

const CategoryCard: FC<CategoryCardProps> = ({ categoryData }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center border-b border-[#F1F5F7] cursor-pointer">
        <Text className="text-[18px] text-[#33404A]">{categoryData.title}</Text>
        <Text className="text-[18px] text-[#667F93]">{categoryData.count}</Text>
      </div>
    </div>
  );
};

export default CategoryCard;
