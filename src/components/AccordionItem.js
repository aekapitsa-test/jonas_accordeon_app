function AccordionItem({
  number,
  title,
  text,
  activeElement,
  handleSetActiveElement,
}) {
  return (
    <div
      className={`item ${activeElement === number ? "open" : ""}`}
      onClick={() => handleSetActiveElement(number)}
    >
      <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{activeElement === number ? "-" : "+"}</p>
      {activeElement === number ? (
        <div className="content-box">{text}</div>
      ) : null}
    </div>
  );
}

export default AccordionItem;
