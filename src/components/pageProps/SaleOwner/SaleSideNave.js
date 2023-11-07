import React from "react";
import Category from "./Category";
import Color from "./Color";
import Brand from "./Brand";


const SaleSideNave = () => {
   
  return (
    <div className="w-full flex flex-col gap-6">
    <Category icons={false} />
    <Color />
    <Brand />
    
  </div>
  )
}

export default SaleSideNave
