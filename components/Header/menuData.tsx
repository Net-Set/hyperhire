import { Menu } from "@/types/menu";

const menuData: Menu[] = [
 
  {
    id: 1,
    title: "채용",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "해외 개발자 원격 채용",
        newTab: false,
        path: "/#",
      },
      {
        id: 34,
        title: "외국인 원격 채용 (비개발 직군)",
        newTab: false,
        path: "/#",
      },
      {
        id: 35,
        title: "한국어 가능 외국인 채용",
        newTab: false,
        path: "/#",
      },
    ],
  },

  {
    id: 2,
    title: "해외 개발자 활용 서비스",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
