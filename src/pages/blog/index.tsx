import BlogLayout from '@/components/layout/blog'
import Blog from '@/components/pages/blog/search'

export default function BlogPage() {
  return (<Blog /> )
}

BlogPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <BlogLayout>
      {page}
    </BlogLayout>
  )
}