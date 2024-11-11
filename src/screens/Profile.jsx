import React, { useEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import ScrollAni from "../components/ScrollAni";
import { Link } from 'react-router-dom';
const Profile=()=>{

  const [fullName, setFullName] = useState("");
  const [Bio, setBio] = useState(""); 
  const [role, setrole] = useState(""); 
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(true);
  const [profilePicUrl, setProfilePicUrl] = useState("");
    const token = localStorage.getItem('token');


    useEffect(() => {
      const fetchLocation = () => {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                  (position) => {
                      const { latitude, longitude } = position.coords;
                      fetchLocationName(latitude, longitude);
                  },
                  (error) => {
                      console.error('Error getting location:', error);
                      setLocation('Unable to retrieve location');
                      setLoading(false);
                  }
              );
          } else {
              setLocation('Geolocation not supported');
              setLoading(false);
          }
      };

      const fetchLocationName = async (latitude, longitude) => {
          try {
              const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
              const data = await response.json();
              setLocation(data.display_name || 'Location not found');
          } catch (error) {
              console.error('Error fetching location name:', error);
              setLocation('Error fetching location name');
          } finally {
              setLoading(false);
          }
      };

      fetchLocation();
  }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/user/profile", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                const data = await response.json();
                if (response.ok) {
                 console.log("Name is", data.user.fullName);
                    setFullName(data.user.fullName);
                    console.log("bio is ", data.user.userBio)
                    console.log("role is ", data.user.userRole) 
                    setBio(data.user.userBio);
                    setrole(data.user.userRole)
                    setProfilePicUrl(data.user.profilePicUrl);
                } else {
                    console.error("Failed to fetch data:", data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [token]);

    return(
        <div className="h-full pb-20 flex flex-col justify-start mt-16 lg:ml-[320px]" style={{ backgroundColor: '#282E38'}}>
   
   <div className="w-fit h-fit mx-20 mt-6 rounded-md border-black-800 border py-8 px-12" style={{backgroundColor:'#303743',boxShadow: 'inset rgb(6 8 12 / 50%) -1px -1px 1px 0px'}}>
          <div className="flex justify-between" id="row-1">

                <div className="flex">
                <div className="w-32 h-32 bg-white rounded-full relative mr-5 flex items-center justify-center"> {/* Increased size */}
  <img 
    src={profilePicUrl} 
    alt={`${fullName}'s profile`} 
    className="w-full h-full rounded-full object-cover" 
  />
             
                <Link to="/update"> {/* Link to the update path */}
                <img 
    src="https://i.postimg.cc/gJc1sXzn/266146.png" // Edit icon image URL
    alt="Edit Icon" 
    className="w-4 h-4 absolute bottom-0 left-1 cursor-pointer" // Added cursor pointer for better UX
 // Correctly formatted inline styles
/>

                </Link>
</div>



                    {/* <div className="w-24 h-24 bg-white rounded-full mr-5">d</div> */}
                    <div className="flex flex-col items-stretch justify-between">
                        <div>
                        <p className="text-white">INfluencer Name :- </p>
                        <p className=" text-gray-200">{fullName}</p>
                        <p className="text-white">BIO:- </p>
                        <p className=" text-gray-200">{Bio}</p>
                   
                        </div>
                        <br></br>
                        <div className="flex">
                        <CiLocationOn size={22} color="gray"/><p className="text-white pl-1">{loading ? 'Fetching location...' : location}</p>
                        </div>  


                  
  
                    </div>
                </div>

                <div>
                    <p className="text-white font-medium">Primary Niche</p>
                    <div className="flex mt-2 flex-wrap">

                    <div className="inline-flex items-center justify-center gap-2.5 px-4 py-[5px] relative bg-[#34b5ff1a] rounded-xl border border-solid border-[#34b5ff] mr-1">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Karla-Medium',Helvetica] font-medium text-white text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
                         Food
                        </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-2.5 px-4 py-[5px] relative bg-[#34b5ff1a] rounded-xl border border-solid border-[#34b5ff] mx-1">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Karla-Medium',Helvetica] font-medium text-white text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
                         Blogging
                        </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-2.5 px-4 py-[5px] relative bg-[#34b5ff1a] rounded-xl border border-solid border-[#34b5ff] ml-1">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Karla-Medium',Helvetica] font-medium text-white text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
                         Food
                        </div>
                    </div>
                    </div>
                </div>


                <div>
                    <p className="text-white font-medium">Secondary Niche</p>
                    <div className="flex mt-2 flex-wrap max-w-72">

                    <div className="inline-flex items-center justify-center gap-2.5 px-4 py-[5px] relative bg-[#34b5ff1a] rounded-xl border border-solid border-[#34b5ff] mr-1">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Karla-Medium',Helvetica] font-medium text-white text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
                         Blogging
                        </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-2.5 px-4 py-[5px] relative bg-[#34b5ff1a] rounded-xl border border-solid border-[#34b5ff] mr-1">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Karla-Medium',Helvetica] font-medium text-white text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
                         Blogging
                        </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-2.5 px-4 py-[5px] relative bg-[#34b5ff1a] rounded-xl border border-solid border-[#34b5ff] mr-1">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Karla-Medium',Helvetica] font-medium text-white text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
                        Bloggingg
                        </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-2.5 px-4 py-[5px] relative bg-[#34b5ff1a] rounded-xl border border-solid border-[#34b5ff] mr-1 mt-3">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Karla-Medium',Helvetica] font-medium text-white text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
                        Bloggingg
                        </div>
                    </div>
                    </div>
                </div>

                <div>
                    <p className="text-white font-medium">Languages Known</p>
                    <div className="flex mt-2 flex-wrap">

                    <div className="inline-flex items-center justify-center gap-2.5 px-4 py-[5px] relative bg-[#34b5ff1a] rounded-xl border border-solid border-[#34b5ff] mr-1">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Karla-Medium',Helvetica] font-medium text-white text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
                         English
                        </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-2.5 px-4 py-[5px] relative bg-[#34b5ff1a] rounded-xl border border-solid border-[#34b5ff] mx-1">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Karla-Medium',Helvetica] font-medium text-white text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
                         Hindi
                        </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-2.5 px-4 py-[5px] relative bg-[#34b5ff1a] rounded-xl border border-solid border-[#34b5ff] ml-1">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Karla-Medium',Helvetica] font-medium text-white text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
                         Bengali
                        </div>
                    </div>
                    </div>
                </div>
          </div>

          <div>
            <p className="mt-12 text-white">Influencer Search: Similar to brand profiles, with added filters to find suitable influencers for multiple clients. Campaign Management: Oversee multiple brand campaigns, with the ability to assign influencers and track progress. Affiliate Links: Access and distribute affiliate links to influencers, with tracking for commission earned per sale. Reporting: Generate detailed reports for each brand client, highlighting campaign performance and influencer metrics.campaigns, with the ability to assign influencers and track progress. Affiliate Links: Access and distribute affiliate links to influencers, with tracking for commission earned per sale. Reporting: Generate detailed reports for each brand client, highlighting campaign performance and influencer metrics.</p>
          </div>
        </div>

        <div className="flex justify-between mx-20 mt-4 ">

        <div className="h-fit  rounded-md border-gray-800 border py-6 px-8" style={{backgroundColor:'#303743',boxShadow: 'inset rgb(6 8 12 / 50%) -1px -1px 1px 0px',width: 'calc((100vw - 540px)/3)'}}>
        
            <div className="flex justify-between align-middle">

                <div className="flex  justify-center items-center">
                    <AiFillInstagram size={32} color="white" />
                    <p className="text-white font-extrabold pl-2 text-xl">Instagram</p>
                </div>

                <div>
                    <div className="flex items-center justify-center">
                        <FaArrowTrendUp size={28} color="#5cb85c" />
                        <p className="ml-2 text-lg font-bold text-white">200K</p>
                    </div>
                    <p className="mt-1 text-md font-bold" style={{color:'#5cb85c'}}>likes in 24 hours</p>
                </div>
            </div>
        
            <div className="flex justify-between mt-16">
                <div className="flex  flex-col justify-center align-middle">
                    <p className=" text-center text-lg font-bold text-white">200K</p>
                    <p className="text-center text-lg font-bold text-blue-500">Followers</p>
                </div>

                <div className="flex  flex-col justify-center align-middle">
                    <p className=" text-center text-lg font-bold text-white">200K</p>
                    <p className="text-center text-lg font-bold text-blue-500">Followers</p>
                </div>

                <div className="flex  flex-col justify-center align-middle">
                    <p className=" text-center text-lg font-bold text-white">200K</p>
                    <p className="text-center text-lg font-bold text-blue-500">Followers</p>
                </div>

            </div>
        </div>

        <div className="h-fit  rounded-md border-gray-800 border py-6 px-8" style={{backgroundColor:'#303743',boxShadow: 'inset rgb(6 8 12 / 50%) -1px -1px 1px 0px',width: 'calc((100vw - 540px)/3)'}}>
        
            <div className="flex justify-between align-middle">

                <div className="flex  justify-center items-center">
                    <AiFillInstagram size={32} color="white" />
                    <p className="text-white font-extrabold pl-2 text-xl">Instagram</p>
                </div>

                <div>
                    <div className="flex items-center justify-center">
                        <FaArrowTrendUp size={28} color="#5cb85c" />
                        <p className="ml-2 text-lg font-bold text-white">200K</p>
                    </div>
                    <p className="mt-1 text-md font-bold" style={{color:'#5cb85c'}}>likes in 24 hours</p>
                </div>
            </div>
        
            <div className="flex justify-between mt-16">
                <div className="flex  flex-col justify-center align-middle">
                    <p className=" text-center text-lg font-bold text-white">200K</p>
                    <p className="text-center text-lg font-bold text-blue-500">Followers</p>
                </div>

                <div className="flex  flex-col justify-center align-middle">
                    <p className=" text-center text-lg font-bold text-white">200K</p>
                    <p className="text-center text-lg font-bold text-blue-500">Followers</p>
                </div>

                <div className="flex  flex-col justify-center align-middle">
                    <p className=" text-center text-lg font-bold text-white">200K</p>
                    <p className="text-center text-lg font-bold text-blue-500">Followers</p>
                </div>

            </div>
        </div>



        <div className="h-fit  rounded-md border-gray-800 border py-6 px-8" style={{backgroundColor:'#303743',boxShadow: 'inset rgb(6 8 12 / 50%) -1px -1px 1px 0px',width: 'calc((100vw - 540px)/3)'}}>
        
            <div className="flex justify-between align-middle">

                <div className="flex  justify-center items-center">
                    <AiFillInstagram size={32} color="white" />
                    <p className="text-white font-extrabold pl-2 text-xl">Instagram</p>
                </div>

                <div>
                    <div className="flex items-center justify-center">
                        <FaArrowTrendUp size={28} color="#5cb85c" />
                        <p className="ml-2 text-lg font-bold text-white">200K</p>
                    </div>
                    <p className="mt-1 text-md font-bold" style={{color:'#5cb85c'}}>likes in 24 hours</p>
                </div>
            </div>
        
            <div className="flex justify-between mt-16">
                <div className="flex  flex-col justify-center align-middle">
                    <p className=" text-center text-lg font-bold text-white">200K</p>
                    <p className="text-center text-lg font-bold text-blue-500">Followers</p>
                </div>

                <div className="flex  flex-col justify-center align-middle">
                    <p className=" text-center text-lg font-bold text-white">200K</p>
                    <p className="text-center text-lg font-bold text-blue-500">Followers</p>
                </div>

                <div className="flex  flex-col justify-center align-middle">
                    <p className=" text-center text-lg font-bold text-white">200K</p>
                    <p className="text-center text-lg font-bold text-blue-500">Followers</p>
                </div>

            </div>
        </div>

    </div>

         <ScrollAni />



         <div className="flex justify-between mx-20 mt-4 ">
                <div className="flex items-center justify-center" style={{backgroundColor:'#303743',boxShadow: 'inset rgb(6 8 12 / 50%) -1px -1px 1px 0px',width: 'calc((100vw - 540px)/3)',height: 'calc((100vw - 680px)/3)' }}>
                  <div className="bg-white p-8 rounded-lg w-full h-full" style={{backgroundColor:'#303743',boxShadow: 'inset rgb(6 8 12 / 50%) -1px -1px 1px 0px',width: 'calc((100vw - 540px)/3)',height: 'calc((100vw - 680px)/3)' }}>
                    {/* Image */}
                    <div className="mb-4">
                      <img type='lazy' src="https://images.unsplash.com/photo-1616906761598-3ee9060c676e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-72 object-cover rounded-md" />
                    </div>
                    {/* Like and Comment Section */}
                    <div className="flex items-center justify-between text-gray-500">
                      <div className="flex items-center space-x-2">
                        <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                          <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                          <span>42 Likes</span>
                        </button>
                      </div>
                      <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                        <svg width="22px" height="22px" viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"></path>
                        </svg>
                        <span>300K+ Reach</span>
                      </button>
                    </div>
                    <hr className="mt-2 mb-2" />

                  </div>
                </div>
                <div className="flex items-center justify-center" style={{backgroundColor:'#303743',boxShadow: 'inset rgb(6 8 12 / 50%) -1px -1px 1px 0px',width: 'calc((100vw - 540px)/3)',height: 'calc((100vw - 680px)/3)' }}>
                  <div className="bg-white p-8 rounded-lg w-full h-full" style={{backgroundColor:'#303743',boxShadow: 'inset rgb(6 8 12 / 50%) -1px -1px 1px 0px',width: 'calc((100vw - 540px)/3)',height: 'calc((100vw - 680px)/3)' }}>
                    {/* Image */}
                    <div className="mb-4">
                      <img type='lazy' src="https://images.unsplash.com/photo-1616906761598-3ee9060c676e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-72 object-cover rounded-md" />
                    </div>
                    {/* Like and Comment Section */}
                    <div className="flex items-center justify-between text-gray-500">
                      <div className="flex items-center space-x-2">
                        <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                          <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                          <span>42 Likes</span>
                        </button>
                      </div>
                      <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                        <svg width="22px" height="22px" viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"></path>
                        </svg>
                        <span>300K+ Reach</span>
                      </button>
                    </div>
                    <hr className="mt-2 mb-2" />

                  </div>
                </div>
                <div className="flex items-center justify-center" style={{backgroundColor:'#303743',boxShadow: 'inset rgb(6 8 12 / 50%) -1px -1px 1px 0px',width: 'calc((100vw - 540px)/3)',height: 'calc((100vw - 680px)/3)' }}>
                  <div className="bg-white p-8 rounded-lg w-full h-full" style={{backgroundColor:'#303743',boxShadow: 'inset rgb(6 8 12 / 50%) -1px -1px 1px 0px',width: 'calc((100vw - 540px)/3)',height: 'calc((100vw - 680px)/3)' }}>
                    {/* Image */}
                    <div className="mb-4">
                      <img type='lazy' src="https://images.unsplash.com/photo-1616906761598-3ee9060c676e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-72 object-cover rounded-md" />
                    </div>
                    {/* Like and Comment Section */}
                    <div className="flex items-center justify-between text-gray-500">
                      <div className="flex items-center space-x-2">
                        <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                          <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C6.11 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-4.11 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                          <span>42 Likes</span>
                        </button>
                      </div>
                      <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 19V6M5 13l7-7 7 7" />
                        </svg>
                        <span>300K+ Reach</span>
                      </button>
                    </div>
                    <hr className="mt-2 mb-2" />

                  </div>
                </div>
             </div>

            


        {/* </div> */}

</div>
    )
}

export default Profile;





