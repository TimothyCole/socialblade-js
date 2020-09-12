import { Id, General, Geo, Statistics, Ranks } from './youtube.shared';

export interface YouTubeUser {
  id: Id;
  general: UserGeneral;
  statistics: UserStatistics;
  misc: Misc;
  ranks: Ranks;
  social: Social;
  tags: string[];
  daily: Daily[];
}

export interface Daily {
  date: Date;
  subs: number;
  views: number;
}

export interface Branding {
  avatar: string;
  banner: string;
}

export interface Misc {
  grade: Grade;
  sb_verified: boolean;
  made_for_kids: boolean;
  external: string;
}

export interface Grade {
  color: string;
  grade: string;
}

export interface Social {
  facebook: string;
  twitter: string;
  twitch: string;
  instagram: string;
  linkedin: string;
  discord: string;
}

export interface Growth {
  subs: GrowthNumbers;
  views: GrowthNumbers;
}

export interface GrowthNumbers {
  '1': number;
  '3': number;
  '7': number;
  '14': number;
  '30': number;
  '60': number;
  '90': number;
  '180': number;
  '365': number;
}

export interface UserStatistics extends Statistics {
  growth: Growth;
}

export interface UserGeneral extends General {
  geo: Geo;
  branding: Branding;
}
