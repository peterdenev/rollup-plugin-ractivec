# rollup-plugin-ractivec

Precompile Ractive template.


## Installation

```bash
npm install --save ractive # not included!
npm install --save-dev rollup-plugin-ractivec
```


## Usage

```js
import { rollup } from 'rollup';
import ractivec from 'rollup-plugin-ractivec';

rollup({
  entry: 'src/main.js',
  plugins: [
    ractivec({
      // By default, all .html files are compiled
      extensions: [ '.html', '.ract', '.tpl' ],

      // You can restrict which files are compiled
      // using `include` and `exclude`
      include: 'src/templates/**.html'
    })
  ]
}).then(...)
```

## License

MIT
