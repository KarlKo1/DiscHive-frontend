import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { NavStyle, NavItems } from "../styles/NavStyle";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";

export default function Nav() {
  const { showCart, setShowCart, totalQuantity } = useStateContext();
  return (
    <NavStyle>
      <Link href={"/"}>DiscWorld</Link>
      <NavItems>
        <div onClick={() => setShowCart(true)}>
          {totalQuantity > 0 && <span>{totalQuantity}</span>}
          <FiShoppingCart />
          <h3>Cart</h3>
        </div>
      </NavItems>
      {showCart && <Cart />}
    </NavStyle>
  );
}
