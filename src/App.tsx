import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating from "./Components/Rating/Rating";
import OnOff from './Components/OnOff/OnOff';


function App() {
    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>
            <Accordion titleValue={"Menu"} collapsed={false}/>
            <Accordion titleValue={"Sub Menu"} collapsed={true}/>
            Article 1
            <Rating value={0}/>
            Article 2
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <OnOff on={true}/>
            <OnOff on={false}/>
            <OnOff on={true}/>
        </div>
    );
}


function PageTitle(props:any) {
    return (
        <div>{props.title}</div>
    );
}



export default App;
