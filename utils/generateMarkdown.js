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
function renderLicenseSection(license) {
  if(!license) {
    return '';
  }
  // license badge URLs
  const licenseBadges = {
    'MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache License 2.0': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'Artistic License 2.0': 'https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg',
  };

  const licenseNotices = {
    'MIT License': 'This project has an MIT License.',
    'Apache License 2.0': 'This project has an Apache License 2.0.',
    'Artistic License 2.0': 'This project has an Artistic License 2.0.'
  };

  const badgeURL = licenseBadges[license];
  const notice = licenseNotices[license];

  const licenseSection = `
## License
${badgeURL ? `![License](${badgeURL})\n\n` : ''}${notice}\n\n[Read Full License](${renderLicenseLink(license)})`;

  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.licenses);
  const licenseLink = renderLicenseLink(data.licenses);
  const licenseSection = renderLicenseSection(data.licenses);

  const markdownContent = `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## License
  ${licenseBadge} This project has a [${data.licenses}](${licenseLink}) license.

  ## Questions

  If you have any questions about my project, please contact me at [${data.username}](https://github.com/${data.username}) or contact me via email at ${data.email}.`;

  return markdownContent;
}

module.exports = generateMarkdown;
