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
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
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

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
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
};


export type QueryRecipeArgs = {
  where: RecipeWhereUniqueInput;
};


export type QueryRecipesArgs = {
  orderBy?: Maybe<Array<RecipeOrderByInput>>;
  where?: Maybe<RecipeWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  DEFAULT = 'default',
  INSENSITIVE = 'insensitive'
}

/** A single recipe */
export type Recipe = {
  __typename?: 'Recipe';
  cookTime?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  headerImageUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  serveCount?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type RecipeCreateInput = {
  cookTime?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  headerImageUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  serveCount?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type RecipeListRelationFilter = {
  every?: Maybe<RecipeWhereInput>;
  none?: Maybe<RecipeWhereInput>;
  some?: Maybe<RecipeWhereInput>;
};

export type RecipeOrderByInput = {
  cookTime?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  headerImageUrl?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  serveCount?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type RecipeUpdateInput = {
  cookTime?: Maybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  headerImageUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  serveCount?: Maybe<NullableStringFieldUpdateOperationsInput>;
  text?: Maybe<NullableStringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type RecipeWhereInput = {
  AND?: Maybe<Array<RecipeWhereInput>>;
  NOT?: Maybe<Array<RecipeWhereInput>>;
  OR?: Maybe<Array<RecipeWhereInput>>;
  cookTime?: Maybe<StringNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringNullableFilter>;
  headerImageUrl?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  serveCount?: Maybe<StringNullableFilter>;
  text?: Maybe<StringNullableFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  userId?: Maybe<IntFilter>;
};

export type RecipeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

/** Track an authenticated user */
export type User = {
  __typename?: 'User';
  Recipes: Array<Recipe>;
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

export type UserOrderByInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
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

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  Recipes?: Maybe<RecipeListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringNullableFilter>;
  emailVerified?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<IntFilter>;
  image?: Maybe<StringNullableFilter>;
  name?: Maybe<StringNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type RecipeFragmentFragment = (
  { __typename?: 'Recipe' }
  & Pick<Recipe, 'id' | 'userId' | 'title' | 'text' | 'cookTime' | 'description' | 'serveCount' | 'headerImageUrl'>
);

export type UserFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'createdAt' | 'email' | 'emailVerified' | 'id' | 'image' | 'name' | 'updatedAt'>
);

export type UpdateRecipeMutationVariables = Exact<{
  data: RecipeUpdateInput;
  where: RecipeWhereUniqueInput;
}>;


export type UpdateRecipeMutation = (
  { __typename?: 'Mutation' }
  & { updateOneRecipe?: Maybe<(
    { __typename?: 'Recipe' }
    & RecipeFragmentFragment
  )> }
);

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
    & RecipeFragmentFragment
  )> }
);

export type GetUserAndRecipesQueryVariables = Exact<{
  whereUser: UserWhereUniqueInput;
  whereRecipes: RecipeWhereInput;
  orderBy?: Maybe<Array<RecipeOrderByInput> | RecipeOrderByInput>;
}>;


export type GetUserAndRecipesQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & UserFragmentFragment
  )>, recipes: Array<(
    { __typename?: 'Recipe' }
    & RecipeFragmentFragment
  )> }
);

export const RecipeFragmentFragmentDoc = gql`
    fragment RecipeFragment on Recipe {
  id
  userId
  title
  text
  cookTime
  description
  serveCount
  headerImageUrl
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  createdAt
  email
  emailVerified
  id
  image
  name
  updatedAt
}
    `;
export const UpdateRecipeDocument = gql`
    mutation updateRecipe($data: RecipeUpdateInput!, $where: RecipeWhereUniqueInput!) {
  updateOneRecipe(data: $data, where: $where) {
    ...RecipeFragment
  }
}
    ${RecipeFragmentFragmentDoc}`;
export type UpdateRecipeMutationFn = ApolloReactCommon.MutationFunction<UpdateRecipeMutation, UpdateRecipeMutationVariables>;

/**
 * __useUpdateRecipeMutation__
 *
 * To run a mutation, you first call `useUpdateRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRecipeMutation, { data, loading, error }] = useUpdateRecipeMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateRecipeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateRecipeMutation, UpdateRecipeMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateRecipeMutation, UpdateRecipeMutationVariables>(UpdateRecipeDocument, baseOptions);
      }
export type UpdateRecipeMutationHookResult = ReturnType<typeof useUpdateRecipeMutation>;
export type UpdateRecipeMutationResult = ApolloReactCommon.MutationResult<UpdateRecipeMutation>;
export type UpdateRecipeMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateRecipeMutation, UpdateRecipeMutationVariables>;
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
    ...RecipeFragment
  }
}
    ${RecipeFragmentFragmentDoc}`;

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
export const GetUserAndRecipesDocument = gql`
    query getUserAndRecipes($whereUser: UserWhereUniqueInput!, $whereRecipes: RecipeWhereInput!, $orderBy: [RecipeOrderByInput!]) {
  user(where: $whereUser) {
    ...UserFragment
  }
  recipes(where: $whereRecipes, orderBy: $orderBy) {
    ...RecipeFragment
  }
}
    ${UserFragmentFragmentDoc}
${RecipeFragmentFragmentDoc}`;

/**
 * __useGetUserAndRecipesQuery__
 *
 * To run a query within a React component, call `useGetUserAndRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserAndRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserAndRecipesQuery({
 *   variables: {
 *      whereUser: // value for 'whereUser'
 *      whereRecipes: // value for 'whereRecipes'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetUserAndRecipesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserAndRecipesQuery, GetUserAndRecipesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserAndRecipesQuery, GetUserAndRecipesQueryVariables>(GetUserAndRecipesDocument, baseOptions);
      }
export function useGetUserAndRecipesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserAndRecipesQuery, GetUserAndRecipesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserAndRecipesQuery, GetUserAndRecipesQueryVariables>(GetUserAndRecipesDocument, baseOptions);
        }
export type GetUserAndRecipesQueryHookResult = ReturnType<typeof useGetUserAndRecipesQuery>;
export type GetUserAndRecipesLazyQueryHookResult = ReturnType<typeof useGetUserAndRecipesLazyQuery>;
export type GetUserAndRecipesQueryResult = ApolloReactCommon.QueryResult<GetUserAndRecipesQuery, GetUserAndRecipesQueryVariables>;