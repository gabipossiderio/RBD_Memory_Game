(function(){
  window.addEventListener('load', init);

  function init(){
    var $cards = document.querySelectorAll(".card");
    var $imgs = document.querySelectorAll(".card-front");
    var imgArray = [...Array($imgs.length / 2).keys()]
    var imgObj = {};

    for (var key of imgArray) {
      imgObj[key + 1] = 2;
    }

    var index = 0;

    while(index < $imgs.length){
      objKey = randomNumber(Object.keys(imgObj).length)
      if (!imgObj[objKey]) {
        continue
      } else if (imgObj[objKey] === 0) {
        continue
      } else {
        imgObj[objKey] -= 1
      }
      $imgs[index].setAttribute('src', 'images/image_' + objKey + '.jpg');
      index++
    }

    function randomNumber(n) {
      var shuffleNumber = Math.random();
      shuffleNumber = shuffleNumber * (n);
      shuffleNumber = Math.ceil(shuffleNumber)
      return shuffleNumber
    }
  }
})()
