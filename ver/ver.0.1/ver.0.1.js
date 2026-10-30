//func
function spawnBox(x, y, w, h , colour) {
  const box = document.createElement('div');
  box.style.width = w + 'px';
  box.style.height = h + 'px';
  box.style.backgroundColor = colour;
  box.style.borderRadius = '10px';
  
  box.style.position = 'absolute';
  box.style.left = x + 'px'; // 指定されたX座標
  box.style.top = y + 'px';  // 指定されたY座標
  document.body.appendChild(box);
}

function rect(x, y, w, h, color, thickness = 2) {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = x + "px";
    div.style.top = y + "px";
    div.style.width = w + "px";
    div.style.height = h + "px";
    div.style.border = `${thickness}px solid ${color}`;
    div.style.boxSizing = "border-box";
    document.body.appendChild(div);
}
function link(text, url, x, y) {
    const a = document.createElement("a");
    a.style.color = "white";
    a.style.textDecoration = "none";
    a.textContent = text;
    a.href = url;
    a.style.position = "absolute";
    a.style.left = x + "px";
    a.style.top = y + "px";
    a.style.fontSize = "20px";
    document.body.appendChild(a);
}
spawnBox(0,0,window.innerWidth,400,"#10182B");
const logo = document.createElement("img");
logo.src = "./mini_logo.png";
logo.style.position = "absolute";
logo.style.width = "100px";
logo.style.left = (window.innerWidth / 2)-50 + "px";
logo.style.top = "280px";
document.body.appendChild(logo);
print("Ver.0.1",window.innerWidth / 2,30,100,"#0088ff");
print("AXQ start",window.innerWidth / 2,380,15,"#888888");

