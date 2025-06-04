import DOMPurify from 'dompurify';

export const RenderEmbeddedText = ({ embeddedText }) => {
  if (!embeddedText || typeof embeddedText !== 'string') {
    return null; // or <p>No content available</p>
  }

  // Decode Unicode escapes like \u003C
  const unicodeDecoded = embeddedText.replace(/\\u([\dA-F]{4})/gi, (_, g) =>
    String.fromCharCode(parseInt(g, 16))
  );

  // Decode HTML entities (like &amp;)
  const parser = new DOMParser();
  const htmlDecoded = parser.parseFromString(unicodeDecoded, 'text/html').documentElement.textContent;

  // Sanitize
  const sanitizedHTML = DOMPurify.sanitize(htmlDecoded);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
};
