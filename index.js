let count = document.querySelector("h1");
let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let reset = document.querySelector(".reset");

function reducer(count = 0, action) {
  switch (action.type) {
    case "inc":
      return (count = count + 1);
    case "dec":
      return (count = count - 1);
    case "reset":
      return (count = 0);
    default:
      return count;
  }
}
let redux = Redux.createStore(reducer);

inc.addEventListener("click", function () {
  return redux.dispatch({ type: "inc" });
});
dec.addEventListener("click", function () {
  return redux.dispatch({ type: "dec" });
});
reset.addEventListener("click", function () {
  return redux.dispatch({ type: "reset" });
});

count.innerText = redux.getState();
redux.subscribe(() => (count.innerText = redux.getState()));

console.log(redux);
