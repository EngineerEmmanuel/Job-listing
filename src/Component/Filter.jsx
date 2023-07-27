import { useEffect, useState } from "react";
import btnData from "./FilterBtnData";

const Filter = (props) => {
const {filterFunctionJ} = props;

    return ( 
        <section className="btn-section">
            <div className="btn-gen-con">
            {
                btnData.map((btnInfo)=>{
                    return(
                        <div className="btns-con">
                            <button onClick={()=>filterFunctionJ(btnInfo.btnNum)}>{btnInfo.btnName}</button>
                        </div>
                    )
                })
            }
            </div>
            
        </section>
     );
}
 
export default Filter;