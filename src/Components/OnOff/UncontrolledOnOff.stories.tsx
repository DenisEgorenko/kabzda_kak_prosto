import React, {useState} from 'react';
import OnOff from './OnOff';
import {action} from '@storybook/addon-actions';
import UncontrolledOnOff from './UncontrolledOnOff';

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

const callback = action("On Off clicked")

export const OnOffMode = () => <UncontrolledOnOff/>
