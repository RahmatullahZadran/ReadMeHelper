import React, { useState } from 'react';

const READMEForm = () => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [installation, setInstallation] = useState('');
  const [usage, setUsage] = useState('');

  const template = `
# ${projectName || '[Project Name]'}

## Description
${description || '[Description]'}

## Installation
${installation || '[Installation Instructions]'}

## Usage
${usage || '[Usage]'}
  `;

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([template], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = "README.md";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <form className="w-full md:w-1/2 space-y-4">
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
        </form>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <h2 className="text-xl font-bold">Generated README</h2>
          <pre className="p-4 bg-gray-100 rounded-md border border-gray-300 whitespace-pre-wrap">
            {template}
          </pre>
          <button
            onClick={handleDownload}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Download README
          </button>
        </div>
      </div>
    </div>
  );
};

export default READMEForm;
