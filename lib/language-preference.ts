export const languagePreferenceKey = 'mealset.language';

// Runs before primary landing content, including on static hosts.
export function languageBootstrap(russianPath: string, englishPath: string) {
  const config = JSON.stringify({
    russianPath,
    englishPath,
    key: languagePreferenceKey,
  }).replace(/</g, '\\u003c');
  return `(function () {
    var config = ${config};
    var url = new URL(window.location.href);
    function normalized(path) { return path.replace(/\\/+$/, '') || '/'; }
    if (normalized(url.pathname) !== normalized(config.russianPath)) return;
    var explicit = url.searchParams.get('lang');
    var language = explicit === 'ru' || explicit === 'en' ? explicit : null;
    try {
      if (language) window.localStorage.setItem(config.key, language);
      else {
        var saved = window.localStorage.getItem(config.key);
        if (saved === 'ru' || saved === 'en') language = saved;
      }
    } catch (_) {}
    if (!language) {
      var preferred = navigator.languages && navigator.languages.length
        ? navigator.languages : [navigator.language || ''];
      for (var i = 0; i < preferred.length; i++) {
        var candidate = preferred[i].toLowerCase().split('-')[0];
        if (candidate === 'ru' || candidate === 'en') {
          language = candidate;
          break;
        }
      }
    }
    if ((language || 'en') === 'en') {
      url.pathname = config.englishPath;
      if (explicit === 'ru' || explicit === 'en') url.searchParams.delete('lang');
      window.location.replace(url.href);
    }
  })();`;
}
