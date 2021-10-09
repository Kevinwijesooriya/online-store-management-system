import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { PDFViewer } from '@react-pdf/renderer';

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

import ViewSalaryPlanReport from "components/Reports/ViewSalaryPlanReport";

// views

import Dashboard from "views/admin/Dashboard.js";
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
            <Route path="/admin/issuedcarts" exact component={AllCart} />
            <Route path="/admin/issuedcarts/issuedcarts" exact component={AllCart} />
            {/* <Route path="/admin/issuedcartsreport" exact component={IssuedCartsReport} /> */}
            {/* <Redirect from="/admin/issuedcarts" to="/admin/issuedcarts/" /> */}

            {/* ================= S T O C K == M A N A G E M E N T ================================================*/}

            {/* ================= D E L I V E R Y == M A N A G E M E N T ==========================================*/}

            {/* ================= I N Q U I R Y == M A N A G E M E N T ============================================*/}

            {/* ================= F E E D B A C K == M A N A G E M E N T ==========================================*/}

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

            <Redirect from="/admin" to="/admin/dashboard" />

            {/* ================= P R O D U C T == M A N A G E M E N T ============================================*/}

          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}