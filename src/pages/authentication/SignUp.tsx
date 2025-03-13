import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom';

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handler for signup navigation
  const handleLoginClick = () => {
    console.log('Navigate to login page');
    navigate('/login');
  };

  const PasswordInput = ({ 
    name, 
    value, 
    show, 
    setShow 
  }: { 
    name: "password" | "confirmPassword"; 
    value: string; 
    show: boolean; 
    setShow: (show: boolean) => void; 
  }) => (
    <div className="relative py-1">
      <div className='text-[16px] text-[#A0A0A0] my-2'>
        {name === 'password' ? 'Password' : 'Confirm Password'}
      </div>
      <input
        type={show ? "text" : "password"}
        name={name}
        placeholder={name === 'password' ? 'Password' : 'Confirm Password'}
        value={value}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg bg-[#263549] text-[#4B5A6F] border border-gray-700 focus:border-purple-500 focus:ring-purple-500 focus:outline-none"
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-[70px] transform -translate-y-1/2 text-gray-400"
      >
        {show ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 font-poppins">
       <Navbar 
        currentPage="signup" 
        onLoginClick={handleLoginClick} 
      />

      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Left Side - Image Section */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1F2937] to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#1F2937] to-transparent z-10" />
          <img
            src='/auth-image.png' 
            alt='picture of girls gaming'
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full lg:w-1/2 bg-[#1F2937] flex items-center justify-start p-8 md:p-20">
          <div className="w-full max-w-md mx-auto">
            <div className="text-center">
              <h1 className="text-[40px] font-semibold text-white mb-2">Welcome Player</h1>
              <p className="text-[#EDE4FC] text-[16px]">Connect with skilled players around the world</p>
              <p className='text-[#A0A0A0] my-8'>
                Already have an account? 
                <a className='text-[#7C3AED] cursor-pointer ml-1 hover:text-purple-400'>
                  Login
                </a>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="space-y-4">
                <div className='py-1'>
                  <div className='text-[16px] text-[#A0A0A0] my-2'>Full name</div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#263549] text-[#4B5A6F] border border-gray-700 focus:border-purple-500 focus:ring-purple-500 focus:outline-none"
                  />
                </div>

                <div className='py-1'>
                  <div className='text-[16px] text-[#A0A0A0] my-2'>Email Address</div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#263549] text-[#4B5A6F] border border-gray-700 focus:border-purple-500 focus:ring-purple-500 focus:outline-none"
                  />
                </div>

                <PasswordInput
                  name="password"
                  value={formData.password}
                  show={showPassword}
                  setShow={setShowPassword}
                />

                <PasswordInput
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  show={showConfirmPassword}
                  setShow={setShowConfirmPassword}
                />

                <div className="flex items-center py-8">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border border-white bg-gray-900 checked:bg-[#7C3AED] focus:ring-offset-0 focus:ring-0 cursor-pointer transition-colors duration-200"
                  />
                  <label className="ml-2 block text-[16px] text-[#A0A0A0]">
                    I Agree to the{" "}
                    <a href="#" className="text-[#7C3AED] hover:text-purple-400">
                      Terms and Condition Policy
                    </a>
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-[#7C3AED] text-white rounded-[24px] hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors"
                >
                  Sign Up
                </button>

                <div className="relative py-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-[#1F2937] text-gray-400">Or</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-[24px] border border-gray-700 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center space-x-2 transition-colors"
                >
                  <span>Login with Google</span>
                  <img src='/googleicon.png' alt="Google logo" className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;