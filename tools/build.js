/**
 * function-batch
 *
 * Copyright © 2016 Michael Dougall. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

const less = require('rollup-plugin-less');
const fs = require('fs');
const del = require('del');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const pkg = require('../package.json');

let promise = Promise.resolve();

// Clean up the output directory
promise = promise.then(() => del(['dist/*']));

// Compile source code into a distributable format with Babel
for (const format of ['es6', 'cjs', 'umd']) {
  promise = promise.then(() => rollup.rollup({
    entry: 'src/index.js',
    external: Object.keys(pkg.dependencies),
    plugins: [
      babel(Object.assign(pkg.babel, {
        babelrc: false,
        include: '**/**.js',
        exclude: 'node_modules/**',
        runtimeHelpers: true,
        presets: pkg.babel.presets.map((x) => (x === 'es2015' ? 'es2015-rollup' : x)),
      })),
      // Start React configuration
      format === 'es6' && less({
        // We only want to output once. This is just a dirty hack.
        output: 'dist/styles.css',
      }),
      // End React configuration
    ],
  }).then((bundle) => bundle.write({
    dest: `dist/${format === 'cjs' ? 'index' : `index.${format}`}.js`,
    format,
    sourceMap: true,
    moduleName: format === 'umd' ? pkg.name : undefined,
  })));
}

// Copy package.json and LICENSE.txt
promise = promise.then(() => {
  delete pkg.private;
  delete pkg.devDependencies;
  delete pkg.scripts;
  delete pkg.eslintConfig;
  delete pkg.babel;
  fs.writeFileSync('dist/package.json', JSON.stringify(pkg, null, '  '), 'utf-8');
  fs.writeFileSync('dist/LICENSE', fs.readFileSync('LICENSE', 'utf-8'), 'utf-8');
  fs.writeFileSync('dist/README.md', fs.readFileSync('README.md', 'utf-8'), 'utf-8');
});

promise.catch((err) => console.error(err.stack)); // eslint-disable-line no-console
