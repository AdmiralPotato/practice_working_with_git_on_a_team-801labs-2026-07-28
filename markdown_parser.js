import { marked } from 'https://cdn.jsdelivr.net/npm/marked@18.0.7/+esm';

const request = await fetch('README.md');
const markdownText = await request.text();
const htmlText = marked(markdownText);
const markdownContainer = document.getElementById('markdown_container');

markdownContainer.innerHTML = htmlText;
