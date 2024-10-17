import { useState, useEffect } from "react";
import { CardType } from "./Card";
import "../css/filters.css";

export interface ResType {
  products: CardType[];
}

interface FiltersProps {
  products: CardType[];
  onFilterChange: (type: string, value: string) => void;
}

export default function Filters({
  products = [],
  onFilterChange,
}: FiltersProps) {
  const [filters, setFilters] = useState({
    genders: [] as { name: string; count: number }[],
    brands: [] as { name: string; count: number }[],
    productsCount: 0,
  });

  const [activeFilter, setActiveFilter] = useState({ type: "all", value: "" });

  useEffect(() => {
    if (!products || products.length === 0) return;

    const productsCount = products.length;

    const genders = [...new Set(products.map((product) => product.gender))].map(
      (gender) => ({
        name: gender,
        count: products.filter((product) => product.gender === gender).length,
      })
    );

    const brands = [...new Set(products.map((product) => product.brand))].map(
      (brand) => ({
        name: brand,
        count: products.filter((product) => product.brand === brand).length,
      })
    );

    setFilters({ genders, brands, productsCount });
  }, [products]);

  const handleFilterClick = (type: string, value: string) => {
    setActiveFilter({ type, value });
    onFilterChange(type, value);
  };

  const isActive = (type: string, value: string) =>
    activeFilter.type === type && activeFilter.value === value;

  return (
    <div>
      <div className="border-bottom">
        <h4 className="py-2">Filter by:</h4>
        <a
          href="#"
          className={`list-group-item d-flex justify-content-between align-items-center text-capitalize pb-2 ${
            isActive("all", "") ? "active" : ""
          }`}
          onClick={() => handleFilterClick("all", "")}
        >
          Show all<span className="badge">{filters.productsCount}</span>
        </a>
      </div>

      <div className="border-bottom">
        <h5 className="py-2 fw-bold">Gender:</h5>
        <div id="bikesByGender">
          {filters.genders.map((gender) => (
            <a
              key={gender.name}
              href="#"
              className={`gender list-group-item d-flex justify-content-between align-items-center text-capitalize pb-2 ${
                isActive("gender", gender.name) ? "active" : ""
              }`}
              onClick={() => handleFilterClick("gender", gender.name)}
            >
              {gender.name.toLowerCase()}
              <span className="badge">{gender.count}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="border-bottom">
        <h5 className="py-2 fw-bold">Brand:</h5>
        <div id="bikesByBrands">
          {filters.brands.map((brand) => (
            <a
              key={brand.name}
              href="#"
              className={`brand list-group-item d-flex justify-content-between align-items-center text-capitalize pb-2 ${
                isActive("brand", brand.name) ? "active" : ""
              }`}
              onClick={() => handleFilterClick("brand", brand.name)}
            >
              {brand.name}
              <span className="badge">{brand.count}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
