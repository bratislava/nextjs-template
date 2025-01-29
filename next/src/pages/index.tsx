import { GetStaticProps } from 'next'
import React from 'react'

type PageProps = {
  // ... add props here
}
export const getStaticProps: GetStaticProps<PageProps> = async ({ locale }) => {
  // eslint-disable-next-line no-console
  console.log(`Revalidating homepage ${locale}.`)

  return {
    props: {},
    revalidate: 10,
  }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Homepage = (props: PageProps) => {
  return (
    <div className="flex flex-col items-center">
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <h1>Hello world!</h1>
    </div>
  )
}
export default Homepage
