

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ProfileForm = ({ onToggle }) => {
//     const navigate = useNavigate();
//     const [fullName, setFullName] = useState('');
//     const [username, setUsername] = useState('');
//     const [bio, setBio] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const token = localStorage.getItem('token'); // Retrieve token from local storage

//         // Prepare the payload with user data
//         const payload = { fullName, username, bio };

//         try {
//             const response = await fetch('http://localhost:8080/api/user/profile/update', {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${token}`, // Include the token in the authorization header
//                 },
//                 body: JSON.stringify(payload),
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 console.log('Profile updated successfully:', data);
//                 alert('Profile updated successfully:', data)
//                 navigate('/profile')
//                 // Optionally navigate or show a success message
//             } else {
//                 const errorData = await response.json();
//                 console.error('Profile update failed:', errorData);
//                 alert('Profile update failed: ' + (errorData.message || 'Unknown error'));
//             }
//         } catch (error) {
//             console.error('Error during profile update:', error);
//             alert('Error during profile update: ' + error.message);
//         }
//     };

//     return (
//         <div className="fixed inset-0 bg-white flex items-center justify-center mt-12">
//             <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
//                 {/* Profile Picture */}
//                 <div className="flex justify-center mb-4">
//                     <img 
//                         src="https://i.postimg.cc/j2yMHtpM/blank-profile-picture-973460-1280.webp" // Dummy profile picture URL
//                         alt="Profile"
//                         className="w-16 h-16 rounded-full object-cover"
//                     />
//                 </div>
//                 <h2 className="text-2xl font-semibold text-center mb-6">Update your profile</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label className="block text-gray-700" htmlFor="fullName">Full Name</label>
//                         <input 
//                             type="text" 
//                             id="fullName" 
//                             value={fullName}
//                             onChange={(e) => setFullName(e.target.value)} // Set state on change
//                             required 
//                             className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
//                             placeholder="Full Name" 
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700" htmlFor="username">Username</label>
//                         <input 
//                             type="text" 
//                             id="username" 
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)} // Set state on change
//                           required
//                             className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
//                             placeholder="Username" 
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700" htmlFor="bio">Bio</label>
//                         <input 
//                             type="text" 
//                             id="bio" 
//                             value={bio}
//                             onChange={(e) => setBio(e.target.value)} // Set state on change
//                            required
//                             className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
//                             placeholder="Enter your bio" 
//                         />
//                     </div>
//                     <button 
//                         type="submit" 
//                         className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
//                     >
//                        Submit
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ProfileForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('https://i.postimg.cc/j2yMHtpM/blank-profile-picture-973460-1280.webp'); // Default image

    const uploadProfileImage = async (file) => {
        const token = localStorage.getItem('token'); // Retrieve token from local storage

        const formData = new FormData();
        formData.append('image', file); // Append selected image

        try {
            const response = await fetch('http://localhost:8080/api/user/profile/upload', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`, // Include the token in the authorization header
                },
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Profile picture uploaded successfully:', data);
                alert('Profile picture uploaded successfully!'); // Success alert
                navigate('/profile');
            } else {
                const errorData = await response.json();
                console.error('Profile update failed:', errorData);
                alert('Profile update failed: ' + (errorData.message || 'Unknown error')); // Error alert
            }
        } catch (error) {
            console.error('Error during profile update:', error);
            alert('Error during profile update: ' + error.message); // Error alert
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(file); // Set the selected image file
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); // Set the preview of the selected image
            };
            reader.readAsDataURL(file); // Create a preview URL for the image
            uploadProfileImage(file); // Call the upload function immediately after selecting the image
        }
    };

    return (
        <div className="fixed inset-0 bg-white flex items-center justify-center mt-12">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                {/* Profile Picture */}
                <div className="flex justify-center mb-4 relative">
                    <img 
                        src={imagePreview} // Use the preview image
                        alt="Profile"
                        className="w-16 h-16 rounded-full object-cover cursor-pointer" // Add cursor pointer
                        onClick={() => document.getElementById('profileImageInput').click()} // Click triggers file input
                    />
                    <input 
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden" // Hide the default file input
                        id="profileImageInput"
                    />
                </div>
                <h2 className="text-2xl font-semibold text-center mb-6">Update your profile</h2>
                <form onSubmit={(e) => e.preventDefault()}> {/* Prevent default form submission */}
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="fullName">Full Name</label>
                        <input 
                            type="text" 
                            id="fullName" 
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)} // Set state on change
                            required 
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
                            placeholder="Full Name" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} // Set state on change
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
                            placeholder="Username" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="bio">Bio</label>
                        <input 
                            type="text" 
                            id="bio" 
                            value={bio}
                            onChange={(e) => setBio(e.target.value)} // Set state on change
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
                            placeholder="Enter your bio" 
                        />
                    </div>
                    <button 
                        type="submit"    
                        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
                        onClick={() => alert('Profile data submitted!')} // Just an example alert for the form submission
                    >
                       Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfileForm;
