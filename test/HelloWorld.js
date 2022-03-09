const helloWorld = artifacts.require('HelloWorld.sol');

contract('HelloWorld', () => {

    beforeEach('before each', async()=>{
        //this is executed before any test case function
    });

    it('should return hello world string', async() =>{
        const contractInstance = await helloWorld.deployed();
        //const contractInstance = await helloWorld.new();  // in case contract is not deployed thru migration file
        let result = await contractInstance.hello();
        assert(result === 'Hello World');
    });

});