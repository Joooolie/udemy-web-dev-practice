/* 
Creates a QR code from the url provided in the CLI and saves it to a text file.
*/

import inquirer from 'inquirer';
import { url } from 'inspector';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([{
    message: "Type in a URL",
    name: "URL"
  }])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));

    
    fs.writeFile('URL.txt', url, err => {
        if (err) {
        console.error(err);
        } else {
        // file written successfully
        }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });