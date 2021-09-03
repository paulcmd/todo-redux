import React from 'react'
import Modal from 'react-modal'

const TodoModal = (props) => (
    <Modal
        isOpen={!!props.selectedTodo}
        contentLabel="Selected Todo" //accessibility todo
        onRequestClose={props.handleDeleteModalTodo} //removes modal when press escape or click outside modal
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Todo</h3>
        {props.selectedTodo && <p className="modal__body">{props.selectedTodo.title}</p>}
        <button className="button" onClick={props.handleDeleteModalTodo}>Okay</button>
    </Modal>
)

//!!'test' => true
//!!undefined => false
//!! converts anything to boolean!

export default TodoModal
