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

/* eslint-disable max-len, no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var inherits = require( '@stdlib/utils-inherit' );
var stride2offset = require( '@stdlib/strided-base-stride2offset' );
var readDataView = require( '@stdlib/strided-base-read-dataview' ).ndarray;
var Memory = require( '@stdlib/wasm-memory' );
var arrays2ptrs = require( '@stdlib/wasm-base-arrays2ptrs' );
var strided2object = require( '@stdlib/wasm-base-strided2object' );
var Module = require( './module.js' );


// MAIN //

/**
* Routine constructor.
*
* @private
* @constructor
* @returns {Routine} routine instance
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* // Create a new routine:
* var dapx = new Routine();
*
* // Initialize the module:
* dapx.initializeSync();
*
* // Define a strided array:
* var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
*
* // Perform operation:
* dapx.main( x.length, 5.0, x, 1 );
* // x => <Float64Array>[ 3.0, 6.0, 8.0, 0.0, 9.0, 5.0, 4.0, 2.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* // Create a new routine:
* var dapx = new Routine();
*
* // Initialize the module:
* dapx.initializeSync();
*
* // Define a strided array:
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* // Perform operation:
* dapx.ndarray( 4, 5.0, x, 2, 1 );
* // x => <Float64Array>[ 2.0, 6.0, 2.0, 3.0, -2.0, 7.0, 3.0, 9.0 ]
*/
function Routine() {
	if ( !( this instanceof Routine ) ) {
		return new Routine();
	}
	Module.call( this, new Memory({
		'initial': 0
	}));
	return this;
}

// Inherit from the parent constructor:
inherits( Routine, Module );

/**
* Adds a scalar constant to each element in a double-precision floating-point strided array.
*
* @name main
* @memberof Routine.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - scalar constant
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length
* @returns {Float64Array} input array
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* // Create a new routine:
* var dapx = new Routine();
*
* // Initialize the module:
* dapx.initializeSync();
*
* // Define a strided array:
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
*
* // Perform operation:
* dapx.main( 3, 5.0, x, 1 );
* // x => <Float64Array>[ 6.0, 3.0, 7.0 ]
*/
setReadOnly( Routine.prototype, 'main', function dapx( N, alpha, x, strideX ) {
	return this.ndarray( N, alpha, x, strideX, stride2offset( N, strideX ) );
});

/**
* Adds a scalar constant to each element in a double-precision floating-point strided array using alternative indexing semantics.
*
* @name ndarray
* @memberof Routine.prototype
* @readonly
* @type {Function}
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - scalar constant
* @param {Float64Array} x - input array
* @param {integer} strideX - stride length
* @param {NonNegativeInteger} offsetX - starting index
* @returns {Float64Array} input array
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* // Create a new routine:
* var dapx = new Routine();
*
* // Initialize the module:
* dapx.initializeSync();
*
* // Define a strided array:
* var x = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );
*
* // Perform operation:
* dapx.ndarray( 3, 5.0, x, 1, x.length-3 );
* // x => <Float64Array>[ 1.0, -2.0, 3.0, 1.0, 10.0, -1.0 ]
*/
setReadOnly( Routine.prototype, 'ndarray', function dapx( N, alpha, x, strideX, offsetX ) {
	var ptrs;
	var p0;

	// Convert the input arrays to "pointers" in the module's memory:
	ptrs = arrays2ptrs( this, [
		strided2object( N, x, strideX, offsetX )
	]);
	p0 = ptrs[ 0 ];

	// Perform computation by calling the corresponding parent method:
	Module.prototype.ndarray.call( this, N, alpha, p0.ptr, p0.stride, p0.offset );

	// If the output array data had to be copied to module memory, copy the results to the provided output array...
	if ( p0.copy ) {
		readDataView( N, this.view, p0.stride*p0.BYTES_PER_ELEMENT, p0.ptr, x, strideX, offsetX, true );
	}
	return x;
});


// EXPORTS //

module.exports = Routine;
