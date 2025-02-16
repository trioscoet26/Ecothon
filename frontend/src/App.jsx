import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/hello')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="app">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
