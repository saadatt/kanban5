
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {useState} from "react";

function Item({ handleShift, itemTitle, isFirst, isLast, index, colIndex}) {

    const [modal, setModal] = useState(false);

    const toggle = (itemIndex, fromCol) => setModal(!modal);
    return (
        <div className="item">

            <button  disabled={isFirst} onClick={() => handleShift(index, colIndex,- 1)}>←</button>

            <span>{itemTitle}</span>

            <button disabled={isLast} onClick={() => handleShift(index, colIndex, 1)}>→</button>

            <button onClick={()=> toggle(index, colIndex)} color="primary">click to edit/cancel</button>{' '}
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Would you like to modify this task?</ModalHeader>
                <ModalBody>
                </ModalBody>

            </Modal>

        </div>
    )
}

export default Item;