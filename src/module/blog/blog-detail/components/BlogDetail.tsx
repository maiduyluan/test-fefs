import { Image, Text } from '@chakra-ui/react';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';

const BlogDetail = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <Text className="text-[#15AA7A] text-[20px] font-bold">
          1. Quy trình 5S là gì?
        </Text>
        <Text>
          Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản
          xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật
          Bản. 
        </Text>
        <Text>
          Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng
          bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5 chữ S đầu
          trong tiếng Nhật:
        </Text>
        <UnorderedList className="text-[#15AA7A]">
          <ListItem>
            Seiri <Text className="inline text-black">(Ngăn nắp)</Text>
          </ListItem>
          <ListItem>
            Seiso <Text className="inline text-black">(Sạch sẽ)</Text>
          </ListItem>
          <ListItem>
            Seiton <Text className="inline text-black">(Trật tự)</Text>
          </ListItem>
          <ListItem>
            Shitsuke <Text className="inline text-black">(Kỷ luật)</Text>
          </ListItem>
          <ListItem>
            Seiketsu <Text className="inline text-black">(Tiêu chuẩn hóa)</Text>
          </ListItem>
        </UnorderedList>
      </div>

      <div className="flex flex-col gap-4">
        <Text className="text-[#15AA7A] text-[20px] font-bold">
          2. Lợi ích quy trình 5S đem lại
        </Text>
        <Text>
          Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi
          bước của quy trình với mục đích cải tiến môi trường làm việc của doanh
          nghiệp.
        </Text>
        <Text>
          Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ
          tạo nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi làm
          việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị
          trí quy định và dễ dàng tìm kiếm khi cần thiết.
        </Text>
        <Text>
          Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen
          tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên một văn hóa
          doanh nghiệp tích cực.
        </Text>
        <Image src="/images/image-post2.svg" className="w-full"></Image>
        <span className="text-[16px] text-[#667F93] text-center">
          Tại sao doanh nghiệp cần quy trình 5S?
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <Text className="text-[#15AA7A] text-[20px] font-bold">
          3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
        </Text>
        <Text>
          Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên
          toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét
          tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn
          nên lựa chọn quy trình:
        </Text>
        <Text className="text-[#15AA7A]">
          3.1 Cải thiện rõ nét môi trường làm việc
        </Text>
        <Text>
          Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng
          hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu
          quả cho từng cá nhân trong doanh nghiệp.
        </Text>
        <Text className="text-[#15AA7A]">3.2 Tiết kiệm thời gian đáng kể</Text>
        <Text>
          Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời
          gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy
          móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự,
          mọi sự tìm kiếm đều trở nên dễ dàng. 
        </Text>
        <Text className="text-[#15AA7A]">3.3 Tăng năng suất làm việc</Text>
        <Text>
          Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng
          cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng
          các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng
          năng suất làm việc.
        </Text>
        <Text className="text-[#15AA7A]">3.4 Tiết kiệm chi phí</Text>
        <Text>
          Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử
          dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí
          vận hành đáng kể cho doanh nghiệp của mình.
        </Text>
        <Text className="text-[#15AA7A]">3.5 Tăng chất lượng sản phẩm</Text>
        <Text>
          5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó,
          giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không
          mong muốn.
        </Text>
        <Image src="/images/image-post3.svg" className="w-full"></Image>
        <span className="text-[16px] text-[#667F93] text-center">
          Quy trình 5s gồm các bước
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <Text className="text-[#15AA7A] text-[20px] font-bold">
          4. Quy trình 5S gồm các bước
        </Text>
        <Text>
          5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả
          làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ
          bản sau:
        </Text>
        <Text className="text-[#15AA7A]">4.1 Seiri (Ngăn nắp)</Text>
        <Text>
          Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm
          tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một
          không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian
        </Text>
        <Text className="text-[#15AA7A]">4.2 Seiton (Sắp xếp)</Text>
        <Text>
          Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài
          liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng
          chúng một cách dễ dàng.
        </Text>
        <Text className="text-[#15AA7A]">4.3 Seiso (Vệ sinh)</Text>
        <Text>
          Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong
          doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ
          sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và
          tăng cường sức khỏe cho mỗi nhân viên.
        </Text>
        <Text className="text-[#15AA7A]">4.4 Seiketsu (Tiêu chuẩn hóa)</Text>
        <Text>
          Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp
          đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các
          dụng cụ, thiết bị, tài liệu.
        </Text>
        <Text className="text-[#15AA7A]">4.5 Shitsuke (Kỷ luật)</Text>
        <Text>
          Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai
          trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S trong dài
          hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát
          chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo
          quy trình.
        </Text>
        <Image src="/images/image-post4.svg" className="w-full"></Image>
        <span className="text-[16px] text-[#667F93] text-center">
          Các bước thực hiện quy trình 5s
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <Text className="text-[#15AA7A] text-[20px] font-bold">
          5. Quy trình được thực hiện như sau:
        </Text>
        <Text>
          Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên
          toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét
          tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn
          nên lựa chọn quy trình:
        </Text>
        <Text className="text-[#15AA7A]">5.1 Giai đoạn chuẩn bị</Text>
        <Text>
          Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra
          điều hành và quản lý quá trình thực hiện quy trình 5S. Việc phân bổ cụ
          thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.
        </Text>
        <Text className="text-[#15AA7A]">5.2 Triển khai rộng rãi </Text>
        <Text>
          Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S
          cho tất cả mọi người trong doanh nghiệp nắm rõ kiến thức cũng như cách
          áp dụng như thế nào vào doanh nghiệp của bạn.
        </Text>
        <Text className="text-[#15AA7A]">
          5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
        </Text>
        <Text>
          Đây là bước có thể khiến mọi người không hào hứng trong các bước của
          quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không khí hào
          hứng cho từng cá nhân.
        </Text>
        <Text className="text-[#15AA7A]">
          5.4 Sàng lọc, sắp xếp và đánh giá
        </Text>
        <Text>
          Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh
          nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc thực hiện
          sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm
          kiếm sau này.
        </Text>
        <Text className="text-[#15AA7A]">5.5 Đánh giá</Text>
        <Text>
          Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình
          cải tiến và xem xét cần cải tiến phương diện nào hay không trong quá
          trình thực hiện quy trình 5S.
        </Text>
      </div>

      <div className="flex flex-col gap-4">
        <Text className="text-[#15AA7A] text-[20px] font-bold">
          6. Quy trình 5S có giống với Kaizen?
        </Text>
        <Text>
          Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay
          không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa
          chúng có mối quan hệ chặt chẽ với nhau.
        </Text>
        <div className="border-l-[3px] pt-3 pb-2 pr-4 pl-9 border-[#15AA7A]">
          <Text className="text-[20px]">
            Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong
            doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang
            tính liên tục và bền vững. 
          </Text>
        </div>
        <div className="border-l-[3px] pt-3 pb-2 pr-4 pl-9 border-[#15AA7A]">
          <Text className="text-[20px]">
            Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến
            trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt,
            tiêu chuẩn hóa và kỷ luật trong môi trường làm việc. 
          </Text>
        </div>
        <Text>
          Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc
          này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch
          sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong
          quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền
          tảng vững chắc cho các hoạt động cải tiến tiếp theo. 
        </Text>
      </div>

      <div className="flex flex-col gap-4">
        <Text className="text-[#15AA7A] text-[20px] font-bold">
          7. Đối tượng nào nên áp dụng 5S?
        </Text>
        <Text>
          Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở
          nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên,
          5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành
          chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.
        </Text>
        <Text>
          Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp,
          các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.
        </Text>
        <Image src="/images/image-post5.svg" className="w-full"></Image>
        <span className="text-[16px] text-[#667F93] text-center">
          Các yếu tố tạo nên thành công cho quy trình 5S
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <Text className="text-[#15AA7A] text-[20px] font-bold">
          8. Các yếu tố tạo nên thành công cho quy trình 5S
        </Text>
        <Text>
          Và những nhân tố quyết định đến quá trình thành công của quy trình
          nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:
        </Text>
        <UnorderedList>
          <ListItem>
            Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi
            đây yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng quy
            tắc này hay không.
          </ListItem>
          <ListItem>
            Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo
            đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch thực hiện
            triển khai 5S. 
          </ListItem>
          <ListItem>
            Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy
            động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích chung
            của tổ chức, của doanh nghiệp.
          </ListItem>
        </UnorderedList>
        <Text>
          Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là
          các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển
          khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ
          ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn
          phát triển, cải tiến vượt bậc trong tương lai.
        </Text>
      </div>
    </div>
  );
};

export default BlogDetail;
