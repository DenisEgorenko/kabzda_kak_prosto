import React, {ChangeEvent, useState} from 'react'
import {ComponentStory} from '@storybook/react';
import {Simulate} from 'react-dom/test-utils';


type InputProps = {

}

export default {
    title: 'input',
}

function Input (props: any) {
    return <input {...props}/>
}

const controlledInputTemplate: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const controlledInput = controlledInputTemplate.bind({});

controlledInput.args = {
    value: ''
};



const uncontrolledInputTemplate: ComponentStory<typeof Input> = (args) => {
    const [value, setValue] = useState("")
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value)
    return <><Input value={value} onChange={onChangeHandler} {...args} /> ---{value}---</>
}

export const unControlledInput = uncontrolledInputTemplate.bind({});





