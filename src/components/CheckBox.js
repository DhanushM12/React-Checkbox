import React from "react";
import addToDisplay from "../actions";

function CheckBox() {
  function handleCheck() {
    this.props.dispatch(addToDisplay());
  }
  return (
    <div className="product">
      <div className="form-group">
        <strong>Portugal</strong>
        <div className="checkbox">
          <label>
            <input type="checkbox" />
            Option1
          </label>
          <br />
          <label>
            <input type="checkbox" />
            Option2
          </label>
          <br />
          <label>
            <input type="checkbox" />
            Option3
          </label>
          <br />
          <label>
            <input type="checkbox" />
            Option4
          </label>
          <br />
        </div>
        <strong>Nicaragua</strong>
        <div className="checkbox">
          <label>
            <input type="checkbox" />
            Option1
          </label>
          <br />
          <label>
            <input type="checkbox" />
            Option2
          </label>
          <br />
          <label>
            <input type="checkbox" />
            Option3
          </label>
          <br />
          <label>
            <input type="checkbox" />
            Option4
          </label>
          <br />
        </div>
        <strong>Marshall Islands</strong>
        <div className="checkbox">
          <label>
            <input type="checkbox" />
            Option1
          </label>
          <br />
          <label>
            <input type="checkbox" />
            Option2
          </label>
          <br />
          <label>
            <input type="checkbox" />
            Option3
          </label>
          <br />
          <label>
            <input type="checkbox" />
            Option4
          </label>
          <br />
        </div>
      </div>
    </div>
  );
}

export default CheckBox;
