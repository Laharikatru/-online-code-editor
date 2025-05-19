import React, { useState } from 'react';
import './App.css';
import API_BASE_URL from './api';

function App() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleRunCode = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/run`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      setOutput(data.output || 'No output returned');
    } catch (error) {
      setOutput('Error running code.');
      console.error('Execution error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Online Code Editor</h1>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here..."
        rows={10}
        cols={60}
      />
      <br />
      <button onClick={handleRunCode}>Run Code</button>
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
}

export default App;
