import { extname } from 'path';
import Ractive from 'ractive';
import { createFilter } from 'rollup-pluginutils';


export default function ractivec ( options = {} ) {
	const filter = createFilter( options.include, options.exclude );

	const extensions = options.extensions || [ '.html' ];
	const parseOptions = options.options || {};

	return {
		name: 'ractivec',

		transform ( code, id ) {
			if ( !filter( id ) ) return null;

			if ( !~extensions.indexOf( extname( id ) ) ) return null;
			
			//Parse template in Ractive
			let parsedTpl = Ractive.parse(code, parseOptions);				
			return {
			  code: `export default ${JSON.stringify(parsedTpl)};`,
			  map: { mappings: '' }
			};
			
		}
	};
}