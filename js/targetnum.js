import { getRandomElements, getRandomNumber } from "./utils.js";
import { userArr } from "./index.js";

const targetNumForm = document.querySelector("#targetNumForm");
const targetNumInput = document.querySelector("#targetNumInput");
const targetNumBtn = document.querySelector("#targetNumBtn");
// const nameUl = document.querySelector("#nameUl");

const multipleLottery = (num) => {
  if (nameUl.children.length < 3) {
    alert("영단어 추첨을 위하며 3개 이상을 입력해주세요!");
    return;
  }

  const randomMultiple = getRandomElements(userArr, num);
  console.log("randomMultiple", randomMultiple);
  result.textContent = randomMultiple.sort().join(", ");
};

const handleTargetNumFormSubmit = (e) => {
  e.preventDefault();
  const targetNum = Number(targetNumInput.value);

  console.log("targetNum", typeof targetNum, targetNum);

  if (targetNum > nameUl.children.length) {
    alert("추첨수보다 영단어 수가 적잖아아아아앗!!!!!");
    return;
  }

  //inlut type을 number로 하면 편하긴한데 다 num으로 받아들여서 isNAN if문이 작동을 안하는 것 같다
  //type number가 조작키로도 숫자 조절이 가능하여 편한데 따로 이 속성을 줄 수 있는게 있나?
  multipleLottery(targetNum); //엔터를 눌렀을 경우도 실행되게
  targetNumInput.textContent = ""; //엥 이거 왜 안되냐
};

targetNumForm.addEventListener("submit", handleTargetNumFormSubmit, false);
targetNumBtn.addEventListener("click", multipleLottery, false);
