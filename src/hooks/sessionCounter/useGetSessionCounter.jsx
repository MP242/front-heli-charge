import {useState} from 'react'

export const useGetSessionCounter = () => {
    const [loading, setLoading] = useState(false);
    const [AllSessionCounter, setAllSessionCounter] = useState([]);
    const BASE_URL = process.env.REACT_APP_API_URL;

    function getAllSessionCounter(userID) {
        setLoading(true);
      
        return fetch(BASE_URL+`/counters/user/${userID}`, {
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
