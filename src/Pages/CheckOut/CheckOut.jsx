import { useLoaderData } from "react-router-dom";


const CheckOut = () => {
    const service=useLoaderData()
    const {title,_id}=service

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default CheckOut;