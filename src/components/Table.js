import React from "react";

const Table = ({ list, colNames, width = "auto", height = "auto" }) => {
  console.log(list);
  return (
    <div>
      {
        <table
          cellSpacing="0"
          style={{ width: width, height: height, padding: "5px 10px" }}
        >
          <thead>
            <tr>
              {colNames.map((headerItem) => {
                return <th key={headerItem}>{headerItem.toUpperCase()}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {list.map((result) => {
              return (
                <tr key={result.id}>
                  {Object.values(result).map((val, index2) => {
                    return <td key={index2}>{val}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      }
    </div>
  );
};

export default Table;
