import { gql } from '@apollo/client';
import { NavBar } from 'components';
import * as Options from 'enums/options';
import { useGetUserQuery } from '../../graphql-codegen';

export const CREATE_RECIPE_MUTATION = gql`
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

export default function Home() {
  const response = useGetUserQuery({
    variables: {
      where: {
        id: 1,
      },
    },
  });

  console.log('response', response);

  return (
    <div className="w-screen h-screen flex flex-col">
      <NavBar />
      <div className="h-screen flex flex-col justify-center items-center w-full">
        <h1 tw="text-3xl font-semibold ml-7">{`Welcome to ${Options.APP_TITLE}`}</h1>
      </div>
    </div>
  );
}
