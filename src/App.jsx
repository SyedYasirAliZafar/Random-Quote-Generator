import { useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState("");

 async function fetchQuote(){
 try{
  const res = await fetch('https://api.adviceSlip.com/advice');
    const data = await res.json();
    console.log(data);
    setQuote(data.slip.advice);
 }  
  catch(error){
    console.log("Error in fetching the Quote ", error);
    setQuote("Failed to fetch the Quote");
  }
}

  return (
    <div class="container">
    <h1>Random Quote Generator</h1>
    <div className ="quote-box">
      <p id="quote">{quote}</p>
    </div>
    <button id="new-quote" onClick={fetchQuote} >Generate Quote</button>
  </div>
  )
}

export default App
