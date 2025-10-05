import classes from "./HomePage.module.css";
import ProductSliderSwiper from "../ProductSliderSwipe/ProductSliderSwiper";
import { TOPPRODUCTS } from "../../data/products.js";
import { useState } from "react";
import TabInfoSection from "./TabInfoSection/TabInfoSection";
import BalanceInfo from "./InfoSection/BalanceInfo/BalanceInfo.jsx";
import HydrationInfo from "./InfoSection/HydrationInfo/HydrationInfo.jsx";
import ProteinsInfo from "./InfoSection/ProteinsInfo/ProteinsInfo.jsx";
import VitaminsInfo from "./InfoSection/VitaminsInfo/VitaminsInfo.jsx";
import HabitsInfo from "./InfoSection/HabitsInfo/HabitsInfo.jsx";

export default function HomePage() {
  const [typeInfo, setTypeInfo] = useState("balance");

  const sections = {
    balance: "balance", // Сбалансированное питание
    hydration: "hydration", // Водный баланс
    proteins: "proteins", // Белки и их роль
    vitamins: "vitamins", // Витамины и минералы
    habits: "habits", // Полезные привычки
  };

  const renderSection = () => {
    switch (typeInfo) {
      case sections.balance:
        return <BalanceInfo />;

      case sections.hydration:
        return <HydrationInfo />;

      case sections.proteins:
        return <ProteinsInfo />;

      case sections.vitamins:
        return <VitaminsInfo />;

      case sections.habits:
        return <HabitsInfo />;

      default:
        return <div>Выберите раздел о питании</div>;
    }
  };

  const changeInfo = (type) => {
    setTypeInfo(type);
  };

  return (
    <div className={classes.contain}>
      <section className={classes.popularProductSection}>
        <h1>Популярные товары</h1>
        <div className={classes.containerProductCard}>
          <ProductSliderSwiper products={TOPPRODUCTS} />
        </div>
      </section>

      <section className={classes.infoSection}>
        <h1>Полезные статьи о питании</h1>
        <TabInfoSection
          typeInfo={typeInfo}
          changeInfo={changeInfo}
          sections={sections}
        />
        <div className={classes.infoSectionContent}>{renderSection()}</div>
      </section>
    </div>
  );
}
