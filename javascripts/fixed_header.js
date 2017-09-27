'use strict';

(function () {

  var header = document.getElementsByClassName("Header-wrap");

  function nextElement(elem) {
    do {
        elem = elem.nextSibling;
    } while (elem && elem.nodeType !== 1);
    return elem;
  }

  if (header.length > 0) {
    header[0].style.position = "fixed";

    var nextElem = nextElement(header[0]);

    if (nextElem) {
      nextElem.style.marginTop = header[0].offsetHeight + "px";
    }
  }

})();
