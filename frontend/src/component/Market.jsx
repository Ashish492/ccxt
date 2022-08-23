
import React from "react";

import useGetApi from "../hook/useGetApi";
const Market = () => {
  const [markets]=  useGetApi("/market",2000)

  return (
    <>
      

      <div className="container">
        <table className="table table-striped  table-responsive table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">id</th>
              <th scope="col">price</th>
              <th scope="col">vwap</th>
              <th scope="col">percentage</th>
          
            </tr>
          </thead>
          <tbody>
            {markets &&
              markets.map((market, key) => {
                return (
                  <tr key={key}>
                    <th scope="row">{key + 1}</th>
                    <td>{market.name}</td>
                    <td>{market.price}</td>
                    <td>{market.vwap}</td>
                    <td>{market.percentage}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};


export default Market;
