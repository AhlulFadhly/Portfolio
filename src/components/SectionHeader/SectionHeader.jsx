import "./SectionHeader.css";

function SectionHeader({
  tag,
  title,
  description,
  align = "left",
}) {
  return (
    <div className={`section-header ${align}`}>

      <span>{tag}</span>

      <h2>{title}</h2>

      <p>{description}</p>

    </div>
  );
}

export default SectionHeader;