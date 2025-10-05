import axios from "axios";
import { useState } from "react";

export default function ApiPage() {
  const [isLoading, setIsLoading] = useState(false);

  const getCBApi = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get(URL, { params: {} });
      return result.data;
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? "Загрузка..." : "Полученная информация:"}
      {getCBApi}
    </div>
  );
}
