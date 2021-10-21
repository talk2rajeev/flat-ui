import React from 'react'
import "../assets/css/card.css";


type CardHeaderType = {
    title: string
}
export interface CardInterface{
    children: React.ReactNode,
    hader?: CardHeaderType
}



export const Card: React.FC<CardInterface> = ({ children }: CardInterface) => {
  
    return (
        <div className={`rt-card`}>
            {children}
        </div>
    );
}

export interface ImageCardInterface{
    children: React.ReactNode,
    imageUrl: string,
}
export const ImageCard: React.FC<CardInterface> = ({ children }: CardInterface) => {
  
    return (
        <div className={`rt-card`}>
            {children}
        </div>
    );
}