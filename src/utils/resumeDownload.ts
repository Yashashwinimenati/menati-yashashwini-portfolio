import jsPDF from 'jspdf';
import resumeDocument from '@/assets/resume-document.png';

export const downloadResumeAsPDF = async () => {
  try {
    // Create new PDF document
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Create image element
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    return new Promise<void>((resolve, reject) => {
      img.onload = () => {
        // Calculate dimensions to fit A4 page
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        
        // Calculate aspect ratio
        const imgAspectRatio = img.width / img.height;
        const pageAspectRatio = pageWidth / pageHeight;
        
        let finalWidth = pageWidth;
        let finalHeight = pageHeight;
        
        if (imgAspectRatio > pageAspectRatio) {
          finalHeight = pageWidth / imgAspectRatio;
        } else {
          finalWidth = pageHeight * imgAspectRatio;
        }
        
        // Center the image
        const x = (pageWidth - finalWidth) / 2;
        const y = (pageHeight - finalHeight) / 2;
        
        // Add image to PDF
        pdf.addImage(img, 'PNG', x, y, finalWidth, finalHeight);
        
        // Save the PDF
        pdf.save('Menati_Yashashwini_Resume.pdf');
        resolve();
      };
      
      img.onerror = () => {
        reject(new Error('Failed to load resume image'));
      };
      
      img.src = resumeDocument;
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};