/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Citations extends React.Component {
  render() {
    const {config: siteConfig} = this.props;

    const editUrl = `mailto:contact@openbci.com`;

    return (
      <div className="mainContainer">
          <div className="showcaseSection">
            <div className="prose">
              <h1>OpenBCI Citation List</h1>
              <p>Here is a list of research papers and articles that have used OpenBCI hardware and software for their research.</p>
            </div>
            <p>Are you using OpenBCI for research?</p>
            <a href={editUrl} className="button">
              Let us know!
            </a>
            <p>      </p>
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS3k7GrXAZDcGHLbT979YeCQH0HcfpkHCrlmIfgrY2snD5arry17GG_nHxopxnapZHrEeB4eeazdbXh/pubhtml?widget=true&amp;headers=false" width='100%' height='1000'></iframe>
          </div>
      </div>
    );
  }
}

module.exports = Citations;
