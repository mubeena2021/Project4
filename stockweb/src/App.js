import React, { useState }  from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


function Mynav(){ 
  return(
<>
<nav className= "container-fluid text-warning bg-dark ">
<div className= "mt-1 p-1">StockApp</div>

<ul className=" d-flex flex-row justify-content-end ">
<li className=" nav-link text-light ">LOGIN</li>
<li className=" nav-link text-light ">SIGNUP</li>
</ul>
</nav>
</>
);
}




function Search(){

  const [stockSymbol, stockQuery] = useState("");


  const findStock = () => {
    console.log("clicked on button");
    };

  const updateQuery = (e)=> {
    stockQuery(e.currentTarget.value.toUpperCase());
    console.log(e.currentTarget.value.toUpperCase());
   };
  
   

  return(
  <>
  <div className=" container-fluid p-3 mt-1 mb-1 d-flex justify-content-center bg-success ">
  <input value ={stockSymbol} onChange={updateQuery} className=" mx-3 px-1 w-75 rounded"placeholder="Search Stock "></input>
  <button  onClick={findStock} className=" w-25 btn btn-dark text-warning">Search</button>
  </div>

  <div className="container-fluid p-1 border border-success text-dark">
  <div className=" stock-box row m-1">
    <div className="col  ">
    Search results
    </div>
  <div className="col ">
  <button className="  mx-3 w-25 btn btn-success text-warning">Buy</button>
  <button className="  w-25 btn btn-danger secondary text-warning">Sell</button>
  </div>
  </div>
  </div>
  </>
  );
  }


function Portfolio(){
return(
<>

<div className="container-fluid p-1 border border-success text-dark">
  
  <div className=" portfolio-box row m-1">
    <div className="col">
     Stock symbol
    </div>
    <div className="col  ">
    Quantity
    </div>
    <div className="col  ">
    Value
    </div>
  <div className="col">
    <button className=" w-50 btn btn-danger secondary text-warning">Sell</button>
  </div>
  </div>

</div>

</>
);
}


function App() {
  return (
<>

<div className="container-fluid row">
<Mynav/>
<Search/>
<Portfolio/>
</div>
</>
);    
}

export default App;
