export default function Page({ params }: { params: { slug: string } }) {
  return <h1>Hello, {params.slug} Page!</h1>;
}
