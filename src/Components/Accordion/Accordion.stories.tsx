import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import Accordion from './Accordion';
import {ComponentStory} from '@storybook/react';
import {Button} from '../../stories/Button';

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action("Collapsed clicked")

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;


export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    titleValue: "Hello",
    collapsed: true,
    setCollapsed: callback
};

export const UncollapsedMode = Template.bind({});
UncollapsedMode.args = {
    titleValue: "Hello",
    collapsed: false,
    setCollapsed: callback
};



const AccordionChangingTemplate: ComponentStory<typeof Accordion> = (args) => {

    const [collapsed, setCollapsed] = useState(true)

    return <Accordion {...args} collapsed={collapsed} setCollapsed={()=>setCollapsed(!collapsed)}/>
};

export const AccordionChanging = AccordionChangingTemplate.bind({});
AccordionChanging.args = {
    titleValue: "Hello",
};

