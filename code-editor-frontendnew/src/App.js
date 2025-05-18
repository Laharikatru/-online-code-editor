import React, { useState } from 'react';
import './App.css';

function App() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const runCode = async () => {
const response = await fetch('http://127.0.0.1:5000/run', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    });
    const result = await response.json();
    setOutput(result.output);
    setError(result.error);
  };

  return (
    <div className="App">
      <h2>Online Code Editor</h2>
      <textarea
        rows="10"
        cols="60"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write Python code here"
      />
      <br />
      <button onClick={runCode}>Run</button>
      <h3>Output:</h3>
      <pre>{output}</pre>
      <h3>Error:</h3>
      <pre>{error}</pre>
    </div>
  );
}

export default App;
