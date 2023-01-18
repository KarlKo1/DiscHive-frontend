import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { NavStyle, NavItems } from "../styles/NavStyle";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export default function Nav() {
  const { showCart, setShowCart, totalQuantity } = useStateContext();
  return (
    <NavStyle>
      <Link href={"/"}>DiscWorld</Link>
      <NavItems>
        <div onClick={() => setShowCart(true)}>
          {totalQuantity > 0 && (
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
              {totalQuantity}
            </motion.span>
          )}
          <FiShoppingCart />
          <h3>Cart</h3>
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavStyle>
  );
}
