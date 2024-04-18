import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../../../../tina/__generated__/client";
import { Layout } from "../../../components/Layout";
import Tina from "../../../components/Tina"

export default async function Home({params}: any) {
  const { slug } = params
  //const router = useRouter();

  async function getProps() {
    
    const { data, query, variables } = await client.queries.post({
      relativePath: `${slug}.md`,
    });

    return {
        data,
        query,
        variables,
    };
  }

  const props = await getProps();
  // data passes though in production mode and data is updated to the sidebar data in edit-mode




  //const content = data.post.body;
  return (
    <Layout>
      <Tina props={props}  />
    </Layout>
  );
}
