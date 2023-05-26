const markdownpdf = require("markdown-pdf");
const fs = require("fs");

const markdownPath = "./docs/HenryArendResume.md";
const pdfPath = "./HenryArendResume.pdf";

markdownpdf().from(markdownPath).to(pdfPath, () => {
  console.log("Markdown rendered to PDF.");
});
