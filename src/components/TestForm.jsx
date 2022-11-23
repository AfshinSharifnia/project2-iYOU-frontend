import React, { useState } from "react";

const TestForm = () => {
  const [field, setField] = useState();
  const [fieldData, setFieldData] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `/api/profile/updateProfile?field=${field}&fieldData=${fieldData}`,
    );
    const reply = await response.json();
    console.log(reply);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        FIELD:{" "}
        <input
          onChange={(event) => setField(event.target.value)}
          value={field}
        />
      </label>
      <label htmlFor="">
        FIELD DATA:{" "}
        <input
          onChange={(event) => setFieldData(event.target.value)}
          value={fieldData}
        />
      </label>
      <button type="submit">update record</button>
    </form>
  );
};

export default TestForm;
