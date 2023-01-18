import { useStateContext } from "../lib/context";
import {
  CartWrapper,
  CartStyle,
  Card,
  CardInfo,
  EmptyStyle,
  Checkout,
} from "../styles/CartStyle";
import { FiShoppingCart } from "react-icons/fi";
import { BsFillPlusCircleFill, BsFillDashCircleFill } from "react-icons/bs";
import { Quantity } from "../styles/ProductDetails";

export default function Cart() {
  const { cartItems, setShowCart, onAdd, onRemove, totalPrice } =
    useStateContext();
  return (
    <CartWrapper onClick={() => setShowCart(false)}>
      <CartStyle onClick={(e) => e.stopPropagation()}>
        {cartItems.length < 1 && (
          <EmptyStyle>
            <h1>Your shopping cart is empty!</h1>
            <FiShoppingCart />
          </EmptyStyle>
        )}
        {cartItems.length >= 1 &&
          cartItems.map((item) => {
            return (
              <Card key={item.slug}>
                <img
                  src={item.image.data[0].attributes.formats.thumbnail.url}
                  alt={item.title}
                />
                <CardInfo>
                  <h3>{item.title}</h3>
                  <h3>{item.price}€</h3>
                  <Quantity>
                    <span>Quantity</span>
                    <button onClick={() => onRemove(item)}>
                      <BsFillDashCircleFill />
                    </button>
                    <span>{item.quantity}</span>{" "}
                    <button onClick={() => onAdd(item, 1)}>
                      <BsFillPlusCircleFill />
                    </button>
                  </Quantity>
                </CardInfo>
              </Card>
            );
          })}
        {cartItems.length >= 1 && (
          <Checkout>
            <h3>Subtotal: {Math.round(totalPrice * 100) / 100}€</h3>
            <button>Purchase</button>
          </Checkout>
        )}
      </CartStyle>
    </CartWrapper>
  );
}
