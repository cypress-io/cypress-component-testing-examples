import React, { useState } from "react";
import { AutoComplete } from "antd";
const { Option } = AutoComplete;

export default function AutocompleteDemo() {
  const [result, setResult] = useState([]);

  const handleSearch = (value) => {
    let res = [];

    if (!value || value.indexOf("@") >= 0) {
      res = [];
    } else {
      res = ["gmail.com", "163.com", "qq.com"].map(
        (domain) => `${value}@${domain}`
      );
    }

    setResult(res);
  };

  return (
    <AutoComplete
      data-test="autocomplete"
      style={{
        width: 200,
      }}
      onSearch={handleSearch}
      placeholder="input here"
    >
      {result.map((email) => (
        <Option key={email} value={email}>
          {email}
        </Option>
      ))}
    </AutoComplete>
  );
}
