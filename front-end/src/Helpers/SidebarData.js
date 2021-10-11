import React from 'react'
import {BsPersonPlus} from "react-icons/bs"
import {BsFileText} from "react-icons/bs"
import {FaMoneyCheckAlt} from "react-icons/fa"
import {FaAddressBook} from "react-icons/fa"
import { FiFrown } from "react-icons/fi";
import { AiOutlineComment} from "react-icons/ai";
import { AiOutlineLogout} from "react-icons/ai";



export const SidebarData = [
    {
   title:"My Inquiry",
   icon:<FiFrown/>,
   link:"/profile/Myinquriy"
},
{
    title:"My Comment",
    icon:<AiOutlineComment/>,
    link:"/profile/comment"
 },
 {
    title:"My Order",
    icon:<BsFileText/>,
    link:"/profile/orderlist"
 },
 {
   title:"My Addresses",
   icon:<FaAddressBook/>,
   link:"/profile/delivery"
},
{
   title:"Logout",
   icon:<AiOutlineLogout/>,
   link:"/profile/delivery"
},
]






