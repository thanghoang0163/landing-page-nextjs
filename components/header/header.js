import Link from "next/link";

import styles from "./header.module.scss";

const navBar = [
  { id: 1, name: "Trang chủ" },
  { id: 2, name: "Giới thiệu" },
  { id: 3, name: "Thực trạng" },
  { id: 4, name: "Giải pháp" },
  { id: 5, name: "Quy trình" },
  { id: 6, name: "Đăng ký" },
];

function Header() {
  return (
    <div className={styles.header}>
      {navBar.map((item) => {
        return (
          <button className={styles.navItem} key={item.id}>
            {item.name}
          </button>
        );
      })}
    </div>
  );
}

export default Header;
