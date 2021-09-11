export default function (el, binding) {
  el.style.userSelect = 'all';
  el.onclick = function () {
    document.execCommand('copy')
  }
}