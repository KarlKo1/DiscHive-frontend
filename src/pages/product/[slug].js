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

export default function ProductDetails() {
  //Use State
  const { quantity, increaseQuantity, decreaseQuantity } = useStateContext();

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
  const { title, description, image } = data.products.data[0].attributes;

  return (
    <DetailsStyle>
      <img src={image.data[0].attributes.formats.medium.url} alt={title} />
      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>
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
        <Buy>Add to cart</Buy>
      </ProductInfo>
    </DetailsStyle>
  );
}
