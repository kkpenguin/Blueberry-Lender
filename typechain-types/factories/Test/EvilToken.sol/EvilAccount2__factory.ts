/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  EvilAccount2,
  EvilAccount2Interface,
} from "../../../Test/EvilToken.sol/EvilAccount2";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_crWeth",
        type: "address",
      },
      {
        internalType: "address",
        name: "_crEvilToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_borrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_repayAmount",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    constant: false,
    inputs: [],
    name: "attackLiquidate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "tokensReceived",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610b5d380380610b5d8339818101604052608081101561003357600080fd5b8101908080519060200190929190805190602001909291908051906020019092919080519060200190929190505050836000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060038190555050505050610a1f8061013e6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633bb0cc551461003b5780633bd34ee614610045575b600080fd5b61004361004f565b005b61004d6104e1565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b1580156100b857600080fd5b505afa1580156100cc573d6000803e3d6000fd5b505050506040513d60208110156100e257600080fd5b810190808051906020019092919050505090506003548173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561017557600080fd5b505afa158015610189573d6000803e3d6000fd5b505050506040513d602081101561019f57600080fd5b810190808051906020019092919050505011610223576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f696e73756666696369656e742062616c616e636500000000000000000000000081525060200191505060405180910390fd5b600115158173ffffffffffffffffffffffffffffffffffffffff1663095ea7b36000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff166003546040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156102d157600080fd5b505af11580156102e5573d6000803e3d6000fd5b505050506040513d60208110156102fb57600080fd5b8101908080519060200190929190505050151514610381576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6661696c656420746f20617070726f766500000000000000000000000000000081525060200191505060405180910390fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f5e3c462600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166003546000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019350505050602060405180830381600087803b1580156104a257600080fd5b505af11580156104b6573d6000803e3d6000fd5b505050506040513d60208110156104cc57600080fd5b81019080805190602001909291905050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636f307dc36040518163ffffffff1660e01b815260040160206040518083038186803b15801561054b57600080fd5b505afa15801561055f573d6000803e3d6000fd5b505050506040513d602081101561057557600080fd5b810190808051906020019092919050505090506003548173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561060857600080fd5b505afa15801561061c573d6000803e3d6000fd5b505050506040513d602081101561063257600080fd5b8101908080519060200190929190505050116106b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f696e73756666696369656e742062616c616e636500000000000000000000000081525060200191505060405180910390fd5b600115158173ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166003546040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561076557600080fd5b505af1158015610779573d6000803e3d6000fd5b505050506040513d602081101561078f57600080fd5b8101908080519060200190929190505050151514610815576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f6661696c656420746f20617070726f766500000000000000000000000000000081525060200191505060405180910390fd5b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f5e3c462600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166003546000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019350505050602060405180830381600087803b15801561093957600080fd5b505af115801561094d573d6000803e3d6000fd5b505050506040513d602081101561096357600080fd5b8101908080519060200190929190505050146109e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f6669727374206c6971756964617465206661696c65640000000000000000000081525060200191505060405180910390fd5b5056fea265627a7a7231582000f1ce4d20fffc696fde8e9a03b3834252098306c72f502949689d2206b66cf964736f6c63430005100032";

type EvilAccount2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EvilAccount2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EvilAccount2__factory extends ContractFactory {
  constructor(...args: EvilAccount2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _crWeth: PromiseOrValue<string>,
    _crEvilToken: PromiseOrValue<string>,
    _borrower: PromiseOrValue<string>,
    _repayAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EvilAccount2> {
    return super.deploy(
      _crWeth,
      _crEvilToken,
      _borrower,
      _repayAmount,
      overrides || {}
    ) as Promise<EvilAccount2>;
  }
  override getDeployTransaction(
    _crWeth: PromiseOrValue<string>,
    _crEvilToken: PromiseOrValue<string>,
    _borrower: PromiseOrValue<string>,
    _repayAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _crWeth,
      _crEvilToken,
      _borrower,
      _repayAmount,
      overrides || {}
    );
  }
  override attach(address: string): EvilAccount2 {
    return super.attach(address) as EvilAccount2;
  }
  override connect(signer: Signer): EvilAccount2__factory {
    return super.connect(signer) as EvilAccount2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EvilAccount2Interface {
    return new utils.Interface(_abi) as EvilAccount2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EvilAccount2 {
    return new Contract(address, _abi, signerOrProvider) as EvilAccount2;
  }
}