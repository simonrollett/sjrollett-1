const vars = require("../vars.js");

function head(data){return `
  <!doctype html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <title>${data.head.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <meta property="og:type" content="website">
    <meta property="og:title" content="${data.head.title}">
    <meta property="og:url" content="">
    <meta property="og:site_name" content="${vars.site_name}">
    <meta property="og:locale" content="default">
    <meta property="og:image" content="">
    <meta property="og:updated_time" content="">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${data.head.title}">
    <meta name="twitter:image" content="">

    <meta property="og:type" content="website">
    <meta property="og:title" content="${data.head.title}">
    <meta property="og:url" content="">
    <meta property="og:site_name" content="${vars.site_name}">
    <meta property="og:locale" content="default">
    <meta name="twitter:card" content="">
    <meta name="twitter:title" content="${data.head.title}">

    <link rel="icon" href="/assets/images/brand/favicon.ico">
    <link rel="stylesheet" href="/assets/css/styles.css?1">
    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>

    <script>
        WebFont.load({
            google: {
                families: ['Oswald']
            }
        });
    </script>
  </head>
    `};

module.exports = head;
