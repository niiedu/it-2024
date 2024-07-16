let y;
let lines = [
   "浮雲（1887年）： 二葉亭四迷による小説で、新しい風俗を取り入れた戯作文学の一例です。",
   "舞姫（1890年）： 森鴎外による作品で、政治小説としても知られています。",
   "たけくらべ（1895年）： 樋口一葉による小説で、女性作家として知られています。",
   "金色夜叉（1897年）： 尾崎紅葉による小説で、幻想的な要素を含んでいます。",
   "源叔父（1897年）： 国木田独歩による作品で、自然主義文学の一環です。",
   "吾輩は猫である（1905年）： 夏目漱石による小説で、日本文学の名作として広く知られています。",
   "坊っちゃん（1906年）：夏目漱石による小説で、学生生活を描いた作品です。",
   "草枕（1906年）： 夏目漱石による小説で、恋愛と人生哲学をテーマにしています。",
   "こころ（1914年）： 夏目漱石による小説で、内面の葛藤を描いた作品です。",
   "蜘蛛の糸（1918年）： 芥川龍之介による小説で、心理的な描写が特徴です。",
   "坊っちゃん（1906年）： 夏目漱石による小説で、学生生活を描いた作品です。",
   "草枕（1906年）： 夏目漱石による小説で、恋愛と人生哲学をテーマにしています。",
   "こころ（1914年）： 夏目漱石による小説で、内面の葛藤を描いた作品です。",
   "蜘蛛の糸（1918年）： 芥川龍之介による小説で、心理的な描写が特徴です。",
   "山月記（1919年）： 中島敦による小説で、中国の文学に影響を受けた作品です。",
   "銀河鉄道の夜（1934年）： 宮沢賢治による児童文学作品で、ファンタジー要素があります。",
   "人間失格（1948年）： 太宰治による小説で、自己嫌悪と孤独を描いた作品です。",
   "雪国（1947年）： 川端康成による小説で、美しい自然描写が特徴です。",
   "砂の女（1962年）： 安部公房による小説で、現代社会の孤独を描いた作品です。",
   "万延元年のフットボール（1967年）： 村上春樹による短編小説で、スポーツと青春をテーマにしています。"
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
