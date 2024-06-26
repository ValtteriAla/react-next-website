import Link from "next/link";
import { client } from "../../../tina/__generated__/client";

export default async function PostList() {
const postsResponse = await client.queries.postConnection()
const postsList = postsResponse.data?.postConnection?.edges

console.log(postsResponse)

  return (
    <>
      <h1>Posts</h1>
      <div>
        <ul>
        {postsList && postsList.map((post: any) => (
          <li key={post.node.id}>
            <Link href={`/posts/${post.node._sys.filename}`}>
              {post.node._sys.filename}
            </Link>
          </li>
        ))}
        </ul>
      </div>
      </>
  );
}