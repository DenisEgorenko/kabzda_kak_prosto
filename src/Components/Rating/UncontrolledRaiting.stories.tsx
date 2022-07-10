import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Rating, {ratingValueType} from './Rating';
import UncontrolledRating from './UncontrolledRating';
import {action} from '@storybook/addon-actions';

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating
}

const callback = action("Collapsed clicked")


export const UnRating = () => <UncontrolledRating />
export const UnRating3 = () => <UncontrolledRating defaultValue={3}/>

