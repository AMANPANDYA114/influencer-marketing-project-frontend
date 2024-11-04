import { MdUpcoming } from "react-icons/md";


const Payments=()=>{
    return(
        <div className="w-full h-screen pb-20 flex flex-col justify-center items-center lg:ml-[320px]" style={{ backgroundColor: '#282E38'}}>
            <MdUpcoming size={128} color="#d2d2d2" />
            <p className="font-light text-gray-50 text-xl mx-4 text-center"><i class="fa fa-italic text-center" aria-hidden="true"> One stop destination of all your payouts in our platform</i></p>
            <p className="mt-2 text-gray-200">Coming soon........</p>
        </div>
    );
}

export default Payments;