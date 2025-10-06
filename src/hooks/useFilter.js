import { useCallback, useState } from "react";
import { PRODUCTS } from "../data/products";

export default function useFilter() {
    const [searchValue, setSearchValue] = useState("");
    const [priceValue, setPriceValue] = useState(["", ""]);
    const [category, setCategory] = useState("Все категории");
    const [productsVisible, setProductVisible] = useState(PRODUCTS);
    const MAX_PRiCE = 1000;

    const handleFilterApply = useCallback((filterCategory = category) => {
        console.log(priceValue);
        let priceValueNew = "";

        if (priceValue[0] !== "" && priceValue[1] === "") {
            priceValueNew = MAX_PRiCE;
        } else {
            priceValueNew = priceValue[1];
        }

        setProductVisible(
            PRODUCTS.filter(
                (product) =>
                    (product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                        searchValue === "") &&
                    (filterCategory === product.category || filterCategory === "Все категории") &&
                    (product.price < priceValueNew || priceValueNew === "") &&
                    (product.price > priceValue[0] || priceValue[0] === "")
            )
        );
    }, [searchValue, priceValue, category])

    const handleFilterReset = useCallback(() => {
        setSearchValue("");
        setPriceValue(["", ""]);
        setCategory("Все категории");
        setProductVisible(PRODUCTS);
    }, []);

    const handleInitPrice = useCallback((event, type) => {
        const newValue = event.target.value;

        // проверка на стирание
        if (newValue === "") {
            setPriceValue((prev) => (type === "+" ? [prev[0], ""] : ["", prev[1]]));
            return;
        }

        const numericValue = Number(newValue);
        setPriceValue((prev) =>
            !isNaN(numericValue) && isFinite(numericValue)
                ? type === "+"
                    ? [prev[0], numericValue]
                    : [numericValue, prev[1]]
                : prev
        );
    }, [])


    return { searchValue, priceValue, category, handleInitPrice, handleFilterReset, handleFilterApply, productsVisible, setSearchValue, setCategory }

}