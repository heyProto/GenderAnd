ProtoGraph.initDataApp = function () {
  var x = new ProtoGraph.Card.toMaps(),
    streams = ProtoGraph.streams,
    page = ProtoGraph.page;

  x.init({
    selector: document.querySelector('#card-list-div'),
    dataURL: streams["Grid"].url,
    filterConfigurationJSON: {
      colors: {
        house_color: ProtoGraph.site['house_colour'],
        text_color: '#343434',
        active_text_color: '#ED1C24',
        filter_summary_text_color: '#ffffff',
        filter_heading_text_color: '#ffffff'
      },
      selected_heading: 'Filters',
      reset_filter_text: 'Reset'
    },
    filters: [
      {
        propName: 'genre',
        alias: 'Genre'
      },
      {
        propName: 'subgenre',
        alias: 'Sub Genre'
      },
      {
        propName: 'country',
        alias: 'Country'
      },
      {
        propName: 'state',
        alias: 'State'
      },
      {
        propName: 'city',
        alias: 'City'
      },
      {
        propName: 'byline',
        alias: 'Byline'
      },
      {
        propName: 'hasdata',
        alias: 'Has Data?'
      },
      {
        propName: 'hasimage',
        alias: 'Has Image?'
      },
      {
        propName: 'hasvideo',
        alias: 'Has Video?'
      },
      {
        propName: 'interactive',
        alias: 'Is Interactive?'
      },
      {
        propName: 'sponsored',
        alias: 'Is Sponsored?'
      }
    ]
  })
  x.renderLaptop();
}