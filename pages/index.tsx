import Head from 'next/head'
export default () => (
    <>
    <Head>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet"/>
    </Head>
    <div className="p-4 shadow rounded bg-white">
      <h1 className="hello">Next.js</h1>
      <p className="text-grey-dark">with Tailwind CSS</p>
    </div>
    </>
  )