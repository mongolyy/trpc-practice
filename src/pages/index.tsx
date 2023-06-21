import { trpc } from '@/utils/trpc'

export default function Home() {
  const hello = trpc.hello.useQuery({ text: 'world' })
  if (!hello.data) {
    return <main>Loading...</main>
  }

  return (
    <main>
      <p className="m-5">{hello.data.greeting}</p>
    </main>
  )
}
