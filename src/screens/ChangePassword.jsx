// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// const ChangePassword = ({ onClose }) => {
//     const [email, setEmail] = useState('');
//     const [newPassword, setNewPassword] = useState('');
//     const [error, setError] = useState('');


//     const handleChangePasswordSubmit = async (e) => {
//         e.preventDefault();

//         // Validate email and new password here as needed
//         if (!email || !newPassword) {
//             setError("Please fill in all fields.");
//             return;
//         }


//         try {
//             const response = await fetch('http://localhost:8080/api/user/reset-password', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     email,
//                     newPassword,
//                 }),
//             });
//             const data = await response.json();

//             if (response.ok) {
//                 // Password changed successfully

//                 alert('Password changed successfully.');
               
//                    navigate('Login');
               
//             } else {
//                 // Error occurred
//                 alert('Error during login: ' + error.message);
         
         
//             }
//         } catch (error) {
//             console.error('Error:', error);
         
//         }


//         // Handle the password change request here
//         // For example, send a POST request to your API
//         // to change the password for the given email.

     
//     };

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md relative">
//                 <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
//                     &times;
//                 </button>
//                 <h2 className="text-2xl font-semibold text-center mb-6">Change Password</h2>
//                 <form onSubmit={handleChangePasswordSubmit}>
//                     <div className="mb-4">
//                         <label className="block text-gray-700" htmlFor="email">Email</label>
//                         <input 
//                             type="email" 
//                             id="email" 
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)} 
//                             required 
//                             className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
//                             placeholder="you@example.com" 
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700" htmlFor="new-password">New Password</label>
//                         <input 
//                             type="password" 
//                             id="new-password" 
//                             value={newPassword}
//                             onChange={(e) => setNewPassword(e.target.value)} 
//                             required 
//                             className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
//                             placeholder="New password" 
//                         />
//                     </div>
//                     {error && <p className="text-red-500 text-center">{error}</p>}
//                     <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
//                         Next
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ChangePassword;






import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChangePassword = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    const handleChangePasswordSubmit = async (e) => {
        e.preventDefault();

        // Validate email and new password here as needed
        if (!email || !newPassword) {
            setError("Please fill in all fields.");
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/user/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    newPassword,
                }),
            });
            const data = await response.json();

            if (response.ok) {
                // Password changed successfully
                alert('Password changed successfully.');
                navigate('/login'); // Navigate to login page
            } else {
                // Error occurred
                alert('Error during password change: ' + (data.message || 'Unknown error'));
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred: ' + error.message);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                    &times;
                </button>
                <h2 className="text-2xl font-semibold text-center mb-6">Change Password</h2>
                <form onSubmit={handleChangePasswordSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
                            placeholder="you@example.com" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="new-password">New Password</label>
                        <input 
                            type="password" 
                            id="new-password" 
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)} 
                            required 
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
                            placeholder="New password" 
                        />
                    </div>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                        Next
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;

