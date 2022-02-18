import React from 'react';
import { Table } from "react-bootstrap";

const EsalariesTable = ({items,tableHead,setItems}) => {
 return (
   <div>
     <Table
       className="hover table table-borderless"
       responsive="sm"
       style={{ height: "180px" }}
     >
       <thead className="">
         {tableHead.map((cur, index) => {
           let objValues = Object.values(cur);
           return (
             <tr key={index}>
               {objValues.map((cur, index) => {
                 return <th key={index}>{cur}</th>;
               })}
             </tr>
           );
         })}
       </thead>
       <tbody>
         {items.map((item, index) => {
           const {
             id,
             firstName,
             lastName,
             annual,
             month,
             role,
             nin,
             email,
             relieves,
             select,
           } = item;
           return (
             <tr key={index}>
               <td>{id}</td>
               <td>{firstName}</td>
               <td>{lastName}</td>
               <td>{role}</td>
               <td>{nin}</td>
               <td>{email}</td>
               <td>{annual}</td>
               <td>{month}</td>
               <td>{relieves}</td>
               <td scope="row">
                 <input
                   type="checkbox"
                   checked={select}
                   onChange={(e) => {
                     let checked = e.target.checked;
                     setItems(
                       items.map((value) => {
                         if (id === value.id) {
                           value.select = checked;
                         }
                         return items;
                       })
                     );
                   }}
                 />
               </td>
             </tr>
           );
         })}
       </tbody>       
     </Table>
   </div>
 );
};

export default EsalariesTable;
