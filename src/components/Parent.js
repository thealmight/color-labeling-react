// import Kid from "./Kids";
import "./Parent.css";

function Parent(props) {
  return (
    <section>
      <div className="cont" style={{ backgroundColor: props.colors }}>
        {" "}
        my color {props.colors ? "is " + props.colors : ""}
      </div>
    </section>
  );
}

export default Parent;
