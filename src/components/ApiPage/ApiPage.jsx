import classes from "./ApiPage.module.css";
import { ProductsSection } from "./ApiPageSection/ProductsSection";
import { AuthSection } from "./ApiPageSection/AuthSection";
import { UsersSection } from "./ApiPageSection/UsersSection";
import { SearchSection } from "./ApiPageSection/SearchSection";

export default function ApiPage() {
  return (
    <div className={classes.container}>
      <ProductsSection />
      <AuthSection />
      <UsersSection />
      <SearchSection />
    </div>
  );
}
