[travis-badge]:  https://img.shields.io/travis/sotayamashita/google-search-autocomplete.svg?maxAge=2592000&style=flat-square
[travis-link]:   https://travis-ci.org/sotayamashita/google-search-autocomplete
[package-badge]: https://img.shields.io/badge/packages-by_me-blue.svg?style=flat-square
[package-link]:  https://github.com/search?utf8=%E2%9C%93&q=package%2Buser%3Asotayamashita&type=Repositories&ref=searchresults

[![Travis Build Status][travis-badge]][travis-link]
[![Packages By Me][package-badge]][package-link]

# Google Search Autocomplete

> Get google search autocomplete


## Install

```javascript
$ npm install sotayamashita/google-search-autocomplete --save-dev
```


## Usage

```javascript
const gsa = require('google-search-autocomplete');

gsa('query').then(suggestions => {
   console.log(suggestions);
   // => [{ name: 'hogle zoo', relevance: 566 }, ...]
});
```


## API

### gsa(query, [options])

#### query

Type: `string`

Returns a promise that resolves to a string containg the query.

#### options

Type: `object`

##### lang

Type: `string`
Default: `en`

Any google-supported language's 2-letter abbreviation ([ISO 639-1](https://www.wikiwand.com/en/List_of_ISO_639-1_codes)).


## Related

* [google-search-autocomplete-cli](https://github.com/sotayamashita/google-search-autocomplete-cli) - CLI for this module.


## License

MIT © Sota Yamashita
