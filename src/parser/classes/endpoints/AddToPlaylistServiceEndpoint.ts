import { YTNode } from '../../helpers.js';
import type { AddToPlaylistServiceRequest, IEndpoint, RawNode } from '../../index.js';

export default class AddToPlaylistServiceEndpoint extends YTNode implements IEndpoint<AddToPlaylistServiceRequest> {
  static type = 'AddToPlaylistServiceEndpoint';

  #API_PATH = 'playlist/get_add_to_playlist';
  #data: RawNode;

  constructor(data: RawNode) {
    super();
    this.#data = data;
  }

  public getApiPath(): string {
    return this.#API_PATH;
  }

  public buildRequest(): AddToPlaylistServiceRequest {
    const request: AddToPlaylistServiceRequest = {};

    request.videoIds = this.#data.videoIds ? this.#data.videoIds : [ this.#data.videoId ];
    
    if (this.#data.playlistId)
      request.playlistId = this.#data.playlistId;

    if (this.#data.params)
      request.params = this.#data.params;

    request.excludeWatchLater = !!this.#data.excludeWatchLater;

    return request;
  }
}