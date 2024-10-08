import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ExpandableVideoDescriptionBody from './ExpandableVideoDescriptionBody.js';
import HorizontalCardList from './HorizontalCardList.js';
import VideoDescriptionHeader from './VideoDescriptionHeader.js';
import VideoDescriptionInfocardsSection from './VideoDescriptionInfocardsSection.js';
import VideoDescriptionMusicSection from './VideoDescriptionMusicSection.js';
import VideoDescriptionTranscriptSection from './VideoDescriptionTranscriptSection.js';
import VideoDescriptionCourseSection from './VideoDescriptionCourseSection.js';
import ReelShelf from './ReelShelf.js';
import VideoAttributesSectionView from './VideoAttributesSectionView.js';

export default class StructuredDescriptionContent extends YTNode {
  static type = 'StructuredDescriptionContent';

  items: ObservedArray<
    VideoDescriptionHeader | ExpandableVideoDescriptionBody | VideoDescriptionMusicSection |
    VideoDescriptionInfocardsSection | VideoDescriptionTranscriptSection | VideoDescriptionTranscriptSection |
    VideoDescriptionCourseSection | HorizontalCardList | ReelShelf | VideoAttributesSectionView
  >;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parseArray(data.items, [
      VideoDescriptionHeader, ExpandableVideoDescriptionBody, VideoDescriptionMusicSection,
      VideoDescriptionInfocardsSection, VideoDescriptionCourseSection, VideoDescriptionTranscriptSection,
      VideoDescriptionTranscriptSection, HorizontalCardList, ReelShelf, VideoAttributesSectionView
    ]);
  }
}