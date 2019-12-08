function template_home(data){
return `<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <title> ${data.head.title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

  <meta property="og:type" content="website">
  <meta property="og:title" content="Existing customers">
  <meta property="og:url" content="http://www.policyexpert.co.uk/existing-customers/index.html">
  <meta property="og:site_name" content="Policy Expert">
  <meta property="og:locale" content="default">
  <meta property="og:image" content="http://www.policyexpert.co.uk/shared-assets/vector/logo_sme1.svg">
  <meta property="og:updated_time" content="2019-12-04T11:21:59.421Z">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="Existing customers">
  <meta name="twitter:image" content="http://www.policyexpert.co.uk/shared-assets/vector/logo_sme1.svg">

  <meta property="og:type" content="website">
  <meta property="og:title" content="Existing customers">
  <meta property="og:url" content="http://www.policyexpert.co.uk/existing-customers/index.html">
  <meta property="og:site_name" content="Policy Expert">
  <meta property="og:locale" content="default">
  <meta property="og:updated_time" content="2019-12-04T11:21:59.421Z">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="Existing customers">

  <link rel="icon" href="./assets/images/brand/favicon.ico">
  <link rel="stylesheet" href="./assets/css/styles.css?1">
</head>

<body>
${data.content.body.map(bodyContent =>`
  ${bodyContent}
`).join('')}
</body>

</html>
`}
module.exports = template_home;
