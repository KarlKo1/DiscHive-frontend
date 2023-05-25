import styled from "styled-components";

export const Order = styled.div`
  margin: 2rem 0rem;
  gap: 1rem;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  background: white;
  box-shadow: var(--shadow-primary);
  background: var(--secondary);
  @media (max-width: 767px) {
    flex-direction: column;
    padding: 2rem;
    margin: 1rem 0rem;
  }
  h1 {
    color: white;
  }
  h2 {
    color: white;
  }
`;
