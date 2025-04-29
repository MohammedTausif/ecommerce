 // src/components/SignupPage.jsx
import React, { useState } from 'react';

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  // Simple client-side validation
  // later we will add zod types for validation
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required.';
    if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email is required.';
    if (form.password.length < 6) errs.password = 'Password must be ≥6 characters.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log('Signing up:', form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black px-4 py-8">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-extrabold mb-4 text-center">Create Your Account</h1>
        <p className="text-center text-gray-600 mb-6">
          Join our eco-chic community and get exclusive sustainable drops.
        </p>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.name ? 'true' : 'false'}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'
              }`}
              placeholder="Jane Doe"
            />
            {errors.name && (
              <p className="mt-1 text-red-600 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.email ? 'true' : 'false'}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'
              }`}
              placeholder="jane@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-red-600 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.password ? 'true' : 'false'}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'
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
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-black font-medium hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
