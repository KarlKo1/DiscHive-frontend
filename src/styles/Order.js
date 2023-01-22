import styled from "styled-components";

export const Order = styled.div`
  margin: 2rem 0rem;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  background: white;
  border-radius: 5rem;
  box-shadow: var(--shadow-primary);
  background: var(--secondary);
  h1 {
    font-size: 1rem;
    color: white;
  }
  h2 {
    color: white;
  }
  &:hover {
    background: #08524a;
  }
`;
