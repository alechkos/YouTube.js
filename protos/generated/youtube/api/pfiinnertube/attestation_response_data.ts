// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: youtube/api/pfiinnertube/attestation_response_data.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "youtube.api.pfiinnertube";

export interface AttestationResponseData {
  challenge?: string | undefined;
  webResponse?: string | undefined;
  androidResponse?: string | undefined;
  iosResponse?: Uint8Array | undefined;
  error?: number | undefined;
  adblockReporting?: AttestationResponseData_AdblockReporting | undefined;
}

export interface AttestationResponseData_AdblockReporting {
  reportingStatus?: number | undefined;
  broadSpectrumDetectionResult?: number | undefined;
}

function createBaseAttestationResponseData(): AttestationResponseData {
  return {
    challenge: undefined,
    webResponse: undefined,
    androidResponse: undefined,
    iosResponse: undefined,
    error: undefined,
    adblockReporting: undefined,
  };
}

export const AttestationResponseData: MessageFns<AttestationResponseData> = {
  encode(message: AttestationResponseData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.challenge !== undefined) {
      writer.uint32(10).string(message.challenge);
    }
    if (message.webResponse !== undefined) {
      writer.uint32(18).string(message.webResponse);
    }
    if (message.androidResponse !== undefined) {
      writer.uint32(26).string(message.androidResponse);
    }
    if (message.iosResponse !== undefined) {
      writer.uint32(34).bytes(message.iosResponse);
    }
    if (message.error !== undefined) {
      writer.uint32(40).int32(message.error);
    }
    if (message.adblockReporting !== undefined) {
      AttestationResponseData_AdblockReporting.encode(message.adblockReporting, writer.uint32(50).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AttestationResponseData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestationResponseData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.challenge = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.webResponse = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.androidResponse = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.iosResponse = reader.bytes();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.error = reader.int32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.adblockReporting = AttestationResponseData_AdblockReporting.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttestationResponseData {
    return {
      challenge: isSet(object.challenge) ? globalThis.String(object.challenge) : undefined,
      webResponse: isSet(object.webResponse) ? globalThis.String(object.webResponse) : undefined,
      androidResponse: isSet(object.androidResponse) ? globalThis.String(object.androidResponse) : undefined,
      iosResponse: isSet(object.iosResponse) ? bytesFromBase64(object.iosResponse) : undefined,
      error: isSet(object.error) ? globalThis.Number(object.error) : undefined,
      adblockReporting: isSet(object.adblockReporting)
        ? AttestationResponseData_AdblockReporting.fromJSON(object.adblockReporting)
        : undefined,
    };
  },

  toJSON(message: AttestationResponseData): unknown {
    const obj: any = {};
    if (message.challenge !== undefined) {
      obj.challenge = message.challenge;
    }
    if (message.webResponse !== undefined) {
      obj.webResponse = message.webResponse;
    }
    if (message.androidResponse !== undefined) {
      obj.androidResponse = message.androidResponse;
    }
    if (message.iosResponse !== undefined) {
      obj.iosResponse = base64FromBytes(message.iosResponse);
    }
    if (message.error !== undefined) {
      obj.error = Math.round(message.error);
    }
    if (message.adblockReporting !== undefined) {
      obj.adblockReporting = AttestationResponseData_AdblockReporting.toJSON(message.adblockReporting);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttestationResponseData>, I>>(base?: I): AttestationResponseData {
    return AttestationResponseData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttestationResponseData>, I>>(object: I): AttestationResponseData {
    const message = createBaseAttestationResponseData();
    message.challenge = object.challenge ?? undefined;
    message.webResponse = object.webResponse ?? undefined;
    message.androidResponse = object.androidResponse ?? undefined;
    message.iosResponse = object.iosResponse ?? undefined;
    message.error = object.error ?? undefined;
    message.adblockReporting = (object.adblockReporting !== undefined && object.adblockReporting !== null)
      ? AttestationResponseData_AdblockReporting.fromPartial(object.adblockReporting)
      : undefined;
    return message;
  },
};

function createBaseAttestationResponseData_AdblockReporting(): AttestationResponseData_AdblockReporting {
  return { reportingStatus: undefined, broadSpectrumDetectionResult: undefined };
}

export const AttestationResponseData_AdblockReporting: MessageFns<AttestationResponseData_AdblockReporting> = {
  encode(message: AttestationResponseData_AdblockReporting, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.reportingStatus !== undefined) {
      writer.uint32(8).uint64(message.reportingStatus);
    }
    if (message.broadSpectrumDetectionResult !== undefined) {
      writer.uint32(16).uint64(message.broadSpectrumDetectionResult);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AttestationResponseData_AdblockReporting {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestationResponseData_AdblockReporting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.reportingStatus = longToNumber(reader.uint64());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.broadSpectrumDetectionResult = longToNumber(reader.uint64());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttestationResponseData_AdblockReporting {
    return {
      reportingStatus: isSet(object.reportingStatus) ? globalThis.Number(object.reportingStatus) : undefined,
      broadSpectrumDetectionResult: isSet(object.broadSpectrumDetectionResult)
        ? globalThis.Number(object.broadSpectrumDetectionResult)
        : undefined,
    };
  },

  toJSON(message: AttestationResponseData_AdblockReporting): unknown {
    const obj: any = {};
    if (message.reportingStatus !== undefined) {
      obj.reportingStatus = Math.round(message.reportingStatus);
    }
    if (message.broadSpectrumDetectionResult !== undefined) {
      obj.broadSpectrumDetectionResult = Math.round(message.broadSpectrumDetectionResult);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AttestationResponseData_AdblockReporting>, I>>(
    base?: I,
  ): AttestationResponseData_AdblockReporting {
    return AttestationResponseData_AdblockReporting.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AttestationResponseData_AdblockReporting>, I>>(
    object: I,
  ): AttestationResponseData_AdblockReporting {
    const message = createBaseAttestationResponseData_AdblockReporting();
    message.reportingStatus = object.reportingStatus ?? undefined;
    message.broadSpectrumDetectionResult = object.broadSpectrumDetectionResult ?? undefined;
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  const bin = globalThis.atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(globalThis.String.fromCharCode(byte));
  });
  return globalThis.btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(int64: { toString(): string }): number {
  const num = globalThis.Number(int64.toString());
  if (num > globalThis.Number.MAX_SAFE_INTEGER) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (num < globalThis.Number.MIN_SAFE_INTEGER) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return num;
}

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
