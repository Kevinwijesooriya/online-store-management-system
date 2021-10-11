import React from "react";
import { createPopper } from "@popperjs/core";
import {useDispatch, useSelector} from "react-redux";
import {useEffect,useState} from "react"
import axios from 'axios';
import {logout} from "../../actions/adminaction";
import {Link , useHistory} from 'react-router-dom';

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };


  const history = useHistory();

  const dispatch = useDispatch()
  const cusLogin= useSelector((state) => state.cusLogin);
  const { userInfo } = cusLogin;

  const logoutHandler = () => {
   dispatch(logout());
   history.push("/auth/login");    

  };
   
  const adminid = useSelector((state) => state.cusLogin.userInfo._id);
  const [salaryplan, updateSalaryplan] = useState([]);
const loadsalaryplan = async () => {
      const res = await axios.get
          (`http://localhost:5000/admin/${adminid}`)
      updateSalaryplan(res.data)
  };
  useEffect(() => {
      loadsalaryplan();
  }, []);

  return (
    <>
      <a
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
          <img className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full" src={salaryplan.pic}></img>
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="/admin/profile"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          // onClick={(e) => e.preventDefault()}
        >
          {salaryplan.name}
        </a>
        <a
          href="#"
          onClick = {logoutHandler}
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
    
        >
          Logout
        </a>


      </div>
    </>
  );
};

export default UserDropdown;
