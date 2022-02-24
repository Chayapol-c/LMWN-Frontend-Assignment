import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  column-gap: 2rem;
`;
export const Title = styled.a`
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  font-weight: 600;
  color: inherit;
  text-decoration: none;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  src: ${(props) => props.src};
`;

export const ImageContainer = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  height: 20rem;
  flex: 2;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 3;
  & .text-container {
    flex: 1;
  }

`;

export const SubImg = styled.img`
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  border-radius: 1rem;
  src: ${(props) => props.src};
`;

export const SubImgContainer = styled.div`
  display: flex;
  column-gap: 1rem;
`;
