import React, {useEffect, useState} from 'react'

type Props = {}

const getRightString = (number: number) => {
    return number < 10 ? '0' + number : number
}

export const Clock = (props: Props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => {
            setDate(new Date())
            console.log('tick')
        }, 1000)

        return () => clearInterval(id)
    }, [])

    return <>
        <span>{getRightString(date.getHours())}</span>:
        <span>{getRightString(date.getMinutes())}</span>:
        <span>{getRightString(date.getSeconds())}</span>
    </>
}

