import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './customStyles.css';

const UpcomingEvents = () => {
  const [eventList, setEventList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchDataFromAPI = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        'https://api.iex.cloud/v1/data/CORE/UPCOMING_EVENTS/market?token=pk_5562085d394e46508083d0b87f51c3d8'
      );
      setEventList(response.data);
    } catch (error) {
      console.error('Error fetching event data:', error);
      setErrorMsg('Error fetching event data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();

    const intervalId = setInterval(() => {
      fetchDataFromAPI(); 
    }, 10000);

    return () => clearInterval(intervalId); 
  }, []);

  const handleDataReload = () => {
    fetchDataFromAPI(); 
  };

  return (
    <div className="custom-container">
      <h2>Upcoming Events</h2>
      {isLoading ? (
        <p>Loading event data...</p>
      ) : (
        <>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Event Date</th>
               
              </tr>
            </thead>
            <tbody>
              {eventList.map((event) => (
                <tr key={event.id}>
                  <td>{event.eventName}</td>
                  <td>{event.eventDate}</td>
                 
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleDataReload}>Reload</button>
          <br />
          <br />
          <Link to="../dashboard">Back to Dashboard</Link>
        </>
      )}
      {errorMsg && <p style={{ color: '#FF5733' }}>{errorMsg}</p>}
    </div>
  );
};

export default UpcomingEvents;
