import { Img } from 'react-image';
import Link from 'next/link';
export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: true, // See the "fallback" section below
  };
};
export const getStaticProps = async ({ params }) => {
  const posts = [
    {
      id: '1',
      src:
        'https://s3.amazonaws.com/redqteam.com/pickbazar/Armani_black_wallet.jpg',
    },
    {
      id: '2',
      src:
        'https://s3.amazonaws.com/redqteam.com/pickbazar/Alex_maquine_shoulder.jpg',
    },
    {
      id: '3',
      src:
        'https://s3.amazonaws.com/redqteam.com/pickbazar/Advent_laptop_bags.jpg',
    },
  ];
  const post = posts.find((p) => p.id === params.id);
  return {
    props: {
      post,
    },
  };
};
const PostDetailsPage = ({ post }) => {
  // console.log(post, 'post');
  return (
    <div>
      <div>
        <Link href="/post/[id]" as="/post/1">
          <a>Post 1</a>
        </Link>
        <Link href="/post/[id]" as="/post/2">
          <a>Post 2</a>
        </Link>
        <Link href="/post/[id]" as="/post/3">
          <a>Post 3</a>
        </Link>
      </div>
      <Img src={post.src} loader={<p>Loading...</p>} />
    </div>
  );
};

export default PostDetailsPage;
