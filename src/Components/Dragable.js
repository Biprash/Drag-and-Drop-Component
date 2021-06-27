import React, {useState} from 'react'

export default function Dragable() {

    const [style, setStyle] = useState({})
    const [drag, setDrag] = useState({
        diffX: 0,
        diffY: 0,
        dragging: false
    })
    
    const dragStart = (e) => {
        setDrag({
            ...drag,
            diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
            diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
            dragging: true
        })
        setStyle({
            opacity: 0.5
        })
    }

    const dragging = (e) => {
        if (drag.dragging) {
            var left = e.screenX - drag.diffX
            var top = e.screenY - drag.diffY
    
            setStyle({
                ...style,
                left: left,
                top: top,
            })
        }
    }

    const dragEnd = (e) => {
        setDrag({
            ...drag,
            dragging: false
        })
        setStyle({
            opacity: 1
        })
    }

    return (
        <div onMouseDown={(e) => dragStart(e)} onMouseMove={(e) => dragging(e)} onMouseUp={(e) => dragEnd(e)} style={style} className="block">
            <p>Drag me</p>
        </div>
    )
}
