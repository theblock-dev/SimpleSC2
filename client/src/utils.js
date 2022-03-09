import Web3 from 'web3';
import HelloWorld from './contracts/HelloWorld.json';

const getWeb3 = async function() {
    const provider = new Web3.providers.HttpProvider('http://localhost:9545');
    const web3 = new Web3(provider);
    return web3;
}

const getContractInstance = async(web3) => {
    let currentNetworkId = await web3.eth.net.getId();
    let contractDeployedNetwork = HelloWorld.networks[currentNetworkId]; 
    
    const contractInstance = new web3.eth.Contract(
        HelloWorld.abi,
        contractDeployedNetwork && contractDeployedNetwork.address
    );

    return contractInstance;
}

const callHelloFunction = async(contractInstance) => {
    const result = await contractInstance.methods.hello().call();
    return result;
}

export {getWeb3, getContractInstance, callHelloFunction};