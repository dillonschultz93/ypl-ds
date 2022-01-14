// -----------------------------------------------
// PASTA DIMENSION SCRIPT
// -----------------------------------------------
// Description: all generic functions generally required by other Pasta scripts
// Authors: Manuel Colom · manuel.colom@yummly.com, Dillon Schultz · dillon.schultz@yummly.com
// TODO: refactor and make this less hacky
//
// Copyright (c) 2022 Yummly, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// -----------------------------------------------

// Import the necessary apparatuses and utilities
import { generateNewScale, generateAllScaleTokens } from './pasta-apparatuses/pasta-dimensions-scale.js';
import { buildScaleTable, buildScaleOutput, handleCopyToClipboard } from './pasta-utilities/pasta-doc-utilities.js';

// Collect the DOM selectors
const scaleInputs = [...document.querySelectorAll('.scalingInputs')];
const scaleRawJSONButton = document.querySelector('#RawTokensScalesCollector button');
const scaleFigmaButton = document.querySelector('#FigmaTokensScalesCollector button');

// Set up a piece of state to store all of the scale tokens
const ALL_SCALES = {};

// Set a constant options and state object.
const SCALE_CLUSTERS = {
  base: 2,
  ratio: 2,
  baseIndex: 400,
  choices: [8,10,12,14,16,18,20,24,28,32,40,48,60,96,144,192,256,512],
  scales: {}
};

// Set a constant array of index values.
const SCALE_INDEX = [
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  1000,
  1100,
  1200,
  1300,
  1400,
  1500,
  1600,
  1700,
  1800,
  1900,
  2000
];

const NOMENCLATURE_OPTIONS = {
  namespace: 'YPL',
  project: window.projectId,
  kingdom: 'TKUI_M'
};

const {choices, scales} = SCALE_CLUSTERS;

/**
 * @description Initializes any generation of dynamic content that needs to happen in the scales section of the page
 */
function initScalesSection() {
  // Generate scale token values.
  generateNewScale(SCALE_CLUSTERS, 'geoA', SCALE_CLUSTERS.base, SCALE_CLUSTERS.ratio, SCALE_CLUSTERS.baseIndex, 100, 1100);
  generateNewScale(SCALE_CLUSTERS, 'arithA', SCALE_CLUSTERS.base, SCALE_CLUSTERS.ratio, SCALE_CLUSTERS.baseIndex, 100, 1600);
  generateNewScale(SCALE_CLUSTERS, 'arithB', SCALE_CLUSTERS.base, SCALE_CLUSTERS.ratio, SCALE_CLUSTERS.baseIndex, 800, 2000);

  // Generate all scale tokens.
  generateAllScaleTokens(scales, ALL_SCALES, NOMENCLATURE_OPTIONS);

  // Generate a new table based on the scales.
  buildScaleTable('scales-table', SCALE_INDEX, SCALE_CLUSTERS.baseIndex, scales, choices);

  // Generate a new detail summary view based on all of the formatted tokens.
  buildScaleOutput('output-table', ALL_SCALES);
};

// SET UP EVENT LISTENERS

// Add event listeners to all the scale inputs to make the table reactive to the inputs.
scaleInputs.forEach(input => {
  input.addEventListener("input", event => {
    // If the value is less than the minimum value set on the input, then force the value to the minimum.
    if (event.target.value < event.target.min) {
      event.target.value = event.target.min;
    }

    // Only react to changes from the inputs if the value from the event isn't empty or null.
    if (event.target.value !== '') {
      // Collect the table body selector.
      const tableBody = document.querySelector('#scales-table tbody');
      const outputTableBody = document.querySelector('#output-table tbody');

      // Set the new state of the scale token.
      SCALE_CLUSTERS[event.target.id] = parseInt(event.target.value);

      // Empty out the table body contents.
      tableBody.innerHTML = '';
      outputTableBody.innerHTML = '';

      // Initialize a new table body.
      initScalesSection();
    }

    return;
  });
});

scaleRawJSONButton.addEventListener('click', () => {
  handleCopyToClipboard('raw', ALL_SCALES);
});

scaleFigmaButton.addEventListener('click', () => {
  handleCopyToClipboard('figma', ALL_SCALES, 'Pasta Apparatus: https://yummly.github.io/pasta/farfalle/tokens/dimensions', 'other');
});

// Build the initial values of all tokens on page load.
initScalesSection();
