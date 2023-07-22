import PostSection from '@/components/sections/blog/post'
import Header from '@/components/ui/head'

export default function Post() {
  return (
    <>
      <Header title="Post" />
      <main>
        <PostSection />
      </main>
    </>
  )
}
