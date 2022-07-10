import React from 'react';


type onOffType = {
    on: boolean,
    setOnOff: (onOff: boolean) => void
}


function OnOff(props: onOffType) {

    const onStyle = {
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        width: '30px',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : ''
    }

    const offStyle = {
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        width: '30px',
        marginLeft: '5px',
        backgroundColor: !props.on ? 'red' : ''
    }

    const indicatorStyle = {
        border: '1px solid black',
        marginLeft: '10px',
        display: 'inline-block',
        height: '15px',
        width: '15px',
        borderRadius: '50%',
        backgroundColor: props.on ? 'green' : 'red'
    }

    const setOnHandler = () => {props.setOnOff(true)}
    const setOffHandler = () => {props.setOnOff(false)}


    return (
        <div>
            <div style={{display: 'flex', alignItems: 'center', margin: '3px'}}>
                <div onClick={setOnHandler} style={onStyle}>On</div>
                <div onClick={setOffHandler} style={offStyle}>Off</div>
                <div style={indicatorStyle}></div>
            </div>
        </div>
    )
}


export default OnOff