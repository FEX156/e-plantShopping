import { plantsArray } from "../data/data";

export default function PlantsList({ onhandleAddToCart }) {
  return (
    <div className="product-grid">
      {plantsArray.map((category, index) => (
        <div key={index}>
          {" "}
          <h1>
            <div>{category.category}</div>{" "}
          </h1>
          <div className="product-list">
            {" "}
            {category.plants.map((plant, plantIndex) => (
              <div className="product-card" key={plantIndex}>
                {" "}
                <img
                  className="product-image"
                  src={plant.image}
                  alt={plant.name}
                />
                <div className="product-title">{plant.name}</div>{" "}
                <div className="product-description">{plant.description}</div>{" "}
                <div className="product-cost">{plant.cost}</div>{" "}
                <button className="product-button" onClick={onhandleAddToCart}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
