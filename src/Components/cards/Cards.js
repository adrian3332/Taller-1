import { Button } from 'bootstrap'
import React, {useEffect, useState} from 'react'
const Cards = ({user}) => {
    const {name,login,picture} = user
    const [megusta, setColor] = useState(true)
    const [meencanta, setColor1] = useState(true)
    const [celebri, setcelebri] = useState([])
    const [error, seterror] = useState(false)
    const [celebr, setcelebr] = useState (null)
    return (
        <div className = "card" >
                <img src={picture.large} className="card-img-top" alt={login.username}/>
                    <div className="card-body">                        
                    <h5 className="card-title">{name.first}</h5>
                    <div class="d-grid gap-2 col-8 mx-auto">
                    <button type="button" class="btn btn-dark">👫📱📱📱📱</button>

                    </div>

                    </div>
        </div>
    )
}

export default Cards


