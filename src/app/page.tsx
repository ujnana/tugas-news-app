import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";
import { Col, Flex, Row } from "antd";
import Link from "next/link";

async function getNews() {
  const urlAPI =
    "https://newsapi.org/v2/everything?q=bitcoin&apiKey=0a0e3ba33f0d4cd89cf1598918d64b4f";
  const apiKey = process.env.API_KEY;
  const res = await fetch(urlAPI);

  if (res.status !== 200) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const news = await getNews();
  const listNews = [...news.articles];

  return (
    <Content>
      <Flex gap="middle" justify="center">
        {listNews.map((item: any) => (
          <>
            <Link href={item.url}>
              <Card
                hoverable
                style={{ width: 300, height: 450 }}
                cover={
                  <img
                    style={{ height: 200, width: 300, objectFit: "cover" }}
                    alt={item.title}
                    src={item.urlToImage}
                  />
                }
              >
                <Meta title={item.title} description={item.description} />
              </Card>
            </Link>
          </>
        ))}
      </Flex>
    </Content>
  );
}
