export const boardReducer = (boards,action) => {
    switch (action.type) {
        case 'CREATE_BOARD':{
            const board ={
                id: action.payload.id,
                title:action.payload.title,
                lists:[],
                tasks:[]
            }
            return [...boards,board]
        }
        case 'REMOVE_BOARD':{
            return boards.filter(item => item.id !== action.payload)
        }
        case 'ADD_LIST_ID_TO_A_BOARD':{
            return boards.map(item => {
                if (item.id === action.payload.id) {
                    item.tasks.push(action.payload.taskstId)
                }
                return item
            })

        }
        case 'ADD_TASK_ID_TO_A_BOARD':{

        }
        case 'UPDATE_BOARD':{

        }
        case 'REMOVE_LIST_ID_FROM_A_BOARD':{

        }
        case 'REMOVE_TASK_ID_FROM_A_BOARD':{

        }
          
    
        default:
            break;
    }
}