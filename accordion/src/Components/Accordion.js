import React, { useState } from "react";
import { questions } from "../api";
import "../index.css";
import MyAccordion from "./MyAccordion";

const Accordion = () =>{
    const [data, setData ] = useState(questions);
    return (
        <>
            <section className="main-div">
            <h1>React Interview Questions</h1>
            {
                data.map((curElem)=>{
                    const {id} = curElem;
                    return <MyAccordion key={curElem.id} {...curElem}/>
                })
            }
            </section>
        </>
    )
}

export default Accordion;