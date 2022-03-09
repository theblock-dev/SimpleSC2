const HelloWorld = artifacts.require('HelloWorld.sol');

module.exports = function(deployer, network, accounts) {
    deployer.deploy(HelloWorld);
}