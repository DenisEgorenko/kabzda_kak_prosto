import React, {useCallback, useEffect, useMemo, useState} from 'react';

export default {
    title: 'useEffectDemo'
}

export const SimpleExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('Example call')

    useEffect(() => {
        console.log('useEffect Every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString()
    }, [counter])


    return <>
        Hello, {counter}

        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>

    </>
}


export const SetTimeoutExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('setTimeoutExample')


    useEffect(() => {

        setInterval(() => {
            console.log('tick')
            setCounter(state => state + 1)
        }, 1000)

    }, [])

    return <>
        Hello, {counter}

        {/*<button onClick={() => setFake(fake + 1)}>+</button>*/}
        {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}

    </>
}


export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)

    console.log('Component Rendered ' + counter)


    useEffect(() => {
        console.log('effect occurred ' + counter)

        return () => {
            console.log('Reset Effect ' + counter)
        }
    }, [counter])

    return <>
        Hello, counter: {counter}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>

    </>
}


export const KeysTrackerExample = () => {

    const [text, setText] = useState('')

    console.log('Component Rendered with' + text)


    useEffect(() => {
        window.document.addEventListener('keypress', (e) => {
            console.log(e.code)
            setText((state) => state + e.key)
        })
    }, [])

    return <>
        typed text: {text}
    </>
}