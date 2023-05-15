import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const EditTable = () => {

    let navigate = useNavigate();

    let param = useParams();
    let _id = param._id

    let [table, setTable] = useState({
        name:"",
        face:""
    });

    let getData = async ()=>{
        await axios.get(`http://localhost:4000/face/faceById/${_id}`).then(result=>{
            setTable(result.data.data[0]) 
        },[])
    }

    let updateFace = ()=>{
        axios.post(`http://localhost:4000/face/update`,table).then(result=>{
            navigate('/table');
 
        },[])
    }



    useEffect(()=>{
        getData()
    },[])

    // let submit = ()=>{
    //     axios.post("http://localhost:4000/face/store",table).then(result=>{
    //         console.log(result,"result1234567890")
    //     })
    // }
    return (
    
        <>
        <div className='col-md-8 offset-md-2 mt-5'>
        <div className='container my-4'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 text-center'>
                Edit Face
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
                <button className='form-control btn btn-success' onClick={updateFace}>Submit</button>
                </div>
            </div>
        </div>
        </div>
        </>
      )
}

export default EditTable