// app/page.tsx
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

interface FileItem {
  name: string;
  path: string;
  isDirectory: boolean;
}

interface DocsStructure {
  [category: string]: FileItem[];
}

function formatName(name: string): string {
  return name
    .replace(/-/g, ' ')
    .replace(/_/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function readDocsDirectory(dirPath: string, baseUrl: string = ''): FileItem[] {
  const items: FileItem[] = [];
  
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      const urlPath = `${baseUrl}/${entry.name}`.replace(/\\/g, '/');
      
      if (entry.isDirectory()) {
        // Recursively read nested directories
        const nestedItems = readDocsDirectory(fullPath, urlPath);
        items.push(...nestedItems);
      } else if (entry.name.endsWith('.md')) {
        const nameWithoutExt = entry.name.replace('.md', '');
        items.push({
          name: nameWithoutExt,
          path: urlPath.replace('.md', ''),
          isDirectory: false
        });
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
  }
  
  return items;
}

function getDocsStructure(): DocsStructure {
  const docsPath = path.join(process.cwd(), 'docs');
  const structure: DocsStructure = {};
  
  try {
    const categories = fs.readdirSync(docsPath, { withFileTypes: true });
    
    for (const category of categories) {
      if (category.isDirectory()) {
        const categoryPath = path.join(docsPath, category.name);
        const files = readDocsDirectory(categoryPath, `/${category.name}`);
        structure[category.name] = files;
      }
    }
  } catch (error) {
    console.error('Error reading docs directory:', error);
  }
  
  return structure;
}

export default function HomePage() {
  const docsStructure = getDocsStructure();
  const categories = Object.keys(docsStructure).sort();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Documentation Hub
          </h1>
          <p className="text-xl text-slate-600">
            Explore tutorials and guides for different technologies
          </p>
        </div>

        {categories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-slate-500">No documentation found</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
              >
                <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-3 border-b-2 border-blue-500">
                  {formatName(category)} Tutorial
                </h2>
                
                <div className="space-y-2">
                  {docsStructure[category].length === 0 ? (
                    <p className="text-sm text-slate-500 italic">
                      No documents available
                    </p>
                  ) : (
                    docsStructure[category].map((file) => (
                      <Link
                        key={file.path}
                        href={`/docs${file.path}`}
                        className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200 text-sm"
                      >
                        <span className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          {formatName(file.name)}
                        </span>
                      </Link>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

