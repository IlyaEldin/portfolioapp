import classes from "./VitaminsInfo.module.css";

export default function VitaminsInfo() {
  return (
    <div className={classes.contain}>
      <h1 className={classes.title}>Витамины и минералы</h1>
      <p className={classes.subtitle}>Критически важные микронутриенты</p>

      <div className={classes.grid}>
        <div className={classes.card}>
          <div className={`${classes.icon} ${classes.rotateIcon}`}>🌞</div>
          <h3>Витамин D</h3>
        </div>

        <div className={classes.card}>
          <div className={`${classes.icon} ${classes.drippingIcon}`}>🩸</div>
          <h3>Железо</h3>
        </div>

        <div className={classes.card}>
          <div className={`${classes.icon} ${classes.protectionIcon}`}>🛡️</div>
          <h3>Витамин C</h3>
        </div>

        <div className={classes.card}>
          <div className={`${classes.icon} ${classes.scaleIcon}`}>💪</div>
          <h3>Кальций</h3>
        </div>
      </div>
    </div>
  );
}
