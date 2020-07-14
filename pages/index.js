const Index = () => {
  return (
    <div>
      <h1> Hello World! </h1>
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
  console.log("Fetching from getInitialProps");
  return {};
};

export default Index;
