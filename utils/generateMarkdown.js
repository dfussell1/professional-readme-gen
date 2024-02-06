// function that returns a license badge based on which license is passed in. if none, returns empty string
function renderLicenseBadge(license) {
  if(license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if(license === 'Apache 2.0') {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if(license === 'GPL v3') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if(license === 'Mozilla') {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
  } else if(license === 'BSD-2') {
    return `![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)`;
  } else if(license === 'BSD-3') {
    return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
  } else if(license === 'Boost') {
    return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
  } else if(license === 'Creative Commons Zero') {
    return `![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)`;
  } else if(license === 'Eclipse') {
    return `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`;
  } else if(license === 'The Unlicense') {
    return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
  } else if(license === 'None') {
    return ``
  }
}

// function that returns license link based on which license is passed in. if none, returns empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    return `[License: MIT](https://opensource.org/licenses/MIT)`;
  } else if(license === 'Apache 2.0') {
    return `[License](https://opensource.org/licenses/Apache-2.0)`;
  } else if(license === 'GPL v3') {
    return `[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if(license === 'Mozilla') {
    return `[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)`;
  } else if(license === 'BSD-2') {
    return `[License: BSD-2](https://opensource.org/licenses/BSD-2-Clause)`;
  } else if(license === 'BSD-3') {
    return `[License: BSD-3](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if(license === 'Boost') {
    return `[License: Boost](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if(license === 'Creative Commons Zero') {
    return `[License: CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)`;
  } else if(license === 'Eclipse') {
    return `[License: Eclipse](https://opensource.org/licenses/EPL-1.0)`;
  } else if(license === 'The Unlicense') {
    return `[License: Unlicense](http://unlicense.org/)`;
  } else if(license === 'None') {
    return ``
  }
}

// function that returns the License Section of the README. if there is no license, returns an empty string
function renderLicenseSection(license) {
  if(license === 'None') {
    return ``;
  }
  
  const licenseLink = renderLicenseLink(license);
      return `
  This project is licensed under the ${license} License. 
  For more information about this license, please visit ${licenseLink}`
}

// function to generate markdown for README.md
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)}

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
  ${renderLicenseSection(data.license)}

  ## Questions

  My GitHub: https://github.com/${data.github}

  For any questions or concerns regarding this repository or my work, please reach out to me at ${data.email}
`;
}
// export function to use in index.js
module.exports = generateMarkdown;
