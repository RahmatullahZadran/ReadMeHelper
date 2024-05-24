import React, { useState } from 'react';

const READMEForm = () => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [installation, setInstallation] = useState('');
  const [usage, setUsage] = useState('');
  const [readme, setReadme] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const template = `
# ${projectName}

## Description
${description}

## Installation
${installation}

## Usage
${usage}
    `;

    setReadme(template);
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Project Name:
            <input 
              type="text" 
              value={projectName} 
              onChange={(e) => setProjectName(e.target.value)} 
              required 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description:
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              required 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Installation Instructions:
            <textarea 
              value={installation} 
              onChange={(e) => setInstallation(e.target.value)} 
              required 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Usage:
            <textarea 
              value={usage} 
              onChange={(e) => setUsage(e.target.value)} 
              required 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </label>
        </div>
        <button 
          type="submit" 
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Generate README
        </button>
      </form>
      {readme && (
        <div className="mt-8">
          <h2 className="text-xl font-bold">Generated README</h2>
          <pre className="p-4 bg-gray-100 rounded-md border border-gray-300 whitespace-pre-wrap">
            {readme}
          </pre>
        </div>
      )}
    </div>
  );
};

export default READMEForm;
