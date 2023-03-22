import {useState,useContext} from 'react'
import { BoardContext } from "../contexts/Board";

const BoardCreatingForm = () => {
    const [boardTitle,setBoardTitle] = useState('')

    const {dispatchBoardAction} = useContext(BoardContext)

    const submitHandler = (e)=>{
        e.preventdefault();
        if (!boardTitle) {
            return alert('Please provide a valid board title')
        }
    }
  return (
    <form>
        <input type='text' value={boardTitle} onChange={(e)=>setBoardTitle(e.target.value)}/>

    </form>
  )
}

export default BoardCreatingForm