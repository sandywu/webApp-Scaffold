/*
 * grunt-init-jquery
 * https://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a jQuery plugin, including QUnit unit tests.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '_Project name_ should not contain "jquery" or "js" and ' +
  'should be a unique ID not already in use at plugins.jquery.com. _Project ' +
  'title_ should be a human-readable title, and doesn\'t need to contain ' +
  'the word "jQuery", although it may. For example, a plugin titled "Awesome ' +
  'Plugin" might have the name "awesome-plugin".' +
  '\n\n'+
  'For more information, please see the following documentation:' +
  '\n\n'+
  'Naming Your Plugin      http://plugins.jquery.com/docs/names/\n' +
  'Publishing Your Plugin  http://plugins.jquery.com/docs/publish/\n' +
  'Package Manifest        http://plugins.jquery.com/docs/package-manifest/';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'jquery'}, [
    // Prompt for these values.
    init.prompt('name')
    // init.prompt('title', function(value, data, done) {
    //   // Fix jQuery capitalization.
    //   value = value.replace(/jquery/gi, 'jQuery');
    //   done(null, value);
    // })
    // init.prompt('description', 'The best jQuery plugin ever.'),
//     init.prompt('version'),
//     init.prompt('repository'),
//     init.prompt('homepage'),
//     init.prompt('bugs'),
//     init.prompt('licenses', 'MIT'),
//     init.prompt('author_name'),
//     init.prompt('author_email'),
//     init.prompt('author_url'),
//     init.prompt('jquery_version')
  ], function(err, props) {
    // A few additional properties.

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: 'libs/**'});


    // All done!
    done();
  });

};
