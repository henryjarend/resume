const markdownpdf = require("markdown-pdf");
const fs = require("fs");

const markdownPath = "./path/to/your/markdown.md";
const pdfPath = "./path/to/your/pdf.pdf";

markdownpdf().from(markdownPath).to(pdfPath, () => {
  console.log("Markdown rendered to PDF.");
});
