import { cn } from "clsx-tailwind-merge";
import React from "react";


interface props {
    passStrength : number
}
const PasswordStrengthCheck = ({passStrength} : props) =>{
    return(
        <div
        className={cn("flex gap-1 w-7/12", {
          "justify-around": passStrength === 3,
          "justify-start": passStrength < 3,
        })}
      >
        {Array.from({ length: passStrength + 1 }).map((i, index) => (
          <div
            key={index}
            className={cn("h-2 w-14 rounded-md", {
              "bg-red-500": passStrength === 0,
              "bg-orange-500": passStrength === 1,
              "bg-yellow-500": passStrength === 2,
              "bg-green-500": passStrength === 3,
            })}
          ></div>
        ))}
      </div>
        // <div className="flex gap-2">
        //     {Array.from({length:passwordStrength+ 1}).map((i,index)=>(
        //         <div key={index} className={cn("h2 w-32 rounded-md", {
        //             'bg-red-500' : passwordStrength === 0 ,
        //             'bg-orange-500' : passwordStrength === 1 ,
        //             'bg-yellow-500' : passwordStrength === 2 ,
        //             'bg-green-500' : passwordStrength === 3 ,
        //         })}></div>
        //     ))}
        // </div>
    )

}
export default PasswordStrengthCheck;