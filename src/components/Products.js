import { ProductStyle } from "../styles/ProductStyle";
import Link from "next/link";
import formatMoney from "../lib/formatMoney";
import { forwardRef, useRef } from "react";

const Products = forwardRef((props, ref) => {
  //Extract the info from props
  const { title, price, image, slug } = props.product.attributes;
  return (
    <ProductStyle ref={ref}>
      <Link href={`/product/${slug}`}>
        <div>
          <img src={image.data[0].attributes.formats.small.url} alt="" />
        </div>
      </Link>
      <h2>{title}</h2>
      <h2>{formatMoney(price)}</h2>
    </ProductStyle>
  );
});
Products.displayName = "Products";
export default Products;
