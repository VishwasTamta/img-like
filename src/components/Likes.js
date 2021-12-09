import React, {useState, useRef } from 'react'
import './Likes.css'

const Like = () => {

    const [likes, setLikes] = useState(0)
    const imgRef = useRef(null)

    const clickHandler = () => {
        setLikes(likes+1)
        console.log(imgRef.current.style = `background-color: rgba(255, 0, 0, 0.${likes})`)
    }

    return (
        <div>
            <img ref={imgRef} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Ei-like.svg/1200px-Ei-like.svg.png" onClick={clickHandler} id='like-btn-img' alt='Like' />
            <h4>Likes: <span id="like-counter">{likes}</span></h4>
        </div>
    )
}

export default Like