import { Component, Custom } from "../../utils/Constants.js"
import LineComponent from "../LineComponent/LineComponent.jsx"
import ReComponent from "../reusecomponents/ReComponent.jsx"
const Main = () => {
    return (
        <>
            {
                Component.map((val)=>(
                    <ReComponent  
                    key={val.componet_id}
                    props={val}
                    />
                ))
            }
            {
                Custom.map((val)=>(
                    <LineComponent  
                    key={val.componet_id}
                    props={val}
                    />
                ))
            }
           
        </>
    )
}

export default Main;