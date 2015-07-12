# styl-stream

> [styl](https://github.com/tj/styl) as a stream

Compiles the contents of `.styl` and `.css` files with styl.

## Install

```
$ npm install --save-dev styl-stream
```


## Usage

```js
var stylStream = require('styl-stream');

fs.createReadStream('file.css')
  .pipe(stylStream('file.css'))
  .pipe(process.stdout)
```

Or with browserify as a transform:

```js
{
  "browserify": {
    "transform": ["styl-stream"]
  }
}
```

## License

MIT © [Andrew Joslin](http://ajoslin.com)
