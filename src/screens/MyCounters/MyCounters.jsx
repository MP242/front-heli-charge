import React, { useEffect, useState } from 'react';
import './MyCounters.scss';
import { Accordion } from '../../composants/Accordion/Accordion';

export const MyCounters = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [AllSessionCounter, setAllSessionCounter] = useState([]);
  const [loading, setLoading] = useState(false);
  const BASE_URL= process.env.REACT_APP_API_URL;

  useEffect(() => {
    console.log("useEffect !!!")
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("user.userID", user.userId)
    setLoading(true);
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      BASE_URL+`/counters/user/${user.userId}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('Get all Session Counter message:', data);
        setAllSessionCounter(data);
        setLoading(false);
      })
      .catch((error) => console.log('error', error));
  }, [user.userID]);

  return (
    <div className="MyCounters">
      {loading && <p>Loading...</p>}
      {AllSessionCounter.map((sessionCounter) => {
        const date = new Date(sessionCounter.created_at);
        const formattedDate = date.toLocaleDateString('fr-FR');

        return (
          <div className="sessionCounter" key={sessionCounter._id}>
            <Accordion
              title={formattedDate}
              counters={sessionCounter.counterSession}
            />
          </div>
        );
      })}
    </div>
  );
};
