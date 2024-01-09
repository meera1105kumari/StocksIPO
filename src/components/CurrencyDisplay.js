import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './commonStyles.css';

const CurrencyDisplay = () => {
  const [ratesData, setRatesData] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [errorState, setErrorState] = useState(null);

  const fetchRatesData = async () => {
    try {
      setLoadingState(true);
      const response = await axios.get(
        'https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=pk_9cc55ff7bf2148acb10e7592795eaa07'
      );
      setRatesData(response.data);
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      setErrorState('Error fetching exchange rates. Please try again.');
    } finally {
      setLoadingState(false);
    }
  };

  useEffect(() => {
    fetchRatesData(); // Initial data fetch

    const intervalId = setInterval(() => {
      fetchRatesData(); // Fetch data every 10 seconds
    }, 10000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const handleDataRefresh = () => {
    fetchRatesData(); // Manual refresh on button click
  };

  return (
    <div className="container">
      <h2>Currency Exchange Rates</h2>
      {loadingState ? (
        <p>Loading exchange rates...</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Currency Pair</th>
                <th>Last Price</th>
                {/* Add other relevant columns */}
              </tr>
            </thead>
            <tbody>
              {ratesData.map((rate) => (
                <tr key={rate.symbol}>
                  <td>{rate.symbol}</td>
                  <td>{rate.rate}</td>
                  {/* Add other relevant columns */}
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleDataRefresh}>Refresh</button>
          <br />
          <br />
          <Link to="../dashboard">Back to Dashboard</Link>
        </>
      )}
      {errorState && <p style={{ color: 'red' }}>{errorState}</p>}
    </div>
  );
};

export default CurrencyDisplay;
