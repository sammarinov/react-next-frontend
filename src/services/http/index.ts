import 'isomorphic-unfetch';
import getConfig from 'next/config';
import { stringify } from 'query-string';

import { HttpModel } from './http';

const {
  publicRuntimeConfig: { API_URL },
} = getConfig();

export const Http = {
  Request: async <A>(
    methodType: string,
    url: string,
    params?: HttpModel.IRequestQueryPayload,
    payload?: HttpModel.IRequestPayload,
  ): Promise<A> => {
    return new Promise((resolve, reject) => {
      const query = params ? `?${stringify({ ...params })}` : '';

      fetch(`${API_URL}${url}${query}`, {
        body: JSON.stringify(payload),
        cache: 'no-cache',
        headers: {
          'content-type': 'application/json',
        },
        method: `${methodType}`,
      })
        .then(async response => {
          if (response.status === 200) {
            return response.json().then(resolve);
          }
          return reject(response);
        })
        .catch(e => {
          reject(e);
        });
    });
  },
};
