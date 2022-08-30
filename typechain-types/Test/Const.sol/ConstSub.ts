/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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

export interface ConstSubInterface extends utils.Interface {
  functions: {
    "ADD(uint256)": FunctionFragment;
    "C()": FunctionFragment;
    "add(uint256)": FunctionFragment;
    "c()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "ADD" | "C" | "add" | "c"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ADD",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "C", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "add",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "c", values?: undefined): string;

  decodeFunctionResult(functionFragment: "ADD", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "C", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "c", data: BytesLike): Result;

  events: {};
}

export interface ConstSub extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConstSubInterface;

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
    ADD(
      a: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    C(overrides?: CallOverrides): Promise<[BigNumber]>;

    add(
      a: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    c(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  ADD(
    a: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  C(overrides?: CallOverrides): Promise<BigNumber>;

  add(
    a: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  c(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    ADD(
      a: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    C(overrides?: CallOverrides): Promise<BigNumber>;

    add(
      a: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    ADD(
      a: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    C(overrides?: CallOverrides): Promise<BigNumber>;

    add(
      a: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    c(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ADD(
      a: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    C(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    add(
      a: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    c(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}