import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Input, Space, DatePicker, Card } from "antd";
import axios from "axios";
import Account from "./Account";
import moment from "moment";

const { RangePicker } = DatePicker;

axios.defaults.headers.common["X-API-Key"] = "f61b2500"; // for all requests
const dateFormat = "YYYY/MM/DD";

const { Search } = Input;

function App() {
  const [results, setResults] = useState([1, 2, 3]);

  const onSearch = (value) => {
    axios
      .get("https://my.api.mockaroo.com/account.json")
      .then(function (response) {
        // handle success
        setResults(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    console.log(value);
  };

  return (
    <div className="App">
      <div className="search">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </div>
      <div className="filters">
        <Card size="small" title="Small size card" style={{ width: 300 }}>
          <Space direction="vertical" size={12}>
            <RangePicker
              defaultValue={[
                moment("2015/01/01", dateFormat),
                moment("2015/01/01", dateFormat),
              ]}
              format={dateFormat}
            />
          </Space>
        </Card>
      </div>
      <div className="results">
        results
        {results.map((res) => (
          <Account {...res}></Account>
        ))}
      </div>
    </div>
  );
}

export default App;
