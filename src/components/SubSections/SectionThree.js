import React from "react";
import {
  CalenderDiv,
  CustomDiv,
  SectionThreeGrid,
  TableDiv,
} from "../styles/Main.griding.style";
import Table from "../Table";

const list = [
  { id: 1, name: "john Doe", age: 28 },
  { id: 2, name: "john Doe", age: 28 },
  { id: 3, name: "john Doe", age: 28 },
  { id: 4, name: "john Doe", age: 28 },
];
const colNames = ["id", "name", "age"];

const SectionThree = () => {
  return (
    <SectionThreeGrid>
      <CustomDiv>
        <Table list={list} colNames={colNames}></Table>
      </CustomDiv>
      <CalenderDiv>
        <CustomDiv></CustomDiv>
      </CalenderDiv>
    </SectionThreeGrid>
  );
};

export default SectionThree;
