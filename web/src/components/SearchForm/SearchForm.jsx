import React, { useState, useEffect } from "react";
import axios from "axios";
import Trip from "../Trip/Trip";
import { Title, FormContainer, InputForm, ResultContainer } from "./style";

const SearchForm = ({ searchParams, setSearchParams }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/trips";
    const keyword = searchParams.get("keyword") || "";
    const timer = setTimeout(() => {
      const fetchTrips = async () => {
        try {
          const res = await axios.get(url, {
            params: { keyword: keyword },
          });
          const data = await res.data;
          setResults(data.trips);
        } catch (e) {
          console.error(e);
        }
      };
      fetchTrips();
      setQuery(keyword);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    return () => {
      clearTimeout(timer);
    };
  }, [searchParams]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchParams({ keyword: query });
  };

  return (
    <div>
      <Title>เที่ยวไหนดี</Title>
      <FormContainer onSubmit={handleSearch} data-testid="abc">
        <InputForm
          type="text"
          name=""
          id=""
          className="search-bar"
          placeholder="หาที่เที่ยวแล้วไปกัน..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onClick={(e) => setQuery("")}
        />
      </FormContainer>
      <ResultContainer>
        {results.map((e, i) => (
          <Trip
            data-testid={"trip-card"}
            setSearchParams={setSearchParams}
            key={i}
            data={e}
          />
        ))}
      </ResultContainer>
    </div>
  );
};

export default SearchForm;
