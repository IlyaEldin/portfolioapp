// ProteinsInfo.jsx
import classes from "./ProteinsInfo.module.css";

export default function ProteinsInfo() {
  return (
    <div className={classes.contain}>
      <div className={classes.header}>
        <h1 className={classes.title}>Белки</h1>
        <p className={classes.subtitle}>
          Фундаментальный строительный материал организма. Отвечают за рост,
          восстановление и все жизненно важные процессы
        </p>
      </div>

      <div className={classes.importanceGrid}>
        <div className={classes.importanceCard}>
          <div className={classes.importanceIcon}>💪</div>
          <h3 className={classes.importanceTitle}>Мышцы и ткани</h3>
          <p className={classes.importanceContent}>
            Строительный материал для мышц, органов, кожи, волос и ногтей
          </p>
        </div>

        <div className={classes.importanceCard}>
          <div className={classes.importanceIcon}>🛡️</div>
          <h3 className={classes.importanceTitle}>Иммунитет</h3>
          <p className={classes.importanceContent}>
            Антитела — это белки, защищающие организм от инфекций
          </p>
        </div>

        <div className={classes.importanceCard}>
          <div className={classes.importanceIcon}>⚡</div>
          <h3 className={classes.importanceTitle}>Энергия и метаболизм</h3>
          <p className={classes.importanceContent}>
            Ферменты и гормоны регулируют все процессы в организме
          </p>
        </div>
      </div>

      <div className={classes.sourcesSection}>
        <h3 className={classes.sourcesTitle}>Лучшие источники белка</h3>
        <div className={classes.sourcesGrid}>
          <div className={classes.sourceItem}>
            <div className={classes.sourceIcon}>🍗</div>
            <div className={classes.sourceName}>Курица</div>
            <div className={classes.sourceType}>Животный</div>
          </div>
          <div className={classes.sourceItem}>
            <div className={classes.sourceIcon}>🐟</div>
            <div className={classes.sourceName}>Лосось</div>
            <div className={classes.sourceType}>Животный</div>
          </div>
          <div className={classes.sourceItem}>
            <div className={classes.sourceIcon}>🥚</div>
            <div className={classes.sourceName}>Яйца</div>
            <div className={classes.sourceType}>Животный</div>
          </div>
          <div className={classes.sourceItem}>
            <div className={classes.sourceIcon}>🥛</div>
            <div className={classes.sourceName}>Творог</div>
            <div className={classes.sourceType}>Животный</div>
          </div>
          <div className={classes.sourceItem}>
            <div className={classes.sourceIcon}>🫘</div>
            <div className={classes.sourceName}>Чечевица</div>
            <div className={classes.sourceType}>Растительный</div>
          </div>
          <div className={classes.sourceItem}>
            <div className={classes.sourceIcon}>🌰</div>
            <div className={classes.sourceName}>Миндаль</div>
            <div className={classes.sourceType}>Растительный</div>
          </div>
        </div>
      </div>
    </div>
  );
}
