import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import {getWeb3, getContractInstance, callHelloFunction} from './utils.js' ;

function App() {

  const [web3, setWeb3] = useState(undefined);
  const [contractInstance, setContractInstance] = useState(undefined);
  
  useEffect(() => {

    const init = async() => {
      const web3 = await getWeb3();
      const contractInstance = await getContractInstance(web3);

      setWeb3(web3);
      setContractInstance(contractInstance);

    }
    init();

  }, []);

  const callHello = async (e) => {
    e.preventDefault();
    //alert('hi');
    const result = await contractInstance.methods.hello().call();
    console.log(result);
    document.getElementById('idResult').innerHTML = result;
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Smart Contract Example # 2 -           
        </h2>
        <p>
        Calling a function from the Smart Contract and display the return data
        </p>
        <button onClick={e => callHello(e)}>
          Call Smart Contract
        </button> 
        <p>
          results:          
        </p> 
        <p id='idResult'>

        </p>
        
      </header>
    </div>
  );
}

export default App;
