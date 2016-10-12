$(document).ready(function(){

var carouselImages = [
  {
    image_url: 'https://interfacelift.com/wallpaper/7yz4ma1/03965_sunsetinthecascades_1280x720.jpg',
    title: 'Sunset in the Cascades',
    photographer_id: 'smpoutdoors'
  },
  {
    image_url: 'https://interfacelift.com/wallpaper/7yz4ma1/03958_seljalandsfossiceland_1280x720.jpg',
    title: 'Seljalandsfoss, Iceland',
    photographer_id: 'Robin Kamp'
  },
  {
    image_url: 'https://interfacelift.com/wallpaper/7yz4ma1/03950_godsrays_1280x720.jpg',
    title: 'Gods Rays',
    photographer_id: 'illuminati'
  }
];


  var htmlStr = ""
  carouselImages.forEach(function(item){
    htmlStr += `
      <div class="image"><img src="${item.image_url}"/></div>
        <span class="title">"${item.title}" by</span>
        <span class="photographer">${item.photographer_id}</span>
      
    `
  })
  console.log(htmlStr)
  $("#container").html(htmlStr)

})




