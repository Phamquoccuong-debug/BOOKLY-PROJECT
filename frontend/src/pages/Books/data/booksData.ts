import type { Book } from '../../../types/book'

export const SAMPLE_BOOKS: Book[] = [
  {
    id: 'midnight-library',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    category: 'Fiction & Literature',
    categoryVi: 'Tiểu thuyết văn học',
    price: 18.0,
    priceFormatted: '$18.00',
    label: 'BESTSELLER',
    labelColor: {
      bg: 'bg-[#F4775B]/15',
      text: 'text-[#F4775B]',
      border: 'border-[#F4775B]/30',
    },
    description:
      'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?',
    descriptionVi:
      'Nằm giữa lằn ranh sự sống và cái chết là một thư viện vô tận, nơi mỗi cuốn sách mở ra cơ hội sống thử một cuộc đời khác mà bạn từng có thể lựa chọn. Một câu chuyện lay động về sự thứ tha, lòng can đảm và hành trình tìm lại ý nghĩa của chính mình.',
    coverBg: 'bg-[#1E293B] text-white',
    coverAccent: '#F5D66B',
  },
  {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Personal Growth',
    categoryVi: 'Phát triển bản thân',
    price: 21.0,
    priceFormatted: '$21.00',
    label: 'POPULAR',
    labelColor: {
      bg: 'bg-[#F5D66B]/30',
      text: 'text-[#8A5F00]',
      border: 'border-[#F5D66B]',
    },
    description:
      'No matter your goals, Atomic Habits offers a proven framework for improving every day. James Clear reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.',
    descriptionVi:
      'Dù mục tiêu của bạn là gì, cuốn sách mang đến phương pháp đột phá đã được kiểm chứng để tiến bộ 1% mỗi ngày. Thay đổi tí hon, hiệu quả bất ngờ từ việc làm chủ những hành vi nhỏ nhất trong cuộc sống thường nhật.',
    coverBg: 'bg-[#FEFCE8] text-[#25272B]',
    coverAccent: '#F4775B',
  },
  {
    id: 'psychology-of-money',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    category: 'Business & Finance',
    categoryVi: 'Kinh doanh & Tài chính',
    price: 19.0,
    priceFormatted: '$19.00',
    label: "EDITOR'S PICK",
    labelColor: {
      bg: 'bg-[#3457E5]/15',
      text: 'text-[#3457E5]',
      border: 'border-[#3457E5]/30',
    },
    description:
      'Doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people. Morgan Housel shares 19 short stories exploring the strange ways people think about wealth, greed, and happiness.',
    descriptionVi:
      'Quản lý tiền bạc thành công không hoàn toàn phụ thuộc vào việc bạn thông minh ra sao, mà là cách bạn hành xử. Tuyển tập 19 mẩu chuyện sâu sắc giải mã tâm lý học đằng sau sự thịnh vượng và hạnh phúc đích thực.',
    coverBg: 'bg-[#0F172A] text-white',
    coverAccent: '#B9DDCC',
  },
  {
    id: 'clean-code',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    category: 'Science & Technology',
    categoryVi: 'Khoa học & Công nghệ',
    price: 35.0,
    priceFormatted: '$35.00',
    label: 'FOR DEVELOPERS',
    labelColor: {
      bg: 'bg-[#B9DDCC]/35',
      text: 'text-[#1E4D38]',
      border: 'border-[#B9DDCC]',
    },
    description:
      'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Master craftsman Robert C. Martin presents a revolutionary paradigm to help software engineers write clean code on the fly.',
    descriptionVi:
      'Ngay cả mã nguồn tệ vẫn có thể chạy được, nhưng chính mã nguồn lộn xộn sẽ bóp nghẹt sự phát triển của cả dự án. Cẩm nang kinh điển của "Uncle Bob" giúp mọi kỹ sư phần mềm tạo nên những dòng code trong sáng, chuẩn mực và dễ bảo trì.',
    coverBg: 'bg-[#2A3F6D] text-white',
    coverAccent: '#F5D66B',
  },
  {
    id: 'project-hail-mary',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    category: 'Fiction & Literature',
    categoryVi: 'Tiểu thuyết khoa học',
    price: 22.0,
    priceFormatted: '$22.00',
    label: 'NEW ARRIVAL',
    labelColor: {
      bg: 'bg-[#3457E5]/10',
      text: 'text-[#3457E5]',
      border: 'border-[#3457E5]/30',
    },
    description:
      'Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. Except that right now, he doesn’t know that. He can’t even remember his own name, let alone the nature of his assignment or how to complete it.',
    descriptionVi:
      'Ryland Grace là người sống sót duy nhất trong một phi vụ cứu rỗi nhân loại ngoài không gian. Vấn đề là anh vừa thức giấc khỏi cơn hôn mê sâu và thậm chí còn không nhớ nổi tên mình là gì. Một thiên tiểu thuyết khoa học giả tưởng nghẹt thở và đầy lạc quan.',
    coverBg: 'bg-[#0B132B] text-white',
    coverAccent: '#F5D66B',
  },
  {
    id: 'the-creative-act',
    title: 'The Creative Act',
    author: 'Rick Rubin',
    category: 'Personal Growth',
    categoryVi: 'Phát triển bản thân',
    price: 24.0,
    priceFormatted: '$24.00',
    label: 'NEW ARRIVAL',
    labelColor: {
      bg: 'bg-[#3457E5]/10',
      text: 'text-[#3457E5]',
      border: 'border-[#3457E5]/30',
    },
    description:
      'From the legendary music producer comes a beautiful, generous work of wisdom that illuminates the path of the artist as a road we all can travel. Creativity is not about output; it is a way of living and paying attention to the world around us.',
    descriptionVi:
      'Từ nhà sản xuất âm nhạc huyền thoại đoạt giải Grammy, tác phẩm là nguồn cảm hứng triết học tuyệt vời về cách nuôi dưỡng sự sáng tạo như một lối sống và cách lắng nghe thế giới đầy tinh tế.',
    coverBg: 'bg-[#EDE7DD] text-[#25272B]',
    coverAccent: '#F4775B',
  },
  {
    id: 'educated',
    title: 'Educated',
    author: 'Tara Westover',
    category: 'Fiction & Literature',
    categoryVi: 'Hồi ký & Văn học',
    price: 20.0,
    priceFormatted: '$20.00',
    label: 'NEW ARRIVAL',
    labelColor: {
      bg: 'bg-[#3457E5]/10',
      text: 'text-[#3457E5]',
      border: 'border-[#3457E5]/30',
    },
    description:
      'An unforgettable memoir about a young girl who, kept out of school and isolated from society by her survivalist family in rural Idaho, leaves home at seventeen and teaches herself mathematics and grammar to enter university.',
    descriptionVi:
      'Cuốn hồi ký chấn động về một cô bé lớn lên trong sự cô lập tuyệt đối với trường lớp bởi gia đình cuồng tín ở vùng núi Idaho, trước khi tự học để bước vào cổng trường đại học và chạm đến học vị tiến sĩ tại Cambridge.',
    coverBg: 'bg-[#7C2D12] text-white',
    coverAccent: '#FFF8EF',
  },
  {
    id: 'designing-data-intensive-applications',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    category: 'Science & Technology',
    categoryVi: 'Khoa học máy tính',
    price: 42.0,
    priceFormatted: '$42.00',
    label: 'NEW ARRIVAL',
    labelColor: {
      bg: 'bg-[#3457E5]/10',
      text: 'text-[#3457E5]',
      border: 'border-[#3457E5]/30',
    },
    description:
      'Data is at the center of many challenges in system design today. This indispensable guide helps software architects and engineers navigate the diverse landscape of databases, stream processing, distributed consensus, and scalable architectures.',
    descriptionVi:
      'Bản đồ dẫn đường không thể thiếu cho bất kỳ kỹ sư hệ thống nào: thấu suốt các nguyên lý nền tảng của hệ phân tán, lưu trữ dữ liệu, mô hình nhất quán và thiết kế kiến trúc chịu tải quy mô lớn.',
    coverBg: 'bg-[#1E3A8A] text-white',
    coverAccent: '#B9DDCC',
  },
  {
    id: 'zero-to-one',
    title: 'Zero to One',
    author: 'Peter Thiel',
    category: 'Business & Finance',
    categoryVi: 'Kinh doanh & Khởi nghiệp',
    price: 23.0,
    priceFormatted: '$23.00',
    label: 'POPULAR',
    labelColor: {
      bg: 'bg-[#F5D66B]/30',
      text: 'text-[#8A5F00]',
      border: 'border-[#F5D66B]',
    },
    description:
      'The great secret of our time is that there are still uncharted frontiers to explore and new inventions to create. In Zero to One, legendary entrepreneur and investor Peter Thiel shows how we can find singular ways to create new things.',
    descriptionVi:
      'Bí quyết kinh doanh kinh điển từ nhà đồng sáng lập PayPal và nhà đầu tư đầu tiên của Facebook: làm thế nào để xây dựng những công ty kiến tạo giá trị độc bản từ con số 0 lên 1 thay vì sao chép lối mòn.',
    coverBg: 'bg-[#18181B] text-white',
    coverAccent: '#F4775B',
  },
  {
    id: 'deep-work',
    title: 'Deep Work',
    author: 'Cal Newport',
    category: 'Personal Growth',
    categoryVi: 'Kỹ năng tập trung',
    price: 17.5,
    priceFormatted: '$17.50',
    label: 'MUST-READ',
    labelColor: {
      bg: 'bg-[#B9DDCC]/35',
      text: 'text-[#1E4D38]',
      border: 'border-[#B9DDCC]',
    },
    description:
      'Deep work is the ability to focus without distraction on a cognitively demanding task. It is a skill that allows you to quickly master complicated information and produce better results in less time in an increasingly distracted world.',
    descriptionVi:
      'Kỹ năng tập trung sâu không phân tâm trong một thế giới tràn ngập tiếng ồn kỹ thuật số. Cuốn sách trang bị hệ thống quy tắc rèn luyện sự tập trung cao độ để bứt phá năng suất lao động trí tuệ.',
    coverBg: 'bg-[#334155] text-white',
    coverAccent: '#F5D66B',
  },
]
