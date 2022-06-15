import React, {useState} from 'react';

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

type StarPropsType = {
    selected: boolean,
    setRating: () => void
}


function UncontrolledRating() {

    const [rating, setRating] = useState(1)

    const handleRating = (rating: RatingPropsType["value"]) => setRating(rating)

    return (
        <div>
            <Star setRating={() => handleRating(1)} selected={rating >= 1}/>
            <Star setRating={() => handleRating(2)} selected={rating >= 2}/>
            <Star setRating={() => handleRating(3)} selected={rating >= 3}/>
            <Star setRating={() => handleRating(4)} selected={rating >= 4}/>
            <Star setRating={() => handleRating(5)} selected={rating >= 5}/>
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


export default UncontrolledRating