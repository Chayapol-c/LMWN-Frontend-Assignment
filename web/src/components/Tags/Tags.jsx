import React from "react";
import { Tag, TagsContainer } from "./style.js"

const Tags = ({ tags, setSearchParams }) => {
  return (
    <TagsContainer>
      หมวด &nbsp;-
      {tags.slice(0, -1).map((e, i) => (
        <Tag onClick={() => setSearchParams({ keyword: e })} key={i}>
          {e}
        </Tag>
      ))}{" "}
      และ
      <Tag onClick={() => setSearchParams({ keyword: tags.at(-1) })}>
        {" "}
        {tags.at(-1)}
      </Tag>
    </TagsContainer>
  );
};

export default Tags;
