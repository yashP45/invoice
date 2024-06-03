import React, { useState } from 'react';
import { generatePDF } from '../api/api';

const GeneratePDFPage: React.FC = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const token = localStorage.getItem('token') || '';

  const handleGeneratePDF = async () => {
    try {
      const { data } = await generatePDF(token);
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (err) {
      alert('Error generating PDF');
    }
  };

  const handleDownloadPDF = () => {
    if (pdfUrl) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.setAttribute('download', 'invoice.pdf');
      document.body.appendChild(link);
      link.click();
    }
  };

  return (
    <div>
      <h2>Generate PDF</h2>
      <button onClick={handleGeneratePDF}>Generate PDF</button>
      {pdfUrl && (
        <div>
          <iframe src={pdfUrl} width="100%" height="500px" title="Invoice PDF"></iframe>
          <button onClick={handleDownloadPDF}>Download PDF</button>
        </div>
      )}
    </div>
  );
};

export default GeneratePDFPage;
