import "./style.css";
export default function aside(title, listArr, btnText) {
  const aside = document.createElement("aside");
  aside.className = "main-aside";
  const h2 = document.createElement("h2");
  h2.textContent = title;

  const ul = document.createElement("ul");
  listArr.forEach((liText) => {
    const li = document.createElement("li");
    li.textContent = liText;
    ul.append(li);
  });

  const button = document.createElement("button");
  button.textContent = btnText;

  aside.append(h2, ul, button);

  return aside;
}
