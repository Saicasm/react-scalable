export const GET_CHARACTERS = `
  query GetCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        gender
        species
        status
      }
    }
  }
`;


export const SEARCH_CHARACTERS = `
query SearchCharacters($page: Int, $filter: FilterCharacter) {
  characters(page: $page, filter: $filter) {
    info {
      count
      pages
      next
      prev
    }
    results {
      id
      name
      image
      gender
      species
      status
    }
  }
}`

export const GET_CHARACTER = `
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      gender
      species
      status   
    }
    }
  }`

  export const GET_EPISODES = `
  query GetEpisodes($page: Int) {
    episodes(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`
  export const GET_LOCATIONS = `
  query GetLocations($page: Int) {
    locations(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        type
        dimension
      }
    }
  }
`;
export const GET_LOCATION = `
query GetLocationByName($page: Int, $filter: FilterLocation) {
  locations(page: $page, filter: $filter) {
    info {
      count
      next
      pages
      prev
    }
    results {
      name
      id
      dimension
      type
    }
  }
}
`;
