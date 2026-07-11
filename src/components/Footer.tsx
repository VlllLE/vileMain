import { SITE } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} {SITE.email}
        </p>
        <p className="footer-humour">
          you can also msg me on discord: 8o40 - shoutout robert
        </p>
      </div>
    </footer>
  );
}
