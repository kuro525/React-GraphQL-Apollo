import gql from 'graphql-tag'

export const ME = gql`
  query me {
    user(login:"kuro525") {
      name
      avatarUrl
    }
  }
`
