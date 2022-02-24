# incorrect date formats

## repro instructions

- `npm install`
- `node index.js`

## observe

- `es-MX` gets `"en"` functions and date formats!
  - interestingly, the `opts` in the date formatters are _different_. it suggests to me that the the locale is _partially_ recognized, but not flushed out full well?
