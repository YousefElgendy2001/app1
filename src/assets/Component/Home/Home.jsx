import React, { useState } from 'react'
import Aboute from '../Aboute/Aboute'
export default function Home(props) {
    console.log(props);
    
    const [prodects, setProdect] = useState([{
        id: 1,
        code: '155521',
        price: 100,
        count: 10,
        catagory: 'kJDWSKHBw',
        onSale: true
    },{
        id: 2,
        code: '155522',
        price: 200,
        count: 10,
        catagory: 'aaaaaaaaaaaaa',
        onSale: true
    },{
        id: 3,
        code: '155523',
        price: 300,
        count: 10,
        catagory: 'aaaaaaaaaaaaa',
        onSale: false
    },{
        id: 4,
        code: '155524',
        price: 400,
        count: 10,
        catagory: 'aaaaaaaaaaaaa',
        onSale: false
    },{
        id: 5,
        code: '155525',
        price: 500,
        count: 10,
        catagory: 'aaaaaaaaaaaaa',
        onSale: false
    },{
        id: 6,
        code: '155526',
        price: 600,
        count: 10,
        catagory: 'aaaaaaaaaaaaa',
        onSale: false
    },{
        id: 7,
        code: '155527',
        price: 700,
        count: 10,
        catagory: 'aaaaaaaaaaaaa',
        onSale: false
    },{
        id:  8,
        code: '155528',
        price: 800,
        count: 10,
        catagory: 'jjjjjj',
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
