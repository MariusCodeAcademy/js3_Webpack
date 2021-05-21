import "./ban.css";
function banner(title, btnText) {
  const section = document.createElement("section");
  section.className = "banner";
  const h2 = document.createElement("h2");
  h2.textContent = title;
  const p = document.createElement("p");
  p.textContent = "THis is a very nice Banner";
  const button = document.createElement("button");
  button.textContent = btnText;

  section.append(h2, p, button);

  return section;
}

export default banner;
