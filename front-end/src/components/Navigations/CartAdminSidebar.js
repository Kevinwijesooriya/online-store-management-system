import React from "react";
import './Sidebar.css';
import { CartSidebarData } from '../../Helpers/CartSidebarData';

function Sidebar() {
    return (
        <div className="Sidebar">
            <h3>Cart Managment</h3>
            <ul className="SidebarList">
                {CartSidebarData.map((val, key) => {
                    return (
                        <li key={key}
                            className="row"
                            id={window.location.pathname === val.link ? "active" : ""}
                            onClick={() => { window.location.pathname = val.link }}>
                            {" "}
                            <div id="icon">{val.icon}</div>
                            {" "}
                            <div id="title">{val.title}</div>
                        </li>
                    );
                }
                )}
            </ul>
        </div>

    );
}

export default Sidebar;
