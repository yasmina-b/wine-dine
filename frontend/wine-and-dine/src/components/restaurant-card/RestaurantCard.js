import React from "react"
import "./RestaurantCard.css";

const RestaurantCard = () => {
   return(
    <div className="card-position">
        <div className="card">
            <div className="card-left">
                <img src="https://timisoara.fenicepalas.ro/wp-content/uploads/2020/08/0019.jpg" alt=""></img>
            </div>
            <div className="card-right">
                <h2 className="restaurant-name">Fenice Palace Timisoara</h2>
                <button className="button-design">BOOK NOW</button>
            </div>
        </div>
    </div>
   )
}

export default RestaurantCard;