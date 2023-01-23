import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Videos', href: '/videos' },
];

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>Logo</li>
        {navItems.map(({ label, href }) => (
          <li key={label}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
        <li>
          <button>Sign</button>
        </li>
        <li>
          <button>Join Now</button>
        </li>
      </ul>
    </nav>
  );
}
