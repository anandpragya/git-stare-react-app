import { FC } from "react";
import { JsxElement } from "typescript";

const Headers : FC = ():JSX.Element=>{
    return(
        <div className="title">
           <h1>GITSTARE</h1>
           <span>QUICK PEEK INTO GITHUB</span>
        </div>
    )
}
export default Headers