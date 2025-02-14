import React, { useState } from 'react';
import AppBarComponent from '../components/AppBarComponent';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate=useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Implement form submission logic
    try {
      const response=await axios.post('/auth/login',formData)
      console.log(response.data)
      if(response.data.error){
        toast.error(response.data.error)
      }else{
        localStorage.setItem('token',response.data.token)
        localStorage.setItem('username',response.data.user.username)
        toast.success("Login Successfully!")
        navigate('/')
      }
    } catch (error) {
      console.log(error)
      toast.error("Login Failed! Internal sever error")
    }
  };

  return (
    <>
    <AppBarComponent/>
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 bg-gray-700 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>

        {/* Register Redirect */}
        <p className="text-center text-gray-400 mt-6">
          Don't have account?{' '}
          <a href="/register" className="text-blue-400 hover:underline">
            Create Account
          </a>
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default LoginPage;
