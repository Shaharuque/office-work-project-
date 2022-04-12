import styledComponents from "styled-components"

const Griding=styledComponents.div`
    
    padding: 20px;
`

const SectionOneGrid=styledComponents.div`
    display:grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 40px;
    p{
        color:white;
        font:15px Arial, sans-serif;
    }
`
const SectionTwoGrid=styledComponents.div`
    margin-top:40px;
    display:grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 40px;

    p{
        color:white;
        font:15px Arial, sans-serif;
    }
`
const SectionThreeGrid=styledComponents.div`
    margin-top:40px;
    display:grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 40px;
`

const SectionFourGrid=styledComponents.div`
    margin-top:40px;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;

    p{
        color:white;
        font:15px Arial, sans-serif;
    }
`



const CustomDiv=styledComponents.div`
    border: 2px solid #fff;
    border-radius:10px;
    text-align:center;
    background-color:#2a2e30;
    backdrop-filter: blur(10px);
    box-shadow: 5px 10px 8px #a6b8b9;
    opacity:0.8;
    height:100%;
`
const InnerDiv=styledComponents.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:20px
`
const EarningDiv=styledComponents.div`
    margin-top:20px;

    p{
        color:white;
        font:15px Arial, sans-serif;
    }
`

const RevenueReportDiv=styledComponents.div`
    display:grid;
    grid-template-columns: 2fr 1fr;

` 
const TableDiv=styledComponents.div`

`

const CalenderDiv=styledComponents.div`
    
`



export {Griding,SectionOneGrid,SectionTwoGrid,SectionThreeGrid,SectionFourGrid,CustomDiv,EarningDiv,InnerDiv,RevenueReportDiv,TableDiv,CalenderDiv}