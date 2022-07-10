import {ComponentStory} from '@storybook/react';
import React, {useState} from 'react';
import Select from './Select';

export default {
    title: 'Select',
    component: Select
}


const Template: ComponentStory<typeof Select> = (args) => {

    const [items, setItems] = useState([
        {value: '1', title: 'Moscow'},
        {value: '2', title: 'Kiyv'},
        {value: '3', title: 'Minsk'}
    ])
    const [value, setValue] = useState('1')

    return <Select
        items={items}
        value={value}
        setValue={setValue}
    />

}


export const SelectComponent = Template.bind({});


