const fs = require('fs');
const pdfMake = require('pdfmake');

// Define the file structure data
const fileStructure = `
/proiect_ftp
    /client
        /node_modules
        /public
            index.html
        /src
            /components
                FileUploadComponent.js
                FileDownloadComponent.js
                StatusComponent.js
            App.js
            index.js
        package.json
        package-lock.json
    /server
        /node_modules
        /src
            /config
                ftp.config.js
                mongodb.config.js
                passport.config.js
            /controllers
                ftp.controller.js
                key.controller.js
                user.controller.js
            /models
                key.model.js
                user.model.js
            /routes
                ftp.routes.js
                user.routes.js
            server.js
        package.json
        package-lock.json
README.md
`;

// Define the font paths
const fontPaths = {
  RobotoRegular: 'D:/Download/Dizertatie/PRESENTATION/FILEMANAGE_PRO/node_modules/roboto-font/fonts/Roboto-Regular.ttf',
  RobotoBold: 'D:/Download/Dizertatie/PRESENTATION/FILEMANAGE_PRO/node_modules/roboto-font/fonts/Roboto-Bold.ttf',
};

// Create a document definition for pdfmake
const docDefinition = {
  content: [
    { text: 'File Structure', style: 'header' },
    { text: fileStructure },
  ],
  styles: {
    header: {
      fontSize: 18,
      bold: true,
      marginBottom: 10,
    },
  },
  defaultStyle: {
    font: 'RobotoRegular', // Set default font to Roboto Regular
  },
};

// Define the font styles
const fonts = {
  RobotoRegular: {
    normal: fontPaths.RobotoRegular,
    bold: fontPaths.RobotoBold,
  },
};

// Create a printer and generate the PDF
const printer = new pdfMake(fonts);
const pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream('file_structure.pdf'));
pdfDoc.end();
