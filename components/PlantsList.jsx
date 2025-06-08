import { plantsArray } from "../data/data";
import { addItem } from "../redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function PlantsList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  function handleAddToCart(plant) {
    dispatch(addItem(plant));
  }

  return (
    <div className="product-grid">
      {plantsArray.map((category, index) => (
        <div key={index}>
          <h1>
            <div>{category.category}</div>
          </h1>
          <div className="product-list">
            {category.plants.map((plant, id) => {
              const isInCart = cartItems.some((item) => item.id === plant.id);

              return (
                <div className="product-card" key={id}>
                  <img
                    className="product-image"
                    src={plant.image}
                    alt={plant.name}
                  />
                  <div className="product-title">{plant.name}</div>
                  <div className="product-description">{plant.description}</div>
                  <div className="product-cost">{plant.cost}</div>
                  <button
                    className={`product-button ${
                      isInCart ? "disabled-button" : ""
                    }`}
                    onClick={() =>
                      handleAddToCart({
                        name: plant.name,
                        image: plant.image,
                        cost: Number(plant.cost.replace("$", "")),
                        id: plant.id,
                      })
                    }
                    disabled={isInCart}
                  >
                    {isInCart ? "Already on Cart" : "Add to Cart"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
