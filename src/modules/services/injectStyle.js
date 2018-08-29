export default function injectStyles(rule) {
    let $ = window.$
  let div = document.getElementsByTagName("<div />", {
    html: '&shy;<style>' + rule + '</style>'
  }).appendTo("body");
  return div
}