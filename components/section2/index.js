import Image from "next/image";

import styles from "./index.module.scss";

const data = [
  {
    id: 1,
    title: "Data Protection",
    name: "Eos tota dicunt democritum no. Has natum gubergren ne. Est viris soleat sadipscing cu.",
    image: "/images/shopping-cart.png",
  },
  {
    id: 2,
    title: "Data Protection",
    name: "Eos tota dicunt democritum no. Has natum gubergren ne. Est viris soleat sadipscing cu.",
    image: "/images/shopping-cart.png",
  },
  {
    id: 3,
    title: "Data Protection",
    name: "Ne nam phaedrum consequat, adhuc aliquid ea pri, eum eligendi incorrupte referrentur in.",
    image: "/images/shield.png",
  },
  {
    id: 4,
    title: "Invoice Generator",
    name: "Assum suavitate ea vel, vero erat doming cu cum. Zril ornatus sea cu. Pro ex integre pertinax. ",
    image: "/images/tag.png",
  },
];

function Section1() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Thực trạng tồn tại trên thị trường</div>
      <ul className={styles.list}>
        {data.map((item) => (
          <li className={styles.item} key={item.id}>
            <Image src={item.image} alt="Image" width={40} height={40} />
            <div>{item.title}</div>
            <div>{item.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Section1;
