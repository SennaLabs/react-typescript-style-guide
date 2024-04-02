import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white py-[24px] text-primary">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; 2024 CatKod Co., Ltd. All rights reserved.</p>
        <nav className="mt-4 space-x-[8px] divide-x">
          <Link to="/" className="hover:font-semibold">
            Home
          </Link>
          <Link to="/docs" className="pl-[8px] hover:font-semibold">
            Docs
          </Link>
          <Link to="/about" className="pl-[8px] hover:font-semibold">
            About
          </Link>
        </nav>
      </div>
    </footer>
  );
}
