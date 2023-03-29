import { cart, plus, minus } from "../../assets";
import "./product.css";

export const ProductCard = () => {
  return (
    <div className="product">
      <p className="header">SNEAKER COMPANY</p>
      <h2 className="heading">Fall Limited Edition Sneakers</h2>
      <p className="paragraph">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="price">
        <h3>$125.00</h3>
        <p>50%</p>
      </div>
      <p className="original">$250.00</p>
      <div className="last">
        <div className="quantity">
          <img src={minus} alt="" className="minus" />
          <p>0</p>
          <img src={plus} alt="" className="plus" />
        </div>
        <div className="add">
          <img src={cart} alt="" />
          <p>Add to cart</p>
        </div>
      </div>
    </div>
  );
};
