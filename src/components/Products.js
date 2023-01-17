import { ProductStyle } from "../styles/ProductStyle";

export default function Products({ product }) {
  //Extract the info from props
  const { title, price, image } = product.attributes;
  return (
    <ProductStyle>
      <div>
        <img src={image.data[0].attributes.formats.small.url} alt="" />
      </div>
      <h2>{title}</h2>
      <h2>{price}</h2>
    </ProductStyle>
  );
}
