import classes from "./HabitsInfo.module.css";

export default function HabitsInfo() {
  return (
    <div className={classes.contain}>
      <div className={classes.header}>
        <h1 className={classes.title}>Полезные привычки</h1>
        <p className={classes.subtitle}>
          Маленькие ежедневные действия, которые приводят к большим изменениям
        </p>
      </div>

      <div className={classes.habitsGrid}>
        <div className={classes.habitCard}>
          <div className={classes.habitHeader}>
            <div className={classes.habitIcon}>⏰</div>
            <h3 className={classes.habitName}>Режим питания</h3>
          </div>
          <p className={classes.habitDescription}>
            Ешьте 3-4 раза в день в одно и то же время. Не пропускайте завтрак.
          </p>
        </div>

        <div className={classes.habitCard}>
          <div className={classes.habitHeader}>
            <div className={classes.habitIcon}>🥬</div>
            <h3 className={classes.habitName}>Овощи в каждый прием</h3>
          </div>
          <p className={classes.habitDescription}>
            Добавляйте свежие или приготовленные овощи к каждому основному
            приему пищи.
          </p>
        </div>

        <div className={classes.habitCard}>
          <div className={classes.habitHeader}>
            <div className={classes.habitIcon}>🚰</div>
            <h3 className={classes.habitName}>Вода перед едой</h3>
          </div>
          <p className={classes.habitDescription}>
            Выпивайте стакан воды за 15-20 минут до еды для контроля аппетита.
          </p>
        </div>

        <div className={classes.habitCard}>
          <div className={classes.habitHeader}>
            <div className={classes.habitIcon}>🧘</div>
            <h3 className={classes.habitName}>Осознанное питание</h3>
          </div>
          <p className={classes.habitDescription}>
            Ешьте без телефона и телевизора. Тщательно пережевывайте пищу.
          </p>
        </div>
      </div>
    </div>
  );
}
