import React, { useState } from 'react';

const READMEForm = () => {
  const [projectTitle, setProjectTitle] = useState('');
  const [description, setDescription] = useState('');
  const [prerequisites, setPrerequisites] = useState('');
  const [installation, setInstallation] = useState('');
  const [runningTests, setRunningTests] = useState('');
  const [deployment, setDeployment] = useState('');
  const [builtWith, setBuiltWith] = useState('');
  const [contributing, setContributing] = useState('');
  const [versioning, setVersioning] = useState('');
  const [authors, setAuthors] = useState('');
  const [license, setLicense] = useState('');
  const [acknowledgments, setAcknowledgments] = useState('');

  const template = `
# ${projectTitle || '[Project Title]'}

## Description
${description || '[One Paragraph of project description goes here]'}

## Getting Started
${installation || '[These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.]'}

### Prerequisites
${prerequisites || '[What things you need to install the software and how to install them]'}

### Installing
${installation || '[A step by step series of examples that tell you how to get a development env running]'}

## Running the tests
${runningTests || '[Explain how to run the automated tests for this system]'}

### Break down into end to end tests
${runningTests || '[Explain what these tests test and why]'}

### And coding style tests
${runningTests || '[Explain what these tests test and why]'}

## Deployment
${deployment || '[Add additional notes about how to deploy this on a live system]'}

## Built With
${builtWith || '[Dropwizard - The web framework used]\n[Maven - Dependency Management]\n[ROME - Used to generate RSS Feeds]'}

## Contributing
${contributing || '[Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.]'}

## Versioning
${versioning || '[We use SemVer for versioning. For the versions available, see the tags on this repository.]'}

## Authors
${authors || '[Billie Thompson - Initial work - PurpleBooth]\n[See also the list of contributors who participated in this project.]'}

## License
${license || '[This project is licensed under the MIT License - see the LICENSE.md file for details]'}

## Acknowledgments
${acknowledgments || '[Hat tip to anyone whose code was used]\n[Inspiration]\n[etc]'}
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
              Project Title:
              <input 
                type="text" 
                value={projectTitle} 
                onChange={(e) => setProjectTitle(e.target.value)} 
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
              Prerequisites:
              <textarea 
                value={prerequisites} 
                onChange={(e) => setPrerequisites(e.target.value)} 
                required 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Installing:
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
              Running the tests:
              <textarea 
                value={runningTests} 
                onChange={(e) => setRunningTests(e.target.value)} 
                required 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Deployment:
              <textarea 
                value={deployment} 
                onChange={(e) => setDeployment(e.target.value)} 
                required 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Built With:
              <textarea 
                value={builtWith} 
                onChange={(e) => setBuiltWith(e.target.value)} 
                required 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contributing:
              <textarea 
                value={contributing} 
                onChange={(e) => setContributing(e.target.value)} 
                required 
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Versioning:
              <textarea 
                value={versioning}
onChange={(e) => setVersioning(e.target.value)}
required
className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
/>
</label>
</div>
<div>
<label className="block text-sm font-medium text-gray-700">
Authors:
<textarea
value={authors}
onChange={(e) => setAuthors(e.target.value)}
required
className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
/>
</label>
</div>
<div>
<label className="block text-sm font-medium text-gray-700">
License:
<textarea
value={license}
onChange={(e) => setLicense(e.target.value)}
required
className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
/>
</label>
</div>
<div>
<label className="block text-sm font-medium text-gray-700">
Acknowledgments:
<textarea
value={acknowledgments}
onChange={(e) => setAcknowledgments(e.target.value)}
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
