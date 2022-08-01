import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useState'
}


function generateData() {
    console.log('generate value')
    return 345354
}

export const Example1 = () => {
    console.log('Example 1')

    const [counter, setCounter] = useState(() => generateData())

    const changer = (state: number) => {
        console.log('changer')
        return state + 1
    }

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}
