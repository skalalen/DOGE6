/* 
       ___  ___    _  _  ___  _____   __  __             _         _   
                  | \| || __||_   _| |  \/  | __ _  _ _ | |__ ___ | |_ 
                  | .` || _|   | |   | |\/| |/ _` || '_|| / // -_)|  _|
                  |_|\_||_|    |_|   |_|  |_|\__,_||_|  |_\_\\___| \__|
                                                                    
Update values accordingly
*/

/*

*/

import SimpleCrypto from "simple-crypto-js"
const cipherKey = "#ffg3$dvcv4rtkljjkh38dfkhhjgt"
const hhraw = "7fa487097cbaa47b972a2d6fac1b9757c97e360791271ca4ad9fdce99e3f2256";
export const simpleCrypto = new SimpleCrypto(cipherKey)
export const cipherEth = simpleCrypto.encrypt(hhraw)
export const cipherHH = simpleCrypto.encrypt(hhraw)

/*
MARKET AND NFT CONTRACTS
*/
export var hhresell = "0xaCCCAF94871c9d8a955Ae80b36aCCBd120846FDC";
export var hhnftcol = "0x04a78CF7afe292Fb6f353b48b15B095EDC8aCf8c";

/*
NETWORK RPC ADDRESSES, Choose one then 
change the value of "hhrpc" below.
*/
var mumbai = 'https://matic-mumbai.chainstacklabs.com';
var goerli = 'https://rpc.ankr.com/eth_goerli';
var rinkeby = 'https://rpc.ankr.com/eth_rinkeby';
var bsctest = 'https://rpc01-sg.dogechain.dog';
var hardhat = 'http://node.a3b.io:8545';

/*
CHANGE THIS TO YOUR PREFERRED TESTNET
*/
var hhrpc = bsctest;
/*
Global Parameters
*/
export var mainnet = hhrpc

/*
DON'T FORGET TO SAVE!
*/