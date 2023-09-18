import SearchSection from '@/components/sections/blog/search'
import Header from '@/components/ui/head'

export default function Blog() {
  return (
    <>
      <Header 
      title="Blog" 
      content="Nosso blog é uma fonte valiosa de informações sobre análise de perfil comportamental, trazendo dicas, tendências e insights."
      />
      <main>
        <SearchSection />
      </main>
    </>
  )
}
