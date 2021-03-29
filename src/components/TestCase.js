import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from 'recharts';
import ListCases from './ListCases';
import {useState, useEffect} from 'react';
import './testCase.css';

const renderLineChart = (data,type) => {
    return (
  <AreaChart width={450} height={250} data={data}>
    <Area type="monotone" dataKey={type} stroke="#225792" fill="#225792"/>
    <CartesianGrid stroke="3 3" />
    <XAxis dataKey="name" />
    <YAxis interval="preserveEnd"/>
  </AreaChart>
)};

export default function TestCase(props) {

    const [stepSelected, setStepSelected] = useState(null);
    const [graphData, setGraphData] = useState(null);

    function selectStep(step) {
        setStepSelected(step);
        setGraphData(step.launch_times.map((run,i) => ({
            name: 'Run '+(i+1),
            memory: step.memory[i],
            cpu: step.cpu[i]
        })));
    }

    useEffect(() => {
        setStepSelected(null);
        setGraphData(null);
    }, [props.testCase]);

    return <>
        <div>
            <span className="title">Steps:</span>
            {props.testCase && <div className="step">
                <ListCases cases={props.testCase.test_steps} selectCase={selectStep} keyToDisplay={'step_name'}>
                </ListCases>
            </div>}
            {graphData && <> <div className="graphLeft step">
                <span className="title">CPU:</span>
                {renderLineChart(graphData, 'cpu')}
            </div>
            <div className="graphRight step">
                <span className="title">Memory:</span>
                {renderLineChart(graphData, 'memory')}
            </div></>}
        </div>
        {graphData && <>
            <div className="screenshot">
                <span className="title">Screenshot:</span>
                {<img height="500" src={`./data/${stepSelected.screenshot}`} alt="img"></img>}
            </div>            
        </>}
    </>;
}