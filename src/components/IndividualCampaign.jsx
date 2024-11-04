import {React, useState} from "react";


const IndividualC=()=>{
    const [isHovered,setIsHovered]=useState(false);

    const campaign =[ {
        "Description": "Spring Collection Launch",
        "Things to do": "Design promotional materials, update website with new collection details, send out email announcements to subscribers, organize a launch event, and coordinate with fashion bloggers for reviews and promotions.",
        "Additional Details": "The launch focuses on our new spring collection featuring floral designs and bright colors. The campaign starts on March 1st and runs through March 31st. Key influencers are to be contacted by February 20th."
      }];

      
      const campaignData = campaign[0];

    return (
        <div className="w-full  h-screen pb-20 flex flex-col justify-start mt-16 lg:ml-[320px]" style={{ backgroundColor: '#282E38'}}>
        <div className="h-fit max-w-screen mx-4  xl:mx-20 mt-6 rounded-md border-gray-800 border py-8 px-4 xl:px-12" style={{backgroundColor:'#303743',boxShadow: 'inset rgb(6 8 12 / 50%) -1px -1px 1px 0px'}}>
            <div className="flex items-center justify-between">
                <p className="font-medium text-white text-sm xl:text-xl">Amazon Big Billion Days</p>
                <div className="flex justify-center items-center">
                <button class="bg-transparent  text-white font-normal hover:text-white py-1 text-sm px-4 border border-white rounded mr-4" style={{backgroundColor: isHovered ? '#ffffff10' : '',transition: 'background-color 0.3s ease',}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>Details</button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-normal py-1 px-6 rounded">Apply</button>
                </div>
            </div>
            
           
            <table className="border border-white mt-8 rounded-md">
                {Object.entries(campaignData).map(([key, value]) => (
                        <tr className="border">
                        <td className="border-r w-1/5 py-2 px-2 text-center text-sm xl:text-lg text-white"> {key}</td>
                        <td className="px-4 py-3 w-4/5 text-sm xl:text-lg text-[#fff]">{value}</td>
                    </tr>
                ))}
                

            </table>
        </div>
        </div>
    );
}


export default IndividualC;