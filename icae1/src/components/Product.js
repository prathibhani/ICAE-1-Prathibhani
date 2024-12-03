import React, { useState } from 'react';

import '../assets/CSS/layout.css';
export default function Product(){
   
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        if (quantity > 0) {
            addToCart(flower, quantity);
            setQuantity(0); 
        }
    };
    return(
        <div className="grid-item">

            <div class="card">
                <img src={requestAnimationFrame('../assets/image'+flower.img)} alt={flower.name} />
                <div class="card-body">
                    <h5 class="card-title">Price:</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" />
                    </div>
                    <button class="card-button" onClick={handleAddtoCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}