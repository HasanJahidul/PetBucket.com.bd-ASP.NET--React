import React from 'react'
import AdminSidebar from '../layouts/sidebar/AdminSidebar'

const Dashboard = () => {
    return (
        <>
        <AdminSidebar/>  
        <div class="content-container">

<div class="container-fluid">

    <div class="grey-bg container-fluid">
        <section id="minimal-statistics">
            <div class="row">

                <div class="col-12 mt-3 mb-1">
                    <h4 class="text-uppercase">Pet Bucket</h4>
                    <p>
                        {/* @foreach (var item in Model.petbucket_admin)
                        {
                            @item.name
                        } */}
                    </p>
                    <a href="/AdminDetails"><h5 class="danger">Admin Details</h5></a>
                    <h5 class="danger">
                        {/* @foreach (var item in Model.petbucket_admin)
                        {
                            @Html.ActionLink("My Profile", "AdminDetails", new { id = item.id })
                        } */}
                    </h5>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="align-self-center">
                                        <i class="icon-graph success font-large-2 float-left"></i>
                                    </div>
                                    <div class="media-body text-right">
                                        <h3>
                                            {/* @foreach (var item in Model.petbucket_admin)
                                            {
                                                @item.profit
                                            } */}
                                        </h3>
                                        <span>Total Profit</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">

                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h3 class="success">@ViewBag.Tcount</h3>
                                        <span>Total Clients</span>
                                    </div>
                                    <div class="align-self-center">
                                        <i class="icon-user success font-large-2 float-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h3 class="success">@ViewBag.Ccount</h3>
                                        <span>Total Customer</span>
                                    </div>
                                    <div class="align-self-center">
                                        <i class="icon-user success font-large-2 float-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h3 class="success">@ViewBag.Pcount</h3>
                                        <span>Total Pet Sitter</span>
                                    </div>
                                    <div class="align-self-center">
                                        <i class="icon-user success font-large-2 float-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h3 class="success">@ViewBag.Acount</h3>
                                        <span>Total Agency</span>
                                    </div>
                                    <div class="align-self-center">
                                        <i class="icon-user success font-large-2 float-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="align-self-center">
                                        <i class="icon-speech warning font-large-2 float-left"></i>
                                    </div>
                                    <div class="media-body text-right">
                                        <h3>@ViewBag.TRcount</h3>
                                        <span>Total Request</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="align-self-center">
                                        <i class="icon-speech warning font-large-2 float-left"></i>
                                    </div>
                                    <div class="media-body text-right">
                                        <h3>156</h3>
                                        <span>Total Complete Request</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="align-self-center">
                                        <i class="icon-speech warning font-large-2 float-left"></i>
                                    </div>
                                    <div class="media-body text-right">
                                        <h3>@ViewBag.Rcount</h3>
                                        <span>Total Pending Request</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="align-self-center">
                                        <i class="icon-speech warning font-large-2 float-left"></i>
                                    </div>
                                    <div class="media-body text-right">
                                        <h3>23</h3>
                                        <span>Total Cancel Request</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h3 class="success">44.89 %</h3>
                                        <span>Profit Rate</span>
                                    </div>
                                    <div class="align-self-center">
                                        <i class="icon-graph success font-large-2 float-left"></i>
                                    </div>
                                </div>
                                <div class="progress mt-1 mb-0" style={{height: "7px"}}>
                                    <div class="progress-bar bg-success" role="progressbar" style={{width: "60%", "aria-valuenow": "60", "aria-valuemin": "0", "aria-valuemax": "100"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h3 class="primary">80%</h3>
                                        <span>New Customer Joining Rate</span>
                                    </div>
                                    <div class="align-self-center">
                                        <i class="icon-user success font-large-2 float-right"></i>
                                    </div>
                                </div>
                                <div class="progress mt-1 mb-0" style={{height: "7px"}}>
                                    <div class="progress-bar bg-success" role="progressbar" style={{width: "80%", "aria-valuenow": "80", "aria-valuemin": "0", "aria-valuemax": "100"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h3 class="warning">37%</h3>
                                        <span>New Pet Sitter Joining Rate</span>
                                    </div>
                                    <div class="align-self-center">
                                        <i class="icon-user success font-large-2 float-right"></i>
                                    </div>
                                </div>
                                <div class="progress mt-1 mb-0" style={{height: "7px"}}>
                                    <div class="progress-bar bg-success" role="progressbar" style={{width: "35%", "aria-valuenow": "35", "aria-valuemin": "0", "aria-valuemax": "100"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <div class="media d-flex">
                                    <div class="media-body text-left">
                                        <h3 class="danger">40%</h3>
                                        <span>New Agency Joining Rate</span>
                                    </div>
                                    <div class="align-self-center">
                                        <i class="icon-user success font-large-2 float-right"></i>
                                    </div>
                                </div>
                                <div class="progress mt-1 mb-0" style={{height: "7px"}}>
                                    <div class="progress-bar bg-success" role="progressbar" style={{width: "40%", "aria-valuenow": "40", "aria-valuemin": "0", "aria-valuemax": "100"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="stats-subtitle">
            <div class="row">
                <div class="col-12 mt-3 mb-1">
                    <h4 class="text-uppercase">Recent Request Details</h4>
                </div>
            </div>
            <div class="row">
                <div class="table100 ver1">
                    <div class="table100-nextcols">
                        <table>
                            <thead>
                                <tr class="row100 head">
                                    <th class="cell100 column2">Name</th>
                                    <th class="cell100 column3">Email</th>
                                    <th class="cell100 column4">Address</th>
                                    <th class="cell100 column5">Request Date</th>
                                    <th class="cell100 column6">Pet Details</th>
                                    <th class="cell100 column2">Duration</th>
                                    <th class="cell100 column5">Request Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach (var item in Model.petbucket_request_details)
                                {
                                <tr class="row100 body">
                                    <td class="cell100 column2">@item.name</td>
                                    <td class="cell100 column3">@item.email</td>
                                    <td class="cell100 column4">@item.address</td>
                                    <td class="cell100 column5">@item.date</td>
                                    <td class="cell100 column6">@item.petdetails</td>
                                    <td class="cell100 column2">@item.duration</td>
                                    <td class="cell100 column5">@item.requestdetails</td>
                                </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </section>

        <section id="stats-subtitle">
            <div class="row">
                <div class="col-12 mt-3 mb-1">
                    <h4 class="text-uppercase">User Information</h4>
                </div>
            </div>
            <div class="row">

                <div class="col-xl-6 col-md-12">
                    <div class="card overflow-hidden">
                        <div class="card-content">
                            <div class="card-body cleartfix">
                                <h4 style={{"text-align":"center"}}>New Customer</h4>
                                <hr />
                                <div class="media align-items-stretch">
                                    <div class="table100 ver1">
                                        <div class="table100-nextcols">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th class="cell100 column1">ID</th>
                                                        <th class="cell100 column2">Name</th>
                                                        <th class="cell100 column3">Email</th>
                                                        <th class="cell100 column4">Phone Number</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    @foreach (var item in Model.petbucket_customer)
                                                    {
                                                    <tr>
                                                        <td class="cell100 column1">@item.id</td>
                                                        <td class="cell100 column2">@item.name</td>
                                                        <td class="cell100 column3">@item.email</td>
                                                        <td class="cell100 column4">@item.phone</td>
                                                    </tr>
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-6 col-md-12">
                    <div class="card overflow-hidden">
                        <div class="card-content">
                            <div class="card-body cleartfix">
                                <h4 style={{"text-align":"center"}}>New Pet Sitter</h4>
                                <hr />
                                <div class="media align-items-stretch">
                                    <div class="table100 ver1">
                                        <div class="table100-nextcols">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th class="cell100 column1">ID</th>
                                                        <th class="cell100 column2">Name</th>
                                                        <th class="cell100 column3">Email</th>
                                                        <th class="cell100 column4">Phone Number</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    @foreach (var item in Model.petbucket_petsitter)
                                                    {
                                                        <tr>
                                                            <td class="cell100 column1">@item.id</td>
                                                            <td class="cell100 column2">@item.name</td>
                                                            <td class="cell100 column3">@item.email</td>
                                                            <td class="cell100 column4">@item.phone</td>
                                                        </tr>
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-6 col-md-12">
                <div class="card overflow-hidden">
                    <div class="card-content">
                        <div class="card-body cleartfix">
                            <h4 style={{"text-align":"center"}}>New Agency</h4>
                            <hr />
                            <div class="media align-items-stretch">
                                <div class="table100 ver1">
                                    <div class="table100-nextcols">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th class="cell100 column1">ID</th>
                                                    <th class="cell100 column2">Name</th>
                                                    <th class="cell100 column3">Email</th>
                                                    <th class="cell100 column4">Phone Number</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                @foreach (var item in Model.petbucket_agency)
                                                {
                                                    <tr>
                                                        <td class="cell100 column1">@item.id</td>
                                                        <td class="cell100 column2">@item.name</td>
                                                        <td class="cell100 column3">@item.email</td>
                                                        <td class="cell100 column4">@item.phone</td>
                                                    </tr>
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
</div>
</div>
            
        </>
    )
}

export default Dashboard
