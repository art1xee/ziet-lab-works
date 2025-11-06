import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    async function getCocktail() {
      setLoading(true);
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instruction,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          // собираем список ингредиентов (удаляем пустые)
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ].filter(Boolean);

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instruction,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching cocktail:", error);
        setLoading(false);
      }
    }

    getCocktail();
  }, [id]);

  if (loading) return <Loading />;
  if (!cocktail)
    return <h2 className="section-title">No cocktail data to display</h2>;

  const { name, image, info, category, glass, instruction, ingredients } =
    cocktail;

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        Back Home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">Category:</span> {category}
          </p>
          <p>
            <span className="drink-data">Info:</span> {info}
          </p>
          <p>
            <span className="drink-data">Glass:</span> {glass}
          </p>
          <p>
            <span className="drink-data">Instructions:</span> {instruction}
          </p>
          <p>
            <span className="drink-data">Ingredients:</span>{" "}
            {ingredients.join(", ")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
