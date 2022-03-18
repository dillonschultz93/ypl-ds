// -----------------------------------------------
// PASTA APPARATUS: STATIC SIZE
// -----------------------------------------------
// Description: Functions that generate the necessary static size tokens.
// Authors: Manuel Colom · manuel.colom@yummly.com, Dillon Schultz · dillon.schultz@yummly.com
// ToDo: refactor and make this less hacky
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

import {prefixBuilder} from '../pasta-utilities/pasta-token_naming.js';

/**
 * @description Generates all static size tokens as choices using a set of constant values.
 * @param {Object} namingOptions - The object containing naming options for the prefix of each token.
 */
export function generateAllStaticSizeTokens(namingOptions) {
  // Collect the prefix string
  const prefix = prefixBuilder(namingOptions);
  let staticSizesOutput = {};

  const staticSizes = {
    "xs": 1,
    "s": 2,
    "m": 3,
    "l": 4
  }

  Object.entries(staticSizes).forEach(size => {
    const [key, value] = size;

    staticSizesOutput[`${prefix}.sizes.static.${key}`] = value;
  });

  return staticSizesOutput;
}