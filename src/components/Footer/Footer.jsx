import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={classes.footerDivider}></div>
      <div className={classes.footerContainer}>
        <div className='logo'>IEldin</div>
        <div className={classes.footerInfo}>
          <p>
            &copy; {new Date().getFullYear()} IEldin. Сайт создан с
            использованием феймворка <span>ReactJS</span>
          </p>
          <p>Автор: Елдин Илья Михайлович</p>
        </div>
      </div>
    </>
  );
}
