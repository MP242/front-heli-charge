import { useState } from 'react';

export function useCreateSessionCounter() {
  const [loading, setLoading] = useState(false);
  const [newSessionCounter, setNewSessionCounter] = useState([]);

  function createSessionCounter(userID, counterSession) {
    setLoading(true);
  
    return fetch('https://server-heli-charge-706f4d31d3fe.herokuapp.com/counters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userID, counterSession }),
    })
    .then((response) => {
      // check if the response was ok, i.e., status code in the range 200-299
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {        
      console.log('Session Counter created message:', data);
      setLoading(false);
      setNewSessionCounter(data);
      return data; 
    })
    .catch((error) => {
      console.error('Error creating Session Counter:', error);
      setLoading(false);
    });
  }
  

  return { loading, newSessionCounter, createSessionCounter };
}
