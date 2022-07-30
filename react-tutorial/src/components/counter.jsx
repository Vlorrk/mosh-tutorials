const Counter = (props) => {
  let classes = "badge m-2 bg-";
  classes += props.counter.value === 0 ? "warning" : "primary";

  return (
    <div>
      <span className={classes}>{props.counter.value} </span>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => props.onIncrement(props.counter)}
      >
        Increment
      </button>
      <button
        onClick={() => props.onDelete(props.counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;

/*stopped at 1:45:10 on video   https://www.youtube.com/watch?v=Ke90Tje7VS0&t=2174s            */
