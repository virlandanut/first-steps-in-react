import "./NavBar.css";

export default function NavBar({ sectiuni }) {
  return (
    <div className="NavBar">
      {sectiuni.map((sectiune, index) => (
        <a key={index} href="#">
          {sectiune}
        </a>
      ))}
    </div>
  );
}
