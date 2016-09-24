[travis-badge]:  https://img.shields.io/travis/sotayamashita/google-search-autocomplete.svg?maxAge=2592000
[travis-link]:   https://travis-ci.org/sotayamashita/google-search-autocomplete
[package-badge]: https://img.shields.io/badge/packages-by_me-blue.svg
[package-link]:  https://github.com/search?utf8=%E2%9C%93&q=package%2Buser%3Asotayamashita&type=Repositories&ref=searchresults

# google-search-autocomplete [![Travis Build Status][travis-badge]][travis-link] [![Packages By Me][package-badge]][package-link]

> Get google search autocomplete


## Install

```javascript
$ npm install sotayamashita/google-search-autocomplete --save-dev
```


## Usage

```javascript
const googleSearchAutocomplete = require('google-search-autocomplete');

googleSearchAutocomplete('query').then(suggestions => {
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


## References

* [Update on the Autocomplete API](https://webmasters.googleblog.com/2015/07/update-on-autocomplete-api.html)
* [Google Autocomplete API](http://shreyaschand.com/blog/2013/01/03/google-autocomplete-api/)


## License

MIT © Sota Yamashita
