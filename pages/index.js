import Link from "next/link";

const Index = () => (
  <div>
    <h1> Hello World! </h1>
    <Link href="/contact">
      <a>Contact Page</a>
    </Link>
  </div>
);

export default Index;
