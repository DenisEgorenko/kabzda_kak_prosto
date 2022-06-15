import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    setCollapsed: (collapsed: boolean)=>void
}

function Accordion(props: AccordionPropsType) {


    return(
        <div>
            <AccordionTitle
                collapsed={props.collapsed}
                collapse={() => props.setCollapsed(!props.collapsed)}
                title={props.titleValue}/>

            {!props.collapsed && <AccordionBody/>}
        </div>
    )

    // if (props.collapsed) {
    //     return (
    //         <div>
    //             <AccordionTitle title={props.titleValue}/>
    //         </div>)
    // } else {
    //     return (
    //         <div>
    //             <AccordionTitle title={props.titleValue}/>
    //             <AccordionBody/>
    //         </div>
    //     );
    // }

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

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}


export default Accordion