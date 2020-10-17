import React from "react";

function CheckBox() {
  handleCheck = (e) => {
    this.props.dispatch(addToDisplay(e.target.value));
  };
  return (
    <div className="product">
      <div className="form-group">
        <strong>Portugal</strong>
        <div className="checkbox">
          <label>
            <input type="checkbox" onChange={this.handleCheck} />
            Option1
          </label>
          <br />
          <label>
            <input type="checkbox" onChange={this.handleCheck} />
            Option2
          </label>
          <br />
          <label>
            <input type="checkbox" onChange={this.handleCheck} />
            Option3
          </label>
          <br />
          <label>
            <input type="checkbox" onChange={this.handleCheck} />
            Option4
          </label>
          <br />
        </div>
        <strong>Nicaragua</strong>
        <div className="checkbox">
          <label>
            <input type="checkbox" onChange={this.handleCheck} />
            Option1
          </label>
          <br />
          <label>
            <input type="checkbox" onChange={this.handleCheck} />
            Option2
          </label>
          <br />
          <label>
            <input type="checkbox" onChange={this.handleCheck} />
            Option3
          </label>
          <br />
          <label>
            <input type="checkbox" onChange={this.handleCheck} />
            Option4
          </label>
          <br />
        </div>
        <strong>Marshall Islands</strong>
        <div className="checkbox">
          <label>
            <input type="checkbox" onChange={this.handleCheck} />
            Option1
          </label>
          <br />
          <label>
            <input type="checkbox" onChange={this.handleCheck} />
            Option2
          </label>
          <br />
          <label>
            <input type="checkbox" onChange={this.handleCheck} />
            Option3
          </label>
          <br />
          <label>
            <input type="checkbox" onChange={this.handleCheck} />
            Option4
          </label>
          <br />
        </div>
      </div>
    </div>
  );
}

export default CheckBox;
