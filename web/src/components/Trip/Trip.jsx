import React from "react";
import Description from "../Description/Description";
import Tags from "../Tags/Tags";
import { Container, Title, Image, ImageContainer, DetailContainer, SubImg, SubImgContainer } from "./style";


const Trip = ({ data, setSearchParams }) => {
  console.log(data)
  return (
    <Container>
      <ImageContainer>
        <Image src={data.photos[0]} />
      </ImageContainer>
      <DetailContainer>
        <div className="text-container">
          <Title href={data.url} target="_blank">
            {data.title}
          </Title>
          <Description desc={data.description} url={data.url} />
          <Tags setSearchParams={setSearchParams} tags={data.tags} />
        </div>
        <SubImgContainer>
          {data.photos.slice(1, data.photos.length).map((e, i) => (
            <SubImg key={i} src={e} />
          ))}
        </SubImgContainer>
      </DetailContainer>
    </Container>
  );
};

export default Trip;
