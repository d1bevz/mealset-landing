// Static page served at the retired /en address: it sends visitors to the
// English root with an explicit language choice so old links keep working.
const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

export function legacyEnglishStub({ target, canonical }) {
  const href = escapeHtml(target);
  const script = JSON.stringify(target).replace(/</g, '\\u003c');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Mealset</title>
<meta http-equiv="refresh" content="0; url=${href}">
<link rel="canonical" href="${escapeHtml(canonical)}">
</head>
<body>
<p><a href="${href}">Continue to Mealset</a></p>
<script>location.replace(${script});</script>
</body>
</html>
`;
}
