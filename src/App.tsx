import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import UncontrolledRating from "./Components/Rating/UncontrolledRating";
import OnOff from './Components/OnOff/OnOff';
import Rating, {ratingValueType} from './Components/Rating/Rating';
import UncontrolledAccordion from './Components/Accordion/UncontrolledAccordion';
import UncontrolledOnOff from './Components/OnOff/UncontrolledOnOff';


function App() {

    const [onOff1, setOnOff1] = useState(false)
    const [onOff2, setOnOff2] = useState(false)
    const [onOff3, setOnOff3] = useState(false)


    let [rating, setRating] = useState<ratingValueType>(2)
    let [collapsed, setCollapsed] = useState<boolean>(false)


    return (
        <div className={'wrapper'}>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My friends"}/>


            {/*<UncontrolledAccordion titleValue={"Menu"}/>*/}
            {/*<UncontrolledAccordion titleValue={"Sub Menu"}/>*/}

            <Accordion
                titleValue={'Controlled Accordion'}
                collapsed={collapsed}
                setCollapsed={setCollapsed}
            />


            <Rating value = {rating} setRating = {setRating}/>


            {/*<UncontrolledOnOff/>*/}

            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledRating/>*/}

            <div className={'onoff'}>
                <OnOff on={onOff1} setOnOff={setOnOff1}/>
                <OnOff on={onOff2} setOnOff={setOnOff2}/>
                <OnOff on={onOff3} setOnOff={setOnOff3}/>
            </div>
        </div>
    );
}


function PageTitle(props:any) {
    return (
        <div>{props.title}</div>
    );
}



export default App;
