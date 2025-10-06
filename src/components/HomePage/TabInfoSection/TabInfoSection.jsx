import classes from "./TabInfoSection.module.css";

export default function TabInfoSection({ typeInfo, changeInfo, sections }) {
  const btnActive = (nameSection) =>
    typeInfo === nameSection
      ? `${classes.btnInfoSection} ${classes.btnInfoSectionActive}`
      : classes.btnInfoSection;

  return (
    <div className={classes.tabSection}>
      <button
        className={btnActive(sections.vitamins)}
        onClick={() => changeInfo(sections.vitamins)}
      >
        Витамины
      </button>
      <button
        className={btnActive(sections.hydration)}
        onClick={() => changeInfo(sections.hydration)}
      >
        Гидратация
      </button>
      <button
        className={btnActive(sections.proteins)}
        onClick={() => changeInfo(sections.proteins)}
      >
        Белки
      </button>
      <button
        className={btnActive(sections.balance)}
        onClick={() => changeInfo(sections.balance)}
      >
        Баланс
      </button>
      <button
        className={btnActive(sections.habits)}
        onClick={() => changeInfo(sections.habits)}
      >
        Привычки
      </button>
    </div>
  );
}
