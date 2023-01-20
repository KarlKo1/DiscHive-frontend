import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  margin: 5rem 15rem;
`;

export const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 2rem;
  padding: 3rem;
  box-shadow: var(--shadow-primary);
  svg {
    color: #198754;
  }
  button {
    color: white;
    background: var(--primary);
    font-size: 1.2rem;
    font-weight: 500;
    border: none;
    padding: 1rem 2rem;
    margin-top: 2rem;
    cursor: pointer;
  }
`;

export const Address = styled.div`
  font-size: 1rem;
  width: 100%;
`;

export const OrderInfo = styled.div`
  font-size: 1rem;
  div {
    padding-bottom: 1rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;
