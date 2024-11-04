import React from "react";
import { FileUpload } from 'primereact/fileupload';
import { CiLocationOn } from "react-icons/ci";
import { IoCloudUploadOutline } from "react-icons/io5";

const SubLink=()=>{
    const flag=0;
    return(
        <div className="w-full h-screen pb-20 flex flex-col justify-start mt-16 lg:ml-[320px]" style={{ backgroundColor: '#282E38' }}>
        <div className="h-fit mx-4 px-6 xl:mx-20 mt-6 rounded-md border-gray-800 border py-8 xl:px-12" style={{backgroundColor:'#303743',boxShadow: 'inset rgb(6 8 12 / 50%) -1px -1px 1px 0px'}}>
            <p className=" font-bold text-lg text-white">Upload a short video on republic day Sales</p>

            <p className="font-light text-md text-gray-300">In publishing and graphic design, Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/) is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.In publishing and graphic design, Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/) is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>

            <div className="flex justify-start mt-6">
                <div className="mr-16"> 
                    <p className="font-bold text-md text-gray-300">Start Date</p>
                    <p className=" font-normal text-sm text-gray-300 mt-2">22 July 2024</p>
                </div>

                <div>
                    <p className="font-bold text-md text-gray-300">Due Date</p>
                    <p className=" font-normal text-sm text-gray-300 mt-2">24 July 2024</p>
                </div>

            </div>

            <div className="my-8">
                {/* <button className="flex items-center text-white border border-gray-300 px-6 py-2">Attach Files <IoCloudUploadOutline color="white" size={22} className="ml-3"/></button> */}
                
                {flag === 1 ?<FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />:<div className="text-white"><input  required="true" className=" border border-gray-400 mr-3 w-80" style={{backgroundColor:'#303743'}}></input><button>Upload Link</button></div> }
            </div>

        </div>
        </div>
    );
}

export default SubLink;