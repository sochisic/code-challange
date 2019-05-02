import { gql } from 'apollo-boost';

export const GET_USER = gql`
  query user($user: String!) {
    user(login: $user) {
      name
      bio
      avatarUrl
      company
      location
      followers {
       totalCount
      }
      gists {
        totalCount
      }
      repositories {
        totalCount
      }
    }
  }
`

export const SEARCH_USERS = gql`
  query users($inputValue: String!) {
    search(first: 10, query: $inputValue, type: USER) {
      userCount
      pageInfo {
        endCursor
        hasNextPage
        startCursor
        hasPreviousPage
      }
      edges {
        textMatches {
          fragment
          property
      }
    }
  }
  }
`
