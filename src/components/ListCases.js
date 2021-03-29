import {useState, useEffect} from 'react';

export default function ListCases(props) {
    const [selected, setSelected] = useState(null);

    const onclick = (tCase, i) => {
        props.selectCase(tCase);
        setSelected(i);
    }

    useEffect(() => {
        setSelected(null);
    }, [props.cases]);

    const items = props.cases.map((tCase, i) => {
        return <span className={i === selected ? 'selected' : ''} key={i} onClick={() => onclick(tCase, i)}>{tCase[props.keyToDisplay]}</span>
    });
    return <div className="list"> {items} </div>;
}