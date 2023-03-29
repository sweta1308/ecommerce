import "./App.css";
import {useState} from 'react'
import { NavBar } from "../src/components/content/nav";
import { ShoeImage } from "./components/content/shoe";
import { CartEmpty } from './components/content/cart'

export default function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="App">
      <NavBar cartShow={() => setIsActive(!isActive)} />
      <ShoeImage />
      <CartEmpty display={isActive ? '' : 'none'} />
    </div>
  );
}
