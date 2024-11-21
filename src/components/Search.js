import React from "react";
import { useState } from "react";
// import "./App.css";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  const productList = [
    "LineGraph",
    "Barchart",
    "ScatterPlot",
    "Piechart",
    "Mean",
    "Median",
    "Mode",
    "Variance",
    "Deviation",
  ];
  const [Search, setSearch] = useState(false);
  const [products, setProducts] = useState(productList);
  const [searchVal, setSearchVal] = useState("");

  function handleSearchClick() {
    setSearch(!Search);
    if (searchVal === "") {
      setProducts(productList);
      return;
    }
    const filterBySearch = productList.filter((item) => {
      if (item.toLowerCase().includes(searchVal.toLowerCase())) {
        return item;
      }
    });
    setProducts(filterBySearch);
  }
  //   const mystyle = {
  //     marginLeft: "600px",
  //     marginTop: "20px",
  //     fontWeight: "700",
  //   };

  return (
    <div style={{ display: "block", marginTop: "100px", marginRight: "30px" }}>
      <div>
        <div>
          <input onChange={(e) => setSearchVal(e.target.value)}></input>
          <BsSearch onClick={handleSearchClick} />
        </div>
        <div>
          <div style={{ height: "100px", overflow: "auto" }}>
            {Search &&
              products.map((product) => {
                return (
                  <div className="container" style={{ height: "15px" }}>
                    <ul
                      style={{
                        height: "50px",
                        // width: "50px",
                        //   width: "max-content",
                        // overflow: "auto",
                      }}
                    >
                      <strong>
                        {" "}
                        <li> {product}</li>
                      </strong>
                    </ul>
                  </div>
                );
              })}
          </div>
          {}
        </div>
      </div>
    </div>
  );
};
export default Search;
