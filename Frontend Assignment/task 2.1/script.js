document.getElementById('jobForm').addEventListener('submit', function (e) {
    const title = document.getElementById('title').value;
    const type = document.getElementById('type').value;
    const department = document.getElementById('department').value;
    const country = document.getElementById('country').value;
    const description = document.getElementById('description').value;
    const openingDate = document.getElementById('openingDate').value;

    // Validate required fields
    if (!title || !type || !department || !country || !description || !openingDate) {
        alert('Please fill all the required fields.');
        e.preventDefault();
        return;
    }

    // Validate date
    const currentDate = new Date().toISOString().split('T')[0];
    if (openingDate > currentDate) {
        alert('Opening date cannot be in the future.');
        e.preventDefault();
        return;
    }
});
