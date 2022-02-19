import React from "react";

const Card=({id,name,email}) =>{
    return(
        <div className="tc bg-light-green dib br3 pa3 ma3 grow bw shadow5">
            <img alt='robot' src={`https://robohash.org/${id}?test?200*200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>   
    );
}
export default Card;





