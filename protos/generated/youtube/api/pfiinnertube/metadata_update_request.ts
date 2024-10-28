// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: youtube/api/pfiinnertube/metadata_update_request.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { InnerTubeContext } from "./innertube_context.js";

export const protobufPackage = "youtube.api.pfiinnertube";

export interface MetadataUpdateRequest {
  context?: InnerTubeContext | undefined;
  encryptedVideoId?: string | undefined;
  title?: MetadataUpdateRequest_MdeTitleUpdateRequest | undefined;
  description?: MetadataUpdateRequest_MdeDescriptionUpdateRequest | undefined;
  privacy?: MetadataUpdateRequest_MdePrivacyUpdateRequest | undefined;
  tags?: MetadataUpdateRequest_MdeTagsUpdateRequest | undefined;
  category?: MetadataUpdateRequest_MdeCategoryUpdateRequest | undefined;
  license?: MetadataUpdateRequest_MdeLicenseUpdateRequest | undefined;
  ageRestriction?: MetadataUpdateRequest_MdeAgeRestrictionUpdateRequest | undefined;
  videoStill?: MetadataUpdateRequest_MdeVideoStillRequestParams | undefined;
  madeForKids?: MetadataUpdateRequest_MdeMadeForKidsUpdateRequestParams | undefined;
  racy?: MetadataUpdateRequest_MdeRacyRequestParams | undefined;
}

export interface MetadataUpdateRequest_MdeTitleUpdateRequest {
  newTitle?: string | undefined;
}

export interface MetadataUpdateRequest_MdeDescriptionUpdateRequest {
  newDescription?: string | undefined;
}

export interface MetadataUpdateRequest_MdePrivacyUpdateRequest {
  newPrivacy?: number | undefined;
  clearPrivacyDraft?: boolean | undefined;
}

export interface MetadataUpdateRequest_MdeTagsUpdateRequest {
  newTags: string[];
}

export interface MetadataUpdateRequest_MdeCategoryUpdateRequest {
  newCategoryId?: number | undefined;
}

export interface MetadataUpdateRequest_MdeLicenseUpdateRequest {
  newLicenseId?: string | undefined;
}

export interface MetadataUpdateRequest_MdeMadeForKidsUpdateRequestParams {
  operation?: number | undefined;
  newMfk?: number | undefined;
}

export interface MetadataUpdateRequest_MdeRacyRequestParams {
  operation?: number | undefined;
  newRacy?: number | undefined;
}

export interface MetadataUpdateRequest_MdeAgeRestrictionUpdateRequest {
  newIsAgeRestricted?: boolean | undefined;
}

export interface MetadataUpdateRequest_MdeVideoStillRequestParams {
  operation?: number | undefined;
  newStillId?: number | undefined;
  image?: MetadataUpdateRequest_MdeVideoStillRequestParams_CustomThumbnailImage | undefined;
  testImage?: MetadataUpdateRequest_MdeVideoStillRequestParams_CustomThumbnailImage | undefined;
  experimentImage: MetadataUpdateRequest_MdeVideoStillRequestParams_ThumbnailExperimentImageData[];
}

export interface MetadataUpdateRequest_MdeVideoStillRequestParams_ThumbnailExperimentImageData {
  image?: MetadataUpdateRequest_MdeVideoStillRequestParams_CustomThumbnailImage | undefined;
}

export interface MetadataUpdateRequest_MdeVideoStillRequestParams_CustomThumbnailImage {
  rawBytes?: Uint8Array | undefined;
  dataUri?: string | undefined;
  frameTimestampUs?: number | undefined;
  isVertical?: boolean | undefined;
}

function createBaseMetadataUpdateRequest(): MetadataUpdateRequest {
  return {
    context: undefined,
    encryptedVideoId: undefined,
    title: undefined,
    description: undefined,
    privacy: undefined,
    tags: undefined,
    category: undefined,
    license: undefined,
    ageRestriction: undefined,
    videoStill: undefined,
    madeForKids: undefined,
    racy: undefined,
  };
}

export const MetadataUpdateRequest: MessageFns<MetadataUpdateRequest> = {
  encode(message: MetadataUpdateRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.context !== undefined) {
      InnerTubeContext.encode(message.context, writer.uint32(10).fork()).join();
    }
    if (message.encryptedVideoId !== undefined) {
      writer.uint32(18).string(message.encryptedVideoId);
    }
    if (message.title !== undefined) {
      MetadataUpdateRequest_MdeTitleUpdateRequest.encode(message.title, writer.uint32(26).fork()).join();
    }
    if (message.description !== undefined) {
      MetadataUpdateRequest_MdeDescriptionUpdateRequest.encode(message.description, writer.uint32(34).fork()).join();
    }
    if (message.privacy !== undefined) {
      MetadataUpdateRequest_MdePrivacyUpdateRequest.encode(message.privacy, writer.uint32(42).fork()).join();
    }
    if (message.tags !== undefined) {
      MetadataUpdateRequest_MdeTagsUpdateRequest.encode(message.tags, writer.uint32(50).fork()).join();
    }
    if (message.category !== undefined) {
      MetadataUpdateRequest_MdeCategoryUpdateRequest.encode(message.category, writer.uint32(58).fork()).join();
    }
    if (message.license !== undefined) {
      MetadataUpdateRequest_MdeLicenseUpdateRequest.encode(message.license, writer.uint32(66).fork()).join();
    }
    if (message.ageRestriction !== undefined) {
      MetadataUpdateRequest_MdeAgeRestrictionUpdateRequest.encode(message.ageRestriction, writer.uint32(90).fork())
        .join();
    }
    if (message.videoStill !== undefined) {
      MetadataUpdateRequest_MdeVideoStillRequestParams.encode(message.videoStill, writer.uint32(162).fork()).join();
    }
    if (message.madeForKids !== undefined) {
      MetadataUpdateRequest_MdeMadeForKidsUpdateRequestParams.encode(message.madeForKids, writer.uint32(546).fork())
        .join();
    }
    if (message.racy !== undefined) {
      MetadataUpdateRequest_MdeRacyRequestParams.encode(message.racy, writer.uint32(554).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MetadataUpdateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadataUpdateRequest();
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

          message.encryptedVideoId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.title = MetadataUpdateRequest_MdeTitleUpdateRequest.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = MetadataUpdateRequest_MdeDescriptionUpdateRequest.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.privacy = MetadataUpdateRequest_MdePrivacyUpdateRequest.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.tags = MetadataUpdateRequest_MdeTagsUpdateRequest.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.category = MetadataUpdateRequest_MdeCategoryUpdateRequest.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.license = MetadataUpdateRequest_MdeLicenseUpdateRequest.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.ageRestriction = MetadataUpdateRequest_MdeAgeRestrictionUpdateRequest.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.videoStill = MetadataUpdateRequest_MdeVideoStillRequestParams.decode(reader, reader.uint32());
          continue;
        case 68:
          if (tag !== 546) {
            break;
          }

          message.madeForKids = MetadataUpdateRequest_MdeMadeForKidsUpdateRequestParams.decode(reader, reader.uint32());
          continue;
        case 69:
          if (tag !== 554) {
            break;
          }

          message.racy = MetadataUpdateRequest_MdeRacyRequestParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseMetadataUpdateRequest_MdeTitleUpdateRequest(): MetadataUpdateRequest_MdeTitleUpdateRequest {
  return { newTitle: undefined };
}

export const MetadataUpdateRequest_MdeTitleUpdateRequest: MessageFns<MetadataUpdateRequest_MdeTitleUpdateRequest> = {
  encode(
    message: MetadataUpdateRequest_MdeTitleUpdateRequest,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.newTitle !== undefined) {
      writer.uint32(10).string(message.newTitle);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MetadataUpdateRequest_MdeTitleUpdateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadataUpdateRequest_MdeTitleUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newTitle = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseMetadataUpdateRequest_MdeDescriptionUpdateRequest(): MetadataUpdateRequest_MdeDescriptionUpdateRequest {
  return { newDescription: undefined };
}

export const MetadataUpdateRequest_MdeDescriptionUpdateRequest: MessageFns<
  MetadataUpdateRequest_MdeDescriptionUpdateRequest
> = {
  encode(
    message: MetadataUpdateRequest_MdeDescriptionUpdateRequest,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.newDescription !== undefined) {
      writer.uint32(10).string(message.newDescription);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MetadataUpdateRequest_MdeDescriptionUpdateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadataUpdateRequest_MdeDescriptionUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newDescription = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseMetadataUpdateRequest_MdePrivacyUpdateRequest(): MetadataUpdateRequest_MdePrivacyUpdateRequest {
  return { newPrivacy: undefined, clearPrivacyDraft: undefined };
}

export const MetadataUpdateRequest_MdePrivacyUpdateRequest: MessageFns<MetadataUpdateRequest_MdePrivacyUpdateRequest> =
  {
    encode(
      message: MetadataUpdateRequest_MdePrivacyUpdateRequest,
      writer: BinaryWriter = new BinaryWriter(),
    ): BinaryWriter {
      if (message.newPrivacy !== undefined) {
        writer.uint32(8).int32(message.newPrivacy);
      }
      if (message.clearPrivacyDraft !== undefined) {
        writer.uint32(16).bool(message.clearPrivacyDraft);
      }
      return writer;
    },

    decode(input: BinaryReader | Uint8Array, length?: number): MetadataUpdateRequest_MdePrivacyUpdateRequest {
      const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = createBaseMetadataUpdateRequest_MdePrivacyUpdateRequest();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            if (tag !== 8) {
              break;
            }

            message.newPrivacy = reader.int32();
            continue;
          case 2:
            if (tag !== 16) {
              break;
            }

            message.clearPrivacyDraft = reader.bool();
            continue;
        }
        if ((tag & 7) === 4 || tag === 0) {
          break;
        }
        reader.skip(tag & 7);
      }
      return message;
    },
  };

function createBaseMetadataUpdateRequest_MdeTagsUpdateRequest(): MetadataUpdateRequest_MdeTagsUpdateRequest {
  return { newTags: [] };
}

export const MetadataUpdateRequest_MdeTagsUpdateRequest: MessageFns<MetadataUpdateRequest_MdeTagsUpdateRequest> = {
  encode(message: MetadataUpdateRequest_MdeTagsUpdateRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.newTags) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MetadataUpdateRequest_MdeTagsUpdateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadataUpdateRequest_MdeTagsUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.newTags.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseMetadataUpdateRequest_MdeCategoryUpdateRequest(): MetadataUpdateRequest_MdeCategoryUpdateRequest {
  return { newCategoryId: undefined };
}

export const MetadataUpdateRequest_MdeCategoryUpdateRequest: MessageFns<
  MetadataUpdateRequest_MdeCategoryUpdateRequest
> = {
  encode(
    message: MetadataUpdateRequest_MdeCategoryUpdateRequest,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.newCategoryId !== undefined) {
      writer.uint32(8).int32(message.newCategoryId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MetadataUpdateRequest_MdeCategoryUpdateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadataUpdateRequest_MdeCategoryUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.newCategoryId = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseMetadataUpdateRequest_MdeLicenseUpdateRequest(): MetadataUpdateRequest_MdeLicenseUpdateRequest {
  return { newLicenseId: undefined };
}

export const MetadataUpdateRequest_MdeLicenseUpdateRequest: MessageFns<MetadataUpdateRequest_MdeLicenseUpdateRequest> =
  {
    encode(
      message: MetadataUpdateRequest_MdeLicenseUpdateRequest,
      writer: BinaryWriter = new BinaryWriter(),
    ): BinaryWriter {
      if (message.newLicenseId !== undefined) {
        writer.uint32(10).string(message.newLicenseId);
      }
      return writer;
    },

    decode(input: BinaryReader | Uint8Array, length?: number): MetadataUpdateRequest_MdeLicenseUpdateRequest {
      const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = createBaseMetadataUpdateRequest_MdeLicenseUpdateRequest();
      while (reader.pos < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            if (tag !== 10) {
              break;
            }

            message.newLicenseId = reader.string();
            continue;
        }
        if ((tag & 7) === 4 || tag === 0) {
          break;
        }
        reader.skip(tag & 7);
      }
      return message;
    },
  };

function createBaseMetadataUpdateRequest_MdeMadeForKidsUpdateRequestParams(): MetadataUpdateRequest_MdeMadeForKidsUpdateRequestParams {
  return { operation: undefined, newMfk: undefined };
}

export const MetadataUpdateRequest_MdeMadeForKidsUpdateRequestParams: MessageFns<
  MetadataUpdateRequest_MdeMadeForKidsUpdateRequestParams
> = {
  encode(
    message: MetadataUpdateRequest_MdeMadeForKidsUpdateRequestParams,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.operation !== undefined) {
      writer.uint32(8).int32(message.operation);
    }
    if (message.newMfk !== undefined) {
      writer.uint32(16).int32(message.newMfk);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MetadataUpdateRequest_MdeMadeForKidsUpdateRequestParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadataUpdateRequest_MdeMadeForKidsUpdateRequestParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.operation = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.newMfk = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseMetadataUpdateRequest_MdeRacyRequestParams(): MetadataUpdateRequest_MdeRacyRequestParams {
  return { operation: undefined, newRacy: undefined };
}

export const MetadataUpdateRequest_MdeRacyRequestParams: MessageFns<MetadataUpdateRequest_MdeRacyRequestParams> = {
  encode(message: MetadataUpdateRequest_MdeRacyRequestParams, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.operation !== undefined) {
      writer.uint32(8).int32(message.operation);
    }
    if (message.newRacy !== undefined) {
      writer.uint32(16).int32(message.newRacy);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MetadataUpdateRequest_MdeRacyRequestParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadataUpdateRequest_MdeRacyRequestParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.operation = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.newRacy = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseMetadataUpdateRequest_MdeAgeRestrictionUpdateRequest(): MetadataUpdateRequest_MdeAgeRestrictionUpdateRequest {
  return { newIsAgeRestricted: undefined };
}

export const MetadataUpdateRequest_MdeAgeRestrictionUpdateRequest: MessageFns<
  MetadataUpdateRequest_MdeAgeRestrictionUpdateRequest
> = {
  encode(
    message: MetadataUpdateRequest_MdeAgeRestrictionUpdateRequest,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.newIsAgeRestricted !== undefined) {
      writer.uint32(8).bool(message.newIsAgeRestricted);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MetadataUpdateRequest_MdeAgeRestrictionUpdateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadataUpdateRequest_MdeAgeRestrictionUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.newIsAgeRestricted = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseMetadataUpdateRequest_MdeVideoStillRequestParams(): MetadataUpdateRequest_MdeVideoStillRequestParams {
  return { operation: undefined, newStillId: undefined, image: undefined, testImage: undefined, experimentImage: [] };
}

export const MetadataUpdateRequest_MdeVideoStillRequestParams: MessageFns<
  MetadataUpdateRequest_MdeVideoStillRequestParams
> = {
  encode(
    message: MetadataUpdateRequest_MdeVideoStillRequestParams,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.operation !== undefined) {
      writer.uint32(8).int32(message.operation);
    }
    if (message.newStillId !== undefined) {
      writer.uint32(16).int32(message.newStillId);
    }
    if (message.image !== undefined) {
      MetadataUpdateRequest_MdeVideoStillRequestParams_CustomThumbnailImage.encode(
        message.image,
        writer.uint32(26).fork(),
      ).join();
    }
    if (message.testImage !== undefined) {
      MetadataUpdateRequest_MdeVideoStillRequestParams_CustomThumbnailImage.encode(
        message.testImage,
        writer.uint32(34).fork(),
      ).join();
    }
    for (const v of message.experimentImage) {
      MetadataUpdateRequest_MdeVideoStillRequestParams_ThumbnailExperimentImageData.encode(v!, writer.uint32(50).fork())
        .join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MetadataUpdateRequest_MdeVideoStillRequestParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadataUpdateRequest_MdeVideoStillRequestParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.operation = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.newStillId = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.image = MetadataUpdateRequest_MdeVideoStillRequestParams_CustomThumbnailImage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.testImage = MetadataUpdateRequest_MdeVideoStillRequestParams_CustomThumbnailImage.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.experimentImage.push(
            MetadataUpdateRequest_MdeVideoStillRequestParams_ThumbnailExperimentImageData.decode(
              reader,
              reader.uint32(),
            ),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseMetadataUpdateRequest_MdeVideoStillRequestParams_ThumbnailExperimentImageData(): MetadataUpdateRequest_MdeVideoStillRequestParams_ThumbnailExperimentImageData {
  return { image: undefined };
}

export const MetadataUpdateRequest_MdeVideoStillRequestParams_ThumbnailExperimentImageData: MessageFns<
  MetadataUpdateRequest_MdeVideoStillRequestParams_ThumbnailExperimentImageData
> = {
  encode(
    message: MetadataUpdateRequest_MdeVideoStillRequestParams_ThumbnailExperimentImageData,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.image !== undefined) {
      MetadataUpdateRequest_MdeVideoStillRequestParams_CustomThumbnailImage.encode(
        message.image,
        writer.uint32(10).fork(),
      ).join();
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MetadataUpdateRequest_MdeVideoStillRequestParams_ThumbnailExperimentImageData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadataUpdateRequest_MdeVideoStillRequestParams_ThumbnailExperimentImageData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.image = MetadataUpdateRequest_MdeVideoStillRequestParams_CustomThumbnailImage.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

function createBaseMetadataUpdateRequest_MdeVideoStillRequestParams_CustomThumbnailImage(): MetadataUpdateRequest_MdeVideoStillRequestParams_CustomThumbnailImage {
  return { rawBytes: undefined, dataUri: undefined, frameTimestampUs: undefined, isVertical: undefined };
}

export const MetadataUpdateRequest_MdeVideoStillRequestParams_CustomThumbnailImage: MessageFns<
  MetadataUpdateRequest_MdeVideoStillRequestParams_CustomThumbnailImage
> = {
  encode(
    message: MetadataUpdateRequest_MdeVideoStillRequestParams_CustomThumbnailImage,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.rawBytes !== undefined) {
      writer.uint32(10).bytes(message.rawBytes);
    }
    if (message.dataUri !== undefined) {
      writer.uint32(18).string(message.dataUri);
    }
    if (message.frameTimestampUs !== undefined) {
      writer.uint32(32).int64(message.frameTimestampUs);
    }
    if (message.isVertical !== undefined) {
      writer.uint32(40).bool(message.isVertical);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MetadataUpdateRequest_MdeVideoStillRequestParams_CustomThumbnailImage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadataUpdateRequest_MdeVideoStillRequestParams_CustomThumbnailImage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rawBytes = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dataUri = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.frameTimestampUs = longToNumber(reader.int64());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.isVertical = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },
};

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

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}