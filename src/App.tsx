import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating from "./Components/Rating/Rating";
import OnOff from './Components/OnOff/OnOff';


function App() {

    const [onOff1, setOnOff1] = useState(false)
    const [onOff2, setOnOff2] = useState(false)
    const [onOff3, setOnOff3] = useState(false)

    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            <Accordion titleValue={"Menu"}/>
            <Accordion titleValue={"Sub Menu"}/>



            <Rating/>
            <Rating/>
            <Rating/>
            <Rating/>
            <Rating/>

            <OnOff on={onOff1} setOnOff={setOnOff1}/>
            <OnOff on={onOff2} setOnOff={setOnOff2}/>
            <OnOff on={onOff3} setOnOff={setOnOff3}/>
        </div>
    );
}


function PageTitle(props:any) {
    return (
        <div>{props.title}</div>
    );
}



export default App;
