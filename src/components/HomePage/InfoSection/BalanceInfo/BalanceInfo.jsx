import classes from "./BalanceInfo.module.css";

export default function BalanceInfo() {
  return (
    <div className={classes.contain}>
      <div className={classes.header}>
        <h1 className={classes.title}>Сбалансированное питание</h1>
        <p className={classes.subtitle}>
          Основа здоровья и хорошего самочувствия — правильное соотношение
          питательных веществ в вашем рационе
        </p>
      </div>

      <div className={classes.grid}>
        <div className={classes.card}>
          <h3 className={classes.cardTitle}>🥗 Белки</h3>
          <p className={classes.cardContent}>
            <span className={classes.highlight}>30% рациона</span>. Строительный
            материал для мышц, гормонов и ферментов. Источники: мясо, рыба,
            яйца, бобовые, орехи.
          </p>
        </div>

        <div className={classes.card}>
          <h3 className={classes.cardTitle}>🥑 Жиры</h3>
          <p className={classes.cardContent}>
            <span className={classes.highlight}>30% рациона</span>. Источник
            энергии, усвоение витаминов. Полезные жиры: авокадо, оливковое
            масло, рыба, орехи.
          </p>
        </div>

        <div className={classes.card}>
          <h3 className={classes.cardTitle}>🍚 Углеводы</h3>
          <p className={classes.cardContent}>
            <span className={classes.highlight}>40% рациона</span>. Основной
            источник энергии. Предпочтение сложным углеводам: крупы, овощи,
            цельнозерновые продукты.
          </p>
        </div>
      </div>

      <div className={classes.ratio}>
        <h3 className={classes.ratioTitle}>Идеальное соотношение БЖУ</h3>
        <div className={classes.ratioGrid}>
          <div className={classes.ratioItem}>
            <div className={classes.ratioValue}>30%</div>
            <div className={classes.ratioLabel}>Белки</div>
          </div>
          <div className={classes.ratioItem}>
            <div className={classes.ratioValue}>30%</div>
            <div className={classes.ratioLabel}>Жиры</div>
          </div>
          <div className={classes.ratioItem}>
            <div className={classes.ratioValue}>40%</div>
            <div className={classes.ratioLabel}>Углеводы</div>
          </div>
        </div>
      </div>
    </div>
  );
}
