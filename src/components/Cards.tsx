import React from "react"

interface CardsProps {
    image?: string,
    children: React.ReactNode,
  }

export function Cards({children, image}: CardsProps) {
    return (
        <div className="card">
            {image ? <div className="img"><img src={image} alt="basket"></img></div>: <></>}
            {children}
        </div>        
    )
}