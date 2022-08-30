/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  FaucetTokenReEntrantHarness,
  FaucetTokenReEntrantHarnessInterface,
} from "../../../Test/FaucetToken.sol/FaucetTokenReEntrantHarness";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialAmount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_tokenName",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimalUnits",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_tokenSymbol",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_reEntryCallData",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "_reEntryFun",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "allocateTo",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "remaining",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "reEntryCallData",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "reEntryFun",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620021ba380380620021ba833981810160405260c08110156200003757600080fd5b8101908080519060200190929190805160405193929190846401000000008211156200006257600080fd5b838201915060208201858111156200007957600080fd5b82518660018202830111640100000000821117156200009757600080fd5b8083526020830192505050908051906020019080838360005b83811015620000cd578082015181840152602081019050620000b0565b50505050905090810190601f168015620000fb5780820380516001836020036101000a031916815260200191505b5060405260200180519060200190929190805160405193929190846401000000008211156200012957600080fd5b838201915060208201858111156200014057600080fd5b82518660018202830111640100000000821117156200015e57600080fd5b8083526020830192505050908051906020019080838360005b838110156200019457808201518184015260208101905062000177565b50505050905090810190601f168015620001c25780820380516001836020036101000a031916815260200191505b5060405260200180516040519392919084640100000000821115620001e657600080fd5b83820191506020820185811115620001fd57600080fd5b82518660018202830111640100000000821117156200021b57600080fd5b8083526020830192505050908051906020019080838360005b838110156200025157808201518184015260208101905062000234565b50505050905090810190601f1680156200027f5780820380516001836020036101000a031916815260200191505b5060405260200180516040519392919084640100000000821115620002a357600080fd5b83820191506020820185811115620002ba57600080fd5b8251866001820283011164010000000082111715620002d857600080fd5b8083526020830192505050908051906020019080838360005b838110156200030e578082015181840152602081019050620002f1565b50505050905090810190601f1680156200033c5780820380516001836020036101000a031916815260200191505b506040525050508560038190555085600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508460009080519060200190620003a692919062000419565b508260019080519060200190620003bf92919062000419565b5083600260006101000a81548160ff021916908360ff1602179055508160069080519060200190620003f3929190620004a0565b5080600790805190602001906200040c92919062000419565b505050505050506200054f565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200045c57805160ff19168380011785556200048d565b828001600101855582156200048d579182015b828111156200048c5782518255916020019190600101906200046f565b5b5090506200049c919062000527565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620004e357805160ff191683800117855562000514565b8280016001018555821562000514579182015b8281111562000513578251825591602001919060010190620004f6565b5b50905062000523919062000527565b5090565b6200054c91905b80821115620005485760008160009055506001016200052e565b5090565b90565b611c5b806200055f6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80636f19d6ff116100715780636f19d6ff146102b857806370a082311461033b57806395d89b4114610393578063a9059cbb14610416578063a952e0711461047c578063dd62ed3e146104ff576100b4565b806306fdde03146100b957806308bca5661461013c578063095ea7b31461018a57806318160ddd146101f057806323b872dd1461020e578063313ce56714610294575b600080fd5b6100c1610577565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101015780820151818401526020810190506100e6565b50505050905090810190601f16801561012e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101886004803603604081101561015257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610615565b005b6101d6600480360360408110156101a057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106db565b604051808215151515815260200191505060405180910390f35b6101f86108d5565b6040518082815260200191505060405180910390f35b61027a6004803603606081101561022457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ac2565b604051808215151515815260200191505060405180910390f35b61029c610d56565b604051808260ff1660ff16815260200191505060405180910390f35b6102c0610d69565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103005780820151818401526020810190506102e5565b50505050905090810190601f16801561032d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61037d6004803603602081101561035157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e07565b6040518082815260200191505060405180910390f35b61039b611033565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103db5780820151818401526020810190506103c0565b50505050905090810190601f1680156104085780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104626004803603604081101561042c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506110d1565b604051808215151515815260200191505060405180910390f35b6104846112cb565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104c45780820151818401526020810190506104a9565b50505050905090810190601f1680156104f15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6105616004803603604081101561051557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611369565b6040518082815260200191505060405180910390f35b60008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561060d5780601f106105e25761010080835404028352916020019161060d565b820191906000526020600020905b8154815290600101906020018083116105f057829003601f168201915b505050505081565b80600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550806003600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60006040518060400160405280600781526020017f617070726f766500000000000000000000000000000000000000000000000000815250606060078054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107ab5780601f10610780576101008083540402835291602001916107ab565b820191906000526020600020905b81548152906001019060200180831161078e57829003601f168201915b505050505090506107bc81836115d3565b156108be5760405180602001604052806000815250600790805190602001906107e6929190611b81565b50600060603373ffffffffffffffffffffffffffffffffffffffff166006604051808280546001816001161561010002031660029004801561085f5780601f1061083d57610100808354040283529182019161085f565b820191906000526020600020905b81548152906001019060200180831161084b575b50509150506000604051808303816000865af19150503d80600081146108a1576040519150601f19603f3d011682016040523d82523d6000602084013e6108a6565b606091505b509150915060008214156108bb573d60208201fd5b50505b6108c93386866116c2565b60019250505092915050565b60006040518060400160405280600b81526020017f746f74616c537570706c79000000000000000000000000000000000000000000815250606060078054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109a55780601f1061097a576101008083540402835291602001916109a5565b820191906000526020600020905b81548152906001019060200180831161098857829003601f168201915b505050505090506109b681836115d3565b15610ab85760405180602001604052806000815250600790805190602001906109e0929190611b81565b50600060603373ffffffffffffffffffffffffffffffffffffffff1660066040518082805460018160011615610100020316600290048015610a595780601f10610a37576101008083540402835291820191610a59565b820191906000526020600020905b815481529060010190602001808311610a45575b50509150506000604051808303816000865af19150503d8060008114610a9b576040519150601f19603f3d011682016040523d82523d6000602084013e610aa0565b606091505b50915091506000821415610ab5573d60208201fd5b50505b6003549250505090565b60006040518060400160405280600c81526020017f7472616e7366657246726f6d0000000000000000000000000000000000000000815250606060078054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b925780601f10610b6757610100808354040283529160200191610b92565b820191906000526020600020905b815481529060010190602001808311610b7557829003601f168201915b50505050509050610ba381836115d3565b15610ca5576040518060200160405280600081525060079080519060200190610bcd929190611b81565b50600060603373ffffffffffffffffffffffffffffffffffffffff1660066040518082805460018160011615610100020316600290048015610c465780601f10610c24576101008083540402835291820191610c46565b820191906000526020600020905b815481529060010190602001808311610c32575b50509150506000604051808303816000865af19150503d8060008114610c88576040519150601f19603f3d011682016040523d82523d6000602084013e610c8d565b606091505b50915091506000821415610ca2573d60208201fd5b50505b610cb0868686611821565b610d498633610d4487600460008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119ef90919063ffffffff16565b6116c2565b6001925050509392505050565b600260009054906101000a900460ff1681565b60068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610dff5780601f10610dd457610100808354040283529160200191610dff565b820191906000526020600020905b815481529060010190602001808311610de257829003601f168201915b505050505081565b60006040518060400160405280600981526020017f62616c616e63654f660000000000000000000000000000000000000000000000815250606060078054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ed75780601f10610eac57610100808354040283529160200191610ed7565b820191906000526020600020905b815481529060010190602001808311610eba57829003601f168201915b50505050509050610ee881836115d3565b15610fea576040518060200160405280600081525060079080519060200190610f12929190611b81565b50600060603373ffffffffffffffffffffffffffffffffffffffff1660066040518082805460018160011615610100020316600290048015610f8b5780601f10610f69576101008083540402835291820191610f8b565b820191906000526020600020905b815481529060010190602001808311610f77575b50509150506000604051808303816000865af19150503d8060008114610fcd576040519150601f19603f3d011682016040523d82523d6000602084013e610fd2565b606091505b50915091506000821415610fe7573d60208201fd5b50505b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205492505050919050565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110c95780601f1061109e576101008083540402835291602001916110c9565b820191906000526020600020905b8154815290600101906020018083116110ac57829003601f168201915b505050505081565b60006040518060400160405280600881526020017f7472616e73666572000000000000000000000000000000000000000000000000815250606060078054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111a15780601f10611176576101008083540402835291602001916111a1565b820191906000526020600020905b81548152906001019060200180831161118457829003601f168201915b505050505090506111b281836115d3565b156112b45760405180602001604052806000815250600790805190602001906111dc929190611b81565b50600060603373ffffffffffffffffffffffffffffffffffffffff16600660405180828054600181600116156101000203166002900480156112555780601f10611233576101008083540402835291820191611255565b820191906000526020600020905b815481529060010190602001808311611241575b50509150506000604051808303816000865af19150503d8060008114611297576040519150601f19603f3d011682016040523d82523d6000602084013e61129c565b606091505b509150915060008214156112b1573d60208201fd5b50505b6112bf338686611821565b60019250505092915050565b60078054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113615780601f1061133657610100808354040283529160200191611361565b820191906000526020600020905b81548152906001019060200180831161134457829003601f168201915b505050505081565b60006040518060400160405280600981526020017f616c6c6f77616e63650000000000000000000000000000000000000000000000815250606060078054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114395780601f1061140e57610100808354040283529160200191611439565b820191906000526020600020905b81548152906001019060200180831161141c57829003601f168201915b5050505050905061144a81836115d3565b1561154c576040518060200160405280600081525060079080519060200190611474929190611b81565b50600060603373ffffffffffffffffffffffffffffffffffffffff16600660405180828054600181600116156101000203166002900480156114ed5780601f106114cb5761010080835404028352918201916114ed565b820191906000526020600020905b8154815290600101906020018083116114d9575b50509150506000604051808303816000865af19150503d806000811461152f576040519150601f19603f3d011682016040523d82523d6000602084013e611534565b606091505b50915091506000821415611549573d60208201fd5b50505b600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250505092915050565b6000816040516020018082805190602001908083835b6020831061160c57805182526020820191506020810190506020830392506115e9565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405160208183030381529060405280519060200120836040516020018082805190602001908083835b6020831061167e578051825260208201915060208101905060208303925061165b565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528051906020012014905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156116fc57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561173657600080fd5b80600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561185b57600080fd5b6118ad81600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119ef90919063ffffffff16565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061194281600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a3990919063ffffffff16565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000611a3183836040518060400160405280601f81526020017f536166654d6174683a207375627472616374696f6e20756e646572666c6f7700815250611ac1565b905092915050565b600080828401905083811015611ab7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000838311158290611b6e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611b33578082015181840152602081019050611b18565b50505050905090810190601f168015611b605780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611bc257805160ff1916838001178555611bf0565b82800160010185558215611bf0579182015b82811115611bef578251825591602001919060010190611bd4565b5b509050611bfd9190611c01565b5090565b611c2391905b80821115611c1f576000816000905550600101611c07565b5090565b9056fea265627a7a72315820ac1e545bf3ddc0f58465bd79fbd5aa29adc9333be3404c7faf6ff7550ca51feb64736f6c63430005100032";

type FaucetTokenReEntrantHarnessConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FaucetTokenReEntrantHarnessConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FaucetTokenReEntrantHarness__factory extends ContractFactory {
  constructor(...args: FaucetTokenReEntrantHarnessConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _initialAmount: PromiseOrValue<BigNumberish>,
    _tokenName: PromiseOrValue<string>,
    _decimalUnits: PromiseOrValue<BigNumberish>,
    _tokenSymbol: PromiseOrValue<string>,
    _reEntryCallData: PromiseOrValue<BytesLike>,
    _reEntryFun: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FaucetTokenReEntrantHarness> {
    return super.deploy(
      _initialAmount,
      _tokenName,
      _decimalUnits,
      _tokenSymbol,
      _reEntryCallData,
      _reEntryFun,
      overrides || {}
    ) as Promise<FaucetTokenReEntrantHarness>;
  }
  override getDeployTransaction(
    _initialAmount: PromiseOrValue<BigNumberish>,
    _tokenName: PromiseOrValue<string>,
    _decimalUnits: PromiseOrValue<BigNumberish>,
    _tokenSymbol: PromiseOrValue<string>,
    _reEntryCallData: PromiseOrValue<BytesLike>,
    _reEntryFun: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _initialAmount,
      _tokenName,
      _decimalUnits,
      _tokenSymbol,
      _reEntryCallData,
      _reEntryFun,
      overrides || {}
    );
  }
  override attach(address: string): FaucetTokenReEntrantHarness {
    return super.attach(address) as FaucetTokenReEntrantHarness;
  }
  override connect(signer: Signer): FaucetTokenReEntrantHarness__factory {
    return super.connect(signer) as FaucetTokenReEntrantHarness__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FaucetTokenReEntrantHarnessInterface {
    return new utils.Interface(_abi) as FaucetTokenReEntrantHarnessInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FaucetTokenReEntrantHarness {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FaucetTokenReEntrantHarness;
  }
}