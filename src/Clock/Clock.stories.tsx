import React, {useState} from 'react';
import {Clock} from './Clock';
import AnalogClock from './AnalogClock';

export default {
    title: 'Clock',
    component: Clock
}

export const BaseExample = () => {

    const [analog, setAnalog] = useState(false)

    return <>

        <button onClick={() => setAnalog(!analog)}>Выбрать Режим</button>

        {analog
            ? <div>
                <AnalogClock/>
            </div>
            : <div>
                <Clock/>
            </div>
        }
    </>
}
