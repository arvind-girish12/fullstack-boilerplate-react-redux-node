export const actionIncrement = () => dispatch => {
    dispatch({
        type: 'INCREMENT'
         })
}

export const actionDecrement = () => dispatch => {
    dispatch({
        type: 'DECREMENT'
        })
}