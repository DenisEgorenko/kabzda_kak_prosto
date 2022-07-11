import React, {useReducer, useState} from 'react';

type AccordionPropsType = {
    titleValue: string,
}


type actionType = {
    type: string,

}

export const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED';


export type stateType = {
    collapsed: boolean
}

export const reducer = (state: stateType, action: actionType): stateType => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return {...state, collapsed: !state.collapsed}

        default:
            throw new Error('Bad action type')
            return {...state}
    }
}

function UncontrolledAccordion(props: AccordionPropsType) {

    // const [collapsed, setCollapsed] = useState(false)

    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            <AccordionTitle collapsed={state.collapsed} collapse={() => dispatch({type: TOGGLE_CONSTANT})}
                            title={props.titleValue}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )

}

type AccordionTitlePropsType = {
    title: string,
    collapse: () => void,
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


export default UncontrolledAccordion