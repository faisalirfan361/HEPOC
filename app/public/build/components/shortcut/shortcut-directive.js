define(["app"],function(a){"use strict";return a.directive("toggleShortcut",["$log","$timeout",function(a,b){var c=function(a){function b(){d.animate({height:"hide"},300,"easeOutCirc"),$("body").removeClass("shortcut-on")}function c(){d.animate({height:"show"},200,"easeOutCirc"),$("body").addClass("shortcut-on")}var d=$("#shortcut");a.on("click",function(){d.is(":visible")?b():c()}),d.find("a").click(function(a){a.preventDefault(),window.location=$(this).attr("href"),setTimeout(b,300)}),$(document).mouseup(function(a){d&&!d.is(a.target)&&0===d.has(a.target).length&&b()})},d=function(a,d){b(function(){c(d)})};return{restrict:"EA",link:d}}])});