import "./Badge.css";

function Badge({ children }) {
  return (
    <div className="badge">

      <span className="badge__dot"></span>

      {children}

    </div>
  );
}

export default Badge;