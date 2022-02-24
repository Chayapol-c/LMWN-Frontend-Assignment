import React from "react";
import styled from "styled-components";
import SearchForm from "../components/SearchForm/SearchForm";

import { useSearchParams } from "react-router-dom";

const Container = styled.div`
  margin: auto;
  max-width: 40rem;
  padding: 3rem 0;
`;

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Container>
      <SearchForm
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </Container>
  );
};

export default Home;
