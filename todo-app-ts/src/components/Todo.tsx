import { type Todo as TodoType, TodoId } from "../types";


interface Props extends TodoType {
    onRemoveTodo: ({id}: TodoId) => void
    onToggleCompleteTodo: ({id, completed}: Pick<TodoType, 'id'|'completed'>) => void
}


export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo }) => {
    return (
        <>
            <div className='view'>
                <input
                    className='toggle'
                    checked={completed}
                    type='checkbox'
                    onClick={() => {onToggleCompleteTodo({id, completed})}}
                />
                <label>{title}</label>
                <button
                    className='destroy'
                    onClick={() => { onRemoveTodo({id}) }} />
            </div>
        </>
    )
}