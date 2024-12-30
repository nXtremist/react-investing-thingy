export default function DataInput({ children = "Input", id="", handleChange, baseValue }) {
    const elementId = id === "" ? children.replaceAll(' ', '').replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase(): word
    }) : id;
  return (
    <label>
      {children}
      <input type="number" id={elementId} placeholder={baseValue} value={baseValue} onChange={(event) => handleChange(event.target.value, elementId)}  />
    </label>
  );
}
