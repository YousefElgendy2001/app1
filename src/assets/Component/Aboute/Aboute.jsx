import React from 'react'

export default function Aboute(props) {
    let {id ,   code , price , count , catagory , onSale} = props.homeProdect   
  return (
    <div className='w-1/4 p-4 col-md-4   '>
        <div className='p-6 position-relative shadow-xl rounded-xl bg-gray-200 text-bg-dark'>

<h4>{props.prodectIndex}</h4>
<h4>Code:{code}</h4>
<h4>Price:{price}</h4>
<h4>Count:{count}</h4>
<h4>Catagory:{catagory}</h4>
<h4>code:{code}</h4>
{onSale && <span className='position-absolute top-0 end-0 bg-danger p-2 '>Sale</span>}
<button onClick={()=>props.deleteProdect(id)} className='btn btn-outline-danger w-100 my-2'>Delete</button>
<button onClick={()=>props.UpdateProdect(props.prodectIndex)} className='btn btn-outline-warning w-100'>Update</button>
        </div>
   
    </div>
  )
}
