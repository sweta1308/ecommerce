import {shoe1} from "../../assets";
import "./shoe.css";
import { ProductCard } from "../content/product";

export const ShoeImage = () => {
    return (
      <div className="body">
        <div>
          <img src={shoe1} alt="" className="shoe-main" />
        </div>
        <ProductCard />
      </div>
    );
};
