import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const TableEx = () => {
  const [allPro,setPro] = useState([]);

  let navigate = useNavigate()

    const productData = async () => {
 
        const { data } = await axios.get("http://localhost:4000/face/list");
        setPro(data.data);
        console.log('data',data.data)
      };

    let toEdit = (obj)=>{
      console.log("sdadsdsdas",obj)
      navigate(`/editTable/${obj._id}`)
    }

    let faceDelete = (obj)=>{
      const _id = obj._id
      let confirmBox = window.confirm(`Do you want to delete ${obj.name}?`);
      if(confirmBox){
       axios.post("http://localhost:4000/face/delete",{_id:_id});
       productData();
      }
    }

      useEffect(() => {
        productData();
      }, []); 
  return (
    <>
    <div className='col-md-8 offset-md-2 mt-5'>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th className="text-center">S No.</th>
            <th className="text-center">Name</th>
            <th className="text-center">Face</th>
            <th className="text-center">Edit</th>
            <th className="text-center">Delete</th>
            </tr>
        </thead>
        <tbody>
          {console.log(allPro,"qwertyu")}
                  {allPro?.map((item, i) => {
                    if (allPro.length > 0){
                    return (
                      <>
                        <tr>
                          <td scope="row" className="text-center">
                            {i + 1}
                          </td>
                          <td className="text-center">{item.name}</td>
                          <td className="text-center">{item.face}</td>
                          <td className="text-center">
                            <button onClick={()=>toEdit(item)} className='btn btn-info btn-sm'>
                              Edit
                            </button>
                          </td>
                          <td className="text-center">
                            <button onClick={()=>faceDelete(item)} className='btn btn-danger btn-sm'>
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    )}
                    else{
                      return ("No Data")
                    }
                   })}
                </tbody>
        </Table>
    </div>
    </>
  )
}

export default TableEx