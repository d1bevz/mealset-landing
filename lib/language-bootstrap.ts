import { languagePreferenceKey } from './language-preference';
import type { PrimaryLocale } from './primary-locales';

// Runs before primary landing content, including on static hosts. It only acts
// on the English root, so direct /ru and /pt visits are never redirected.
export function languageBootstrap(paths: Record<PrimaryLocale, string>) {
  const config = JSON.stringify({
    paths,
    key: languagePreferenceKey,
  }).replace(/</g, '\\u003c');
  return `(function () {
    var config = ${config};
    var url = new URL(window.location.href);
    function normalized(path) { return path.replace(/\\/+$/, '') || '/'; }
    if (normalized(url.pathname) !== normalized(config.paths.en)) return;
    var supported = ['en', 'ru', 'pt'];
    var hadLang = url.searchParams.has('lang');
    var explicit = url.searchParams.get('lang');
    if (supported.indexOf(explicit) < 0) explicit = null;
    var language = explicit;
    try {
      if (explicit) window.localStorage.setItem(config.key, explicit);
      else {
        var saved = window.localStorage.getItem(config.key);
        if (supported.indexOf(saved) >= 0) language = saved;
      }
    } catch (_) {}
    if (!language) {
      var preferred = navigator.languages && navigator.languages.length
        ? navigator.languages : [navigator.language || ''];
      for (var i = 0; i < preferred.length; i++) {
        var candidate = preferred[i].toLowerCase().split('-')[0];
        if (supported.indexOf(candidate) >= 0) {
          language = candidate;
          break;
        }
      }
    }
    language = language || 'en';
    url.searchParams.delete('lang');
    if (language === 'en') {
      if (hadLang) window.history.replaceState(null, '', url.href);
      return;
    }
    url.pathname = config.paths[language];
    window.location.replace(url.href);
  })();`;
}
