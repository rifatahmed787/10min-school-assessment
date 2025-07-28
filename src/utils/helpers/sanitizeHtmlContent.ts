import DOMPurify from "dompurify";
export const processHtmlContent = (html: string) => {
  if (!html) return "";

  const sanitized = DOMPurify.sanitize(html);

  const withParagraphs = sanitized
    .split(/\n+/)
    .map((line) => {
      const trimmed = line.trim();
      const isHtmlTag = /^<\/?(h[1-4]|p|ul|ol|li|strong|em|b|i|img|div|br)[\s>]/i.test(trimmed);
      return trimmed && !isHtmlTag ? `<p>${trimmed}</p>` : trimmed;
    })
    .join("") ?? "";

  return withParagraphs
    .replace(/<h1>/g, '<h1 class="text-2xl font-bold mb-2">')
    .replace(/<h2>/g, '<h2 class="text-xl font-semibold mb-2">')
    .replace(/<h3>/g, '<h3 class="text-lg font-semibold mb-2">')
    .replace(/<h4>/g, '<h4 class="text-base font-semibold mb-2">')
    .replace(/<p>/g, '<p class="mb-4 text-base leading-relaxed">')
    .replace(/<ul>/g, '<ul class="list-disc pl-5 mb-4">')
    .replace(/<ol>/g, '<ol class="list-decimal pl-5 mb-4">')
    .replace(/<li>/g, '<li class="mb-1">');
};