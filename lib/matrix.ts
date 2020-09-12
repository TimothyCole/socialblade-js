import { MatrixRequest } from './interfaces/matrix';
import { Response } from './interfaces/matrix';

export class Matrix {
  private client_id: string;
  private access_token: string;

  private readonly base_url: string = `https://matrix.sbapis.com/b/`;
  private readonly user_agent: string =
    "Tim's JavaScript Library :: TimothyCole/socialblade-js";

  constructor(client_id: string, access_token: string) {
    this.client_id = client_id;
    this.access_token = access_token;
  }

  private async request<T>(
    method: 'GET',
    { path, data, headers }: MatrixRequest,
  ): Promise<Response<T>> {
    const qs = `?${Object.keys(data)
      .map((key) => key + '=' + data[key])
      .join('&')}`;

    return await fetch(`${this.base_url}${path}${method === 'GET' ? qs : ''}`, {
      method,
      body: method !== 'GET' ? data : null,
      headers: {
        ...headers,
        clientid: this.client_id,
        token: this.access_token,
        'User-Agent': this.user_agent,
      },
    }).then((data) => data.json());
  }

  public async get<T>(
    path: string,
    data = {},
    headers = {},
  ): Promise<Response<T>> {
    return await this.request<T>('GET', { path, data, headers });
  }
}
