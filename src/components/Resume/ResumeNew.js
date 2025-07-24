import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// ✅ Correct PDF.js worker for create-react-app
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`; // 4.x may fail

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const pdf = "/Adityacv.pdf";

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">My Resume</h1>
        <p className="text-gray-600 mb-4">Download or view below</p>
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          <AiOutlineDownload className="mr-2" />
          Download CV
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center w-full overflow-auto"
      >
        <Document
          file={pdf}
          onLoadSuccess={onDocumentLoadSuccess}
          className="flex justify-center"
        >
          <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.6} />
        </Document>
      </motion.div>

      {numPages && (
        <p className="mt-4 text-gray-500 text-sm">
          Page 1 of {numPages}
        </p>
      )}
    </div>
  );
}

export default ResumeNew;
