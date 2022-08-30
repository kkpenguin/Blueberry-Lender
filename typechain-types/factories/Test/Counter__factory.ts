/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Counter, CounterInterface } from "../../Test/Counter";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "count",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "count2",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "decrement",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "doRevert",
    outputs: [],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "increment",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount2",
        type: "uint256",
      },
    ],
    name: "increment",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "notZero",
    outputs: [],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061037d806100206000396000f3fe6080604052600436106100705760003560e01c80633a9ebefd1161004e5780633a9ebefd146100e25780637cf5dab014610110578063924ba5061461013e578063afc874d21461017657610070565b806306661abd1461007557806319a50d4a146100a05780631d63e24d146100b7575b600080fd5b34801561008157600080fd5b5061008a61018d565b6040518082815260200191505060405180910390f35b3480156100ac57600080fd5b506100b5610193565b005b3480156100c357600080fd5b506100cc61020d565b6040518082815260200191505060405180910390f35b61010e600480360360208110156100f857600080fd5b8101908080359060200190929190505050610213565b005b61013c6004803603602081101561012657600080fd5b810190808035906020019092919050505061029d565b005b6101746004803603604081101561015457600080fd5b8101908080359060200190929190803590602001909291905050506102af565b005b34801561018257600080fd5b5061018b6102d2565b005b60005481565b60008054141561020b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f436f756e7465723a3a6e6f745a65726f0000000000000000000000000000000081525060200191505060405180910390fd5b565b60015481565b60005481111561028b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f636f756e74657220756e646572666c6f7700000000000000000000000000000081525060200191505060405180910390fd5b80600080828254039250508190555050565b80600080828254019250508190555050565b816000808282540192505081905550806001600082825401925050819055505050565b6000610346576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260178152602001807f436f756e7465723a3a7265766572742054657374696e6700000000000000000081525060200191505060405180910390fd5b56fea265627a7a7231582080896487f3574632a9e1434b7ab6b3bc09cb67a17452f838d03a1c28553014ff64736f6c63430005100032";

type CounterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CounterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Counter__factory extends ContractFactory {
  constructor(...args: CounterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Counter> {
    return super.deploy(overrides || {}) as Promise<Counter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Counter {
    return super.attach(address) as Counter;
  }
  override connect(signer: Signer): Counter__factory {
    return super.connect(signer) as Counter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CounterInterface {
    return new utils.Interface(_abi) as CounterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Counter {
    return new Contract(address, _abi, signerOrProvider) as Counter;
  }
}