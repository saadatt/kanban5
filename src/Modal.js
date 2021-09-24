function Modal({onClose, open, toggle, handleShift, itemTitle, isFirst, isLast, index, colIndex}) {
    return (
        <div className="container">
            {itemTitle}
            <div className="item">
                <button>Edit</button>
                <button>Delete </button>
            </div>
        </div>
    )
}

export default Modal;