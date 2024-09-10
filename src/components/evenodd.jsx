import { Button } from 'bootstrap';
import React from 'react';

 const OddEven = () => {
  const arr = [];

  for (let i = 1; i <= 100; i++) {
    arr.push(i);
  }
  
  return (
    <div className="container">
      <div className="row">
        <h1>even or odd:{}</h1>
        {arr.map((number) => (
          <div className="col-2" key={number}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{number}</h5>
                <Button></Button>
                {/* <p className="card-text">{number % 2 === 0 ? 'Even' : 'Odd' }</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OddEven;
