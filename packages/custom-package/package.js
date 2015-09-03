Package.describe({
  summary: 'Custom Package for musicFinder',
  version: '0.1.0',
  name: 'custom-package'
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------
  api.use("telescope:theme-hubble")
  api.use("telescope:core");

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  // api.addFiles([
  //   'package-tap.i18n'
  // ], ['client', 'server']);

  // // client & server

  // api.addFiles([
  //   'lib/custom_fields.js',
  //   'lib/template_modules.js',
  //   'lib/callbacks.js'
  // ], ['client', 'server']);

  // // client

  api.addFiles([
    // 'lib/client/custom_templates.js'
    'lib/client/templates/custom_share.html',
    'lib/client/templates/custom_upvote.html',
    'lib/client/stylesheets/custom_style.css'
  ], ['client']);

  // // server

  // api.addFiles([
  //   'lib/server/templates/custom_emailPostItem.handlebars'
  // ], ['server']);

  // // i18n languages (must come last)

  // api.addFiles([
  //   'i18n/en.i18n.json'
  // ], ['client', 'server']);

});