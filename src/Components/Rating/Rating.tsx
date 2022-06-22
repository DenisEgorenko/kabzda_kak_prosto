import React, {useState} from 'react';

export type ratingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: ratingValueType
    setRating: (value: ratingValueType) => void
}

type StarPropsType = {
    selected: boolean,
    setRating: () => void
}


function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star setRating={()=>props.setRating(1)} selected={props.value >= 1}/>
            <Star setRating={()=>props.setRating(2)} selected={props.value >= 2}/>
            <Star setRating={()=>props.setRating(3)} selected={props.value >= 3}/>
            <Star setRating={()=>props.setRating(4)} selected={props.value >= 4}/>
            <Star setRating={()=>props.setRating(5)} selected={props.value >= 5}/>

        </div>
    );


}

function Star(props: StarPropsType) {
    return (
        <span onClick={props.setRating}>
            {props.selected ? <b>star </b> : 'star '}
        </span>
    );
}


export default Rating