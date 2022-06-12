import React from "react";
import {useState } from "react";
import Navbar from "../../components/navbar/navbar";
import StickyHeadTable from "../../components/table/table";
import { TextField, Button } from "@mui/material";

function Home() {
  const currentQuery = "";
  const [searchResult, setSearchResult] = useState([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchResult = currentQuery;
  };

  return (
    <div
      className="header-home"
      style={{
        justifyContent: "center",
      }}
    >
      <Navbar />
      <div
        className="body"
        style={{
          width: "95%",
          marginTop: "5vh",
          padding: 20,
          justifyContent: "center",
          alignContent: "center",
          alignSelf: "center",
        }}
      >
        <div
          className="search-wrapper"
          style={{paddingBottom: 20}}
        >
          <form
            id="search"
            className="form"
            name="search"
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center"
            }}
          >
            <div className="searchInput">
              <TextField
                id="outlined-name"
                label="Name"
                value={currentQuery}
                onChange={handleChange}
              />
            </div>
            <div className="buttonSearch" style={{paddingLeft: 20}}>
              <Button variant="contained" type="submit">
                Search
              </Button>
            </div>
          </form>
        </div>
        <div className="table-wrapper">
          <StickyHeadTable />
        </div>
      </div>
    </div>
  );
}

export default Home;
