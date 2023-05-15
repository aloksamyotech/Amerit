import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../Nav/navbar'



const AddTable = () => {
    let navigate = useNavigate();
    let [table, setTable] = useState({
        name:"",
        face:""
    })

    let submit = ()=>{
        axios.post("http://localhost:4000/face/store",table).then(result=>{
            console.log(result,"result1234567890");
            // setTable(
            //     {
            //         name:"",
            //         face:""
            //     }
            // )
            navigate('/table');
        })
    }
  return (
    
    <>
    <div className='col-md-8 offset-md-2 mt-5'>
    <div className='container my-4'>
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
            <span className='text-center'>ADD Face</span>
            <br />
            <br />
                <div className='form-group'>
                    <label>Name</label>
                    <input type='text' value={table.name} onChange={(event)=>setTable({...table, name:event.target.value})} className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Face</label>
                    <input type='text' value={table.face} onChange={(event)=>setTable({...table, face:event.target.value})} className='form-control' />
                </div>
            <br />
            <button className='form-control btn btn-success' onClick={submit}>Submit</button>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default AddTable