import React, { useState } from 'react'
import Aboute from '../Aboute/Aboute'
export default function Home(props) {
    console.log(props);
    
    const [prodects, setProdect] = useState([{
        id: 1,
        code: '123',
        price: 100,
        count: 10,
        catagory: 'kJDWSKHBw',
        onSale: true
    },{
        id: 2,
        code: '155523',
        price: 555,
        count: 10,
        catagory: 'l,,l,;',
        onSale: false
    },{
        id: 3,
        code: '155523',
        price: 555,
        count: 10,
        catagory: 'l,,l,;',
        onSale: false
    },{
        id: 4,
        code: '155523',
        price: 555,
        count: 10,
        catagory: 'l,,l,;',
        onSale: false
    },{
        id: 5,
        code: '155523',
        price: 555,
        count: 10,
        catagory: 'l,,l,;',
        onSale: false
    },{
        id: 6,
        code: '155523',
        price: 555,
        count: 10,
        catagory: 'l,,l,;',
        onSale: false
    },{
        id: 7,
        code: '155523',
        price: 555,
        count: 10,
        catagory: 'l,,l,;',
        onSale: false
    },{
        id:  8,
        code: '155523',
        price: 555,
        count: 10,
        catagory: 'l,,l,;',
        onSale: false
    }

])

    function deleteProdect(id){
        let myProdect = structuredClone (prodects)
       let newProdect =  myProdect.filter((prodect)=> prodect.id !== id)
    setProdect(newProdect)
        console.log("hiii");
        
    }
    function UpdateProdect(index){
        let myProdect = structuredClone (prodects)
     myProdect[index].count++;
    setProdect(myProdect)
        console.log("siii");
    }
  return (
    <div className='container mx-auto py-4'>
        <div className="row">

        
       
        {prodects.map((ayhaga ,index )=> <Aboute  prodectIndex ={index} homeProdect={ayhaga} deleteProdect={deleteProdect}    UpdateProdect={UpdateProdect}   />)}  
      
            </div>     

                 
        
    </div>
  )
}
