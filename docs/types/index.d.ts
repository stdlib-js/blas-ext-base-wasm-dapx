/*
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ModuleWrapper, Memory } from '@stdlib/types/wasm';

/**
* Interface defining a module constructor which is both "newable" and "callable".
*/
interface ModuleConstructor {
	/**
	* Returns a new WebAssembly module wrapper instance which uses the provided WebAssembly memory instance as its underlying memory.
	*
	* @param mem - WebAssembly memory instance
	* @returns module wrapper instance
	*
	* @example
	* var Memory = require( '@stdlib/wasm-memory' );
	* var oneTo = require( '@stdlib/array-one-to' );
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new dapx.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'float64';
	*
	* // Specify a vector length:
	* var N = 3;
	*
	* // Define a pointer (i.e., byte offset) to the first vector element:
	* var xptr = 0;
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	*
	* // Perform computation:
	* mod.main( N, 5.0, xptr, 1 );
	* // xptr => <Float64Array>[ 6.0, 7.0, 8.0 ]
	*/
	new( mem: Memory ): Module; // newable

	/**
	* Returns a new WebAssembly module wrapper instance which uses the provided WebAssembly memory instance as its underlying memory.
	*
	* @param mem - WebAssembly memory instance
	* @returns module wrapper instance
	*
	* @example
	* var Memory = require( '@stdlib/wasm-memory' );
	* var oneTo = require( '@stdlib/array-one-to' );
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = dapx.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'float64';
	*
	* // Specify a vector length:
	* var N = 3;
	*
	* // Define a pointer (i.e., byte offset) to the first vector element:
	* var xptr = 0;
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	*
	* // Perform computation:
	* mod.main( N, 5.0, xptr, 1 );
	* // xptr => <Float64Array>[ 6.0, 7.0, 8.0 ]
	*/
	( mem: Memory ): Module; // callable
}

/**
* Interface describing a `dapx` WebAssembly module.
*/
interface Module extends ModuleWrapper {
	/**
	* Adds a scalar constant to each element in a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param xptr - input array pointer (i.e., byte offset)
	* @param strideX - stride length
	* @returns input array
	*
	* @example
	* var Memory = require( '@stdlib/wasm-memory' );
	* var oneTo = require( '@stdlib/array-one-to' );
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new dapx.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'float64';
	*
	* // Specify a vector length:
	* var N = 3;
	*
	* // Define a pointer (i.e., byte offset) to the first vector element:
	* var xptr = 0;
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	*
	* // Perform computation:
	* mod.main( N, 5.0, xptr, 1 );
	* // xptr => <Float64Array>[ 6.0, 7.0, 8.0 ]
	*/
	main( N: number, alpha: number, xptr: number, strideX: number ): number;

	/**
	* Adds a scalar constant to each element in a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param xptr - input array pointer (i.e., byte offset)
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns sum
	*
	* @example
	* var Memory = require( '@stdlib/wasm-memory' );
	* var oneTo = require( '@stdlib/array-one-to' );
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new dapx.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'float64';
	*
	* // Specify a vector length:
	* var N = 3;
	*
	* // Define a pointer (i.e., byte offset) to the first vector element:
	* var xptr = 0;
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	*
	* // Perform computation:
	* mod.ndarray( N, 5.0, xptr, 1, 0 );
	* // xptr => <Float64Array>[ 6.0, 7.0, 8.0 ]
	*/
	ndarray( N: number, alpha: number, xptr: number, strideX: number, offsetX: number ): number;
}

/**
* Interface describing `dapx`.
*/
interface Routine extends ModuleWrapper {
	/**
	* Adds a scalar constant to each element in a double-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @returns input array
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var out = dapx.main( 3, 5.0, x, 1 );
	* // out => Float64Array[ 6.0, 3.0, 7.0 ]
	*/
	main( N: number, alpha: number, x: Float64Array, strideX: number ): number;

	/**
	* Adds a scalar constant to each element in a double-precision floating-point strided array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param alpha - scalar constant
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns sum
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
	*
	* dapx.ndarray( 4, 5.0, x, 2, 1 );
	* // x => Float64Array[ 7.0, 6.0, 7.0, 3.0, 3.0, 7.0, 8.0, 9.0 ]
	*/
	ndarray( N: number, alpha: number, x: Float64Array, strideX: number, offsetX: number ): number;

	/**
	* Returns a new WebAssembly module wrapper instance which uses the provided WebAssembly memory instance as its underlying memory.
	*
	* @param mem - WebAssembly memory instance
	* @returns module wrapper instance
	*
	* @example
	* var Memory = require( '@stdlib/wasm-memory' );
	* var oneTo = require( '@stdlib/array-one-to' );
	*
	* // Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
	* var mem = new Memory({
	*     'initial': 10,
	*     'maximum': 100
	* });
	*
	* // Create a BLAS routine:
	* var mod = new dapx.Module( mem );
	* // returns <Module>
	*
	* // Initialize the routine:
	* mod.initializeSync();
	*
	* // Define a vector data type:
	* var dtype = 'float64';
	*
	* // Specify a vector length:
	* var N = 3;
	*
	* // Define a pointer (i.e., byte offset) to the first vector element:
	* var xptr = 0;
	*
	* // Write vector values to module memory:
	* mod.write( xptr, oneTo( N, dtype ) );
	*
	* // Perform computation:
	* mod.main( N, 5.0, xptr, 1 );
	* // xptr => <Float64Array>[ 6.0, 7.0, 8.0 ]
	*/
	Module: ModuleConstructor;
}

/**
* Adds a scalar constant to each element in a double-precision floating-point strided array.
*
* @param N - number of indexed elements
* @param alpha - scalar constant
* @param x - input array
* @param strideX - stride length
* @returns input array
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* var x = new Float64Array( [ 1.0, -2.0, 2.0 ] );
*
* dapx.main( 3, 5.0, x, 1 );
* // x => Float64Array[ 6.0, 3.0, 7.0 ]
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
*
* dapx.ndarray( 4, 5.0, x, 2, 1 );
* // x => Float64Array[ 7.0, 6.0, 7.0, 3.0, 3.0, 7.0, 8.0, 9.0 ]
*/
declare var dapx: Routine;


// EXPORTS //

export = dapx;
