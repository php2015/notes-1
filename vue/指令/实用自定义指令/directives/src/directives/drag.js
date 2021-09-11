export default function (el, binding) {
  new Drag(el)
}

class Drag {
  constructor(el) {
    this.el = el;
    this.offsetX = 0;
    this.offsetY = 0;
    this.el.onmousedown = () => {
      this.mousedown();
      return false
    }
    this.el.onselectstart = () => {
      return false // 阻止选中文字
    }
    this.el.style.position = 'absolute'
  }
  mousedown(e) {
    e = e || window.event;
    this.offsetX = e.pageX - this.el.offsetLeft;
    this.offsetY = e.pageY - this.el.offsetTop;
    document.onmousemove = () => {
      this.mousemove()
    }
    document.onmouseup = () => {
      this.mouseup()
    }
  }
  mousemove(e) {
    e = e || window.event;
    this.el.style.left = e.pageX - this.offsetX + 'px';
    this.el.style.top = e.pageY - this.offsetY + 'px';
  }
  mouseup() {
    document.onmousemove = null;
    document.onmouseup = null;
  }
}