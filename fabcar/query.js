'use strict';
/*
* Copyright IBM Corp All Rights Reserved
*
* SPDX-License-Identifier: Apache-2.0
*/
/*
 * Chaincode query
 */

var Fabric_Client = require('fabric-client');
var path = require('path');
var util = require('util');
var os = require('os');



queryResource();

async function query(request) {
	//
	var fabric_client = new Fabric_Client();

	// setup the fabric network
	var channel = fabric_client.newChannel('mychannel');
	var peer = fabric_client.newPeer('grpc://47.100.192.19:7051');
	channel.addPeer(peer);

	//
	var member_user = null;
	var store_path = path.join(__dirname, 'hfc-key-store');
	console.log('Store path:' + store_path);
	var tx_id = null;

	// create the key value store as defined in the fabric-client/config/default.json 'key-value-store' setting
	const state_store = await Fabric_Client.newDefaultKeyValueStore({
		path: store_path
	});

	// assign the store to the fabric client
	fabric_client.setStateStore(state_store);
	var crypto_suite = Fabric_Client.newCryptoSuite();
	// use the same location for the state store (where the users' certificate are kept)
	// and the crypto store (where the users' keys are kept)
	var crypto_store = Fabric_Client.newCryptoKeyStore({ path: store_path });
	crypto_suite.setCryptoKeyStore(crypto_store);
	fabric_client.setCryptoSuite(crypto_suite);

	// get the enrolled user from persistence, this user will sign all requests
	const user_from_store = await fabric_client.getUserContext('user1', true);

	if (user_from_store && user_from_store.isEnrolled()) {
		console.log('Successfully loaded user1 from persistence');
		member_user = user_from_store;
	} else {
		throw new Error('Failed to get user1.... run registerUser.js');
	}

	// queryCar chaincode function - requires 1 argument, ex: args: ['CAR4'],
	// queryAllCars chaincode function - requires no arguments , ex: args: [''],
	/*
	const request = {
		//targets : --- letting this default to the peers assigned to the channel
		chaincodeId: 'fabcar',
		fcn: 'queryAllCars',
		args: ['']
	};
	*/

	// send the query proposal to the peer
	const query_responses = await channel.queryByChaincode(request);

	console.log("Query has completed, checking results");
	// query_responses could have more than one  results if there multiple peers were used as targets
	if (query_responses && query_responses.length == 1) {
		if (query_responses[0] instanceof Error) {
			console.error("error from query = ", query_responses[0]);
		} else {
			console.log("Response is ", query_responses[0].toString());
		}
	} else {
		console.log("No payloads were returned from query");
	}
}
function queryAllResources(){
	const request = {
		//targets : --- letting this default to the peers assigned to the channel
		chaincodeId: 'fabcar',
		fcn: 'queryAllResources',
		args: ['']
	};
	query(request);
}
function queryResource(){
	const request = {
		//targets : --- letting this default to the peers assigned to the channel
		chaincodeId: 'fabcar',
		fcn: 'queryResource',
		args: ['Resource1']
	};
	console.log(request.fcn);
	query(request);
}
function queryAllCars(){
	const request = {
		//targets : --- letting this default to the peers assigned to the channel
		chaincodeId: 'fabcar',
		fcn: 'queryAllCars',
		args: ['']
	};
	query(request);
}

function queryCar(){
	const request = {
		//targets : --- letting this default to the peers assigned to the channel
		chaincodeId: 'fabcar',
		fcn: 'queryCar',
		args: ['CAR1']
	};
	query(request);
}