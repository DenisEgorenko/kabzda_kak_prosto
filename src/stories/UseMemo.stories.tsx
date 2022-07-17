import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const Example1 = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    let resultB = 1;

    let resultA = useMemo(() => {

        let tempResultA = 1;

        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>

        <div>
            Result for a: {resultA}
        </div>

        <div>
            Result for b: {resultB}
        </div>
    </>
}


const NewMessageCounter = (props: any) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users')
    return <div>{
        props.users.map(u => <div>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const Example2 = () => {
    console.log('example 2')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Denis', 'Viktor', 'Masha'])

    const newArray = useMemo(()=>{
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])


    const addUser = () => {
        const newUsers = [...users, 'sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <button onClick={addUser}>Add user</button>

        <Users users={newArray}/>
    </>
}