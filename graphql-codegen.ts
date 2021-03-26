import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneRecipe: Recipe;
  deleteOneRecipe?: Maybe<Recipe>;
  updateOneRecipe?: Maybe<Recipe>;
};


export type MutationCreateOneRecipeArgs = {
  data: RecipeCreateInput;
};


export type MutationDeleteOneRecipeArgs = {
  where: RecipeWhereUniqueInput;
};


export type MutationUpdateOneRecipeArgs = {
  data: RecipeUpdateInput;
  where: RecipeWhereUniqueInput;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  recipe?: Maybe<Recipe>;
  recipes: Array<Recipe>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryRecipeArgs = {
  where: RecipeWhereUniqueInput;
};


export type QueryRecipesArgs = {
  after?: Maybe<RecipeWhereUniqueInput>;
  before?: Maybe<RecipeWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: Maybe<UserWhereUniqueInput>;
  before?: Maybe<UserWhereUniqueInput>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A Recipe */
export type Recipe = {
  __typename?: 'Recipe';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type RecipeCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutRecipesInput;
};

export type RecipeUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutRecipesInput>;
};

export type RecipeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

/** A User */
export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type UserCreateNestedOneWithoutRecipesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutRecipesInput>;
  create?: Maybe<UserCreateWithoutRecipesInput>;
};

export type UserCreateOrConnectWithoutRecipesInput = {
  create: UserCreateWithoutRecipesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutRecipesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserUpdateOneRequiredWithoutRecipesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutRecipesInput>;
  create?: Maybe<UserCreateWithoutRecipesInput>;
  update?: Maybe<UserUpdateWithoutRecipesInput>;
  upsert?: Maybe<UserUpsertWithoutRecipesInput>;
};

export type UserUpdateWithoutRecipesInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutRecipesInput = {
  create: UserCreateWithoutRecipesInput;
  update: UserUpdateWithoutRecipesInput;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type CreateOneRecipeMutationVariables = Exact<{
  data: RecipeCreateInput;
}>;


export type CreateOneRecipeMutation = (
  { __typename?: 'Mutation' }
  & { createOneRecipe: (
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'id'>
  ) }
);

export type GetUserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'createdAt' | 'email' | 'emailVerified' | 'id' | 'image' | 'name' | 'updatedAt'>
  )>, recipes: Array<(
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'id' | 'title'>
  )> }
);

export type DeleteOneRecipeMutationVariables = Exact<{
  where: RecipeWhereUniqueInput;
}>;


export type DeleteOneRecipeMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneRecipe?: Maybe<(
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'id'>
  )> }
);

export type GetRecipeQueryVariables = Exact<{
  where: RecipeWhereUniqueInput;
}>;


export type GetRecipeQuery = (
  { __typename?: 'Query' }
  & { recipe?: Maybe<(
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'id' | 'title'>
  )> }
);


export const CreateOneRecipeDocument = gql`
    mutation createOneRecipe($data: RecipeCreateInput!) {
  createOneRecipe(data: $data) {
    id
  }
}
    `;
export type CreateOneRecipeMutationFn = ApolloReactCommon.MutationFunction<CreateOneRecipeMutation, CreateOneRecipeMutationVariables>;

/**
 * __useCreateOneRecipeMutation__
 *
 * To run a mutation, you first call `useCreateOneRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneRecipeMutation, { data, loading, error }] = useCreateOneRecipeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOneRecipeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneRecipeMutation, CreateOneRecipeMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneRecipeMutation, CreateOneRecipeMutationVariables>(CreateOneRecipeDocument, baseOptions);
      }
export type CreateOneRecipeMutationHookResult = ReturnType<typeof useCreateOneRecipeMutation>;
export type CreateOneRecipeMutationResult = ApolloReactCommon.MutationResult<CreateOneRecipeMutation>;
export type CreateOneRecipeMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneRecipeMutation, CreateOneRecipeMutationVariables>;
export const GetUserDocument = gql`
    query getUser($where: UserWhereUniqueInput!) {
  user(where: $where) {
    createdAt
    email
    emailVerified
    id
    image
    name
    updatedAt
  }
  recipes {
    id
    title
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = ApolloReactCommon.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const DeleteOneRecipeDocument = gql`
    mutation deleteOneRecipe($where: RecipeWhereUniqueInput!) {
  deleteOneRecipe(where: $where) {
    id
  }
}
    `;
export type DeleteOneRecipeMutationFn = ApolloReactCommon.MutationFunction<DeleteOneRecipeMutation, DeleteOneRecipeMutationVariables>;

/**
 * __useDeleteOneRecipeMutation__
 *
 * To run a mutation, you first call `useDeleteOneRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneRecipeMutation, { data, loading, error }] = useDeleteOneRecipeMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOneRecipeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteOneRecipeMutation, DeleteOneRecipeMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteOneRecipeMutation, DeleteOneRecipeMutationVariables>(DeleteOneRecipeDocument, baseOptions);
      }
export type DeleteOneRecipeMutationHookResult = ReturnType<typeof useDeleteOneRecipeMutation>;
export type DeleteOneRecipeMutationResult = ApolloReactCommon.MutationResult<DeleteOneRecipeMutation>;
export type DeleteOneRecipeMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteOneRecipeMutation, DeleteOneRecipeMutationVariables>;
export const GetRecipeDocument = gql`
    query getRecipe($where: RecipeWhereUniqueInput!) {
  recipe(where: $where) {
    id
    title
  }
}
    `;

/**
 * __useGetRecipeQuery__
 *
 * To run a query within a React component, call `useGetRecipeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipeQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetRecipeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRecipeQuery, GetRecipeQueryVariables>) {
        return ApolloReactHooks.useQuery<GetRecipeQuery, GetRecipeQueryVariables>(GetRecipeDocument, baseOptions);
      }
export function useGetRecipeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRecipeQuery, GetRecipeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetRecipeQuery, GetRecipeQueryVariables>(GetRecipeDocument, baseOptions);
        }
export type GetRecipeQueryHookResult = ReturnType<typeof useGetRecipeQuery>;
export type GetRecipeLazyQueryHookResult = ReturnType<typeof useGetRecipeLazyQuery>;
export type GetRecipeQueryResult = ApolloReactCommon.QueryResult<GetRecipeQuery, GetRecipeQueryVariables>;