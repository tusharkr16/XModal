import React, { useState } from 'react';

const XModal = () => {
    const [show, setShow] = useState(false);

    const Form = () => (
        <div className='modal-wrapper'>
            <div className='modal-container'></div>
            <h1>hello</h1>
            <button onClick={() => setShow(false)}>submit</button>
        </div>
    );

    return (
        <div>
            <button onClick={() => setShow(true)}>Show modal</button>
            {show && <Form />}
        </div>
    );
}

export default XModal;
