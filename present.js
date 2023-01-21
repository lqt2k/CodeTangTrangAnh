var to = nameGirl;
var gift_url = giftUrl;
var gift_image_url = giftImage || giftImageBase64;

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");

function init() {
  var graphElem = document.querySelector('.present-box > .side.top .to');
  graphElem.setAttribute('data-before', eventName);
  document.querySelector('#card .title-card').innerHTML = `💘${titleCard}💘`;
  document.querySelector('#card .content-card').innerHTML = `${contentCard}`;
  //document.querySelector('#card .end-card').innerHTML = `${EndCardText}`;
  document.querySelector('#card .honey').setAttribute('src', `${giftImage}`);

  let data = {
    'entry.1639122318': 'Yes'
  }
let queryString = new URLSearchParams(data);
queryString = queryString.toString();
console.log(queryString);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSezz1hzX1eNFuEaTfKUiFm9LIGI4knPRsIc5jpzUy4jF66kTw/formResponse', true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(queryString);

  setTimeout(() => alert(' Thích tui thì ấn OK để xem tiếp nha :))))\n Không thích mà xem => Thích á nha :))) '), 1200);
  setTimeout(() => alert(' Đã thích rồi thì làm người iu của tui đi chứ :))))\n Đồng ý thì ấn OK để xem tiếp nà :))) '), 1200);
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

