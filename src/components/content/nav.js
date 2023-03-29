import { logo, avatar, cart } from "../../assets";
import "./nav.css";

export const NavBar = ({cartShow}) => {
  return (
    <>
      <nav>
        <div className="options">
          <img src={logo} alt="logo" className="logo" />
          <p className="items">Collections</p>
          <p className="items">Men</p>
          <p className="items">Women</p>
          <p className="items">About</p>
          <p className="items">Contact</p>
        </div>
        <div className="image">
          <img src={cart} alt="cart" className="cart" onClick={cartShow} />
          <img src={avatar} alt="avatar" className="avatar" />
        </div>
      </nav>
      <hr />
    </>
  );
};
