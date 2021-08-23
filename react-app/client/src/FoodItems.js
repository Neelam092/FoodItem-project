import React from 'react';
import Burger from './assets/burger.jpg';
import Fries from './assets/fries.jpg';
import Coke from './assets/coke.jpg';
import Pepsi from './assets/pepsi.jpg';




function FoodItems(props){
	 return(
        <>
            
                <div className="list_items">
                    <div className="img_part">
                    <img src={Burger} alt=""></img>
                    </div>
                    <div className="text_part">
                    <h3 className="item_name">Hamburger</h3>
                    <p className="price">Price: 200</p>
                        

                    </div>
                    <div className="button_part">
                        <button className="btn_plus">+</button>
                        <button className="btn_min">-</button>
                    </div>
                </div>

                <div className="list_items">
                    <div className="img_part">
                        <img src={Fries} alt=""></img>
                    </div>
                    <div className="text_part">
                        <h3 className="item_name">Fries</h3>
                        <p className="price">Price: 100</p>

                    </div>
                    <div className="button_part">
                        <button className="btn_plus">+</button>
                        <button className="btn_min">-</button>
                    </div>
                </div>
                
                <div className="list_items">
                    <div className="img_part">
                    <img src={Coke} alt=""></img>
                    </div>
                    <div className="text_part">
                        <h3 className="item_name">Coke</h3>
                        <p className="price">Price: 50</p>

                    </div>
                    <div className="button_part">
                        <button className="btn_plus">+</button>
                        <button className="btn_min">-</button>
                    </div>
                </div>
                <div className="list_items">
                    <div className="img_part">
                    <img src={Pepsi} alt=""></img>
                    </div>
                    <div className="text_part">
                        <h3 className="item_name">Pepsi</h3>
                        <p className="price">Price: 50</p>
                    </div>
                    <div className="button_part">
                        <button className="btn_plus">+</button>
                        <button className="btn_min">-</button>
                    </div>
                </div>
            
            
        </>
        )
}
export default FoodItems;

