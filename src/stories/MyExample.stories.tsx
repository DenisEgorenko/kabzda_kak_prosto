import React, {useMemo, useState} from "react";
import Select from "../Components/Select/Select";

export default {
    title: 'MyExample'
}


export const MyExample1 = () => {

    console.log('My example 1')

    const [counter, setCounter] = useState(0)

    const [items, setItems] = useState([
        {value: '1', country: 'Russia', title: 'Moscow', people: 10000000},
        {value: '2', country: 'Ukraine', title: 'Kiyv', people: 3000000},
        {value: '3', country: 'Belarus', title: 'Minsk', people: 2000000},
        {value: '4', country: 'Russia', title: 'Taganrog', people: 300000},
        {value: '5', country: 'Ukraine', title: 'Lviv', people: 500000},
        {value: '6', country: 'Belarus', title: 'Borovichi', people: 100000},
        {value: '7', country: 'Russia', title: 'SP', people: 5000000},
        {value: '8', country: 'Ukraine', title: 'Harkiv', people: 1000000},
        {value: '9', country: 'Belarus', title: 'Homel', people: 400000},

    ])

    const [value1, setValue1] = useState('1')
    const [value2, setValue2] = useState('2')
    const [value3, setValue3] = useState('3')

    const newArray1 = useMemo(() => {
        console.log('Russia')
        return items.filter(u => u.country === 'Russia')
    }, [value1])

    const newArray2 = useMemo(() => {
        console.log('people')
        return items.filter(u => u.people >= 1000000)
    }, [value2])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {counter}

        <Select
            items={newArray1}
            value={value1}
            setValue={setValue1}
        />

        <Select
            items={newArray2}
            value={value2}
            setValue={setValue2}
        />

        <Select
            items={items}
            value={value3}
            setValue={setValue3}
        />
    </>
}