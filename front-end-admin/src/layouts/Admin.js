import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

import AddSalaryPlan from "components/AddSalaryPlan";
import AllSalaryPlans from "components/AllSalaryPlans";
import UpdateSalaryPlan from "components/UpdateSalaryPlan";

import AddBudget from "components/AddBudget";
import AllBudget from "components/AllBudget";
import UpdateBudget from "components/UpdateBudget";

import Additem from "components/Additem";
import Mainitem from "components/Mainitem";
import updateitem from "components/updateitem";
import deleteitem from "components/deleteitem";
import Itemreport from "components/Reports/Itemreport";
import Itemreportpre from "components/Itemreportpre";

// views

import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import Initial from "components/initial";
import AdminLogin from "components/AdminLogin";
import AdminMain from "components/ADminMainPage";
import UserAdminMainHtaml from "components/UsrAdminpage";
import CustomerLogin from "components/CustomerLogin";
import CusRegisterscreen from "components/CusRegisterscreen";
import AdminRegisterscreen from "components/AdminRegisterscreen";
import NoteList from "components/NoteList";
import EditNote from "components/EditNote";
import CreateNote from "components/CreateNote";
import SalPlaReport from "components/Reports/SalPlaReport";
import AllCart from "components/AllCart";
import AdminOrderList from "components/AdminOrderList ";
import OrderReport from "components/Reports/OrderReport";
import ToConfirmOrder from "components/ToConfirmOrder";
import ConfirmedOrderList from "components/ConfirmedOrderList";
import UnconfirmedOrderList from "components/UnconfirmedOrderList";
import CartReport from "components/Reports/CartReport";
import Addadminfeedback from "components/AddAdminfeedback";
import AllAdminfeedback from "components/AllAdminfeedback";
import UpdateAdminfeedback from "components/UpdateAdminfeedback";
import Allinquiry from "components/Allinquiry";
import Inquiryreport from "components/Reports/Inquiryreport";


export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        {/* <SalPlaReport/>

        <PDFViewer>
          <ViewSalaryPlanReport />
        </PDFViewer> */}
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={AdminMain} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            {/* <Redirect from="/admin" to="/admin/dashboard" /> */}

            {/* ================= F I N A N C I A L   M A N A G E M E N T =========================================*/}
            {/* Budget function */}
            <Route path="/admin/budget/add" exact component={AddBudget} />
            <Route path="/admin/budget" exact component={AllBudget} />
            <Route path="/admin/budget/budget" exact component={AllBudget} />
            <Route path="/admin/budget/update/:id" exact component={UpdateBudget} />
            {/* <Redirect from="/admin/budget" to="/admin/budget/" /> */}

            {/* Salary Plan function */}
            <Route path="/admin/salaryplan/add" exact component={AddSalaryPlan} />
            <Route path="/admin/salaryplan" exact component={AllSalaryPlans} />
            <Route path="/admin/salaryplan/salaryplan" exact component={AllSalaryPlans} />
            <Route path="/admin/salaryplan/update/:id" exact component={UpdateSalaryPlan} />
            <Route path="/admin/financialreport" exact component={SalPlaReport} />
            {/* <Redirect from="/admin/salaryplan" to="/admin/salaryplan/" /> */}

            {/* ================= C A R T   M A N A G E M E N T ===================================================*/}
            {/* Budget function */}
            <Route path="/admin/Issuedcarts" exact component={AllCart} />
            <Route path="/admin/Issuedcarts/Issuedcarts" exact component={AllCart} />
            <Route path="/admin/issuedcartsreport" exact component={CartReport} />
            {/* <Redirect from="/admin/issuedcarts" to="/admin/issuedcarts/" /> */}

            {/* ================= S T O C K == M A N A G E M E N T ================================================*/}

            {/* ================= D E L I V E R Y == M A N A G E M E N T ==========================================*/}

            {/* ================= I N Q U I R Y == M A N A G E M E N T ============================================*/}
            <Route path="/admin/allinquiry" exact component={Allinquiry} ></Route>
            <Route path="/admin/inquiryreport" exact component={Inquiryreport} ></Route>

            {/* ================= F E E D B A C K == M A N A G E M E N T ==========================================*/}

            <Route path="/admin/adminfeedback/add" exact component={Addadminfeedback} />
            <Route path="/admin/adminfeedback" exact component={AllAdminfeedback} />
            <Route path="/admin/adminfeedback/adminfeedback" exact component={AllAdminfeedback} />
            <Route path="/admin/adminfeedback/update/:id" exact component={UpdateAdminfeedback} />

            {/* ================= A U T H E N T I C A T I O N == M A N A G E M E N T ==============================*/}
            <Route path="/admin/dashboard" exact component={Initial} />
            <Route path="/admin/Adminlogin" exact component={AdminLogin} />
            <Route path="/admin/AdminMain" exact component={AdminMain} />
            <Route path="/admin/AdminRegister" exact component={AdminRegisterscreen} />
            <Route path="/admin/UserAdminMainHtaml" exact component={UserAdminMainHtaml} />

            <Route path="/admin/noteList" exact component={NoteList} />
            <Route path="/admin/noteEdit/:id" exact component={EditNote} />
            <Route path="/admin/CreateNotes" exact component={CreateNote} />

            <Route path="/admin/Cuslogin" exact component={CustomerLogin} />
            <Route path="/admin/CusRegister" exact component={CusRegisterscreen} />


            

            {/* ================= P R O D U C T == M A N A G E M E N T ============================================*/}
            <Route path="/admin/additem" exact component={Additem} />
            <Route path="/admin/mainitem" exact component={Mainitem} />
            <Route path="/admin/updateitem/:id" exact component={updateitem} />
            <Route path="/admin/deleteitem" exact component={deleteitem} />
            <Route path="/admin/itemreport" exact component={Itemreport} />
            <Route path="/admin/itemreportpre" exact component={Itemreportpre} />


            {/* ================= O R D E R == M A N A G E M E N T ================================================*/}


            <Redirect from="/admin" to="/admin/dashboard" />


            {/* ================= O R D E R == M A N A G E M E N T ============================================*/}
            <Route path="/admin/OrderReport" exact component={OrderReport} />
            <Route path="/admin/confirm/:id" exact component={ToConfirmOrder} />
            <Route path="/admin/order" exact component={AdminOrderList} />
            <Route path="/admin/confirmedOrder" exact component={ConfirmedOrderList} />
            <Route path="/admin/unconfirmedOrder" exact component={UnconfirmedOrderList} />
            <Redirect from="/admin" to="/admin/dashboard" />

          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
