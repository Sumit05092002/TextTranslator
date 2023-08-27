import React, { useState } from 'react'

export default function Alert(props) {
    return (
        <div className="rectification">
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {props.alert.msg}
        </div>}
        </div>

    )
}
