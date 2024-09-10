import React, { useMemo } from 'react';

export function Example({ number }) {

  

  const result = useMemo(() => {
    
    let sum = 0;
    for (let i = 0; i < 10000000; i++) {
      sum += number;
    }
   
    return sum;
  }, [number]);

  
  return (
    <>
  <div>Result: {result}</div>
  </>
);
}
