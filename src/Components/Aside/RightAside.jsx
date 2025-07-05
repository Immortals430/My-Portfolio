import "./rightaside.css";

export default function RightAside({ email }) {

  return (
    <aside className="right-sec">
      <div className="line"></div>

      <a href={`mailto:${email}`} className="email">
        {email}
      </a>
    </aside>
  );
}
