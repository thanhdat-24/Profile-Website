// src/config/siteConfig.js
const siteConfig = {
  fullName: "Cù Thành Đạt",
  title: "Lập trình viên Fullstack",
  dynamicTitles: [
    "Fullstack Developer",
    "Hardware Technician", 
    "Problem Solver",
    "Tech Enthusiast",
    "System Builder"
  ],
  about:
    "Tôi đam mê công nghệ, yêu thích xây dựng các website hiện đại và tối ưu trải nghiệm người dùng.",
  phone: "036 6602 046",
  email: "thanhdat@example.com",
  address: "Cần Thơ, Việt Nam",
  social: {
    github: "https://github.com/thanhdat-24",
    linkedin: "https://linkedin.com/in/thanhdat",
    facebook: "https://www.facebook.com/thanh.at.956719",
    zalo: {
      phone: "0366 602 046",
      qrCode: "/zalo-qr.jpg",
    }
  },
  cvLink: "/cv.pdf",
  avatar: "/avatar.jpg",
  skills: {
    programming: [
      { name: "HTML/CSS", level: 90, color: "#e34f26" },
      { name: "JavaScript", level: 85, color: "#f7df1e" },
      { name: "ReactJS", level: 80, color: "#61dafb" },
      { name: "TailwindCSS", level: 85, color: "#06b6d4" },
      { name: "NodeJS", level: 75, color: "#339933" },
      { name: "Git", level: 80, color: "#f05032" },
      { name: "Database", level: 70, color: "#336791" }
    ],
    technical: [
      {
        category: "Phần cứng & Bảo trì",
        items: [
          {
            name: "Thiết kế & Lắp đặt PC",
            description: "Tư vấn, thiết kế cấu hình và lắp đặt máy tính theo nhu cầu",
            level: 95
          },
          {
            name: "Bảo trì PC & Laptop",
            description: "Nâng cấp, sửa chữa và bảo dưỡng định kỳ cho máy tính",
            level: 90
          },
          {
            name: "Vệ sinh thiết bị",
            description: "Vệ sinh chuyên sâu PC, Laptop đảm bảo hiệu năng tối ưu",
            level: 95
          }
        ]
      },
      {
        category: "Camera & An ninh",
        items: [
          {
            name: "Camera WiFi",
            description: "Tư vấn, lắp đặt và cấu hình hệ thống camera an ninh",
            level: 85
          },
          {
            name: "Giải pháp an ninh",
            description: "Thiết kế hệ thống giám sát theo yêu cầu khách hàng",
            level: 80
          }
        ]
      }
    ]
  },
  projects: [
    {
      name: "Website Quản lý tài sản DNC",
      description: "Xây dựng hệ thống quản lý tài sản nội bộ cho doanh nghiệp.",
      link: "https://github.com/thanhdat-24/QLTS_DNC_WEBSITE.git"
    },
    {
      name: "Ứng dụng nhận diện hoa quả",
      description: "Tích hợp AI để phân loại hình ảnh trái cây thực tế.",
      link: "https://github.com/thanhdat-24/MODEL_MobileNetV2.git"
    }
  ]
};

export default siteConfig;