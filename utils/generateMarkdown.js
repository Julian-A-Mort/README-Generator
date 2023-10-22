//license information
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License](https://img.shields.io/badge/license-${encodeURIComponent(license.replace(" ", "_"))}-blue.svg)`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license !== 'None') {
    switch (license) {
      case 'MIT':
        return 'https://opensource.org/licenses/MIT';
      case 'GPLv3':
        return 'https://www.gnu.org/licenses/gpl-3.0';
      case 'Apache 2.0':
        return 'https://opensource.org/licenses/Apache-2.0';
      case 'BSD 3-Clause':
        return 'https://opensource.org/licenses/BSD-3-Clause';
      default:
        return ''; 
    }
  }
  return '';
}

function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  return `
  ## License
  This project is licensed under the [${license}](${licenseLink}) license.
  ${licenseBadge}
  `;
}

//markdown function
function generateMarkdown(data) {

  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  
  return `
  # ${data.title} ${licenseBadge}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  ${data.usage}
  
  ${licenseSection}
  
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  To run tests, run the following command:
  \`\`\`
  ${data.tests}
  \`\`\`
  
  ## Questions
  If you have any questions about this repo, then please open an issue or contact me on GitHub at [${data.username}](https://github.com/${data.username}) or directly at ${data.email}.
  `;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};
