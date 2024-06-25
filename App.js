/* 
<div id = "parent"> ..... React.createElement("div",{id:"parent"},"child")
    <div id = "child"> ..... React.createElement("div",{id:"child"},"child-child")
        <h1>
            Its a H1 Tag
        </h1>
        <h2>
            Its a H2 Tag
        </h2>
    </div>
</div> 
*/

const Parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "Its a H1 Tag"),
    React.createElement("h2", { id: "h2" }, "Its a H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", { id: "h3" }, "Its a H3 Tag"),
    React.createElement("h4", { id: "h4" }, "Its a H4 Tag"),
  ]),
]);

const Child = React.createElement("div", { id: "child1" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h4", { id: "h1" }, "Its a H4 Tag"),
    React.createElement("h3", { id: "h2" }, "Its a H3 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h2", { id: "h3" }, "Its a H2 Tag"),
    React.createElement("h1", { id: "h4" }, "Its a H1 Tag"),
  ]),
]);

//     const heading = React.createElement("h1",{id : "heading"},"Hello world with React")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([Parent, Child]);
console.log(Parent);
console.log(Child);

//     const pathing = React.createElement("h1",{className : "path"},"Hello React")
//     const path = ReactDOM.createRoot(document.getElementById("path"))
//     path.render(pathing)
