import React, {useState} from 'react';
import OnOff from './OnOff';
import {action} from '@storybook/addon-actions';

export default {
    title: 'OnOff',
    component: OnOff
}

const callback = action("On Off clicked")

export const OnMode = () => <OnOff on={true} setOnOff={callback} />
export const OffMode = () => <OnOff on={false} setOnOff={callback} />


export const ModeChanging = () => {

    const [onOff, setOnOff] = useState(false)

    return <OnOff on={onOff} setOnOff={setOnOff}/>
}