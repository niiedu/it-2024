let y;
let lines = [
   "浮雲（1887年）： 二葉亭四迷による小説で、言文一致の文体で書かれています。",
   "舞姫（1890年）： 森鴎外による作品で、ドイツに留学した青年男性の手記の形をとっています。",
   "たけくらべ（1895年）： 樋口一葉による小説で、女性作家として知られています。",
   "金色夜叉（1897年）： 尾崎紅葉による小説で、貫一の「来年の今月今夜のこの月を」のセリフは有名です。",
   "吾輩は猫である（1905年）： 夏目漱石による小説で、日本文学の名作として広く知られています。",
   "坊っちゃん（1906年）：夏目漱石による小説で、教師生活を描いた作品です。",
   "こころ（1914年）： 夏目漱石による小説で、第三部は「先生」の遺書の形をとっています。",
   "蜘蛛の糸（1918年）： 芥川龍之介による小説で、物語では釈迦が地獄に蜘蛛の糸を垂らします。",
   "銀河鉄道の夜（1934年）： 宮沢賢治による児童文学作品で、ファンタジー要素があります。",
   "人間失格（1948年）： 太宰治による小説で、自己嫌悪を描いた作品です。",
   "雪国（1947年）： 川端康成による小説で、「トンネルを抜けると」の冒頭は有名です。"
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  y = height;
}

function draw() {
  background(0);
  fill(255);
  let lineHeight = height / 10;
  for (let i = 0; i < lines.length; i++) {
    let distanceFromBottom = y + i * lineHeight;
    let newSize = map(distanceFromBottom, 0, height, 12, 32);
    textSize(newSize);
    text(lines[i], width / 2, distanceFromBottom);
  }
  y -= 2;
  if (y + lines.length * lineHeight < 0) {
    y = height;
  }
}
