import React from 'react'

export default function Noteitems(props) {
   const {title,description}=props.note
    return (
        <div className="col-4">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore modi aliquid voluptatibus quod vero nisi commodi atque distinctio reprehenderit ipsam magnam quidem, totam excepturi eligendi? Asperiores molestias totam voluptates natus.</p>
                <a href="#" className="btn btn-primary">View</a>
            </div>
        </div>
        </div>
    )
}
