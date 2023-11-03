import { useLoaderData } from "react-router-dom";


const CheckOut = () => {
    const service=useLoaderData()
    const {title,_id}=service

    return (
        <div>
            <h1>{title}</h1>
            
       <div className="bg-[#464542] p-24">
        <h2 className="text-3xl font-extrabold text-center mb-10">Check Out </h2>
        <form  >
            
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">First Name</span>
                    </label>
                    <label className="input-group">
                        <input  type="text" name="firstname" placeholder="First Name " className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Last Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="lastname" placeholder="Last Name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form supplier row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Your Phone </span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <label className="input-group">
                        <input  type="email" name="email" placeholder="Email" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form Photo url row */}
            <div className=" mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Your Message</span>
                    </label>
                    <label className="input-group">
                        <input  type="text" name="message" placeholder="Your message" className="input input-bordered w-full" />
                    </label>
                </div>
                
            </div>
            <input type="submit" value="Order Confirm" className="btn btn-block btn-accent" />

        </form>
    </div>
    </div>
 
    );
};

export default CheckOut;