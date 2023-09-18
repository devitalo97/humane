import PostSection from '@/components/sections/blog/post'
import Header from '@/components/ui/head'

export default function Post() {
  return (
    <>
      <Header
        title="Post"
        content="Leia nosso artigo e mergulhe no conteúdo sobre o perfil comportamental."
      />
      <main>
        <PostSection />
      </main>
    </>
  )
}
