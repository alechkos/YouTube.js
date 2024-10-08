// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: youtube/api/pfiinnertube/get_watch_request.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { InnerTubeContext } from "./innertube_context.js";
import { PlayerRequest } from "./player_request.js";
import { ReelItemWatchRequest } from "./reel_item_watch_request.js";
import { WatchNextRequest } from "./watch_next_request.js";

export const protobufPackage = "youtube.api.pfiinnertube";

export interface GetWatchRequest {
  context?: InnerTubeContext | undefined;
  playerRequest?: PlayerRequest | undefined;
  watchNextRequest?: WatchNextRequest | undefined;
  reelItemWatchRequest?: ReelItemWatchRequest | undefined;
}

function createBaseGetWatchRequest(): GetWatchRequest {
  return { context: undefined, playerRequest: undefined, watchNextRequest: undefined, reelItemWatchRequest: undefined };
}

export const GetWatchRequest: MessageFns<GetWatchRequest> = {
  encode(message: GetWatchRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      InnerTubeContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.playerRequest !== undefined) {
      PlayerRequest.encode(message.playerRequest, writer.uint32(18).fork()).join();
    }
    if (message.watchNextRequest !== undefined) {
      WatchNextRequest.encode(message.watchNextRequest, writer.uint32(26).fork()).join();
    }
    if (message.reelItemWatchRequest !== undefined) {
      ReelItemWatchRequest.encode(message.reelItemWatchRequest, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetWatchRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetWatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.context = InnerTubeContext.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.playerRequest = PlayerRequest.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.watchNextRequest = WatchNextRequest.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.reelItemWatchRequest = ReelItemWatchRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetWatchRequest {
    return {
      context: isSet(object.context) ? InnerTubeContext.fromJSON(object.context) : undefined,
      playerRequest: isSet(object.playerRequest) ? PlayerRequest.fromJSON(object.playerRequest) : undefined,
      watchNextRequest: isSet(object.watchNextRequest) ? WatchNextRequest.fromJSON(object.watchNextRequest) : undefined,
      reelItemWatchRequest: isSet(object.reelItemWatchRequest)
        ? ReelItemWatchRequest.fromJSON(object.reelItemWatchRequest)
        : undefined,
    };
  },

  toJSON(message: GetWatchRequest): unknown {
    const obj: any = {};
    if (message.context !== undefined) {
      obj.context = InnerTubeContext.toJSON(message.context);
    }
    if (message.playerRequest !== undefined) {
      obj.playerRequest = PlayerRequest.toJSON(message.playerRequest);
    }
    if (message.watchNextRequest !== undefined) {
      obj.watchNextRequest = WatchNextRequest.toJSON(message.watchNextRequest);
    }
    if (message.reelItemWatchRequest !== undefined) {
      obj.reelItemWatchRequest = ReelItemWatchRequest.toJSON(message.reelItemWatchRequest);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetWatchRequest>, I>>(base?: I): GetWatchRequest {
    return GetWatchRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetWatchRequest>, I>>(object: I): GetWatchRequest {
    const message = createBaseGetWatchRequest();
    message.context = (object.context !== undefined && object.context !== null)
      ? InnerTubeContext.fromPartial(object.context)
      : undefined;
    message.playerRequest = (object.playerRequest !== undefined && object.playerRequest !== null)
      ? PlayerRequest.fromPartial(object.playerRequest)
      : undefined;
    message.watchNextRequest = (object.watchNextRequest !== undefined && object.watchNextRequest !== null)
      ? WatchNextRequest.fromPartial(object.watchNextRequest)
      : undefined;
    message.reelItemWatchRequest = (object.reelItemWatchRequest !== undefined && object.reelItemWatchRequest !== null)
      ? ReelItemWatchRequest.fromPartial(object.reelItemWatchRequest)
      : undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
