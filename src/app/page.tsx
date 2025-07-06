import Link from 'next/link'

const posts = [
  {
    slug: 'rsa',
    title: 'Understanding RSA',
    description: 'A mathematical and JavaScript-based explanation of RSA encryption.',
    date: '2025-07-04',
  },
]

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Posts</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-gray-200 pb-4">
            <Link href={`/${post.slug}`}>
              <h2 className="text-xl font-semibold text-blue-700 hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 text-sm">{post.date}</p>
            <p className="mt-1 text-gray-700">{post.description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
