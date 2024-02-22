
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountedAmount, setDiscountedAmount] = useState(0);
  const [isCalculatePressed, setIsCalculatePressed] = useState(false);

  const calculate = (e) => {
    const output = amount - (amount * discount) / 100;
    console.log(output);
    setDiscountedAmount(output.toFixed(2));
    setIsCalculatePressed(true);
  };

  const reset = (e) => {
    setAmount(0);
    setDiscount(0);
    setDiscountedAmount(0);
    setIsCalculatePressed(false);
  };

  return (
    <div className="App">
      <br /><br /><br /><br />
      <div className="container">
        <div className="left-section">
          {/* Change the image based on the calculate button press */}
          {isCalculatePressed ? (
            <>
              <img src="https://i.pinimg.com/originals/c0/a4/ce/c0a4ce21e959bba78e7cc0d3ed02f781.gif" alt="Another Placeholder" />
              <p style={{fontFamily:"cursive",color:"black",fontWeight:"bold"}}>You saved {amount-discountedAmount} !</p>
            </>
          ) : (
            <img src="https://img.freepik.com/premium-vector/young-man-with-gesture-calculator-half-body-ok_81698-1515.jpg" alt="Placeholder" />
          )}
        </div>
        <div className="right-section">
          <h1>Discount Calculator</h1>

          <div className="form">
            <form>
              <div className="input">
                <TextField
                  id="outlined-basic"
                  label="Amount"
                  value={amount || ""}
                  variant="outlined"
                  onChange={(e) => setAmount(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="Discount (%)"
                  value={discount || ""}
                  variant="outlined"
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </div>
            </form>
          </div>

          <div className="total">
            <h2 style={{fontWeight:"bold"}}>&#8377;{discountedAmount}</h2>
            <p style={{fontFamily:"inherit",color:"black",fontWeight:"bolder"}}>Amount after discount</p>
          </div>

          <div className="button">
            <Button variant="contained" style={{backgroundColor:"rgb(70, 70, 129)"}} onClick={(e) => calculate(e)}>
              Calculate
            </Button>
            <Button variant="contained" style={{backgroundColor:"rgb(70, 70, 129)"}} onClick={(e) => reset(e)}>
              Clear
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
