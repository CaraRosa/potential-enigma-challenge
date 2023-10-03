// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';

  switch (license) {
    case 'MIT License':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
      break;
    case 'Apache License 2.0':
      badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
      break;
    case 'Artistic License 2.0':
      badge = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)]';
      break;
    default:
      break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';

  switch (license) {
    case 'MIT License':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'Apache License 2.0':
      link = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'Artistic License 2.0':
      link = 'https://opensource.org/licenses/Artistic-2.0';
      break;
      default:
        break;
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
