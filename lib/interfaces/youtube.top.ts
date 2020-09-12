import { Id, General, Geo, Statistics, Ranks } from './youtube.shared';

export interface YouTubeTop {
  id: Id;
  general: General;
  geo: Geo;
  statistics: Statistics;
  ranks: Ranks;
}
