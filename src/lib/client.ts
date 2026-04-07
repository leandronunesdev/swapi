import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  const configuredUri = process.env.SWAPI_URL ?? "";
  const normalizedUri = configuredUri.endsWith("/.netlify/functions/index")
    ? configuredUri.replace("/.netlify/functions/index", "/graphql")
    : configuredUri;

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: normalizedUri,
    }),
  });
});
