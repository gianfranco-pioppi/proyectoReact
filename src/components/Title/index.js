import React from "react";

export const Title = ({greeting}) => {
    return (
        <div className="text-center">
            <h1>{greeting}</h1>
        </div>
        
    );
}

export default Title;