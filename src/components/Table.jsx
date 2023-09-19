import { Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react';
import Navbar from './Navbar';
import SideBar from './SideBar';

const DummyTable = () => {
  const columns = ['ID', 'userName', 'name', 'email' , 'role' , 'status' , 'action'];

  const [dummyData, setDummyData] = useState([
    { id: 1, username: 'John Doe', name: 'jhoe', email: 'Ne@gmail.com',role:'output only' ,status:'hshhhh' , action:''  },
    { id: 2, username: 'Jane Smith', name: 'jhoe', email: 'Los A@gmail.com',role:'output only',status:'hshhhh' , action:'' },
    { id: 3, username: 'Alice Johnson', name: 'jhoe', email: 'C@gmail.com',role:'output only',status:'hshhhh' ,action:'' },
    // ... more data
  ]);

  const [newData, setNewData] = useState({ id: '', username: '', name: '', email: '',role:'', status:'' , action:'' });

  const handleAddData = () => {
    if (newData.id && newData.name && newData.age && newData.location) {
      setDummyData([...dummyData, newData]);
      setNewData({ id: '',username:'', name: '',email:'', role: '', status: '' , action:'' });
    }
  };

  
    return (
      <>
      <Navbar />
      <div style={{ display: "flex", alignItems: "flex-start" }}>
      <SideBar />
        <TableContainer component={Paper} sx={{width:'1040px'}}>
          <Table>
          <TableHead sx={{background:'black'}}>
          <TableRow>
            {columns.map((column) => (
              <TableCell sx={{color:'white'}} key={column}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
            <TableBody>
              {dummyData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.username}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell><Switch  /></TableCell>
                  <TableCell>{row.action}</TableCell>
                </TableRow>
              ))}
             
            </TableBody>
          </Table>
        </TableContainer>
        </div>
        </>
      );
      
};

export default DummyTable;




//  {/* <TableRow>
//                 <TableCell>
//                   <input
//                     type="text"
//                     value={newData.id}
//                     onChange={(e) => setNewData({ ...newData, id: e.target.value })}
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <input
//                     type="text"
//                     value={newData.username}
//                     onChange={(e) => setNewData({ ...newData, name: e.target.value })}
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <input
//                     type="number"
//                     value={newData.name}
//                     onChange={(e) => setNewData({ ...newData, age: e.target.value })}
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <input
//                     type="text"
//                     value={newData.email}
//                     onChange={(e) => setNewData({ ...newData, location: e.target.value })}
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <input
//                     type="text"
//                     value={newData.role}
//                     onChange={(e) => setNewData({ ...newData, location: e.target.value })}
//                   />
//                 </TableCell>
//                 <TableCell>
//                   <input
//                     type="text"
//                     value={newData.status}
//                     onChange={(e) => setNewData({ ...newData, location: e.target.value })}
//                   />
//                 </TableCell>
//                 <TableCell sx={{display:'flex'}}>
//                   <button onClick={handleAddData}>Add</button>
//                   <button onClick={handleAddData}>edit</button>
//                   <button onClick={handleAddData}>delete</button>
//                 </TableCell>
//               </TableRow> */}