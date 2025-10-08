import classes from "./ProteinsInfo.module.css";

export default function ProteinsInfo() {
  return (
    <div className={classes.contain}>
      <h1 className={classes.title}>Белки</h1>
      <p className={classes.subtitle}>Строительный материал организма</p>

      <div className={classes.grid}>
        <div className={classes.card}>
          <div className={classes.icon}>💪</div>
          <h3>Мышцы</h3>
          <p>Рост и восстановление</p>
        </div>

        <div className={classes.card}>
          <div className={classes.icon}>🛡️</div>
          <h3>Иммунитет</h3>
          <p>Защита от инфекций</p>
        </div>

        <div className={classes.card}>
          <div className={classes.icon}>⚡</div>
          <h3>Энергия</h3>
          <p>Ферменты и гормоны</p>
        </div>
      </div>

      <div className={classes.sources}>
        <h3>Источники</h3>
        <div className={classes.sourceGrid}>
          <div className={classes.source}>
            <div>🍗</div>
            <div>Курица</div>
          </div>
          <div className={classes.source}>
            <div>🐟</div>
            <div>Рыба</div>
          </div>
          <div className={classes.source}>
            <div>🥚</div>
            <div>Яйца</div>
          </div>
          <div className={classes.source}>
            <div>🌰</div>
            <div>Миндаль</div>
          </div>
        </div>
      </div>
    </div>
  );
}
