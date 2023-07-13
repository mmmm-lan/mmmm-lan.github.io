
// const imageContainer = document.getElementById('image');
// const img = document.createElement('img');
// img.src = "";
// img.alt = '一则小漫画';
// imageContainer.appendChild(img);
const imgHTML = Array.from(
    { length: 6 },
    (item, i) => 
        `<img src="imgs/blog_0${i + 1}.jpg" alt="一则小漫画">`
    ).join('')

document.getElementById("learningMeme").innerHTML=imgHTML;

// .appendChild(imgHTML);