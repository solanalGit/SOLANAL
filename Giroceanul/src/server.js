const express = require('express');
const xlsx = require('xlsx');
const app = express();
const port = 3000;

// Example endpoint to read an XLSX file
app.get('/api/zones', (req, res) => {
    const workbook = xlsx.readFile('data/streets_zones.xlsx'); // Specify the path to your XLSX file
    const sheetName = workbook.SheetNames[0]; // Read the first sheet
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet); // Convert to JSON format

    res.json(data); // Send the data as a response
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});