import Item from "./Item";

function Column({toggle, modal, data, handleInputChange,
                    index, handleAddTodo, handleShift, isFirst, isLast, Button}) {
    return (
        <div className="col">
            <h3 style={{backgroundColor: data.color}}>{data.title}</h3>
            {data.tasks.map((el, i) => (
                <Item
                    key ={i}
                    itemTitle={el}
                    isFirst={isFirst}
                    isLast={isLast}
                    handleShift={handleShift}
                    index={i}
                    colIndex={index}
                   toggle={toggle}
                   modal={modal}
                />
            ))}
            <input
                onChange={(e) => handleInputChange(e.target.value, index)}
                value ={data.input}
                placeholder='enter some value'
            />
            <button onClick={() => handleAddTodo(index)}>Add To do</button>
        </div>
    )
}
export default Column;