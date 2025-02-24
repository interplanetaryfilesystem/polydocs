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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface TokenTermReaderInterface extends utils.Interface {
  functions: {
    "globalTerm(string)": FunctionFragment;
    "tokenTerm(string,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "globalTerm" | "tokenTerm"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "globalTerm",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenTerm",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "globalTerm", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenTerm", data: BytesLike): Result;

  events: {
    "GlobalTermAdded(bytes32,bytes32)": EventFragment;
    "TokenTermAdded(bytes32,uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GlobalTermAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenTermAdded"): EventFragment;
}

export interface GlobalTermAddedEventObject {
  term: string;
  value: string;
}
export type GlobalTermAddedEvent = TypedEvent<
  [string, string],
  GlobalTermAddedEventObject
>;

export type GlobalTermAddedEventFilter = TypedEventFilter<GlobalTermAddedEvent>;

export interface TokenTermAddedEventObject {
  term: string;
  tokenId: BigNumber;
  value: string;
}
export type TokenTermAddedEvent = TypedEvent<
  [string, BigNumber, string],
  TokenTermAddedEventObject
>;

export type TokenTermAddedEventFilter = TypedEventFilter<TokenTermAddedEvent>;

export interface TokenTermReader extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TokenTermReaderInterface;

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
    globalTerm(
      _key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    tokenTerm(
      _key: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  globalTerm(
    _key: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  tokenTerm(
    _key: PromiseOrValue<string>,
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    globalTerm(
      _key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    tokenTerm(
      _key: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "GlobalTermAdded(bytes32,bytes32)"(
      term?: PromiseOrValue<BytesLike> | null,
      value?: null
    ): GlobalTermAddedEventFilter;
    GlobalTermAdded(
      term?: PromiseOrValue<BytesLike> | null,
      value?: null
    ): GlobalTermAddedEventFilter;

    "TokenTermAdded(bytes32,uint256,bytes32)"(
      term?: PromiseOrValue<BytesLike> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      value?: null
    ): TokenTermAddedEventFilter;
    TokenTermAdded(
      term?: PromiseOrValue<BytesLike> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null,
      value?: null
    ): TokenTermAddedEventFilter;
  };

  estimateGas: {
    globalTerm(
      _key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenTerm(
      _key: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    globalTerm(
      _key: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenTerm(
      _key: PromiseOrValue<string>,
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
