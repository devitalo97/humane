import SearchSection from '@/components/sections/blog/search'
import Header from '@/components/ui/head'

export default function Blog() {
  return (
    <>
      <Header title="Blog" />
      <main>
        <SearchSection />
      </main>
    </>
  )
}
