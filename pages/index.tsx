import { GetStaticProps } from 'next'
import useSWR from 'swr'
import CharacterWidget from '../components/CharacterWidget'
import { RickAndMortyAPIData } from '../types'

const API_ENDPOINT = 'https://rickandmortyapi.com/api/character'

async function fetcher(key: string) {
  const res = await fetch(key)
  if (!res.ok) {
    const err: Error & { status?: number } = new Error(res.statusText)
    err.status = res.status
    throw err
  }
  return res.json()
}

export default function Home(props: { initialData: RickAndMortyAPIData }) {
  const { data, error } = useSWR<
    RickAndMortyAPIData,
    Error & { status: number }
  >(API_ENDPOINT, fetcher, {
    initialData: props.initialData,
  })

  return (
    <main>
      <h1>Home</h1>
      <p>Hello there! Welcome to Home.</p>
      <div className="space-y-3">
        {data &&
          data.results
            .slice(0, 5)
            .map((char, key) => <CharacterWidget {...char} key={key} />)}
      </div>
      {error && <div className="px-6 py-3 bg-red-400">{error.message}</div>}
    </main>
  )
}

export const getStaticProps: GetStaticProps<{
  initialData: RickAndMortyAPIData
}> = async (_context) => {
  const data: RickAndMortyAPIData = await fetcher(API_ENDPOINT)
  return {
    props: {
      initialData: data,
    },
  }
}
