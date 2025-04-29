import React, { useState } from 'react';

export default function SignInPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Simple validation
  //later we will add zod validation
  const validate = () => {
    const errs = {};
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (formData.password.length < 6) {
      errs.password = 'Password must be at least 6 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log('Signing in with', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black px-4 py-8">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-extrabold mb-4 text-center">Sign In</h1>
        <p className="text-center text-gray-600 mb-6">
          Welcome back! Enter your credentials to access your account.
        </p>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.email ? 'true' : 'false'}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-black'
              }`}
              placeholder="user@gmail.com"
            />
            {errors.email && (
              <p className="mt-1 text-red-600 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.password ? 'true' : 'false'}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.password
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-black'
              }`}
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="mt-1 text-red-600 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <a href="/signup" className="text-black font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
