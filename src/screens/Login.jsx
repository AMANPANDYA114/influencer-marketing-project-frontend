

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import ForgotPasswordModal from '../screens/ForgotPasswordModal'; // Ensure this path is correct

// const Login = () => {
//     const [isLoginVisible, setIsLoginVisible] = useState(true);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLoginSubmit = async (e) => {
//         e.preventDefault();
//         const loginData = { email, password };

//         try {
//             const response = await fetch('http://localhost:8080/api/user/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(loginData),
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 alert ("resp of login",data)
//                 alert('Login successful!');
//                 localStorage.setItem('token', data.token); // Save the token in local storage
//                 console.log('Token is :', data.token); // Log the token to the console
//                 navigate('/profile');
//             } else {
//                 const errorData = await response.json();
//                 alert('Login failed: ' + (errorData.message || 'Unknown error'));
//             }
//         } catch (error) {
//             alert('Error during login: ' + error.message);
//         }
//     };

//     const handleSignUpClick = () => {
//         setIsLoginVisible(true);
//         navigate('/signup');
//     };

//     const handleForgotPasswordClick = () => {
//         setIsLoginVisible(false); // Hide the login form
//     };

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-white">
//             {isLoginVisible ? (
//                 <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md relative">
//                     <h2 className="text-2xl font-semibold text-center mb-6">Welcome Back</h2>
//                     <form onSubmit={handleLoginSubmit}>
//                         <div className="mb-4">
//                             <label className="block text-gray-700" htmlFor="email">Email</label>
//                             <input 
//                                 type="email" 
//                                 id="email" 
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)} 
//                                 required 
//                                 className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
//                                 placeholder="you@example.com" 
//                             />
//                         </div>
//                         <div className="mb-6">
//                             <label className="block text-gray-700" htmlFor="password">Password</label>
//                             <input 
//                                 type="password" 
//                                 id="password" 
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)} 
//                                 required 
//                                 className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
//                                 placeholder="********" 
//                             />
//                         </div>
//                         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
//                             Login
//                         </button>
//                     </form>
//                     <div className="text-center mt-4">
//                         <p>Don't have an account? 
//                             <Link to="/signup" onClick={handleSignUpClick} className="text-blue-500"> Sign up</Link>
//                         </p>
//                         <p className="mt-2">
//                             <button onClick={handleForgotPasswordClick} className="text-blue-500 hover:underline">
//                                 Forgot Password?
//                             </button>
//                         </p>
//                     </div>
//                 </div>
//             ) : (
//                 <ForgotPasswordModal isVisible={true} onClose={() => setIsLoginVisible(true)} />
//             )}
//         </div>
//     );
// };

// export default Login;




import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const accessToken = "EAASC6FZBQ5jkBOzOPE001ZBxvfhbUnZCmWCLtYQWZBIUra9pvcWZCyrt6QfX0ZAE1O9fRyHaYnkK0rDiuEmYcP7cL3Pm3ud1UNuxdZBSCKsCbPihnUui7z46dNDApKFqhiZAmch6W9GUOTNEPwLGYpdzgAMviOtL6tkv0QOkPEj5ONZCaQFiVxBZBwZCFjyEEXSyRpXRXsxlrM1ooS6L94UoTVz4gwtBQZDZD"; // Your access token

    const fetchUserData = async () => {
        const response = await fetch(`https://graph.instagram.com/v1/users/search?access_token=${accessToken}&username=${username}`);
        
        if (!response.ok) {
            console.error('Error fetching user data:', response.statusText);
            return;
        }

        const data = await response.json();
        setUserData(data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchUserData();
    };

    return (
        <div>
            <h1>Instagram User Search</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Enter username"
                    required 
                />
                <button type="submit">Search</button>
            </form>
            {userData && (
                <div>
                    <h2>User Data:</h2>
                    <pre>{JSON.stringify(userData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default Login;



