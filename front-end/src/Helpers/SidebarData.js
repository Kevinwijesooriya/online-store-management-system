import React from 'react'
import {BsPersonPlus} from "react-icons/bs"
import {BsFileText} from "react-icons/bs"
import {FaMoneyCheckAlt} from "react-icons/fa"



export const SidebarData = [
    {
   title:"Salary Plans",
   icon:<BsPersonPlus/>,
   link:"/salaryplan"
},
{
    title:"Monthly Budget",
    icon:<FaMoneyCheckAlt/>,
    link:"/budget"
 },
 {
    title:"Create Report",
    icon:<BsFileText/>,
    link:"/financialreport"
 },
]






