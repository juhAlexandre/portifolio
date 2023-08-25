

let galleryItems = [
  {
    "id": "Id2f5Y9dq1g",
    "url": "0001-768x768.jpg",
    "thumb": "0001-768x768.jpg"
  },
  {
    "id": "pzC7JfukhUM",
    "url": "0002-768x768.jpg",
    "thumb": "0002-768x768.jpg"
  },
  {
    "id": "ystlZBTbKiY",
    "url": "0003-768x768.jpg",
    "thumb": "0003-768x768.jpg"
  },
  {
    "id": "DOb-2jd0sbc",
    "url": "0004-768x768.jpg",
    "thumb": "0004-768x768.jpg"
  },
  {
    "id": "k_4m9_0PO3Q",
    "url": "0005-768x768.jpg",
    "thumb": "0005-768x768.jpg"
  },
  {
    "id": "NFB5zdUvb-c",
    "url": "0006-768x768.jpg",
    "thumb": "0005-768x768.jpg"
  },
  {
    "id": "xsFxnW9_KZ0",
    "url": "0007-768x768.jpg",
    "thumb": "0007-768x768.jpg"
  },
  {
    "id": "dSTalS8QzTg",
    "url": "0008-768x768.jpg",
    "thumb": "0008-768x768.jpg"
  },
  {
    "id": "z7tQUhBVOrY",
    "url": "0009-768x768.jpg",
    "thumb": "0009-768x768.jpg"
  },
  {
    "id": "z7tQUh55VOrY",
    "url": "0010-768x768.jpg",
    "thumb": "0010-768x768.jpg"
  },
  {
    "id": "z7tQUh45VOrY",
    "url": "0011-768x768.jpg",
    "thumb": "0011-768x768.jpg"
  }
];

let designGrafico = [
  {
    "url": "combatentes-convite-768x543.jpg",
    "thumb": "combatentes-convite-768x543.jpg"
  },
  {
    "url": "encontro-teen-768x768.jpg",
    "thumb": "encontro-teen-768x768.jpg"
  },
  {
    "url": "luminaria_tucuma_page-0001-768x542.jpg",
    "thumb": "luminaria_tucuma_page-0001-768x542.jpg"
  },
  {
    "url": "luminaria_tucuma_page-0002-768x542.jpg",
    "thumb": "luminaria_tucuma_page-0002-768x542.jpg"
  },
  {
    "url": "mentoria-nobres-oficial-768x768.jpg",
    "thumb": "mentoria-nobres-oficial-768x768.jpg"
  },
  {
    "url": "regurgitacao222_page-0001-542x768.jpg",
    "thumb": "regurgitacao222_page-0001-542x768.jpg"
  },
  {
    "url": "renovo-convite-1-542x768.jpg",
    "thumb": "renovo-convite-1-542x768.jpg"
  }
]

let designerEditorial = [
  {
    "url": "banana-capa-banana-final2_page-0001-1440x614.jpg",
    "thumb": "banana-capa-banana-final2_page-0001-1440x614.jpg"
  },
  {
    "url": "livro-da-banana_page-0001-768x333.jpg",
    "thumb": "livro-da-banana_page-0001-768x333.jpg"
  },
  {
    "url": "livro-da-banana_page-0002-768x333.jpg",
    "thumb": "livro-da-banana_page-0002-768x333.jpg"
  },
  {
    "url": "livro-da-banana_page-0003-768x333.jpg",
    "thumb": "livro-da-banana_page-0003-768x333.jpg"
  },
  {
    "url": "livro-da-banana_page-0004-768x333.jpg",
    "thumb": "livro-da-banana_page-0004-768x333.jpg"
  },
  {
    "url": "livro-da-banana_page-0005-768x333.jpg",
    "thumb": "livro-da-banana_page-0005-768x333.jpg"
  },
  {
    "url": "livro-da-banana_page-0006-768x333.jpg",
    "thumb": "livro-da-banana_page-0006-768x333.jpg"
  },
  {
    "url": "livro-da-banana_page-0007-768x333.jpg",
    "thumb": "livro-da-banana_page-0007-768x333.jpg"
  },
  {
    "url": "livro-da-banana_page-0008-768x333.jpg",
    "thumb": "livro-da-banana_page-0008-768x333.jpg"
  },
  {
    "url": "livro-da-banana_page-0009-768x333.jpg",
    "thumb": "livro-da-banana_page-0009-768x333.jpg"
  },
  {
    "url": "livro-da-banana_page-0010-768x333.jpg",
    "thumb": "livro-da-banana_page-0010-768x333.jpg"
  },
  {
    "url": "livro-da-banana_page-0011-768x333.jpg",
    "thumb": "livro-da-banana_page-0011-768x333.jpg"
  },
  {
    "url": "livro-da-banana_page-0012-768x333.jpg",
    "thumb": "livro-da-banana_page-0012-768x333.jpg"
  },
  {
    "url": "livro-da-banana_page-0013-768x333.jpg",
    "thumb": "livro-da-banana_page-0013-768x333.jpg"
  },
  {
    "url": "livro-da-banana_page-0014-768x333.jpg",
    "thumb": "livro-da-banana_page-0014-768x333.jpg"
  }
];
let listaurl = [
  {
    "url": "design-grafico.html",
    "path": "folder",
    "list": "designGrafico"
  },
  {
    "url": "design-editorial.html",
    "path": "designer-editorial",
    "list": "designerEditorial"
  }
];

function obterGet() {
     let url = window.location.pathname;
    const urlHostName = window.location.hostname;
  if(urlHostname == "jussaraalexandre.github.io"){
     url = url.slice(11);
  }else{
     url = window.location.pathname.slice(1);
  }
  
  listaurl.forEach(elemento => {
    if (url == elemento.url) {
      switch (elemento.list) {
        case 'designerEditorial': updateGallery(designerEditorial, elemento.path);
          console.log(elemento.path);
          break;
        case 'designGrafico': updateGallery(designGrafico, elemento.path);
          console.log(elemento.path);
          break;
      }
    }
  });

}


let switching = false;

function updateGallery(gallery, path) {
  console.log(path+"<br>");
  console.log(gallery);
  $('.gallery__core img, .gallery__bg img').attr('src', 'img/' + path + "/" + gallery[0].url);
  $('.gallery__track').empty();
  gallery.forEach((index, item) => {
    $('.gallery__track').append('<div class="gallery__track__item ' + (index == 0 ? 'active' : '') + '"><img src="img/' + path + '/' + index.thumb + '" data-full="img/' + path +'/' +index.thumb + '" alt=""></div>');
  });
}


$('.gallery__track').on('click', '.gallery__track__item', function () {
  if (!switching) {
    switching = true;
    $(this).addClass('active').siblings().removeClass('active');
    // animate in new core image and background image
    const $oldBGImg = $('.gallery__bg img');
    const $oldImg = $('.gallery__core img');
    const newImg = $(this).find('img').data('full');
    console.log(newImg);
    const $newImg = $('<img class="slide-in" src="' + newImg + '">');
    //const $newBGImg = $('<img class="fade-in" src="' + newImg + '">');
    
    $('.gallery__core').append($newImg);
   
    // $('.gallery__bg').append($newBGImg);
    setTimeout(function () {
      $newImg.addClass('shift-up');
      $oldImg.addClass('shift-up');
      //$oldBGImg.addClass('fade-out');
     // $newBGImg.addClass('fading');
      setTimeout(function () {
        $('.gallery__core img').eq(0).remove();
        // $('.gallery__bg img').eq(0).remove();
        $('.slide-in').removeClass('slide-in shift-up');
        $('.fade-in').removeClass('fade-in fading');
        switching = false;
      }, 200);
    }, 10);
  }
});


obterGet();


function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
