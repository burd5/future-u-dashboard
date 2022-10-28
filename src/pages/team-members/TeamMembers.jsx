import './teamMembers.css'
import React from 'react';

import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom"


const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },
  { field: 'title', headerName: 'Title', width: 250},
  { field: 'phoneNumber', headerName: 'Phone Number', width: 200},
  { field: 'caseload', headerName: 'Caseload #', width: 100},
  {
    field: 'email',
    headerName: 'Email',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 300,
  },
  { field: 'action', headerName: 'Action', width: 150, 
        renderCell: (params) => {
            return(
                <Link to={"/" + params.row.lastName}>
                    <button className="userProfile">Profile</button>
                </Link>
            )
        }}
];

const rows = [
  { id: 1, lastName: 'Rindy', firstName: 'Charlie', title: 'Workforce Specialist', phoneNumber: '303-636-1260', email: 'crindy@arapahoegov.com', caseload: 50 },
  { id: 2, lastName: 'Fredeen', firstName: 'Beth', title: 'Workforce Specialist', phoneNumber: '303-636-1260', email: 'bfreeden@arapahoegov.com', caseload: 50 },
  { id: 3, lastName: 'Reifschneider', firstName: 'Larisa', title: 'Workforce Specialist', phoneNumber: '303-636-1260', email: 'bfreeden@arapahoegov.com', caseload: 50 },
  { id: 4, lastName: 'Metz', firstName: 'Korin', title: 'Workforce Specialist', phoneNumber: '303-636-1260', email: 'kmetz@arapahoegov.com', caseload: 50 },
  { id: 6, lastName: 'Huelsmann', firstName: 'Heather', title: 'Workforce Specialist', phoneNumber: '303-636-1260', email: 'hhuelsmann@arapahoegov.com', caseload: 50 },
  { id: 7, lastName: 'Adams', firstName: 'Joshua', title: 'Workforce Specialist', phoneNumber: '303-636-1260', email: 'jadams2@arapahoegov.com', caseload: 50  },
  { id: 8, lastName: 'DeHerrera', firstName: 'Joseph', title: 'Young Adult Supervisor', phoneNumber: '303-636-1260', email: 'jdeherrera@arapahoegov.com', caseload: 0 },
];



function TeamMembers() {
  return (
    <div className="teamMembers" style={{ height: 600 }}>
      <h1 className="teamTitle">WIOA Young Adult Team</h1>
      <DataGrid className="teamTable"
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default TeamMembers
