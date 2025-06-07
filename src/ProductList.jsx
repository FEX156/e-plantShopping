import { useState } from "react";
import "./ProductList.css";
import CartItem from "./CartItem";
import * as style from "../style/styleObject";

import Cart from "../components/Cart";
import Tag from "../components/Tag";
import Plants from "../components/Plants";
import PlantsList from "../components/PlantsList";

export default function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };
  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };
  return (
    <div>
      <div className="navbar" style={style.styleObj}>
        <Tag onhandleHomeClick={(e) => handleHomeClick(e)} />
        <div style={style.styleObjUl}>
          <Plants onhandlePlantsClick={(e) => handlePlantsClick(e)} />
          <Cart onCartClick={(e) => handleCartClick(e)} />
        </div>
      </div>
      {showCart ? (
        <CartItem onContinueShopping={handleContinueShopping} />
      ) : (
        <PlantsList />
      )}
    </div>
  );
}
