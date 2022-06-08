import React, {useState} from 'react';

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

type StarPropsType = {
    selected: boolean,
    setRaiting: ()=>void
}


function Rating() {

    const [raiting, setRaiting] = useState(1)

    const handleRaiting = (raiting: number) => setRaiting(raiting)

    return (
        <div>
            <Star setRaiting={()=>handleRaiting(1)} selected={raiting >= 1}/>
            <Star setRaiting={()=>handleRaiting(2)} selected={raiting >= 2}/>
            <Star setRaiting={()=>handleRaiting(3)} selected={raiting >= 3}/>
            <Star setRaiting={()=>handleRaiting(4)} selected={raiting >= 4}/>
            <Star setRaiting={()=>handleRaiting(5)} selected={raiting >= 5}/>
        </div>
    );


}

function Star(props: StarPropsType) {
    return (
        (props.selected == true) ? <span onClick={props.setRaiting}><b>star </b></span> : <span onClick={props.setRaiting}>star </span>
    );
}

export default Rating