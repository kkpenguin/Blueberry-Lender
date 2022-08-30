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
import type { PromiseOrValue } from "../../common";
import type {
  FixedPriceOracle,
  FixedPriceOracleInterface,
} from "../../Test/FixedPriceOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "assetPrices",
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
    inputs: [
      {
        internalType: "contract BToken",
        name: "bToken",
        type: "address",
      },
    ],
    name: "getUnderlyingPrice",
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
    name: "price",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516101c03803806101c08339818101604052602081101561003357600080fd5b810190808051906020019092919050505080600081905550506101658061005b6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80635e9a523c14610046578063a035b1fe1461009e578063fc57d4df146100bc575b600080fd5b6100886004803603602081101561005c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610114565b6040518082815260200191505060405180910390f35b6100a661011f565b6040518082815260200191505060405180910390f35b6100fe600480360360208110156100d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610125565b6040518082815260200191505060405180910390f35b600080549050919050565b60005481565b60008054905091905056fea265627a7a723158202ff874ca776667773f1444fdc2c02eff5df303606acaf0b8ae997d3422a8dd0664736f6c63430005100032";

type FixedPriceOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FixedPriceOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FixedPriceOracle__factory extends ContractFactory {
  constructor(...args: FixedPriceOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _price: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FixedPriceOracle> {
    return super.deploy(_price, overrides || {}) as Promise<FixedPriceOracle>;
  }
  override getDeployTransaction(
    _price: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_price, overrides || {});
  }
  override attach(address: string): FixedPriceOracle {
    return super.attach(address) as FixedPriceOracle;
  }
  override connect(signer: Signer): FixedPriceOracle__factory {
    return super.connect(signer) as FixedPriceOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FixedPriceOracleInterface {
    return new utils.Interface(_abi) as FixedPriceOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FixedPriceOracle {
    return new Contract(address, _abi, signerOrProvider) as FixedPriceOracle;
  }
}