/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createCapsule = /* GraphQL */ `
  mutation CreateCapsule(
    $input: CreateCapsuleInput!
    $condition: ModelCapsuleConditionInput
  ) {
    createCapsule(input: $input, condition: $condition) {
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
export const updateCapsule = /* GraphQL */ `
  mutation UpdateCapsule(
    $input: UpdateCapsuleInput!
    $condition: ModelCapsuleConditionInput
  ) {
    updateCapsule(input: $input, condition: $condition) {
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
export const deleteCapsule = /* GraphQL */ `
  mutation DeleteCapsule(
    $input: DeleteCapsuleInput!
    $condition: ModelCapsuleConditionInput
  ) {
    deleteCapsule(input: $input, condition: $condition) {
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
