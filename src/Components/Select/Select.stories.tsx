import {ComponentStory} from '@storybook/react';
import React, {useState} from 'react';
import Select from './Select';

export default {
    title: 'Select',
    component: Select
}


const Template: ComponentStory<typeof Select> = (args) => {

    const [items, setItems] = useState(['Moscow', 'Kiyv', 'Minsk'])
    const [selected, setSelected] = useState('Kiyv')

    return <Select
        items={items}
        selected={selected}
        setSelected={setSelected}
    />

}


export const SelectComponent = Template.bind({});


