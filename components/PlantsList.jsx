import { plantsArray } from "../data/data";
import { addItem } from "../redux/CartSlice";
import { useDispatch } from "react-redux";

export default function PlantsList() {
  const dispatch = useDispatch();

  function handleAddToCart(text) {
    dispatch(addItem(text));
  }
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
            {category.plants.map((plant, id) => (
              <div className="product-card" key={id}>
                {" "}
                <img
                  className="product-image"
                  src={plant.image}
                  alt={plant.name}
                />
                <div className="product-title">{plant.name}</div>{" "}
                <div className="product-description">{plant.description}</div>{" "}
                <div className="product-cost">{plant.cost}</div>{" "}
                <button
                  className="product-button"
                  onClick={() =>
                    handleAddToCart({
                      name: plant.name,
                      image: plant.image,
                      cost: plant.cost,
                      id: plant.id,
                    })
                  }
                >
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
