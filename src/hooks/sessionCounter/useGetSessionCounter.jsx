import {useState} from 'react'

export const useGetSessionCounter = () => {
    const [loading, setLoading] = useState(false);
    const [AllSessionCounter, setAllSessionCounter] = useState([]);

    function getAllSessionCounter(userID) {
        setLoading(true);
      
        return fetch(`https://server-heli-charge-706f4d31d3fe.herokuapp.com/counters/user/${userID}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },          
        })
        .then((response) => {          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {        
          console.log('Get all Session Counter message:', data);
          setLoading(false);
          setAllSessionCounter(data);
          return data; 
        })
        .catch((error) => {
          console.error('Error get all Session Counter:', error);
          setLoading(false);
        });
      }
      
    
      return { loading, AllSessionCounter, getAllSessionCounter };
}
