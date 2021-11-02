import { Product } from "../types";


export const listHeader = [
  {
    id: 1,
    name: "Trang chủ",
    path:'/'
  },
  {
    id: 2,
    name: "Sản phẩm",
    path:'/products'
  },
  {
    id: 3,
    name: "Giới thiệu",
    path:'/contact'
  },
];

export const listCart = [
  
  {
    cartItem: {
      id: "111",
      name: "Áo sơ aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      price: 100000000,
      // listImg?: string;
      listSize: ["XS", "M", "L"],
      stars: [1,2,3,4,5,5,3,4],
      description: "áo sơ mi",
      listImg: [
        "https://file.hstatic.net/1000304191/file/o1cn01lisdsq1dquofzgdfb___0-item_pic_f6dd9eadec7c42d4822054b5abe451fb_grande.jpg",
        "https://storage.googleapis.com/cdn.nhanh.vn/store/10103/artCT/54878/5_kieu_ao_so_mi_phai_manh_khong_the_thieu.jpg",
        "https://vn-live-05.slatic.net/p/7860b2d21b4da43ac301d28541d2224a.jpg_720x720q80.jpg_.webp",
      ],
      categorys: ["1", "2"],
      sale: 0.3,
      size:'X'
    },
    quantity: 1,
    id: "2",
  },  
];
export const listDanhmuc = [
  {
    id:0,
    name:'Tất cả sản phẩm',
    url:'/allProduct.jpg',
    path:'all'
  },
  {
    id: 1,
    name: "Thời trang nam",
    url: "/thoitrangnam.jpg",
    path:"thoi-trang-nam"
  },
  {
    id: 2,
    name: "Thời trang nữ",
    url: "/thoitrangnu.jpg",
    path:'thoi-trang-nu'

  },
  {
    id: 8,
    name: "Đồ đôi",
    url: "/dodoi.jpg",
    path:'do-doi'
  },
  {
    id: 3,
    name: "Áo Khoác",
    url: "/aokhoac.jpg",
    path:'ao-khoac'
  },
  {
    id: 4,
    name: "Áo sơ mi",
    url: "/aosomi.jpg",
    path:"ao-so-mi"
  },
  {
    id: 5,
    name: "Quần jeans",
    url: "/quanjean.jpg",
    path:"quan-jeans"
  },
  {
    id: 6,
    name: "Áo thun",
    url: "aothun.jpg",
    path:'ao-thun'
  },
  {
    id: 17,
    name: "Đang sale",
    url: "dangsale.jpg",
    path:'dang-sale'
  },
];
export const listCarousel = [
  {
    id: 1,
    url: "https://www.elle.vn/wp-content/uploads/2019/08/08/phong-cach-thoi-trang-fashionista-tuan-le-thoi-trang-seoul-1.jpg",
  },
  {
    id: 3,
    url: "https://naidecor.vn/wp-content/uploads/2019/06/sm00301_main-1-1190x800.jpg",
  },
];
export const listProducts:Product[] = [
  {
    id: "1",
    name: "Áo sơ mi",
    price: 100000000000,
    // listImg?: string;
    listSize: ["XS", "M", "L"],
    stars: [],
    description: "áo sơ mi",
    listImg: [
      "https://file.hstatic.net/1000304191/file/o1cn01lisdsq1dquofzgdfb___0-item_pic_f6dd9eadec7c42d4822054b5abe451fb_grande.jpg",
      "https://storage.googleapis.com/cdn.nhanh.vn/store/10103/artCT/54878/5_kieu_ao_so_mi_phai_manh_khong_the_thieu.jpg",
      "https://vn-live-05.slatic.net/p/7860b2d21b4da43ac301d28541d2224a.jpg_720x720q80.jpg_.webp",
    ],
    categorys: ["1", "2"],
    sale: 0.3,    
  },
  {
    id: "111",
    name: "Áo sơ mi",
    price: 1000000,
    // listImg?: string;
    listSize: ["XS", "M", "L"],
    stars: [1,2,3,4,5,5,3,4],
    description: "áo sơ mi",
    listImg: [
      "https://file.hstatic.net/1000304191/file/o1cn01lisdsq1dquofzgdfb___0-item_pic_f6dd9eadec7c42d4822054b5abe451fb_grande.jpg",
      "https://storage.googleapis.com/cdn.nhanh.vn/store/10103/artCT/54878/5_kieu_ao_so_mi_phai_manh_khong_the_thieu.jpg",
      "https://vn-live-05.slatic.net/p/7860b2d21b4da43ac301d28541d2224a.jpg_720x720q80.jpg_.webp",
    ],
    categorys: ["1", "2"],
    sale: 0.3,
  },
  {
    id: "12",
    name: "Áo sơ mi",
    price: 1000000,
    // listImg?: string;
    listSize: ["XS", "M", "L"],
   stars: [1,2,3,4,5,5,3,4],
    description: "áo sơ mi",
    listImg: [
      "https://file.hstatic.net/1000304191/file/o1cn01lisdsq1dquofzgdfb___0-item_pic_f6dd9eadec7c42d4822054b5abe451fb_grande.jpg",
      "https://storage.googleapis.com/cdn.nhanh.vn/store/10103/artCT/54878/5_kieu_ao_so_mi_phai_manh_khong_the_thieu.jpg",
      "https://vn-live-05.slatic.net/p/7860b2d21b4da43ac301d28541d2224a.jpg_720x720q80.jpg_.webp",
    ],
    categorys: ["1", "2"],
    sale: 0.3,
  },
  {
    id: "13",
    name: "Áo sơ mi",
    price: 1000000,
    // listImg?: string;
    listSize: ["XS", "M", "L"],
   stars: [1,2,3,4,5,5,3,4],
    description: "áo sơ mi",
    listImg: [
      "https://file.hstatic.net/1000304191/file/o1cn01lisdsq1dquofzgdfb___0-item_pic_f6dd9eadec7c42d4822054b5abe451fb_grande.jpg",
      "https://storage.googleapis.com/cdn.nhanh.vn/store/10103/artCT/54878/5_kieu_ao_so_mi_phai_manh_khong_the_thieu.jpg",
      "https://vn-live-05.slatic.net/p/7860b2d21b4da43ac301d28541d2224a.jpg_720x720q80.jpg_.webp",
    ],
    categorys: ["1", "2"],
    sale: 0.3,
  },
  {
    id: "2",
    name: "Áo sơ mi",
    price: 1000000,
    // listImg?: string;
    listSize: ["XS", "M", "L"],
   stars: [1,2,3,4,5,5,3,4],
    description: "áo sơ mi",
    listImg: [
      "https://file.hstatic.net/1000304191/file/o1cn01lisdsq1dquofzgdfb___0-item_pic_f6dd9eadec7c42d4822054b5abe451fb_grande.jpg",
      "https://storage.googleapis.com/cdn.nhanh.vn/store/10103/artCT/54878/5_kieu_ao_so_mi_phai_manh_khong_the_thieu.jpg",
      "https://vn-live-05.slatic.net/p/7860b2d21b4da43ac301d28541d2224a.jpg_720x720q80.jpg_.webp",
    ],
    categorys: ["1", "2"],
    sale: 0.3,
  },
  {
    id: "3",
    name: "Áo sơ mi",
    price: 1000000,
    // listImg?: string;
    listSize: ["XS", "M", "L"],
   stars: [1,2,3,4,5,5,3,4],
    description: "áo sơ mi",
    listImg: [
      "https://file.hstatic.net/1000304191/file/o1cn01lisdsq1dquofzgdfb___0-item_pic_f6dd9eadec7c42d4822054b5abe451fb_grande.jpg",
      "https://storage.googleapis.com/cdn.nhanh.vn/store/10103/artCT/54878/5_kieu_ao_so_mi_phai_manh_khong_the_thieu.jpg",
      "https://vn-live-05.slatic.net/p/7860b2d21b4da43ac301d28541d2224a.jpg_720x720q80.jpg_.webp",
    ],
    categorys: ["1", "2"],
    sale: 0.3,
  },
  {
    id: "14",
    name: "Áo sơ aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    price: 1000000,
    // listImg?: string;
    listSize: ["XS", "M", "L"],
   stars: [1,2,3,4,5,5,3,4],
    description: "áo sơ mi",
    listImg: [
      "https://file.hstatic.net/1000304191/file/o1cn01lisdsq1dquofzgdfb___0-item_pic_f6dd9eadec7c42d4822054b5abe451fb_grande.jpg",
      "https://storage.googleapis.com/cdn.nhanh.vn/store/10103/artCT/54878/5_kieu_ao_so_mi_phai_manh_khong_the_thieu.jpg",
      "https://vn-live-05.slatic.net/p/7860b2d21b4da43ac301d28541d2224a.jpg_720x720q80.jpg_.webp",
    ],
    categorys: ["1", "2"],
    sale: 0.3,
  },
  {
    id: "4",
    name: "Áo sơ mi",
    price: 1000000,
    // listImg?: string;
    listSize: ["XS", "M", "L"],
   stars: [1,2,3,4,5,5,3,4],
    description: "áo sơ mi",
    listImg: [
      "https://file.hstatic.net/1000304191/file/o1cn01lisdsq1dquofzgdfb___0-item_pic_f6dd9eadec7c42d4822054b5abe451fb_grande.jpg",
      "https://storage.googleapis.com/cdn.nhanh.vn/store/10103/artCT/54878/5_kieu_ao_so_mi_phai_manh_khong_the_thieu.jpg",
      "https://vn-live-05.slatic.net/p/7860b2d21b4da43ac301d28541d2224a.jpg_720x720q80.jpg_.webp",
    ],
    categorys: ["1", "2"],
    sale: 0.3,
  },
  {
    id: "5",
    name: "Áo sơ mi",
    price: 1000000,
    // listImg?: string;
    listSize: ["XS", "M", "L"],
   stars: [1,2,3,4,5,5,3,4],
    description: "áo sơ mi",
    listImg: [
      "https://file.hstatic.net/1000304191/file/o1cn01lisdsq1dquofzgdfb___0-item_pic_f6dd9eadec7c42d4822054b5abe451fb_grande.jpg",
      "https://storage.googleapis.com/cdn.nhanh.vn/store/10103/artCT/54878/5_kieu_ao_so_mi_phai_manh_khong_the_thieu.jpg",
      "https://vn-live-05.slatic.net/p/7860b2d21b4da43ac301d28541d2224a.jpg_720x720q80.jpg_.webp",
    ],
    categorys: ["1", "2"],
    sale: 0.3,
  },
  {
    id: "6",
    name: "Áo sơ mi",
    price: 1000000,
    // listImg?: string;
    listSize: ["XS", "M", "L"],
   stars: [1,2,3,4,5,5,3,4],
    description: "áo sơ mi",
    listImg: [
      "https://file.hstatic.net/1000304191/file/o1cn01lisdsq1dquofzgdfb___0-item_pic_f6dd9eadec7c42d4822054b5abe451fb_grande.jpg",
      "https://storage.googleapis.com/cdn.nhanh.vn/store/10103/artCT/54878/5_kieu_ao_so_mi_phai_manh_khong_the_thieu.jpg",
      "https://vn-live-05.slatic.net/p/7860b2d21b4da43ac301d28541d2224a.jpg_720x720q80.jpg_.webp",
    ],
    categorys: ["1", "2"],
    sale: 0.3,
  },
  {
    id: "7",
    name: "Áo sơ mi",
    price: 1000000,
    // listImg?: string;
    listSize: ["XS", "M", "L"],
   stars: [1,2,3,4,5,5,3,4],
    description: "áo sơ mi",
    listImg: [
      "https://file.hstatic.net/1000304191/file/o1cn01lisdsq1dquofzgdfb___0-item_pic_f6dd9eadec7c42d4822054b5abe451fb_grande.jpg",
      "https://storage.googleapis.com/cdn.nhanh.vn/store/10103/artCT/54878/5_kieu_ao_so_mi_phai_manh_khong_the_thieu.jpg",
      "https://vn-live-05.slatic.net/p/7860b2d21b4da43ac301d28541d2224a.jpg_720x720q80.jpg_.webp",
    ],
    categorys: ["1", "2"],
    sale: 0.3,
  },
];
