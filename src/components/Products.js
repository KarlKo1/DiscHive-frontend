import { ProductStyle } from "../styles/ProductStyle";
import Link from "next/link";
import formatMoney from "../lib/formatMoney";

export default function Products({ product }) {
  //Extract the info from props
  const { title, price, image, slug } = product.attributes;
  return (
    <ProductStyle>
      <Link href={`/product/${slug}`}>
        <div>
          <img src={image.data[0].attributes.formats.small.url} alt="" />
        </div>
      </Link>
      <h2>{title}</h2>
      <h2>{formatMoney(price)}</h2>
    </ProductStyle>
  );
}
