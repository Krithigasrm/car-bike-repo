
import {DataGrid} from '@material-ui/data-grid'
import { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import authHeader from '..//services/authHeader'

export default function pagination(){

const columns = [
  {field: 'firstname', headerName: 'firstname'},
  {field: 'lastname', headerName: 'lastname', width: 300},
  {field: 'source', headerName: 'source', width: 600}
]

const DataTable = () => {

  const [tableData, setTableData] = useState([])
  // const [data, setData] = useState(userRows);
  const [res, setResult] = useState([]);
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);


  const loadUser = async () => {
    const result = await axios.get(`http://localhost:9000/api/user/get`, config);
    setResult(result.data);
    console.log(result.data)

  };
  useEffect(() => {
    console.log("useeffect");
    loadUser();


  }, []);

  

  const config = {
    headers: authHeader()
  };


  const hist = useHistory();

  const { id } = useParams();
  console.log(id);

  return (
    <div style={{height: 700, width: '100%'}}>
      <DataGrid 
        rows={res}
        columns={columns}
        pageSize={6}
        checkboxSelection
      />
    </div>
  )
}

}