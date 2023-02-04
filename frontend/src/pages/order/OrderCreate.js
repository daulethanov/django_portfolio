import Header from "../../components /heaeder /Header";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext, AuthProvider} from "../../state";

const OrderCreate = () =>{
    let id = axios.get("http://localhost:8000/api/users/me/", { headers:{
                        Authorization: `Bearer ${localStorage.getItem('access')}`
                }} )

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [category, setCategory] = useState();
    const [price, setPrice] = useState();
    const [dogovor_price, setDogovorPrice] = useState(false);
    const [task_completed, setTaskCompleted] = useState('');

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{

            const response = await axios.post("http://localhost:8000/api/order-create/",
        {
                user: (await id).data.id,
                title,
                description,
                category,
                price,
                dogovor_price,
                task_completed,
            },
        { headers:{
                        Authorization: `Bearer ${localStorage.getItem('access')}`
                }}
            )
            console.log(response.data)
        }catch (err){
            console.log(err)
        }
    };

    return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Title"
                    />
                <select value={category} onChange={(event) => setCategory(event.target.value)}>
                    <option value="GameDev">GameDev</option>
                    <option value="Design">WebDev</option>
                    <option value="SMM">MobileDev</option>
                    <option value="Marketing">MobileDev</option>
                    <option value="Developer">Developer</option>
                </select>
                <textarea
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Description"
                />
                <input
                    type="number"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    placeholder="Price"
                />
                <label>
                    <input
                        type="checkbox"
                        checked={dogovor_price}
                        onChange={() => setDogovorPrice(!dogovor_price)}
                    />
                Dogovor Price
                </label>
                <select value={task_completed} onChange={(event) => setTaskCompleted(event.target.value)}>
                    <option value="Task completed">Looking for</option>
                    <option value="Pending">In progress</option>
                    <option value="Looking for">Completed</option>
                </select>
                <button type="submit">Submit</button>
            </form>
);

}

export default OrderCreate