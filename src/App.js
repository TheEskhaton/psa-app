import React, { useState, useEffect, useRef } from "react";
import ItemTypeButton from "./components/ItemTypeButton";
import ItemType from "./core/ItemType";
import Mousetrap from "mousetrap";
import { Vertical, Horizontal } from "layout-styled-components";
import ItemInput from "./components/ItemInput";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Karla', sans-serif;
  }
  textarea {
    font-family: 'Karla', sans-serif;
  }
`;

export default function App() {
  const [focusedItemType, setFocusedItemType] = useState(ItemType.Problem);
  const [currentText, setCurrentText] = useState("");
  const itemInputRef = useRef();

  const focusInput = () => {
    itemInputRef.current.focus();
    itemInputRef.current.setSelectionRange(
      itemInputRef.current.value.length,
      itemInputRef.current.value.length
    );
  };

  useEffect(() => {
    Mousetrap.unbind(["alt+1", "alt+2", "alt+3", "alt+s"]);

    Mousetrap.bind("alt+1", function () {
      focusInput();
      setFocusedItemType(ItemType.Problem);
    });
    Mousetrap.bind("alt+2", function () {
      focusInput();
      setFocusedItemType(ItemType.Solution);
    });
    Mousetrap.bind("alt+3", function () {
      focusInput();
      setFocusedItemType(ItemType.Action);
    });

    Mousetrap.bind("alt+s", function () {
      alert("Will save - " + currentText);
      setCurrentText("");
    });
  }, [currentText]);

  const inputTextChange = (evt) => {
    setCurrentText(evt.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <Vertical>
        <Horizontal>
          <ItemTypeButton
            setFocusedItemType={setFocusedItemType}
            inverted={focusedItemType === ItemType.Problem}
            itemType={ItemType.Problem}
          ></ItemTypeButton>
          <ItemTypeButton
            setFocusedItemType={setFocusedItemType}
            inverted={focusedItemType === ItemType.Solution}
            itemType={ItemType.Solution}
          ></ItemTypeButton>
          <ItemTypeButton
            setFocusedItemType={setFocusedItemType}
            inverted={focusedItemType === ItemType.Action}
            itemType={ItemType.Action}
          ></ItemTypeButton>
        </Horizontal>
        <Horizontal>
          <ItemInput
            ref={itemInputRef}
            value={currentText}
            onChange={inputTextChange}
          ></ItemInput>
        </Horizontal>
        <Horizontal>Cards will go here</Horizontal>
      </Vertical>
    </>
  );
}
