/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ComptrollerBorkedInterface extends utils.Interface {
  functions: {
    "_become(address,address,uint256,uint256,bool)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "_become"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_become",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "_become", data: BytesLike): Result;

  events: {};
}

export interface ComptrollerBorked extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ComptrollerBorkedInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _become(
      unitroller: PromiseOrValue<string>,
      _oracle: PromiseOrValue<string>,
      _closeFactorMantissa: PromiseOrValue<BigNumberish>,
      _maxAssets: PromiseOrValue<BigNumberish>,
      _reinitializing: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  _become(
    unitroller: PromiseOrValue<string>,
    _oracle: PromiseOrValue<string>,
    _closeFactorMantissa: PromiseOrValue<BigNumberish>,
    _maxAssets: PromiseOrValue<BigNumberish>,
    _reinitializing: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _become(
      unitroller: PromiseOrValue<string>,
      _oracle: PromiseOrValue<string>,
      _closeFactorMantissa: PromiseOrValue<BigNumberish>,
      _maxAssets: PromiseOrValue<BigNumberish>,
      _reinitializing: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    _become(
      unitroller: PromiseOrValue<string>,
      _oracle: PromiseOrValue<string>,
      _closeFactorMantissa: PromiseOrValue<BigNumberish>,
      _maxAssets: PromiseOrValue<BigNumberish>,
      _reinitializing: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _become(
      unitroller: PromiseOrValue<string>,
      _oracle: PromiseOrValue<string>,
      _closeFactorMantissa: PromiseOrValue<BigNumberish>,
      _maxAssets: PromiseOrValue<BigNumberish>,
      _reinitializing: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}