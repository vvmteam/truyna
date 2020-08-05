$(document).ready(function() {
  $("#table_truyna").DataTable({
    autoWidth: true,
    fixedHeader: true,
    paging: false,
    info: false,
    ordering: false,
    columnDefs: [
      {
        targets: [0, 3],
        searchable: false
      }
    ]
  });
  if ($(window).width() > "650") {
    $("#table_truyna_filter")
      .detach()
      .appendTo("thead")
      .css({
        position: "absolute",
        top: "8px",
        right: "0"
      });
  } else {
    $("#table_truyna_filter")
      .detach()
      .prependTo("thead")
      .css({
        position: "static",
        top: "8px",
        right: "0"
      });
  }
  $("input[type=search]").focus();
  $(".nd").prepend('<b><span style="color: #ff0000">[Nên đánh]&nbsp;</span></b>');
  $("#show-nd").change(function() {
    if (this.checked) {
      $(".kd").addClass("hidden");
    } else {
      $(".kd").removeClass("hidden");
    }
  });
});
window.fbAsyncInit = function() {
  FB.init({
    appId: "299305840613817",
    cookie: true,
    xfbml: true,
    version: "v3.0"
  });

  FB.AppEvents.logPageView();
};

(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
