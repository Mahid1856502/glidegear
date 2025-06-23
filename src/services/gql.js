import request, { gql, GraphQLClient } from "graphql-request";
import { useMutation, useQuery } from "react-query";

const token = localStorage.getItem("token");
const headers = { Authorization: `Bearer ${token}` };

const client = new GraphQLClient(
  process.env.REACT_APP_GRAPHQL_API || "https://store.glidegear.co/graphql",
  {
    // method: "GET",
    // jsonSerializer: {
    //   parse: JSON.parse,
    //   stringify: JSON.stringify,
    // },
    headers: {
      authorization: `Bearer ${token}`,
    },
  }
);

export const useQueryHandler = () => {
  const query = gql`
    query getPosts {
      posts {
        title
        excerpt
        featuredImage {
          url
        }
        author {
          id
          name
          photo {
            url
          }
        }
        createdAt
        slug
      }
    }
  `;
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: async ({ signal }) => {
      const res = await client.request({
        document: query,
        signal,
      });
      return res;
    },
  });

  return { data, isLoading, isError, error };
};

export const useMutationHandler = ({ gqlQuery, onSuccess }) => {
  const mutation = useMutation({
    mutationFn: async () =>
      request(
        process.env.REACT_APP_GRAPHQL_API ||
          "https://store.glidegear.co/graphql",
        gqlQuery,
        // queryVariables,
        headers
      ),
    onSuccess,
  });

  return mutation;
};
