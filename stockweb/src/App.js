import React, {  useState }  from 'react'
//import ReactDOM from 'react-dom'
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
  const [results, setResults] = useState({symbol: '', quantity: '', price: '' , value:''});
  const [quantity, setQuantity] = useState("");
  const[ value, setValue ] = useState("");
  

/// fetch
   const findStock = async () => {
     let resp = await fetch(`http://localhost:3002/api/search/${stockSymbol}`);
     console.log(resp);
     let data = await  resp.json();
     console.log(data);
     setResults({symbol: stockSymbol, quantity: quantity, price: data.price, value: value});
     setValue( data.price * quantity)
    
}

//ENTER KEY FOR SEARCH
const keyPressed = ({ key }) => {
  if (key === "Enter") {
   findStock()
  }
}


//BUY STOCKS
const buyStock = async () => {
  let info = {symbol: stockSymbol, quantity: quantity, price: results.price , value: value}
  await fetch('http://localhost:3002/api/:buy',  {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
  })
  .then(response => response.json(response))
 .then(data => {
   console.log('Success:', data);
})
 .catch((error) => {
  console.error('Error:', error);
 });

setQuantity('');
setResults('');
stockQuery('');
setValue('')
};


const updateQuery = (e) => {
  stockQuery(e.currentTarget.value.toUpperCase());
  console.log(e.currentTarget.value.toUpperCase());
};
  

  return(
  <>
  <div className= "container-fluid searchBox p-4 d-flex flex-column justify-content-center bg-success rounded">
    <input value ={stockSymbol} onChange={updateQuery} onKeyPress={keyPressed} className = " search-Input  align-self-center w-50 mb-2 mx-2 px-1 rounded  " placeholder ="Stock Symbol"></input>
     <input value = {quantity} onChange={(e) => setQuantity(e.currentTarget.value)} type ="number" min="1" max="750"className = "search-Input  w-50 align-self-center mb-2 mx-2 px-1 rounded " type ="number" placeholder=" Quantity"></input>

    <button onClick={findStock} className=" align-self-center w-50 btn btn-dark text-warning">Search</button>
  </div> 

  <div className="container-fluid col mt-1 rounded bg-success">
     <div className=" m-3 p-1 text-light"> 
       <div className="buyBox row justify-content-center align-items-center"> 
          <h4 className="col-2 text-warning"> {results.symbol} </h4>  
          <h6 className="col-2">{quantity}</h6>
          <h6 className="col-2"> {results.price}</h6>  
          <h6 className="col-2">{value}</h6>  

          <button onClick={buyStock} className=" col-2 w-25 btn btn-dark text-warning"> Buy</button> 
       </div>
      </div>
  </div>
  </>
  );}


function Portfolio(){

const [allStocks, queryAllStocks] = useState([]);

 const grabPortfolio = async() => { 

 await fetch('http://localhost:3002/api/portfolio')
  .then ((response)  => response.json())
  .then((json) => { console.log(json[0]);
  queryAllStocks(json[0]);       
  });
 };


const sellStock = async (item) =>{
 let i= {symbol: item.symbol, quantity: item.quantity, price: item.price, value: item.value}

  console.log(i.symbol)
  await fetch(`'http://localhost:3002/api/portfolio/${i.symbol}'`,
 {
  method: "DELETE",
  headers: {
    'Content-Type':'application/json'
  },
  body: JSON.stringify(i.symbol)
})
.then ((response)  => response.json())
  .then((json) => { console.log(json)
.catch(err => console.log(err))
  })
};


return(
<>
<div className="container-fluid w-75 mt-3 bg-light border border-success text-dark rounded ">
 
    <div className=" portfolio-box p-2 "> 
    <button  onClick={grabPortfolio} className="container-fluid mb-1 btn text-white bg-danger rounded">CLICK FOR PORTFOLIO</button> 

    {allStocks.map((item, index) => (
          <div className =" stockList justify-content-end row border border-white bg-dark p-2 rounded" key={index}>
          <div className="  col-3 text-warning justify-content-center align-self-center ">Symbol: {item.symbol}</div>
          <div className="  col-3 text-light align-self-center"># {item.quantity}</div>
          <div className="  col-3  text-light align-self-center">$ {item.price}</div>     
          <div className="  col-3  text-light align-self-center">Value: $ {item.value}</div>     

        <button onClick = {sellStock.bind(this,item)}  className="w-25 mt-2 btn btn-success text-warning "> Sell</button>
        </div>          
          ))}
    </div>
  </div>
</>
)}


function App() {
  return (
<>
<Mynav/>
<div className=" container-fluid d-flex flex-column ">
<Search/>
<Portfolio/>
</div>
</>
);    
}

export default App;
