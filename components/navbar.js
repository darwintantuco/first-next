import Link from "next/link";

const Navbar = () => (
  <>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/contact">
      <a>Contact Page</a>
    </Link>
  </>
);

export default Navbar;
