var libs =
  [ 'http://code.jquery.com/jquery-1.9.1.min.js'
  //, 'http://code.jquery.com/jquery-migrate-1.1.1.min.js'
  , 'http://raw.github.com/raimohanska/bacon.js/master/dist/Bacon.js'
  ];
head.js.apply(head, libs.concat([function() {
  console.log('wheee');
  var textareaVal =
    $('body').asEventStream('keyup', '#txt')
      .map(function() { return $('#txt').val(); })
      .toProperty();
  textareaVal.assign($('#res'), "text");
}]));
