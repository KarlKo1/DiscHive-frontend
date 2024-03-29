import styled from "styled-components";

export const DetailsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  img {
    width: 40%;
    height: 100%;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;

    img {
      width: 60%;
      margin-bottom: 2rem;
    }
  }
`;

export const ProductInfo = styled.div`
  width: 40%;
  button {
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;
  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
  }
  p {
    width: 1rem;
    text-align: center;
  }
  span {
    color: var(--secondary);
  }
  svg {
    color: #4f5d75;
  }
`;

export const Buy = styled.button`
  width: 100%;
  background: var(--primary);
  color: white;
  font-weight: 500;
  border: none;
`;
