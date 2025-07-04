/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var hasWebAssemblySupport = require( '@stdlib/assert-has-wasm-support' );
var oneTo = require( '@stdlib/array-one-to' );
var dapx = require( './../lib' );

function main() {
	if ( !hasWebAssemblySupport() ) {
		console.error( 'Environment does not support WebAssembly.' );
		return;
	}
	// Specify a vector length:
	var N = 3;

	var x = oneTo( N, 'float64' );

	// Perform computation:
	dapx.ndarray( N, 5.0, x, 1, 0 );

	// Print the results:
	console.log( x );
	// => <Float64Array>[ 6.0, 7.0, 8.0, 9.0, 10.0 ]
}

main();
