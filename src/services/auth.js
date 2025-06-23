import request, { gql } from "graphql-request";
import api from "./api";

const token = localStorage.getItem("token");
const headers = { Authorization: `Bearer ${token}` };

export const authenticate = async (code) => {
  return await api.post(`/V2/elightwalk/sociallogin/login`, code);
};

export const signup = async (data) => {
  return request({
    url:
      process.env.REACT_APP_GRAPHQL_API || "https://store.glidegear.co/graphql",
    document: gql`
      mutation CreateCustomerV2 {
        createCustomerV2(
          input: {
            taxvat: null
            suffix: null
            prefix: null
            password: "${data?.password}"
            middlename: null
            lastname: "${data?.lastname}"
            is_subscribed: false
            gender: null
            firstname: "${data?.firstname}"
            email: "${data?.email}"
            dob: null
            date_of_birth: null
            allow_remote_shopping_assistance: false
          }
        ) {
          customer {
            allow_remote_shopping_assistance
            created_at
            date_of_birth
            default_billing
            default_shipping
            dob
            email
            firstname
            gender
            group_id
            id
            is_subscribed
            lastname
            middlename
            prefix
            suffix
            taxvat
          }
        }
      }
    `,
    // variables: {
    //   password: data?.password,
    //   lastname: data?.lastname,
    //   firstname: data?.firstname,
    //   email: data?.email,
    // },
    requestHeaders: headers,
  });
};

export const signin = async (data) => {
  debugger;
  return request(
    process.env.REACT_APP_GRAPHQL_API || "https://store.glidegear.co/graphql",
    gql`
      mutation GenerateCustomerToken {
        generateCustomerToken(email: "${data?.username}", password: "${data?.password}") {
          token
        }
      }
    `,
    // queryVariables,
    headers
  );
};

export const getLoggedInUser = async () => {
  return await api.get(`/V1/customers/me`);
};

export const tokenVerification = async (code) => {
  return request(
    process.env.REACT_APP_GRAPHQL_API || "https://store.glidegear.co/graphql",
    gql`
    mutation ElightwalkCreateSocialLogin {
      elightwalkCreateSocialLogin(
        input: {
          code: "${code}"
          provider: ${localStorage.getItem("provider")}
        }
      )
    }
  `,
    // queryVariables,
    headers
  );
};
