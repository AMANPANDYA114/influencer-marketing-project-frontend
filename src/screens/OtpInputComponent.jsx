

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const OtpInput = ({ onClose }) => {
//     const [otp, setOtp] = useState(Array(4).fill('')); // Initialize state for 4 OTP digits
//     const navigate = useNavigate(); // Initialize useNavigate

//     const handleChange = (e, index) => {
//         const value = e.target.value;

//         // Allow only single digit input (0-9)
//         if (/^[0-9]?$/.test(value)) {
//             const newOtp = [...otp];
//             newOtp[index] = value;

//             setOtp(newOtp);

//             // Move focus to the next input if a value is entered
//             if (value) {
//                 const nextInput = document.getElementById(`otp-input-${index + 1}`);
//                 if (nextInput) nextInput.focus();
//             }
//         }
//     };

//     const handleKeyDown = (e, index) => {
//         // Focus the previous input on backspace
//         if (e.key === 'Backspace' && !otp[index] && index > 0) {
//             const prevInput = document.getElementById(`otp-input-${index - 1}`);
//             if (prevInput) prevInput.focus();
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (otp.join('').length === 4) {
//             const otpCode = otp.join('');
//             await handleVerifyOTP(otpCode); // Call the verification function
//         } else {
//             alert('Please enter a valid 4-digit OTP.');
//         }
//     };

//     const handleVerifyOTP = async (otpCode) => {
//         try {
//             const response = await fetch('http://localhost:8080/api/user/verify-otp', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ otpCode }), // Send otpCode to verify
//             });
//             const data = await response.json();

//             if (response.ok) {
//                 // OTP is valid, navigate to the Change Password screen
//                 alert('OTP verified successfully');
//                 navigate('/login'); // Update to your desired route
//             } else {
//                 alert('Invalid OTP or failed to verify: ' + (data.message || 'Unknown error'));
//             }
//         } catch (error) {
//             console.error('Error verifying OTP:', error);
//             alert('An error occurred while verifying OTP. Please try again later.');
//         }
//     };

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md relative">
//                 <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
//                     &times;
//                 </button>
//                 <h2 className="text-2xl font-semibold text-center mb-6">Enter OTP</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="flex justify-between mb-4">
//                         {otp.map((digit, index) => (
//                             <input
//                                 key={index}
//                                 id={`otp-input-${index}`}
//                                 type="text"
//                                 value={digit}
//                                 onChange={(e) => handleChange(e, index)}
//                                 onKeyDown={(e) => handleKeyDown(e, index)}
//                                 className="w-12 h-12 border border-gray-300 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 maxLength="1"
//                                 style={{ fontSize: '24px', color: 'black' }} // Ensure text color is visible
//                             />
//                         ))}
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
//                     >
//                         Verify OTP
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default OtpInput;


import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';

const OtpInputComponent = ({ onClose }) => {
    const [otp, setOtp] = useState(''); // Use a string for OTP
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (otp.length === 4) {
            await handleVerifyOTP(otp); // Call your verification function
        } else {
            alert('Please enter a valid 4-digit OTP.');
        }
    };

    const handleVerifyOTP = async (otpCode) => {
        try {
            const response = await fetch('http://localhost:8080/api/user/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ otpCode }), // Send otpCode to verify
            });
            const data = await response.json();

            if (response.ok) {
                // OTP is valid, navigate to the Change Password screen
                alert('OTP verified successfully');
                navigate('/change'); // Navigate after successful verification
            } else {
                alert('Invalid OTP or failed to verify: ' + (data.message || 'Unknown error'));
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            alert('An error occurred while verifying OTP. Please try again later.');
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                    &times;
                </button>
                <h2 className="text-2xl font-semibold text-center mb-6">Enter OTP</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-center mb-4 space-x-4"> {/* Added space-x-4 for spacing */}
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            separator={<span></span>} // No separator needed
                            renderInput={(props) => (
                                <input
                                    {...props}
                                    className="w-16 h-16 border border-gray-300 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                    style={{ fontSize: '24px', padding: '0', boxSizing: 'border-box' }} // Ensure consistent padding
                                />
                            )}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mt-4"
                    >
                        Verify OTP
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OtpInputComponent;
