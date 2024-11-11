


import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link here

const Signup = ({ onToggle }) => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Gather form data
        const fullName = e.target.elements['fullName'].value;
        const username = e.target.elements['username'].value;
        const email = e.target.elements['signup-email'].value;
        const password = e.target.elements['signup-password'].value;
        const confirmPassword = e.target.elements['confirm-password'].value; // Added confirm password field

        // Handle signup logic here
        const signupData = { fullName, username, email, password, confirmPassword };

        try {
            const response = await fetch('http://localhost:8080/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signupData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Signup successful:', data);
                // Navigate to login page on successful signup
                navigate('/login');
            } else {
                const errorData = await response.json();
                console.error('Signup failed:', errorData);
                alert('Signup failed: ' + (errorData.message || 'Unknown error'));
            }
        } catch (error) {
            console.error('Error during signup:', error);
            alert('Error during signup: ' + error.message);
        }
    };

    return (
        <div className="fixed inset-0 bg-white flex items-center justify-center"> {/* Fullscreen white background */}
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Create an Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="fullName">Full Name</label>
                        <input 
                            type="text" 
                            id="fullName" 
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
                            required 
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
                            placeholder="Username" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="signup-email">Email</label>
                        <input 
                            type="email" 
                            id="signup-email" 
                            required 
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
                            placeholder="you@example.com" 
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700" htmlFor="signup-password">Password</label>
                        <input 
                            type="password" 
                            id="signup-password" 
                            required 
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
                            placeholder="********" 
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700" htmlFor="confirm-password">Confirm Password</label>
                        <input 
                            type="password" 
                            id="confirm-password" 
                            required 
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
                            placeholder="********" 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p>Already have an account? 
                        <Link to="/login" className="text-blue-500"> Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
