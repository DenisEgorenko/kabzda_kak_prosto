import React, {useCallback, useMemo, useState} from "react";

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



const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret')
    return <div>{
        props.users.map(u => <div>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)

export const Example2 = () => {
    console.log('example 2')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Denis', 'Viktor', 'Masha'])

    const newArray = useMemo(() => {
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





const BooksSecret = (props: { books: Array<string>, addBook: () => void, }) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
        {props.books.map((book, i) => <div key={i}>{book}</div>)}
    </div>
}
const Books = React.memo(BooksSecret)

export const likeUseCallback = () => {
    console.log('likeUseCallback')

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS'])

    const newArray = useMemo(() => {
        return books.filter(b => b.toLowerCase().indexOf('a') > -1)
    }, [books])

    const addBook = () => {
        const newBook = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBook)
    }

    const memorizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            const newBook = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBook)
        }
    }, [books])


    const memorizedAddBook2 = useCallback(() => {
        const newBook = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBook)
        console.log(books)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books books={newArray} addBook={memorizedAddBook2}/>
    </>
}