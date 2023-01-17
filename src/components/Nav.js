import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { NavStyle, NavItems } from "../styles/NavStyle";

export default function Nav() {
  return (
    <NavStyle>
      <Link href={"/"}>DiscWorld</Link>
      <NavItems>
        <div>
          <FiShoppingCart />
          <h3>Cart</h3>
        </div>
      </NavItems>
    </NavStyle>
  );
}
