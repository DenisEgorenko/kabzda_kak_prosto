import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Rating, {ratingValueType} from './Rating';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Rating',
    component: Rating
}

const callback = action("Collapsed clicked")


export const EmptyRating = () => <Rating value={0} setRating={callback} />
export const Rating1 = () => <Rating value={1} setRating={callback} />
export const Rating2 = () => <Rating value={2} setRating={callback} />
export const Rating3 = () => <Rating value={3} setRating={callback} />
export const Rating4 = () => <Rating value={4} setRating={callback} />
export const Rating5 = () => <Rating value={5} setRating={callback} />

export const changeRating = () => {

    const [rating, setRating] = useState<ratingValueType>(5)

    return <Rating value={rating} setRating={setRating} />
}