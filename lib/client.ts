import { Options } from './interfaces/options';
import { Matrix } from './matrix';
import { YouTube } from './youtube';

export default class SocialBlade {
  private api: Matrix;
  public youtube: YouTube;

  constructor(options: Options) {
    this.api = new Matrix(options.client_id, options.access_token);
    this.youtube = new YouTube(this.api);
  }
}
