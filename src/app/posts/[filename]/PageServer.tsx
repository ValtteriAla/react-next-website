import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function PageServer({ data }: any) {
  return (
    <>
      <h1>{data.post.title}</h1>
      <TinaMarkdown content={data.post.body} />
    </>
  );
}