import Link from "next/link";

const Header = props => {
  return (
    <div>
      {" "}
      <p>Title={props.title}</p>
      {props.children}
      <Link href="/">
        <a>home </a>
      </Link>
      <Link href="/blog">
        <a> What did I say? </a>
      </Link>
      <Link href="/portfolio">
        <a> What did I do? </a>
      </Link>
      <Link href="/about">
        <a> What am I like? </a>
      </Link>
      <Link href="/resume">
        <a> Where have I Been </a>
      </Link>
    </div>
  );
};
export default Header;
