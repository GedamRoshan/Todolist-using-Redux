
const inilization = {
    list: []
}

const ReducerTodo = (state = inilization, action) => {
    switch (action.type) {
        case "TODO_ADD":

            const { id, data } = action.payload;

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }

                ]
            }

        case "TODO_DELETE":

            // const { id, data } = action.payload;
            const deletelist = state.list.filter((item) => item.id !== action.id)

            return {
                ...state,
                list: deletelist
            }

        default: return state;
    }



}
export default ReducerTodo;