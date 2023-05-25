import { useRouter } from "next/router";
const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { Order } from "../styles/Order";
import formatMoney from "../lib/formatMoney";
import styled from "styled-components";

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = await getSession(ctx.req, ctx.res);
    const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
    const paymentIntents = await stripe.paymentIntents.list({
      customer: stripeId,
    });
    return { props: { orders: paymentIntents.data } };
  },
});

export default function Profile({ user, orders }) {
  const route = useRouter();
  return (
    user && (
      <Orders>
        <UserInfo>
          <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
          <div>
            <LogoutBtn onClick={() => route.push("/api/auth/logout")}>
              Logout
            </LogoutBtn>
          </div>
        </UserInfo>
        <OrderDiv>
          {orders.map((order) => (
            <Order key={order.id}>
              <h1>Order number: {order.id}</h1>
              <h2>Amount: {formatMoney(order.amount)}</h2>
              <h2>Receipt email: {user.email}</h2>
            </Order>
          ))}
        </OrderDiv>
      </Orders>
    )
  );
}

export const Orders = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 75vh;
`;
export const OrderDiv = styled.div`
  flex: 1;
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LogoutBtn = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  color: black;
  background-color: #d8e2eb;
  font-size: 1rem;
  font-weight: 00;
  padding: 8px 12px;
  display: inline-block;
  min-height: 28px;
  transition: background-color 0.24s, box-shadow 0.24s;
`;
