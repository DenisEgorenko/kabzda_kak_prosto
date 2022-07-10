import React, {useState} from 'react';
import '../../App.css';



function UncontrolledOnOff() {

    const [onOff, setOnOff] = useState(false)

    const onStyle = {
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        width: '30px',
        marginLeft: '5px',
        backgroundColor: onOff ? 'green' : ''
    }

    const offStyle = {
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        width: '30px',
        marginLeft: '5px',
        backgroundColor: !onOff ? 'red' : ''
    }

    const indicatorStyle = {
        border: '1px solid black',
        marginLeft: '10px',
        display: 'inline-block',
        height: '15px',
        width: '15px',
        borderRadius: '50%',
        backgroundColor: onOff ? 'green' : 'red'
    }


    return (
        <div className={'onoff'}>
            <div style={{display: 'flex', alignItems: 'center', margin: '3px'}}>

                <div onClick={()=>setOnOff(true)} style={onStyle}>On</div>

                <div onClick={()=>setOnOff(false)} style={offStyle}>Off</div>

                <div style={indicatorStyle}></div>

            </div>
        </div>
    )
}


export default UncontrolledOnOff