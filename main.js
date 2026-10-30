const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const 本文x=100;
const 始まりのy=600;
const 歴史y=始まりのy+300;
const 警告が出た時の対処法y=歴史y+300;
const GITURLy=460;
function spawnBox(x, y, w, h) {
  const box = document.createElement('div');
  box.style.width = w + 'px';
  box.style.height = h + 'px';
  box.style.backgroundColor = '#10182B';
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
const header = document.createElement("div");
header.style.position = "absolute";
header.style.top = "0";
header.style.left = "0";
header.style.width = "100%";
header.style.height = "400px";
header.style.backgroundColor = "#10182B";
header.style.zIndex = "-1";
document.body.appendChild(header);
print("AXQ language",window.innerWidth / 2,30,100,"#0088ff")
print("ver.0.1",window.innerWidth / 2-5,400,50,"#ffff")
print("AXQ is an independently developed programming language.",window.innerWidth / 2,160,20,"#ffffff")
button("macOS", (window.innerWidth - 560) / 2, 200, 250, 60, "#0088FF", function() {
    this.disabled = true;
    //const a = document.createElement("a");
    //a.href = "./AXQ.pkg";
    //a.download = "AXQ.pkg";
    //a.click();
});
button("Windows", (window.innerWidth) / 2, 200, 250, 60, "#004488", function() {
    element.disabled = true;
});
//start
print_l("Currently under development.",0,0,70,"#ffffff");
spawnBox(本文x-20,始まりのy-30,1200,280);
print_l("The PKG installer contains only two files:",本文x,始まりのy-10,20,"#ffffff");
print_l("• compile.py",本文x,始まりのy+20,20,"#ffffff");
print_l("A Python script that compiles AXQ source code into executable form.",本文x+10,始まりのy+40,20,"#ffffff");
print_l("• main.txt",本文x,始まりのy+80,20,"#ffffff");
print_l("A text file containing the C runtime source used when running compiled AXQ programs.",本文x,始まりのy+100,20,"#ffffff");
print_l("These files are installed to /usr/local/share/AXQ_language.",本文x,始まりのy+140,20,"#ffffff");
print_l("No background processes are started.",本文x,始まりのy+170,20,"#ffffff");
print_l("Python is required to run compile.py.",本文x,始まりのy+200,20,"#ffffff");
//ヒストリー
spawnBox(本文x-20,歴史y-30,1200,280);
print_l("History",本文x,歴史y,40,"#ffffff");
link("Ver. 0.1", "./ver/ver.0.1/ver0.1.html", 本文x, 歴史y+50);
//対処法
print("The Windows version is not yet available.",(window.innerWidth) / 2,270,15,"#aaaaaa");
print_l("Note: This package is not notarized by Apple.",本文x,警告が出た時の対処法y,20,"#ffffff");
print_l("When you open the PKG, macOS may show a security warning.",本文x,警告が出た時の対処法y+30,20,"#ffffff");
print_l("To proceed:",本文x,警告が出た時の対処法y+110,20,"#ffffff");
print_l("1. Close the warning dialog",本文x,警告が出た時の対処法y+150,20,"#ffffff");
print_l("2. Go to System Settings → Privacy & Security.",本文x,警告が出た時の対処法y+210,20,"#ffffff");
print_l("3. Scroll down and click \"Open Anyway\".",本文x,警告が出た時の対処法y+270,20,"#ffffff");
const logo = document.createElement("img");
logo.src = "./mini_logo.png";
logo.style.position = "absolute";
logo.style.width = "100px";
logo.style.left = (window.innerWidth / 2)-60 + "px";
logo.style.top = "280px";
document.body.appendChild(logo);
const GIT_logo = document.createElement("img");
GIT_logo.src = "./GitHub_Invertocat_White.png";
GIT_logo.style.position = "absolute";
GIT_logo.style.width = "20px";
GIT_logo.style.left = (window.innerWidth / 2)-200 + "px";
GIT_logo.style.top = GITURLy+"px";
document.body.appendChild(GIT_logo);
link("github.com/AXQ-language/AXQ_language","https://github.com/AXQ-language/AXQ_language",(window.innerWidth / 2)-180,GITURLy-7)
//links
async function loopWithDelay() {
    let start_y=3000;
    let any_a = "hello world!";
    let x=0;
    print_l("a",x+5,start_y+0,15,"#cccccc");
    await sleep(100);
    x+=20;
    rect(x,start_y+0,20,20,"#555555",3);
    await sleep(100);
    print_l("↓",x+5,start_y+0,15,"#aaaaaa");
    await sleep(100);
    rect(x,start_y+20,20,20,"#555555",3);
    print_l("h",x+5,start_y+20,15,"#aaaaaa");
    x+=20;
    await sleep(100);
    for(let count=1;count<any_a.length;count++){
        rect(x,start_y+5,20,4,"#555555",3);
        rect(x,start_y+20,20,20,"#555555",3);
        print_l(any_a[count],x+5,start_y+20,15,"#aaaaaa");
        x+=20;
        await sleep(100);
    }
    rect(x,start_y+5,20,4,"#555555",3);
    x+=20;
    any_a = "hello AXQ language!";
    rect(x,start_y+0,20,20,"#555555",3);
    await sleep(100);
    print_l("↓",x+5,start_y+0,15,"#aaaaaa");
    await sleep(100);
    rect(x,start_y+20,20,20,"#555555",3);
    print_l("h",x+5,start_y+20,15,"#aaaaaa");
    x+=20;
    await sleep(100);
    for(let count=1;count<any_a.length;count++){
        rect(x,start_y+5,20,4,"#555555",3);
        rect(x,start_y+20,20,20,"#555555",3);
        print_l(any_a[count],x+5,start_y+20,15,"#aaaaaa")
        x+=20;
        await sleep(100);
    }
    await sleep(500);
    any_a = "   print(a)   ";
    for(let count=0;count<any_a.length;count++){
        print_l(any_a[count],x+5,start_y+20,15,"#aaaaaa")
        x+=10;
        await sleep(100);
    }
    any_a = "[['hello world!'],['hello AXQ language!']]"
    for(let count=0;count<any_a.length;count++){
        print_l(any_a[count],x+5,start_y+20,15,"#aaaaaa")
        x+=10;
        await sleep(100);
    }
}
const target = document.createElement("div");
target.style.position = "absolute";
target.style.top = "3000px";
target.style.left = "0px";
target.style.width = "100%";
target.style.height = "40px";
document.body.appendChild(target);

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        loopWithDelay();
        observer.disconnect();
    }
});

observer.observe(target);
