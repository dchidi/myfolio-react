import React, { useState, useEffect } from "react";
import style from "./Features.module.css";
import { MDBBtn } from "mdb-react-ui-kit";
const Features = (props) => {
  const [feature, setFeature] = useState(null);
  const featureEl = document.getElementById("features");
  const [items, setItems] = useState([]);

  const addFeature = () => {
    setFeature((prev) => {
      // Only add input field if none exist
      if (!document.getElementById("_id")) {
        const elInput = document.createElement("input");
        elInput.setAttribute("type", "text");
        elInput.setAttribute("id", "_id");
        elInput.onkeyup = getVal;
        featureEl?.appendChild(elInput);
        elInput.focus();
      } else {
        // keep focus on input field
        document.getElementById("_id").focus();
      }
    });
  };

  const getVal = (e) => {
    // get input value
    const d = document.getElementById("_id").value;
    // Listen for enter =13,tab = 9 or escape =27 key input
    if (e.keyCode === 13 || e.keyCode === 9 || e.keyCode === 27) {
      // Remove input element
      document.getElementById("_id").remove();
      saveFeatureItem(d);
    }
  };

  const saveFeatureItem = (text) => {
    // save item only if it has a content
    if (text) {
      // create the span element
      const el = document.createElement("span");
      // add text to the element
      const node = document.createTextNode(text);
      // put the text inside the element
      el.appendChild(node);
      // add the class name to the element
      el.classList.add(style.featureItem);
      // add everything to the feature element
      featureEl?.appendChild(el);
      // save items in a list for return to the component that uses this UI
      setItems((prev) => {
        return [...prev, text];
      });
    }
  };

  // This function return a list of items entered to the calling component. This concept is called state uplifting
  // it only triggers when there is a change in items state
  useEffect(() => {
    if (items.length > 0) {
      props.featuresPayload(items);
    }
  }, [items]);

  // using useEffect to trigger the component upon start to overcome the state not responding on first click
  useEffect(addFeature, []);

  const clearAllFeatures = () => {
    featureEl.innerHTML = "";
  };
  return (
    <>
      <h3>{props.title}</h3>
      <MDBBtn outline color="dark" className="btn-sm me-2" onClick={addFeature}>
        ADD
      </MDBBtn>
      <MDBBtn
        outline
        color="danger"
        className="btn-sm"
        onClick={clearAllFeatures}
      >
        REMOVE ALL
      </MDBBtn>
      <div className={style.features} id="features"></div>
    </>
  );
};

export default Features;
