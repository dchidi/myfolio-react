import React, { useState, useEffect } from "react";
import style from "./InputPills.module.css";
import { MDBBtn } from "mdb-react-ui-kit";

const InputPills = (props) => {
  // Component States
  const [_, setInputPillState] = useState(null);
  const [items, setItems] = useState([]);
  // const [counter, setCounter] = useState([]);

  // Global variable declaration - use the title to form id for this component to ensure uniqueness
  const compId = props.title.replace(" ", "_").toLowerCase();
  const compItemId = `${compId}_id`;

  // Element declaration
  const input_pill_el = document.getElementById(compId);

  // TODO:: Get UI configuration from props. This will be for upgraded version to allow for full customization
  // const {background,textColor,fontSize,borderRadius,addBtnColor, cancelBtnColor, addText, cancelText} =

  // Dynamically create inputfield
  const createInputUI = () => {
    // declare the element to be created
    const input_el = document.createElement("input");
    // set attributes
    input_el.setAttribute("type", "text");
    input_el.setAttribute("id", compItemId);
    input_el.classList.add(style.pillsInput);
    // listen for keyboard entered event and pass a function to handle the event
    input_el.onkeyup = onKeyUpEventHandler;
    // Add the newly created element to the parent element
    input_pill_el?.appendChild(input_el);
    // set focus on the newly created element to allow for capturing user input immediately.
    input_el.focus();
  };

  // Item UI
  const createItemUI = (text) => {
    // create the span element
    const el = document.createElement("span");
    // create text holder
    const node = document.createTextNode(text);
    // put the text inside the element
    el.appendChild(node);
    // listen to click event
    el.onclick = onClickEventHandler;
    // add class name to the element for styling
    el.classList.add(style.items);
    // add everything to the inputPill element which is a div
    input_pill_el?.appendChild(el);
  };

  // Manage keypress event
  const onKeyUpEventHandler = (e) => {
    // Listen for enter(13) or escape(27) key input
    if (e.keyCode === 13 || e.keyCode === 27) {
      // Save inputValue with the help of its id name
      saveInputValue(document.getElementById(compItemId).value);
      // Remove input element
      document.getElementById(compItemId).remove();
    }
  };

  // Manage what happens on click
  const onClickEventHandler = (e) => {
    // console.log(e);
  };

  // Manage when inputfield shows on the screen
  const inputFieldHandler = () => {
    // useState setInputPillState helps to rerender the UI when changes occurs
    setInputPillState((prev) => {
      // Only add input field if none exist
      if (!document.getElementById(compItemId)) {
        createInputUI();
      } else {
        // keep focus on existing input field
        document.getElementById(compItemId).focus();
      }
    });
  };

  const saveInputValue = (text) => {
    // save item only if it is not empty
    if (text) {
      // create item UI
      createItemUI(text);
      // update items state for future call by the component that uses this UI
      setItems((prev) => {
        // spread the previous data and add the new data to it
        return [...prev, text];
      });
    }
  };

  // using useEffect to trigger the component upon start to overcome the state not responding on first click
  useEffect(inputFieldHandler, []);

  // Return items entered in list format. useEffect with items as parameter ensure it is only triggered when there is
  // changes in the items state. Calling a function placeholder passed by props to get data from the child component
  // is called state uplifting.
  useEffect(() => {
    // only return if items state has value
    if (items.length > 0) {
      props.payload(items);
    }
  }, [items]);

  // Clear all inputed values
  const clearAllItems = () => {
    input_pill_el.innerHTML = "";
    setItems([]);
  };

  // Render the UI
  return (
    <>
      <h3>{props.title}</h3>
      <MDBBtn
        outline
        color="dark"
        className="btn-sm me-2"
        onClick={inputFieldHandler}
      >
        ADD
      </MDBBtn>
      <MDBBtn outline color="danger" className="btn-sm" onClick={clearAllItems}>
        REMOVE ALL
      </MDBBtn>
      <div className={style.inputBox} id={compId}></div>
    </>
  );
};

export default InputPills;
