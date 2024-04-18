import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField, useTina } from "tinacms/dist/react";
import { client } from "../../../tina/__generated__/client";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  console.log("dATERS: ", data)

  const content = data.post.body;
  return (
   <>
      <div data-tina-field={tinaField(data.page, "body")}>
        <TinaMarkdown content={content} />
      </div>
   </>
  );
}

// This is an example of a page generated with Serverside Rendering.
// This can be switched to a static page by using getStaticProps
export const getServerSideProps = async ({ params }) => {
  const { data, query, variables } = await client.queries.post({
    relativePath: `${params.slug}.md`,
  });

  console.log(data, query, variables)

  return {
    props: {
      data,
      query,
      variables,
    },
  };
};