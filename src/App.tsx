import React, { useEffect, useState } from 'react';
import './App.css';
import Statistic from 'antd/es/statistic';
import Spin from 'antd/es/spin';

const API = process.env.REACT_APP_API_URL;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [uptime, setUptime] = useState(-1);

  useEffect(() => {
    fetch(`${API}/status`)
      .then(res => res.json())
      .then((res: any) => {
        setIsLoading(false);
        setUptime(res.uptime);
      });
  }, []);

  return (
    <div className="App">
      {isLoading && <Spin size="large" />}
      {!isLoading && <Statistic title="Uptime" value={uptime}></Statistic> }
    </div>
  );
}

export default App;
