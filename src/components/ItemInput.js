import React from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  margin-top: 10px;
  width: 300px;
  height: 50px;
  resize: none;
  border: 2px solid black;
  border-radius: 8px;
  padding: 4px;
  &:focus {
    outline: none;
  }
`;

const ItemInput = ({ onChange = () => {}, value }) => {
  return (
    <TextArea
      value={value}
      onChange={onChange}
      className="mousetrap"
    ></TextArea>
  );
};

export default ItemInput;
