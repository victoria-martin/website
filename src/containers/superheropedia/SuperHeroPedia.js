import React, { Component, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import api from "../../helpers/api";

const SuperHeroPedia = () => {
  // const url = "https://superheroapi.com/api/10158722770020306";

  const getData = async () => {
    axios
      .get("https://superheroapi.com/api/10158722770020306/34")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>LENCYCLOEPDIE EST ICI</h2>
      <ol>
        <li></li>
      </ol>
    </div>
  );
};

export default SuperHeroPedia;
