
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordModal = ({ isVisible, onClose }) => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    // Function to validate email format
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Forgot Password submitted with email:', email);

        // Validate email format
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Call your API to send OTP
        try {
            const response = await fetch('http://localhost:8080/api/user/generate-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                alert('OTP sent successfully');
              navigate('/otp')
            } else {
                const errorData = await response.json(); // Parse error response
                alert('Invalid email address or not matched: ' + (errorData.message || 'Unknown error'));
            }
        } catch (error) {
            console.error('Error during OTP generation:', error);
            alert('An error occurred while sending OTP: ' + error.message);
        }
    };

    if (!isVisible) return null; // If not visible, render nothing

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                    &times;
                </button>
                <h2 className="text-2xl font-semibold text-center mb-6">Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update email state
                            required 
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2" 
                            placeholder="you@example.com" 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    >
                        Next
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordModal;

