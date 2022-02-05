import React, { useState, useEffect } from "react";
import "./Profile.css";
import axios from "axios";
import Timeline from "./Timeline";
import Tabs from "./Tabs";
import Products from "./Products";
import Agents from "./Agents";
import BasicInfo from "./BasicInfo";
axios.defaults.headers.common["X-API-Key"] = "f61b2500"; // for all requests

export default function Profile() {
  const [profile, setProfile] = useState({});

  const onSearch = (value) => {
    axios
      .get("https://my.api.mockaroo.com/accounts/123.json")
      .then(function (response) {
        // handle success
        setProfile(response.data);
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

  useEffect(() => {
    onSearch();
  }, []);

  return (
    <div className="container">
      <div className="tabs">
        <Tabs />
      </div>
      <div className="products">
        <Products profile={profile}></Products>
      </div>
      <div className="agents">
        <Agents />
      </div>
      <div className="basic-info">
        <BasicInfo profile={profile}></BasicInfo>
      </div>
      <div className="timeline">
        <Timeline></Timeline>
      </div>
    </div>
  );
}
