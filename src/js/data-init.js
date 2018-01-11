function getScreenSize() {
  let w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    width = w.innerWidth || e.clientWidth || g.clientWidth,
    height = w.innerHeight|| e.clientHeight|| g.clientHeight;

  return {
    width: width,
    height: height
  };
}
function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status == 200) {
      callback(null, xhr.response);
    } else {
      callback(status);
    }
  };
  xhr.send();
};
function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

let dimension = getScreenSize(),
  mode;
if (dimension.width <= 500){
  mode = 'mobile';
} else {
  mode = 'laptop';
}

$(document).ready((e) => {

  if (mode === 'laptop'){
    $('.filter-column').sticky({ topSpacing: 0 });
  }

  if (mode === 'mobile'){
    $('#protograph_filter_icon').on('click', ((e) => {
      $('.protograph-filter-area').css('display', 'block');
      setTimeout((e) => {
        $('.protograph-filter-area').addClass('protograph-filter-area-slide-up');
      },0);
      $('#protograph_filter_icon').css('display', 'none');
      $('#protograph_filter_close_icon').css('display', 'block');
    }));

    $('#protograph_filter_close_icon').on('click', ((e) => {
      $('.protograph-filter-area').removeClass('protograph-filter-area-slide-up');
      setTimeout((e) => {
        $('.protograph-filter-area').css('display', 'none');
      },500);
      $('#protograph_filter_icon').css('display', 'block');
      $('#protograph_filter_close_icon').css('display', 'none');
    }));

    $('#dropdownMenuButton').on('click', (e) => {
      $('.protograph-app-navbar').addClass('protograph-app-navbar-slide-in');
      $('body').css('overflow', 'hidden');
      $('.container.proto-container').css('overflow', 'hidden');
    });

    $('#protograph_app_close_menu').on('click', (e) => {
      $('.protograph-app-navbar').removeClass('protograph-app-navbar-slide-in');
      $('body').css('overflow', 'initial');
      $('.container.proto-container').css('overflow', 'initial');
    });
  }

});

var x = new ProtoGraph.Card.toMaps()
  x.init({
  selector: document.querySelector('#card-list-div'),
  dataURL: 'https://cdn.protograph.pykih.com/cbe9b09e0abd2b0c52a039d0/index.json',
  topoURL: 'https://cdn.protograph.pykih.com/ie-mobbed/src/data/india-topo.json',
  chartOptions: {
    chartTitle: 'Mob Justice in India',
    height: 500,
    defaultCircleColor: '#F02E2E'
  },
  filterConfigurationJSON: {
    colors: {
      house_color: '#F02E2E',
      text_color: '#343434',
      active_text_color: '#F02E2E',
      filter_summary_text_color: '#ffffff',
      filter_heading_text_color: '#ffffff'
    },
    selected_heading: 'Filters',
    reset_filter_text: 'Reset'
  },
  filters: [
    {
      propName: 'byline',
      alias: 'By Line'
    },
    {
      propName: 'genre',
      alias: 'Genre'
    },
    {
      propName: 'subgenre',
      alias: 'Sub Genre'
    },
    {
      propName: 'interactive',
      alias: 'Does the story have charts or visualisation?'
    }
  ]
})
x.renderLaptop();