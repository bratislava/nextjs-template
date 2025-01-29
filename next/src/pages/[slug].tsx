import { client } from '@/src/services/graphql'

const getPage = async (slug: string) => {
  const { pages } = await client.PageBySlug({ slug })

  return pages?.data[0] ?? null
}

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const page = await getPage(slug)

  if (!page || !page.attributes) {
    // eslint-disable-next-line i18next/no-literal-string
    return <div>Page not found</div>
  }

  return (
    <div>
      <h1>{page.attributes.title}</h1>
    </div>
  )
}

export default Page
