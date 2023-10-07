


const arrayVocas = Array(75).fill().map((data, idx)=>idx+1);
const random=[];

while(random.length<10){
    const randomVoca=Math.floor(Math.random()*arrayVocas.length);
    random.push(arrayVocas.splice(randomVoca,1)[0]);
}

const testVoca=random.slice(0,10);
console.log(testVoca);