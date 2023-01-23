import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import {
  DetailsStyle,
  ProductInfo,
  Quantity,
  Buy,
} from "../../styles/ProductDetails";
import { BsFillPlusCircleFill, BsFillDashCircleFill } from "react-icons/bs";
import { useStateContext } from "../../lib/context";
import formatMoney from "../../lib/formatMoney";

export default function ProductDetails() {
  //Use State
  const { quantity, increaseQuantity, decreaseQuantity, onAdd } =
    useStateContext();

  //Fetch slug
  const { query } = useRouter();

  //Fetch GraphQL data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });
  const { data, fetching, error } = results;

  //Check for the data coming in
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  //Extract data
  const productData = data.products.data[0].attributes;
  console.log(productData);
  const { title, description, image, price } = productData;

  return (
    <DetailsStyle>
      <img src={image.data[0].attributes.formats.medium.url} alt={title} />
      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{formatMoney(price)}</p>
        <Quantity>
          <span>Quantity</span>
          <button>
            <BsFillDashCircleFill onClick={decreaseQuantity} />
          </button>
          <p>{quantity}</p>
          <button>
            <BsFillPlusCircleFill onClick={increaseQuantity} />
          </button>
        </Quantity>
        <Buy onClick={() => onAdd(productData, quantity)}>Add to cart</Buy>
      </ProductInfo>
    </DetailsStyle>
  );
}
