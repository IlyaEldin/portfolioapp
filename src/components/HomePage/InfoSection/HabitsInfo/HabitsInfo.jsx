// HabitsInfo.jsx
import classes from "./HabitsInfo.module.css";

export default function HabitsInfo() {
  return (
    <div className={classes.contain}>
      <div className={classes.header}>
        <h1 className={classes.title}>Полезные привычки</h1>
        <p className={classes.subtitle}>
          Маленькие ежедневные действия, которые приводят к большим изменениям.
          Постройте здоровый образ жизни через простые и эффективные привычки
        </p>
      </div>

      <div className={classes.habitsGrid}>
        <div className={classes.habitCard}>
          <div className={classes.habitHeader}>
            <div className={classes.habitIcon}>⏰</div>
            <div className={classes.habitName}>Режим питания</div>
          </div>
          <p className={classes.habitDescription}>
            Ешьте 3-4 раза в день в одно и то же время. Не пропускайте завтрак —
            это запускает метаболизм на весь день.
          </p>
          <div className={classes.habitBenefits}>
            <div className={classes.benefitsTitle}>Преимущества:</div>
            <div className={classes.benefitsList}>
              • Стабильный уровень энергии
              <br />
              • Улучшенное пищеварение
              <br />• Контроль аппетита
            </div>
          </div>
        </div>

        <div className={classes.habitCard}>
          <div className={classes.habitHeader}>
            <div className={classes.habitIcon}>🥬</div>
            <div className={classes.habitName}>Овощи в каждый прием</div>
          </div>
          <p className={classes.habitDescription}>
            Добавляйте свежие или приготовленные овощи к каждому основному
            приему пищи. Стремитесь к 5 порциям в день.
          </p>
          <div className={classes.habitBenefits}>
            <div className={classes.benefitsTitle}>Преимущества:</div>
            <div className={classes.benefitsList}>
              • Витамины и клетчатка
              <br />
              • Контроль веса
              <br />• Здоровье ЖКТ
            </div>
          </div>
        </div>

        <div className={classes.habitCard}>
          <div className={classes.habitHeader}>
            <div className={classes.habitIcon}>🚰</div>
            <div className={classes.habitName}>Вода перед едой</div>
          </div>
          <p className={classes.habitDescription}>
            Выпивайте стакан воды за 15-20 минут до еды. Это помогает
            контролировать аппетит и улучшает пищеварение.
          </p>
          <div className={classes.habitBenefits}>
            <div className={classes.benefitsTitle}>Преимущества:</div>
            <div className={classes.benefitsList}>
              • Гидратация
              <br />
              • Контроль порций
              <br />• Лучшее усвоение
            </div>
          </div>
        </div>

        <div className={classes.habitCard}>
          <div className={classes.habitHeader}>
            <div className={classes.habitIcon}>🧘</div>
            <div className={classes.habitName}>Осознанное питание</div>
          </div>
          <p className={classes.habitDescription}>
            Ешьте без телефона и телевизора. Тщательно пережевывайте пищу.
            Наслаждайтесь каждым кусочком.
          </p>
          <div className={classes.habitBenefits}>
            <div className={classes.benefitsTitle}>Преимущества:</div>
            <div className={classes.benefitsList}>
              • Лучшее насыщение
              <br />
              • Улучшенное пищеварение
              <br />• Контроль переедания
            </div>
          </div>
        </div>
      </div>

      <div className={classes.challengeSection}>
        <h3 className={classes.challengeTitle}>21-дневный челлендж</h3>
        <p className={classes.challengeDescription}>
          На формирование привычки нужно 21 день. Начните с одной простой
          привычки и добавляйте новую каждую неделю
        </p>

        <div className={classes.challengeSteps}>
          <div className={classes.step}>
            <div className={classes.stepNumber}>1</div>
            <div className={classes.stepText}>
              Неделя
              <br />
              Вода перед едой
            </div>
          </div>
          <div className={classes.step}>
            <div className={classes.stepNumber}>2</div>
            <div className={classes.stepText}>
              Неделя
              <br />
              Овощи в обед
            </div>
          </div>
          <div className={classes.step}>
            <div className={classes.stepNumber}>3</div>
            <div className={classes.stepText}>
              Неделя
              <br />
              Режим питания
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
