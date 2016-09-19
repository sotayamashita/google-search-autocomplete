'use strict';
const got = require('got');

module.exports = (query, opts) => {
  const options = opts || {};

  if (typeof query !== 'string') {
    return Promise.reject(new TypeError(`Expected a \`string\`, got \`${typeof query}\``));
  }

  let url = `http://suggestqueries.google.com/complete/search?client=chrome&q=${query}`;
  if (options.lang) {
    url += `&hl=${options.lang}`;
  } else {
    url += '&hl=en';
  }

  return got(encodeURI(url)).then((response) => {
    const suggestion = JSON.parse(response.body);
    const suggestionNames = suggestion[1];
    const suggestionTypes = suggestion[4]['google:suggesttype'];
    const suggestionRelevances = suggestion[4]['google:suggestrelevance'];

    const result = [];
    for (let i = 0; i < suggestionNames.length; i += 1) {
      if (suggestionTypes[i] === 'NAVIGATION') {
        continue;
      }
      result.push({
        name: suggestionNames[i],
        relevance: suggestionRelevances[i],
      });
    }

    return result;
  });
};

