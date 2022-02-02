import handlebars from 'handlebars';
import path from 'path';
import pdf from 'html-pdf';
import fs from 'fs';

const options = { format: 'Letter' }

const html = fs.readFileSync(path.resolve(__dirname, '..', 'view', 'index.handlebars'), 'utf-8');

const template = handlebars.compile(html);
console.log(template({ name: 'joaozinho' }));

pdf.create(template({ name: 'joaozinho' })).toFile('saida.pdf', (err, res) => { });