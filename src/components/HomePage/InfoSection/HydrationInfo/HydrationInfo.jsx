// HydrationInfo.jsx
import classes from "./HydrationInfo.module.css";

export default function HydrationInfo() {
  return (
    <div className={classes.contain}>
      <div className={classes.header}>
        <h1 className={classes.title}>Водный баланс</h1>
        <p className={classes.subtitle}>
          Вода — основа жизни. Правильная гидратация улучшает метаболизм,
          состояние кожи и общее самочувствие
        </p>
      </div>

      <div className={classes.waterCard}>
        <div className={classes.waterIcon}>💧</div>
        <div className={classes.waterAmount}>2-3 литра</div>
        <p className={classes.waterFormula}>Рекомендуемая норма в день</p>
        <p className={classes.tipContent}>
          <strong>Формула:</strong> 30-40 мл воды на 1 кг вашего веса
        </p>
      </div>

      <div className={classes.tipsGrid}>
        <div className={classes.tipCard}>
          <div className={classes.tipIcon}>⏰</div>
          <h3 className={classes.tipTitle}>Регулярность</h3>
          <p className={classes.tipContent}>
            Пейте небольшими порциями в течение дня. Стакан воды утром натощак
            запускает метаболизм.
          </p>
        </div>

        <div className={classes.tipCard}>
          <div className={classes.tipIcon}>🎯</div>
          <h3 className={classes.tipTitle}>Сигналы жажды</h3>
          <p className={classes.tipContent}>
            Не ждите чувства жажды — это уже признак обезвоживания. Сухость во
            рту, усталость, головная боль.
          </p>
        </div>

        <div className={classes.tipCard}>
          <div className={classes.tipIcon}>🍋</div>
          <h3 className={classes.tipTitle}>Качество воды</h3>
          <p className={classes.tipContent}>
            Добавляйте лимон, мяту, ягоды. Ограничьте сладкие напитки — они не
            заменяют чистую воду.
          </p>
        </div>
      </div>
    </div>
  );
}
