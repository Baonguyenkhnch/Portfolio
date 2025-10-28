import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-slate-900 text-white">
      <div className="font-bold text-lg">BaoNguyen</div>
      <ul className="flex gap-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/weather">Weather</Link></li>
        <li><Link to="/currency">Currency</Link></li>
      </ul>
    </nav>
  );
}
