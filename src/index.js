import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //alert(inputText);

  const newli = document.createElement("li");
  const newdiv = document.createElement("div");
  newdiv.className = "list-row";
  const newp = document.createElement("p");
  newp.innerText = inputText;
  newp.className = "list-name";

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const target = completeButton;
    //    const deleteTargetdiv = completeButton.parentNode;
    //console.log(target);
    //   const deleteTargetli = deleteTargetdiv.parentNode;
    //  console.log(deleteTargetli);
    //  deleteFromIncompleteList(deleteTargetli);
    deleteFromIncompleteList(target);
    //    document.getElementById("incomplete-list").removeChild(deleteTargetli);
    const addTaret = target.parentNode;
    const text = addTaret.firstElementChild.innerText;
    addTaret.textContent = null;
    const newli = document.createElement("li");
    //const newdiv = document.createElement("div");
    const newp = document.createElement("p");
    newp.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    addTaret.appendChild(newp);
    addTaret.appendChild(backButton);
    newli.appendChild(addTaret);

    console.log(newli);
  });
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const target = deleteButton;
    //const deleteTargetdiv = deleteButton.parentNode;
    //    console.log(deleteTargetdiv);
    //const deleteTargetli = deleteTargetdiv.parentNode;
    //    console.log(deleteTargetli);
    //    deleteFromIncompleteList(deleteTargetli);
    deleteFromIncompleteList(target);
  });

  //  console.log(dellButton);

  newdiv.appendChild(newp);
  newdiv.appendChild(completeButton);
  newdiv.appendChild(deleteButton);
  newli.appendChild(newdiv);

  document.getElementById("incomplete-list").appendChild(newli);

  //  console.log(newli);
};

const deleteFromIncompleteList = (target) => {
  //  const deleteTargetdiv = target.parentNode;
  //    console.log(deleteTargetdiv);
  //  const deleteTargetli = deleteTargetdiv.parentNode;
  //    console.log(deleteTargetli);
  const deleteTargetdiv = target.parentNode;
  // console.log(deleteTargetdiv);
  const deleteTargetli = deleteTargetdiv.parentNode;
  //  console.log(deleteTargetli);

  document.getElementById("incomplete-list").removeChild(deleteTargetli);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
