import React from "react";
import { FaRegComments } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom';
const Tasks=()=>{
    const navigate=useNavigate();
    const items1 = Array.from({ length: 4 });
    const items2 =Array.from({length: 6});
    const items3 =Array.from({length: 5});

    return(
        <div className="w-screen h-fit pb-20 flex flex-col justify-start mt-16 lg:ml-[320px] " style={{ backgroundColor: '#282E38' }}>
        <div className="flex mx-4  justify-start  h-fit 2xl:mx-20 mt-12 text-white text-xl font-medium">
                Campaign Name
            </div>
        <div className="flex flex-col 2xl:flex-row justify-center 2xl:justify-around h-fit mx-4 2xl:mx-20  py-8">
            
            <div className="w-full 2xl:w-2/5 h-fit pb-8 flex flex-col rounded-sm" style={{backgroundColor:'#303743',boxShadow: 'inset rgb(6 8 12 / 50%) -1px -1px 1px 0px'}}>
                <p className="ml-4 font-semibold text-blue-500 text-xl mt-3 ">Upcoming</p>

                {items1.map((_, i) => (
                    <div className="flex flex-col border border-gray-300 mx-6 mt-5 py-3 rounded-md">
                    <div className="flex justify-between mx-6">
                        <p className=" max-w-60 text-gray-200 font-medium text-lg">Instagram Reel for republic day sale</p>
                        <p className="text-md text-gray-200 underline">26 June 2024</p>
                    </div>
                    <div className="flex justify-between items-center">
                    <div className="flex justify-start mx-6 items-center my-3 ">
                        <div className="w-7 h-7 rounded-3xl bg-gray-400 mr-4"></div>
                        <FaRegComments size={24} color="gray" />
                        <p className="ml-1.5 text-gray-400 text-sm">3</p>
                    </div>
                    <div className="mr-3">
                    {i === 0 && (
                         <button className="px-3 py-1.5  border cursor-pointer text-xs border-[#00b6ff] text-[#00b6ff] bg-[#00b6ff1f] " onClick={() => navigate('/submit-task')}>Submit Content</button>
                    )}
                            
                    </div>
                    </div>
                     </div>
                ))}
                

            </div>

            <div className="w-full 2xl:w-2/5 h-fit pb-8 flex flex-col rounded-sm mt-4 2xl:mx-4 2xl:mt-0" style={{backgroundColor:'#303743',boxShadow: 'inset rgb(6 8 12 / 50%) -1px -1px 1px 0px'}}>
                <p className="ml-4 font-semibold text-orange-500 text-xl mt-3 ">Pending</p>

                {items2.map((_, i) => (
                    <div className="flex flex-col border border-gray-300 mx-6 mt-5 py-3 rounded-md">
                    <div className="flex justify-between mx-6">
                        <p className=" max-w-60 text-gray-200 font-medium text-lg">Instagram Reel for republic day sale</p>
                        <p className="text-md text-gray-200 underline">26 June 2024</p>
                    </div>
                    <div className="flex justify-between items-center">
                    <div className="flex justify-start mx-6 items-center my-3 ">
                        <div className="w-7 h-7 rounded-3xl bg-gray-400 mr-4"></div>
                        <FaRegComments size={24} color="gray" />
                        <p className="ml-1.5 text-gray-400 text-sm">3</p>
                    </div>
                    <div className="mr-3">
                    {i % 2 === 0 ? (
                          <button className="px-3 py-1.5 border cursor-auto text-xs border-[#ffbe00] text-[#ffbe00] bg-[#ffbe001f]">Awaiting Approval</button>
                        ) : (
                          <div className="flex space-x-2">
                            <button className="px-3 py-1.5  border cursor-auto text-xs border-[#00a96e] text-[#00a96e] bg-[#00a96e1f]">Approved</button>
                            <button className="px-3 py-1.5  border cursor-pointer text-xs border-[#00b6ff] text-[#00b6ff] bg-[#00b6ff1f]" onClick={() => navigate('/submit-link')}>Submit Link</button>
                          </div>
                    )}
                    </div>
                    </div>
                     </div>
                ))}
                

            </div>


            <div className="w-full 2xl:w-2/5 h-fit pb-8 flex flex-col rounded-sm mt-4 2xl:mt-0" style={{backgroundColor:'#303743',boxShadow: 'inset rgb(6 8 12 / 50%) -1px -1px 1px 0px'}}>
                <p className="ml-4 font-semibold text-green-500 text-xl mt-3 ">Completed</p>

                {items3.map((_, i) => (
                    <div className="flex flex-col border border-gray-300 mx-6 mt-5 py-3 rounded-md">
                    <div className="flex justify-between mx-6">
                        <p className=" max-w-60 text-gray-200 font-medium text-lg">Instagram Reel for republic day sale</p>
                        <p className="text-md text-gray-200 underline">26 June 2024</p>
                    </div>
                    <div className="flex justify-between items-center">
                    <div className="flex justify-start mx-6 items-center my-3 ">
                        <div className="w-7 h-7 rounded-3xl bg-gray-400 mr-4"></div>
                        <FaRegComments size={24} color="gray" />
                        <p className="ml-1.5 text-gray-400 text-sm">3</p>
                    </div>
                    <div className="mr-3">
                            <button className="px-3 py-1.5  border cursor-auto text-xs border-[#00a96e] text-[#00a96e] bg-[#00a96e1f]">Completed</button>
                    </div>
                    </div>
                     </div>
                ))}
                

            </div>

        </div>
        </div>
    );
}

export default Tasks;