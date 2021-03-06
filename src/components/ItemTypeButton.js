import React from "react";
import ProblemIcon from "./ProblemIcon";
import ItemType from "../core/ItemType";
import styled, { css } from "styled-components";
import SolutionIcon from "./SolutionIcon";
import ActionIcon from "./ActionIcon";

const StyledTypeSelector = styled.span`
  width: 33px;
  height: 33px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  transition: all 200ms ease;
  background-color: #fafafa;
  ${(props) =>
    props.inverted &&
    css`
      background-color: #264653;
    `}

    ${(props) =>
      props.inverted &&
      css`
        background-color: #264653;
      `}

  ${ProblemIcon}{
    ${(props) =>
      props.inverted &&
      css`
        color: white;
      `}
  }

  ${SolutionIcon}{
    ${(props) =>
      props.inverted &&
      css`
        color: white;
      `}
  }

  ${ActionIcon}{
    ${(props) =>
      props.inverted &&
      css`
        color: white;
      `}
  }
  border-radius: 8px;
  border: 2px solid #264653;
  margin-right: 5px;

  &:focus {
    background-color: red;
  }
`;

const ItemTypeButton = ({ itemType, inverted, setFocusedItemType }) => {
  const focusSelf = () => {
    setFocusedItemType(itemType);
  };

  return (
    <StyledTypeSelector onClick={focusSelf} inverted={inverted}>
      {itemType === ItemType.Problem && <ProblemIcon></ProblemIcon>}
      {itemType === ItemType.Solution && <SolutionIcon></SolutionIcon>}
      {itemType === ItemType.Action && <ActionIcon></ActionIcon>}
    </StyledTypeSelector>
  );
};

export default ItemTypeButton;
