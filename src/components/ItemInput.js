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

const ItemInput = ({ onChange = () => {}, value }, ref) => {
  return (
    <TextArea
      ref={ref}
      value={value}
      onChange={onChange}
      className="mousetrap"
    ></TextArea>
  );
};

export default React.forwardRef(ItemInput);
