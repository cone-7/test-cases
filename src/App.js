import {useState} from 'react';
import './App.css';
import ListCases from './components/ListCases';
import * as data from './data'
import TestRun from './components/TestRunInfo';
import TestCase from './components/TestCase';

function App() {
  
  const testrun = {
    id: data.test_run_id, 
    name: data.app_name,
    date: data.time_stamp
  };

  function selectCase(caseSelected) {
    setTestSelected(caseSelected)
  }

  const [testSelected, setTestSelected] = useState(null);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* test run */}
      <div className="run">
        <span className="title">Test run</span>
        <TestRun testrun={testrun}></TestRun>
      </div>
      <div className="cases">
        <span className="title">Test Cases</span>
        <ListCases cases={data.test_cases} selectCase={selectCase} keyToDisplay={'test_name'}></ListCases>
      </div>
      <div className="imageContainer">
        {testSelected && <TestCase testCase={testSelected}></TestCase>}
      </div>
    </div>
  );
}

export default App;
