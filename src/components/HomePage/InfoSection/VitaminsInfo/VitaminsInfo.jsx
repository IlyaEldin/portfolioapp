// VitaminsInfo.jsx
import classes from "./VitaminsInfo.module.css";

export default function VitaminsInfo() {
  return (
    <div className={classes.contain}>
      <div className={classes.header}>
        <h1 className={classes.title}>Витамины и минералы</h1>
        <p className={classes.subtitle}>
          Микронутриенты, которые запускают и регулируют все биохимические
          процессы в организме. Необходимы в небольших количествах, но
          критически важны
        </p>
      </div>

      <div className={classes.vitaminsGrid}>
        <div className={classes.vitaminCard}>
          <div className={classes.vitaminHeader}>
            <div className={classes.vitaminIcon}>🌞</div>
            <div className={classes.vitaminName}>Витамин D</div>
          </div>
          <p className={classes.vitaminFunction}>
            Укрепляет кости, поддерживает иммунитет, улучшает настроение
          </p>
          <div className={classes.vitaminSources}>
            <span className={classes.sourceTag}>Солнце</span>
            <span className={classes.sourceTag}>Жирная рыба</span>
            <span className={classes.sourceTag}>Яйца</span>
          </div>
        </div>

        <div className={classes.vitaminCard}>
          <div className={classes.vitaminHeader}>
            <div className={classes.vitaminIcon}>🩸</div>
            <div className={classes.vitaminName}>Железо</div>
          </div>
          <p className={classes.vitaminFunction}>
            Переносит кислород, предотвращает анемию, поддерживает энергию
          </p>
          <div className={classes.vitaminSources}>
            <span className={classes.sourceTag}>Красное мясо</span>
            <span className={classes.sourceTag}>Шпинат</span>
            <span className={classes.sourceTag}>Чечевица</span>
          </div>
        </div>

        <div className={classes.vitaminCard}>
          <div className={classes.vitaminHeader}>
            <div className={classes.vitaminIcon}>🛡️</div>
            <div className={classes.vitaminName}>Витамин C</div>
          </div>
          <p className={classes.vitaminFunction}>
            Мощный антиоксидант, укрепляет иммунитет, улучшает состояние кожи
          </p>
          <div className={classes.vitaminSources}>
            <span className={classes.sourceTag}>Цитрусы</span>
            <span className={classes.sourceTag}>Киви</span>
            <span className={classes.sourceTag}>Болгарский перец</span>
          </div>
        </div>

        <div className={classes.vitaminCard}>
          <div className={classes.vitaminHeader}>
            <div className={classes.vitaminIcon}>💪</div>
            <div className={classes.vitaminName}>Кальций</div>
          </div>
          <p className={classes.vitaminFunction}>
            Укрепляет кости и зубы, поддерживает работу нервной системы
          </p>
          <div className={classes.vitaminSources}>
            <span className={classes.sourceTag}>Молочные продукты</span>
            <span className={classes.sourceTag}>Брокколи</span>
            <span className={classes.sourceTag}>Миндаль</span>
          </div>
        </div>
      </div>

      <div className={classes.tipsSection}>
        <h3 className={classes.tipsTitle}>Как получать больше витаминов</h3>

        <div className={classes.tipItem}>
          <div className={classes.tipIcon}>🥗</div>
          <p className={classes.tipContent}>
            <strong>Разнообразие в питании</strong> — каждый день употребляйте
            овощи и фрукты разных цветов
          </p>
        </div>

        <div className={classes.tipItem}>
          <div className={classes.tipIcon}>👨‍🍳</div>
          <p className={classes.tipContent}>
            <strong>Правильное приготовление</strong> — готовьте на пару или
            запекайте, чтобы сохранить витамины
          </p>
        </div>

        <div className={classes.tipItem}>
          <div className={classes.tipIcon}>🌱</div>
          <p className={classes.tipContent}>
            <strong>Сезонные продукты</strong> — местные сезонные овощи и фрукты
            содержат больше питательных веществ
          </p>
        </div>
      </div>
    </div>
  );
}
