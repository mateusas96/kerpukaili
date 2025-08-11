const messages: { [key: string]: { [key: string]: { value: string } } } = {};
const localizationFiles: { [key: string]: string } = import.meta.glob('../assets/strings/*.json', {
  query: '?raw',
  import: 'default',
  eager: true,
});

Object.keys(localizationFiles).map((file) => {
  const langRes = file.match(/.*_(.*)\.json$/);

  let lang = 'unknown';

  if (langRes && langRes.length !== 0) {
    lang = langRes[1];
  }

  messages[lang] = {
    ...messages[lang],
    ...JSON.parse(localizationFiles[file]),
  };
});

export default messages;
