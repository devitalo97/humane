import BlogLayout from "@/components/layout/blog"
import Post from "@/components/pages/blog/post"
import { useRouter } from "next/router"

export default function PostPage() {
  const router = useRouter()
  return<Post />
}

PostPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <BlogLayout>
      {page}
    </BlogLayout>
  )
}