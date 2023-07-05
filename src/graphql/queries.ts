/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      phone
      slug
      full_name
      birthday
      avatar
      capsules {
        items {
          id
          post_time
          user_id
          img_url
          content
          is_live
          is_public
          createdAt
          updatedAt
          userCapsulesId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        phone
        slug
        full_name
        birthday
        avatar
        capsules {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userBySlug = /* GraphQL */ `
  query UserBySlug(
    $slug: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        phone
        slug
        full_name
        birthday
        avatar
        capsules {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCapsule = /* GraphQL */ `
  query GetCapsule($id: ID!) {
    getCapsule(id: $id) {
      id
      post_time
      user_id
      user {
        id
        email
        phone
        slug
        full_name
        birthday
        avatar
        capsules {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      img_url
      content
      is_live
      is_public
      createdAt
      updatedAt
      userCapsulesId
      __typename
    }
  }
`;
export const listCapsules = /* GraphQL */ `
  query ListCapsules(
    $filter: ModelCapsuleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCapsules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post_time
        user_id
        user {
          id
          email
          phone
          slug
          full_name
          birthday
          avatar
          createdAt
          updatedAt
          __typename
        }
        img_url
        content
        is_live
        is_public
        createdAt
        updatedAt
        userCapsulesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
