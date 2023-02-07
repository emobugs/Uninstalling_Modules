import "../scss/app.scss";
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  const numbersArray = [1, 3, 4, 5, 6, 7];
  const filteredArray = numbersArray.filter(n => {
    return n % 2 === 0;
    })
    filteredArray.forEach(e => {
      const li = document.createElement('li');
      li.innerText = e;
      document.querySelector('ul').appendChild(li);
    })
  // })
  // const isEven = (n) => n % 2 === 0;
  // const filteredArray = R.filter(isEven, numbersArray);
  // console.log(filteredArray);
});
