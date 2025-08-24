import React from 'react';
import { Download } from 'lucide-react';

const Resume: React.FC = () => {
  const handleDownload = () => {
    
    const pdfPath = `/assests/NehaTabassum_portfolio.pdf`;

    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Neha_Tabassum_resume.pdf';
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center space-x-2 text-white hover:text-blue-400 cursor-pointer transition-colors duration-200 font-medium"
    >
      <Download size={16} />
      <span>Resume</span>
    </button>
  );
};

export default Resume;