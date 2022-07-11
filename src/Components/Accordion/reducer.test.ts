import {reducer, stateType, TOGGLE_CONSTANT} from "./UncontrolledAccordion";

test('reducer test', () => {

    const state: stateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_CONSTANT})


    expect(newState.collapsed).toBe(true)

})

test('reducer test should be false', () => {

    const state: stateType = {
        collapsed: true
    }

    const newState = reducer(state, {type: TOGGLE_CONSTANT})


    expect(newState.collapsed).toBe(false)

})

test('reducer test should be error', () => {

    const state: stateType = {
        collapsed: true
    }

    expect(() => {
        reducer(state, {type: "FAKE_DISPATCH"})
    }).toThrowError()


})