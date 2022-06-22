import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import UncontrolledAccordion from './UncontrolledAccordion';

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion
}

const callback = action("Collapsed clicked")

export const UnAccordion = () => <UncontrolledAccordion titleValue={"Hello"}  />
