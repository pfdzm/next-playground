export type RickAndMortyAPIData = unknown & {
  results: (Record<string, string> & {
    name: string
    species: string
    gender: string
    image: string
  })[]
}
