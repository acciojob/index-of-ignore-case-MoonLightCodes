/* script.js */
document.getElementById('findIndexButton').addEventListener('click', function() {
  const mainString = document.getElementById('mainString').value;
  const subString = document.getElementById('subString').value;

  // Function to find index of substring case-insensitively
  function indexOfIgnoreCase(str, subStr) {
    if (!str || !subStr) {
      return -1; // Return -1 for empty inputs
    }

    // Convert both strings to lowercase
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();

    // Use indexOf to find the index of the substring
    return lowerStr.indexOf(lowerSubStr);
  }

  const result = indexOfIgnoreCase(mainString, subString);

  // Display the result
  const resultText = document.getElementById('resultText');
  resultText.textContent = result >= 0 ? `Index: ${result}` : "Substring not found";
});
