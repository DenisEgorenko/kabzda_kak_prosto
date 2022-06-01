import React from 'react';


type onOffType = {
    on: boolean
}


function OnOff(props: onOffType) {
    return (
        <div>
            {props.on ?
                <div>
                    <div style={{display: 'inline-block', backgroundColor: 'green', width: '30px'}}>On</div>
                    <div style={{display: 'inline-block', width: '30px'}}>Off</div>
                    <div style={{display: 'inline-block', height: "20px", width: '20px', borderRadius: "50%", backgroundColor: 'green' }}></div>
                </div>
                : <div>
                    <div style={{display: 'inline-block', width: '30px'}}>On</div>
                    <div style={{display: 'inline-block', width: '30px', backgroundColor: 'red'}}>Off</div>
                    <div style={{alignSelf: "end", display: 'inline-block', height: "20px", width: '20px', borderRadius: "50%", backgroundColor: 'red' }}></div>
                </div>
            }
        </div>
    )
}


export default OnOff