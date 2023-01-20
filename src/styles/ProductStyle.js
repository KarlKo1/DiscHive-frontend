import styled from "styled-components";

export const ProductStyle = styled.div`
  background: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  box-shadow: var(--shadow-primary);
  img {
    width: 100%;
    cursor: pointer;
  }
  h2 {
    padding: 0.5rem 0rem;
  }
`;
