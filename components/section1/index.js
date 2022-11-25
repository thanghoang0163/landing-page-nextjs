import Image from "next/image";

import styles from "./index.module.scss";

function Section1() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div className={styles.logoText}>
          <span>LOGO</span>
          <span>x</span>
          <span>LOGO</span>
        </div>
        <div className={styles.tiniAppText}>Tini App</div>
        <div className={styles.miniAppText}>Tiki Mini - App Platform</div>
        <button className={styles.contactBtn}>Contact for consultation</button>
      </div>
      <Image src="/images/desktop.png" alt="Image" width={500} height={350} />
    </div>
  );
}

export default Section1;
