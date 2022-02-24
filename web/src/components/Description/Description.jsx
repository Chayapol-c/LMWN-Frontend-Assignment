import React from "react";
import { Desc, ReadMore } from "./style";

const Description = ({ desc, url }) => {
  let cutPosition = 150;
  const handleText = () => {
    let temp = desc;
    if (temp.length >= cutPosition) {
      temp = temp.slice(0, cutPosition);
    }
    while (temp.at(cutPosition) !== " ") {
      temp = temp.slice(0, cutPosition);
      cutPosition -= 1;
    }
    return temp;
  };
  return (
    <Desc>
      {desc.length >= cutPosition
        ?
        <>
          {handleText()}....&nbsp;
          <ReadMore href={url} target="_blank">
            อ่านต่อ
          </ReadMore>
        </>
        : desc}
    </Desc>
  );
};

export default Description;
