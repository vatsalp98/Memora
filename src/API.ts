/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  email: string,
  phone?: string | null,
  slug: string,
  full_name: string,
  birthday: string,
  avatar?: string | null,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  full_name?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  email: string,
  phone?: string | null,
  slug: string,
  full_name: string,
  birthday: string,
  avatar?: string | null,
  capsules?: ModelCapsuleConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCapsuleConnection = {
  __typename: "ModelCapsuleConnection",
  items:  Array<Capsule | null >,
  nextToken?: string | null,
};

export type Capsule = {
  __typename: "Capsule",
  id: string,
  post_time: string,
  user_id: string,
  user?: User | null,
  img_url?: string | null,
  content?: string | null,
  is_live: boolean,
  is_public: boolean,
  createdAt: string,
  updatedAt: string,
  userCapsulesId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  phone?: string | null,
  slug?: string | null,
  full_name?: string | null,
  birthday?: string | null,
  avatar?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateCapsuleInput = {
  id?: string | null,
  post_time: string,
  user_id: string,
  img_url?: string | null,
  content?: string | null,
  is_live: boolean,
  is_public: boolean,
  userCapsulesId?: string | null,
};

export type ModelCapsuleConditionInput = {
  post_time?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  img_url?: ModelStringInput | null,
  content?: ModelStringInput | null,
  is_live?: ModelBooleanInput | null,
  is_public?: ModelBooleanInput | null,
  and?: Array< ModelCapsuleConditionInput | null > | null,
  or?: Array< ModelCapsuleConditionInput | null > | null,
  not?: ModelCapsuleConditionInput | null,
  userCapsulesId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCapsuleInput = {
  id: string,
  post_time?: string | null,
  user_id?: string | null,
  img_url?: string | null,
  content?: string | null,
  is_live?: boolean | null,
  is_public?: boolean | null,
  userCapsulesId?: string | null,
};

export type DeleteCapsuleInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  slug?: ModelStringInput | null,
  full_name?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCapsuleFilterInput = {
  id?: ModelIDInput | null,
  post_time?: ModelStringInput | null,
  user_id?: ModelIDInput | null,
  img_url?: ModelStringInput | null,
  content?: ModelStringInput | null,
  is_live?: ModelBooleanInput | null,
  is_public?: ModelBooleanInput | null,
  and?: Array< ModelCapsuleFilterInput | null > | null,
  or?: Array< ModelCapsuleFilterInput | null > | null,
  not?: ModelCapsuleFilterInput | null,
  userCapsulesId?: ModelIDInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  slug?: ModelSubscriptionStringInput | null,
  full_name?: ModelSubscriptionStringInput | null,
  birthday?: ModelSubscriptionStringInput | null,
  avatar?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCapsuleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  post_time?: ModelSubscriptionStringInput | null,
  user_id?: ModelSubscriptionIDInput | null,
  img_url?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  is_live?: ModelSubscriptionBooleanInput | null,
  is_public?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionCapsuleFilterInput | null > | null,
  or?: Array< ModelSubscriptionCapsuleFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phone?: string | null,
    slug: string,
    full_name: string,
    birthday: string,
    avatar?: string | null,
    capsules?:  {
      __typename: "ModelCapsuleConnection",
      items:  Array< {
        __typename: "Capsule",
        id: string,
        post_time: string,
        user_id: string,
        img_url?: string | null,
        content?: string | null,
        is_live: boolean,
        is_public: boolean,
        createdAt: string,
        updatedAt: string,
        userCapsulesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phone?: string | null,
    slug: string,
    full_name: string,
    birthday: string,
    avatar?: string | null,
    capsules?:  {
      __typename: "ModelCapsuleConnection",
      items:  Array< {
        __typename: "Capsule",
        id: string,
        post_time: string,
        user_id: string,
        img_url?: string | null,
        content?: string | null,
        is_live: boolean,
        is_public: boolean,
        createdAt: string,
        updatedAt: string,
        userCapsulesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phone?: string | null,
    slug: string,
    full_name: string,
    birthday: string,
    avatar?: string | null,
    capsules?:  {
      __typename: "ModelCapsuleConnection",
      items:  Array< {
        __typename: "Capsule",
        id: string,
        post_time: string,
        user_id: string,
        img_url?: string | null,
        content?: string | null,
        is_live: boolean,
        is_public: boolean,
        createdAt: string,
        updatedAt: string,
        userCapsulesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCapsuleMutationVariables = {
  input: CreateCapsuleInput,
  condition?: ModelCapsuleConditionInput | null,
};

export type CreateCapsuleMutation = {
  createCapsule?:  {
    __typename: "Capsule",
    id: string,
    post_time: string,
    user_id: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      slug: string,
      full_name: string,
      birthday: string,
      avatar?: string | null,
      capsules?:  {
        __typename: "ModelCapsuleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    img_url?: string | null,
    content?: string | null,
    is_live: boolean,
    is_public: boolean,
    createdAt: string,
    updatedAt: string,
    userCapsulesId?: string | null,
  } | null,
};

export type UpdateCapsuleMutationVariables = {
  input: UpdateCapsuleInput,
  condition?: ModelCapsuleConditionInput | null,
};

export type UpdateCapsuleMutation = {
  updateCapsule?:  {
    __typename: "Capsule",
    id: string,
    post_time: string,
    user_id: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      slug: string,
      full_name: string,
      birthday: string,
      avatar?: string | null,
      capsules?:  {
        __typename: "ModelCapsuleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    img_url?: string | null,
    content?: string | null,
    is_live: boolean,
    is_public: boolean,
    createdAt: string,
    updatedAt: string,
    userCapsulesId?: string | null,
  } | null,
};

export type DeleteCapsuleMutationVariables = {
  input: DeleteCapsuleInput,
  condition?: ModelCapsuleConditionInput | null,
};

export type DeleteCapsuleMutation = {
  deleteCapsule?:  {
    __typename: "Capsule",
    id: string,
    post_time: string,
    user_id: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      slug: string,
      full_name: string,
      birthday: string,
      avatar?: string | null,
      capsules?:  {
        __typename: "ModelCapsuleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    img_url?: string | null,
    content?: string | null,
    is_live: boolean,
    is_public: boolean,
    createdAt: string,
    updatedAt: string,
    userCapsulesId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phone?: string | null,
    slug: string,
    full_name: string,
    birthday: string,
    avatar?: string | null,
    capsules?:  {
      __typename: "ModelCapsuleConnection",
      items:  Array< {
        __typename: "Capsule",
        id: string,
        post_time: string,
        user_id: string,
        img_url?: string | null,
        content?: string | null,
        is_live: boolean,
        is_public: boolean,
        createdAt: string,
        updatedAt: string,
        userCapsulesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      slug: string,
      full_name: string,
      birthday: string,
      avatar?: string | null,
      capsules?:  {
        __typename: "ModelCapsuleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserBySlugQueryVariables = {
  slug: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserBySlugQuery = {
  userBySlug?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      slug: string,
      full_name: string,
      birthday: string,
      avatar?: string | null,
      capsules?:  {
        __typename: "ModelCapsuleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCapsuleQueryVariables = {
  id: string,
};

export type GetCapsuleQuery = {
  getCapsule?:  {
    __typename: "Capsule",
    id: string,
    post_time: string,
    user_id: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      slug: string,
      full_name: string,
      birthday: string,
      avatar?: string | null,
      capsules?:  {
        __typename: "ModelCapsuleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    img_url?: string | null,
    content?: string | null,
    is_live: boolean,
    is_public: boolean,
    createdAt: string,
    updatedAt: string,
    userCapsulesId?: string | null,
  } | null,
};

export type ListCapsulesQueryVariables = {
  filter?: ModelCapsuleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCapsulesQuery = {
  listCapsules?:  {
    __typename: "ModelCapsuleConnection",
    items:  Array< {
      __typename: "Capsule",
      id: string,
      post_time: string,
      user_id: string,
      user?:  {
        __typename: "User",
        id: string,
        email: string,
        phone?: string | null,
        slug: string,
        full_name: string,
        birthday: string,
        avatar?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      img_url?: string | null,
      content?: string | null,
      is_live: boolean,
      is_public: boolean,
      createdAt: string,
      updatedAt: string,
      userCapsulesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phone?: string | null,
    slug: string,
    full_name: string,
    birthday: string,
    avatar?: string | null,
    capsules?:  {
      __typename: "ModelCapsuleConnection",
      items:  Array< {
        __typename: "Capsule",
        id: string,
        post_time: string,
        user_id: string,
        img_url?: string | null,
        content?: string | null,
        is_live: boolean,
        is_public: boolean,
        createdAt: string,
        updatedAt: string,
        userCapsulesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phone?: string | null,
    slug: string,
    full_name: string,
    birthday: string,
    avatar?: string | null,
    capsules?:  {
      __typename: "ModelCapsuleConnection",
      items:  Array< {
        __typename: "Capsule",
        id: string,
        post_time: string,
        user_id: string,
        img_url?: string | null,
        content?: string | null,
        is_live: boolean,
        is_public: boolean,
        createdAt: string,
        updatedAt: string,
        userCapsulesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    phone?: string | null,
    slug: string,
    full_name: string,
    birthday: string,
    avatar?: string | null,
    capsules?:  {
      __typename: "ModelCapsuleConnection",
      items:  Array< {
        __typename: "Capsule",
        id: string,
        post_time: string,
        user_id: string,
        img_url?: string | null,
        content?: string | null,
        is_live: boolean,
        is_public: boolean,
        createdAt: string,
        updatedAt: string,
        userCapsulesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCapsuleSubscriptionVariables = {
  filter?: ModelSubscriptionCapsuleFilterInput | null,
};

export type OnCreateCapsuleSubscription = {
  onCreateCapsule?:  {
    __typename: "Capsule",
    id: string,
    post_time: string,
    user_id: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      slug: string,
      full_name: string,
      birthday: string,
      avatar?: string | null,
      capsules?:  {
        __typename: "ModelCapsuleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    img_url?: string | null,
    content?: string | null,
    is_live: boolean,
    is_public: boolean,
    createdAt: string,
    updatedAt: string,
    userCapsulesId?: string | null,
  } | null,
};

export type OnUpdateCapsuleSubscriptionVariables = {
  filter?: ModelSubscriptionCapsuleFilterInput | null,
};

export type OnUpdateCapsuleSubscription = {
  onUpdateCapsule?:  {
    __typename: "Capsule",
    id: string,
    post_time: string,
    user_id: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      slug: string,
      full_name: string,
      birthday: string,
      avatar?: string | null,
      capsules?:  {
        __typename: "ModelCapsuleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    img_url?: string | null,
    content?: string | null,
    is_live: boolean,
    is_public: boolean,
    createdAt: string,
    updatedAt: string,
    userCapsulesId?: string | null,
  } | null,
};

export type OnDeleteCapsuleSubscriptionVariables = {
  filter?: ModelSubscriptionCapsuleFilterInput | null,
};

export type OnDeleteCapsuleSubscription = {
  onDeleteCapsule?:  {
    __typename: "Capsule",
    id: string,
    post_time: string,
    user_id: string,
    user?:  {
      __typename: "User",
      id: string,
      email: string,
      phone?: string | null,
      slug: string,
      full_name: string,
      birthday: string,
      avatar?: string | null,
      capsules?:  {
        __typename: "ModelCapsuleConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    img_url?: string | null,
    content?: string | null,
    is_live: boolean,
    is_public: boolean,
    createdAt: string,
    updatedAt: string,
    userCapsulesId?: string | null,
  } | null,
};
