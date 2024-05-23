import React from 'react';

const FrontPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to README Creator!</h1>
            <p className="text-lg text-gray-600 mb-8">Create beautiful README files for your GitHub projects effortlessly.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Get Started</button>
        </div>
    );
}

export default FrontPage;
