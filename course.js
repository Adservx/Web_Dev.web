function downloadPDF(filename) {
    const link = document.createElement('a');
    link.href = filename;
    link.download = filename;
    link.click();
}