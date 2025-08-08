const messages: { [key: string]: { [key: string]: { value: string } } } = {};
const localizationFiles = import.meta.glob('../assets/strings/*.json', { as: 'raw', eager: true });

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
