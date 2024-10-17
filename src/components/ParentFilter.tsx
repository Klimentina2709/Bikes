import { useState, useEffect } from "react";
import Filters, { ResType } from "./Filters";
import Card, { CardType } from "./Card";

export default function ProductPage() {
  const [products, setProducts] = useState<CardType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<CardType[]>([]);
  const [filters, setFilters] = useState({
    gender: "",
    brand: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://challenges.brainster.tech/ajax_data/data.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: ResType = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (filters.gender) {
      filtered = filtered.filter(
        (product) => product.gender === filters.gender
      );
    }

    if (filters.brand) {
      filtered = filtered.filter((product) => product.brand === filters.brand);
    }

    setFilteredProducts(filtered);
  }, [filters, products]);

  const handleFilterChange = (type: string, value: string) => {
    if (type === "gender") {
      setFilters({ ...filters, gender: value, brand: "" });
    } else if (type === "brand") {
      setFilters({ ...filters, gender: "", brand: value });
    } else if (type === "all") {
      setFilters({ gender: "", brand: "" });
    }
  };

  return (
    <main className="container bg-white ">
      <div className="border-bottom border-top mb-5">
        <h1 className="mb-3 mt-4">Bikes</h1>
      </div>
      <div className="row">
        <div className="col-md-3">
          <Filters onFilterChange={handleFilterChange} products={products} />
        </div>
        <div className="col-md-9">
          <Card cards={filteredProducts} />
        </div>
      </div>
    </main>
  );
}
