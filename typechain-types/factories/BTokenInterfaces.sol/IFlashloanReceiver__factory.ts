/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IFlashloanReceiver,
  IFlashloanReceiverInterface,
} from "../../BTokenInterfaces.sol/IFlashloanReceiver";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "executeOperation",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IFlashloanReceiver__factory {
  static readonly abi = _abi;
  static createInterface(): IFlashloanReceiverInterface {
    return new utils.Interface(_abi) as IFlashloanReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFlashloanReceiver {
    return new Contract(address, _abi, signerOrProvider) as IFlashloanReceiver;
  }
}