// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
  
  constructor() {
    
  }

  function hello() external pure returns(string memory) {
    return "Hello World";
  }

}
