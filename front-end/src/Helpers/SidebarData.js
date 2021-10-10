import React from 'react'
import {BsPersonPlus} from "react-icons/bs"
import {BsFileText} from "react-icons/bs"
import {FaMoneyCheckAlt} from "react-icons/fa"
import {CgProfile} from "react-icons/cg"



export const SidebarData = [
    {
   title:"My Inquiry",
   icon:<BsPersonPlus/>,
   link:"/profile/delivery"
},
{
    title:"My Comment",
    icon:<FaMoneyCheckAlt/>,
    link:"/profile/comment"
 },
 {
    title:"My Order",
    icon:<BsFileText/>,
    link:"/profile/orderlist"
 },
 {
   title:"My Addresses",
   icon:<FaMoneyCheckAlt/>,
   link:"/profile/delivery"
},
{
   title:"Logout",
   icon:<FaMoneyCheckAlt/>,
   link:"/profile/delivery"
},
{
   title:"Profile",
   icon:<CgProfile/>,
   link:"/profile"
},
]






