import React, {useState} from 'react';


type itemType = {
    title: string,
    id: string,
    onClick: (id: string) => void
}

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    setCollapsed: (collapsed: boolean)=>void,
    items: Array<itemType>
}

function Accordion(props: AccordionPropsType) {


    return(
        <div>
            <AccordionTitle
                collapsed={props.collapsed}
                collapse={() => props.setCollapsed(!props.collapsed)}
                title={props.titleValue}/>

            {!props.collapsed && <AccordionBody items={props.items}/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string,
    collapse: ()=>void,
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.collapse}>{props.title}</h3>
    );
}

type AccordionBodyPropsType = {
    items: Array<itemType>
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map(item=><li onClick={()=>item.onClick(item.id)} key={item.id}>{item.title}</li>)}
        </ul>
    );
}


export default Accordion