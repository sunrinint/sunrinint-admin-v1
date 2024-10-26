type FetchParams = Parameters<typeof fetch>;

interface ClientOptions<T> extends Omit<FetchParams[1], 'body'> {
  baseUrl: string;

  interceptors?: {
    request?(
      input: FetchParams[0],
      init: FetchParams[1],
    ): FetchParams[1] | Promise<FetchParams[1]>;
    response?(response: T): T | Promise<T>;
  };
}

const client = <T>({
  baseUrl,
  interceptors = {},
  ...baseInit
}: ClientOptions<T>) => {
  return async function (input: FetchParams[0], init?: FetchParams[1]) {
    const url = new URL(input as string, baseUrl);
    const options = interceptors.request
      ? await interceptors.request(url, init)
      : { ...baseInit, ...init };
    const res = (await fetch(url, options)).json() as T;

    if (interceptors.response) {
      return await interceptors.response(res);
    }

    return res as T;
  };
};

const apiClient = <T>(credentials?: boolean) => {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error('NEXT_PUBLIC_API_URl is not defined');
  }

  return client<T>({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    interceptors: {
      async request(_, init) {
        return {
          ...init,
          credentials: credentials ? 'include' : 'same-origin',
          headers: {
            ...init?.headers,
            'Content-Type': 'application/json',
          },
        };
      },
    },
  });
};

const refresh = async () => {
  const client = apiClient<string>();
  const res = await client('/auth/refresh', {
    method: 'GET',
  });
  localStorage.setItem('accessToken', res);
};

const authClient = <T>(retry?: boolean) => {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error('NEXT_PUBLIC_API_URl is not defined');
  }

  let originalRequest: {
    input: FetchParams[0];
    init: FetchParams[1];
  }[] = [];

  return client<T>({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    interceptors: {
      async request(_, init) {
        if (localStorage.getItem('accessToken') === '') await refresh();

        const headers = {
          ...init?.headers,
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        };

        return {
          ...init,
          credentials: 'include',
          headers: {
            ...headers,
            'Content-Type': 'application/json',
          },
        };
      },
    },
  });
};
