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
