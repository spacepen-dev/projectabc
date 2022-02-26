import React, {useState,useEffect} from "react";
import { heading, Data } from "./utils/data";
import { Container, Form, Button } from "react-bootstrap";
import MaterialTable from 'material-table'
import { colors } from "@material-ui/core";
const EmployeeSalariesPage = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(Data);
  }, []);


  const columns = [
    {title:'S/N',field:'id'},
    {title:'First Name',field:'firstName'},
    {title:'Last Name',field:'lastName'},
    {title:'Roles',field:'role'},
    {title:'National Identity Number',field:'nin'},
    {title:'Email',field:'email'},
    {title:'Annual Gross Salary',field:'annual'},
    {title:'Monthly Gross Salary',field:'month'},
    {title:'Relieves',field:'relieves'}
  ]


  return (
    <div>
      <div className='paySelect'>
        <Form className='form'>
          <Form.Group className='mb-3 form-group' controlId='formSelect'>
            <Form.Label>Month</Form.Label>
            <select size='sm'>
              <option value='Jan'>January</option>
              <option value='Feb'>February</option>
              <option value='March'>March</option>
              <option value='April'>April</option>
              <option value='May'>May</option>
              <option value='June'>June</option>
              <option value='July'>July</option>
              <option value='August'>August</option>
              <option value='Sept'>September</option>
              <option value='Oct'>October</option>
              <option value='Nov'>November</option>
              <option value='Dec'>December</option>
            </select>
          </Form.Group>
          <Form.Group className='mb-3 form-group' controlId='formSelect'>
            <Form.Label>Year</Form.Label>
            <select size='sm'>
              <option value='21'>2021</option>
              <option value='22'>2022</option>
              <option value='23'>2023</option>
              <option value='24'>2024</option>
              <option value='25'>2025</option>
              <option value='26'>2026</option>
              <option value='27'>2027</option>
              <option value='28'>2028</option>
              <option value='29'>2029</option>
              <option value='30'>2030</option>
            </select>
          </Form.Group>
        </Form>
        <div className='pBtn'>
          <Button type='submit' className='payBtn py-2 px-3'>
            Pay employees
          </Button>
        </div>
      </div>
      <div className=' mt-5'>
        <MaterialTable columns={columns} data={tableData} components={{
          Toolbar: "false"
        }} options={{
          selection: true, selectionProps: rowData => ({
          color:'primary'
        }),headerSelectionProps:{color:'primary'} ,headerStyle: {
          backgroundColor: '#01579b',
            color: '#FFF',
            fontSize:'10px',
           maxHeight:"5px",
            fontWeight:'700'
          },
          paging:true,pageSizeOptions:[5,10,15,20],pageSize:10,paginationType:'stepped',showFirstLastPageButtons:false
      }}/>
      </div>
    </div>
  );
};

export default EmployeeSalariesPage;
