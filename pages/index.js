import fetch from "isomorphic-unfetch";

const Index = ({ posts }) => {
  return (
    <div>
      <h1> Index Page!</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}> {post.title} </li>
        ))}
      </ul>
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return { posts };
};

export default Index;
