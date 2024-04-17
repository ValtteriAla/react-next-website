import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../../../../tina/__generated__/client";
import { Layout } from "../../../components/Layout";
import { useRouter } from "next/router";

export default async function Home() {
  const router = useRouter();

  async function getProps() {
    const { data, query, variables } = await client.queries.post({
      relativePath: `${router.query.slug}.md`,
    });

    return {
      props: {
        data,
        query,
        variables,
      },
    };
  }

  const { props } = await getProps();

  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  console.log("dATERS: ", data);

  const content = data.post.body;
  return (
    <Layout>
      <div data-tina-field={tinaField(data.page, "body")}>
        <TinaMarkdown content={content} />
      </div>
    </Layout>
  );
}
