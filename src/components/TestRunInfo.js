import './testRun.css';

export default function TestRun(props){
    return <div>
        <span>ID: {props.testrun.id}</span>
        <span>App name: {props.testrun.name}</span>
        <span>Date: {props.testrun.date}</span>
    </div>
}