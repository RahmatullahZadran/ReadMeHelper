import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import remarkMath from 'remark-math'; // corrected import
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const EditorPage = () => {
    const [markdownContent, setMarkdownContent] = useState(
        // Pre-filled markdown content with template
        `# My Project

A brief description of my project.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

Provide installation instructions here.

## Usage

Provide usage instructions here.

## Contributing

Provide guidelines for contributing to the project here.

## License

Specify the project's license here.
`
    );

    const handleMarkdownChange = (event) => {
        setMarkdownContent(event.target.value);
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Create Your README</h1>
            <div className="flex">
                <div className="w-1/2">
                    <textarea
                        className="w-full h-96 p-4 border border-gray-300 rounded resize-none"
                        value={markdownContent}
                        onChange={handleMarkdownChange}
                        placeholder="Enter your markdown content here..."
                    ></textarea>
                </div>
                <div className="w-1/2 ml-4">
                    <h2 className="text-lg font-bold mb-2">Preview</h2>
                    <div className="border border-gray-300 rounded p-4">
                        <ReactMarkdown
                            remarkPlugins={[gfm, remarkMath]}
                            rehypePlugins={[rehypeKatex]}
                        >
                            {markdownContent}
                        </ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditorPage;
