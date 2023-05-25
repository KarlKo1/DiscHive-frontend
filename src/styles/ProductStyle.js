import styled from "styled-components";

export const ProductStyle = styled.div`
  background: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  box-shadow: var(--shadow-primary);
  @media (max-width: 767px) {
    padding: 0.5rem;
  }
  img {
    width: 100%;
    cursor: pointer;
  }
  h2 {
    padding: 0.5rem 0rem;
  }
`;
