import React from 'react'

export default function MessageBox(props) {
    return (
        /* children refers to that value that is placed within the tage so, <MessageBox> THIS </ MessageBox> */
        <div className={`alert alert-${props.variant || 'info'}`}>
            {props.children}
        </div>
    )
}
