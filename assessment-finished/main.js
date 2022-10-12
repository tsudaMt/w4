const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'その日は華氏94度と暑かった, なので :insertx: 散歩に出かけた. :inserty:, 彼らはしばらくの間恐怖に立ち尽くしていた。 :insertz:. ボブは一部始終を見ていたが、特段驚かなかった。 — :insertx: 体重は300ポンドあって、その日はとても暑かったからだ。';
const insertX = ['グリーン・ゴブリン', '太った男', 'サンタクロース'];
const insertY = ['教会の炊き出しに着いた', 'ディズニーランドに着いた', 'ホワイトハウスに着いた'];
const insertZ = ['自然発火した', '歩道の水たまりに溶けてしまった', 'なめくじになってどこかに行ってしまった'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('ボブ', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `摂氏${Math.round((94-32) * 5 / 9)} 度`;
    newStory = newStory.replace('華氏94度', temperature);
    newStory = newStory.replace('300ポンド', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
