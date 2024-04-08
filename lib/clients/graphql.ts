import { GraphQLClient } from "graphql-request";
import Cookies from "js-cookie";

const isClient = typeof window !== "undefined";
const graphqlClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_API_URL as string,
  {
    headers: () => ({
      Authorization: isClient ? `Bearer ${Cookies.get("__token")}` : "",
    }),
  }
);

export default graphqlClient;
