import styled from "styled-components";

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2rem;
  margin-bottom: 5rem;
  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  }
`;
