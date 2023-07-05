/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateCapsule = /* GraphQL */ `
  subscription OnCreateCapsule($filter: ModelSubscriptionCapsuleFilterInput) {
    onCreateCapsule(filter: $filter) {
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
export const onUpdateCapsule = /* GraphQL */ `
  subscription OnUpdateCapsule($filter: ModelSubscriptionCapsuleFilterInput) {
    onUpdateCapsule(filter: $filter) {
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
export const onDeleteCapsule = /* GraphQL */ `
  subscription OnDeleteCapsule($filter: ModelSubscriptionCapsuleFilterInput) {
    onDeleteCapsule(filter: $filter) {
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
