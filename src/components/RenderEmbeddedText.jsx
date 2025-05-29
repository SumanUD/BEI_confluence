import DOMPurify from 'dompurify';
export const RenderEmbeddedText = ({ embeddedText }) => {  
  const decodedText = JSON.parse(`"${embeddedText}"`);
  const sanitizedHTML = DOMPurify.sanitize(decodedText);
  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
};