import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client';

export const createApolloClient = () => {
  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        'Accept-Language': 'en_US',
        origin: null,
      },
    }));

    return forward(operation);
  });

  return new ApolloClient({
    link: authMiddleware.concat(
      new HttpLink({
        uri: 'http://localhost:8080/https://api.yelp.com/v3/graphql',
        credentials: 'same-origin',
      })
    ),
    cache: new InMemoryCache(),
  });
};
