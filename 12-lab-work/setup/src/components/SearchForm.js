import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // чтобы не перезагружалась страница при Enter
  };

  return (
    <section className="search">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-control">
          <label htmlFor="name">Search your favorite cocktail:</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
            placeholder="margarita, mojito..."
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
