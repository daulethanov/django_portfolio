import {useState, useEffect} from "react";
import './style.css';
import eye from './image/eye.svg';
import comment from './image/comment.svg';
import axios from "axios";

const OrderList = () => {

    const[orders, setOrders] = useState([])

    useEffect(() => {
    const fetchData = async () =>{
      try {
        const {data: response} = await axios.get('http://localhost:8000/api/order-list/');
        setOrders(response);
      } catch (error) {
        console.error(error.message);
      }
    } ;
  }, []);



    return(

        <div className="order-container">
            <div className="order__list">
                        {orders.map(order => {
                            return(
                    <div className="order__item">
                    <h3 className='order__item-title'>{order.title}</h3>
                    <p className='order__item-text'>
                        {order.description}
                    </p>
                    <div className="order__item-properties">
                        <img src={eye} alt="" className='order__item-properties-img'/>
                        <img src={comment} alt="" className='order__item-properties-img'/>
                    </div>

                </div>
                            ) })}

            </div>
        </div>

   )
}

export default OrderList;