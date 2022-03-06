import React,{useState,useEffect} from "react";
import MaterialTable from 'material-table'
import { Data } from "./utils/data";
import { Edit, Delete, displaySVG } from './svg/D&&E';
const ViewEmployee = () => {

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(Data);
  }, []);

  const handleDelete = (id) => {
    setTableData(tableData.filter((item) => item.id !== id))
  }


  const columns = [
    {title:'S/N',field:'id'},
    {title:'First Name',field:'firstName'},
    {title:'Last Name',field:'lastName'},
    {title:'Roles',field:'role'},
    {title:'NIN',field:'nin'},
    {title:'Email',field:'email'},
    {title:'Annual Salary',field:'annual'},
    {title:'Monthly Salary',field:'month'},
    {title:'Relieves',field:'relieves'}
  ]
  return (
    <div>
      <div style={{marginTop:'1.5rem'}}>
        <MaterialTable columns={columns} data={tableData} options={{
          rowStyle: (data, index) => index % 2 == 0 ? null : { background: 'rgba(101, 156, 240, 0.1)'},paging:true,pageSizeOptions:[9],pageSize:9,paginationType:'stepped',showFirstLastPageButtons:false, sorting: false,detailPanelColumnAlignment:'right'
         }}
         detailPanel={[
        {
          icon: "...",
          tooltip: 'Save User',
          render: rowData => {
        return (
          <div className="Btn-Container">
            <Edit initialValue={rowData} />
            <Delete Delete={() => handleDelete(rowData.id)} />
          </div>
        )
      },
        }
          ]}
          title=''
        />
      </div>
    </div>
  );
};

export default ViewEmployee;
