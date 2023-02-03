import React from "react";
export const RegularReactForm = () => {
  const [value, setValue] = React.useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    alert("A name was submitted: " + value);
    event.preventDefault();
  };

  return (
    <div>
      <h3>Regular React Form</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
