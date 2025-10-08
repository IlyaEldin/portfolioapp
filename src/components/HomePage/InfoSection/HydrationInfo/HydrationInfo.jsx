import { useEffect, useRef, useState } from "react";
import classes from "./HydrationInfo.module.css";

export default function HydrationInfo() {
  const waterRef = useRef();
  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (waterRef.current) {
        setWidth(waterRef.current.offsetWidth);
      }

      if (count * 55 >= width) {
        console.log(1);
        setCount(0);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [width, count]);

  return (
    <div className={classes.contain}>
      <div className={classes.header}>
        <h1 className={classes.title}>Водный баланс</h1>
        <p className={classes.subtitle}>
          Вода — основа жизни. Правильная гидратация улучшает метаболизм,
          состояние кожи и общее самочувствие
        </p>
      </div>

      <div ref={waterRef} className={classes.waterCard}>
        <div className={classes.waterIcon}>
          <p>{count ? "💧".repeat(count) : <span>Нажми на кнопку</span>}</p>
        </div>
      </div>

      <button
        className={classes.btn}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        ПОИГРАЙ С ВОДОЙ
      </button>
    </div>
  );
}
