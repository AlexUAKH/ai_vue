// $(".selectLangList label.btn .delete").on("click", function() {
//   $(this)
//     .parent("label")
//     .remove();
// });

/**
 * settingPanel
 */
$(".settingPanelBtn").click(function() {
  $(this)
    .parent(".settingPanel")
    .toggleClass("panelClose");
});
function onResizeSettingPanel() {
  if ($(window).width() <= 767) {
    $(".settingPanel").addClass("panelClose");
  } else {
    $(".settingPanel-col").removeClass("panelClose");
  }
}
onResizeSettingPanel();
$(window).on("resize", onResizeSettingPanel);

var $exportServicesRadioButtons = $('.setExportServices input[type="radio"]');
$exportServicesRadioButtons.click(function() {
  $exportServicesRadioButtons.each(function() {
    $(this)
      .closest("li")
      .toggleClass("active", this.checked);
  });
});

var $setSoundModeCheckboxButtons = $('.setSoundMode input[type="checkbox"]');
$setSoundModeCheckboxButtons.click(function() {
  $setSoundModeCheckboxButtons.each(function() {
    $(this)
      .closest("li")
      .toggleClass("active", this.checked);
  });
});

// $(".disabledTranslate").on("click", function(e) {
//   e.stopPropagation();
//   $(".selectExportMsg").removeClass("hide");
//   $(document.body).on("click.msgHide", function() {
//     var $body = $(this);
//     $(".selectExportMsg").addClass("hide");
//     $body.off("click.msgHide");
//   });
// });

$("#export_zoom").on("click", function() {
  if ($("#export_zoom").is(":checked")) {
    $("#exportZoomModal").modal("show");
    $(".translateBtn").removeClass("disabledTranslate");
    $(".translateBtn").addClass("startTranslate");
  }
});
$("#export_teams").on("click", function() {
  if ($("#export_teams").is(":checked")) {
    $("#exportTeamsModal").modal("show");
    $(".translateBtn").removeClass("disabledTranslate");
    $(".translateBtn").addClass("startTranslate");
  }
});
$("#export_hangouts").on("click", function() {
  if ($("#export_hangouts").is(":checked")) {
    $("#exportHangoutsModal").modal("show");
    $(".translateBtn").removeClass("disabledTranslate");
    $(".translateBtn").addClass("startTranslate");
  }
});

$(".exportServicesModal .close").click(function() {
  $(".setExportServices li").removeClass("active");
  $('.setExportServices input[type="radio"]').prop("checked", false);
  $(".translateBtn").removeClass("startTranslate");
  $(".translateBtn").addClass("disabledTranslate");
  $(".selectExportMsg").addClass("hide");
});

$(document).ready(function() {
  if ($(".setExportServices input[type=radio]").is(":checked")) {
    $(".translateBtn").removeClass("disabledTranslate");
    $(".translateBtn").addClass("startTranslate");
  }
});
