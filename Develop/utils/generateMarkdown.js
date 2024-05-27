// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    MIT: '!License: MIT',
    Apache: '!License',
    // Add more licenses here...
};

// Check if the provided license exists in the badges object
if (license && licenseBadges[license]) {
    return licenseBadges[license];
} else {
    return ''; // Return an empty string if no license or invalid license
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}
const license = "";
if (license === "") {
  console.log("");
} else {
  console.log(return)
}
module.exports = generateMarkdown;
