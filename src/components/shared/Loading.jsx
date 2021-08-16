import React from 'react'

function Loading() {
    return (
        <div className="text-center my-3 py-3">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">...</span>
            </div>
        </div>
    )
}

export default Loading
