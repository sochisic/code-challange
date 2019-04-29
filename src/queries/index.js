import { gql } from 'apollo-boost';

export function getUser(user) {
  const q = gql`
  query { 
    user(login: ${user}) {
      name
      bio
      avatarUrl
    }
}
`
  return q;
}

function getSearch(input) {
  const q = gql`
  query { 
    search(first: 10, query: ${input}, type: USER) {
      userCount
      issueCount
      pageInfo {
        endCursor
        hasNextPage
        startCursor
        hasPreviousPage
      }
      wikiCount
      edges {
        textMatches {
          fragment
          # highlights {
          #   beginIndice
          #   endIndice
          #   text
          # }
          property
      }
    }
  }
}
`
  return q;
}

