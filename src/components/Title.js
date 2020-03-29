import React from 'react'

//Title Component is going to take two thing as props (Reusable)
export default function Title({name, title}) {
    return (
            <div className="row">
                <div className="col-10 mx-auto my-2 text-center ">
                   <h1 className="text-capitalize text-title">{name}
                       <strong> </strong>{title}
                   </h1>
                </div>
            </div>
    )
}
