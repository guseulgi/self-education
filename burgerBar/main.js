let mouseCursor = function(evt) {
  const mouse = document.querySelector('.trailMouse');
  const cursor = document.querySelector('.fa-feather-pointed');
  // console.log(evt);

  const mX = evt.clientX;
  const mY = evt.clientY;

  //position 값을 변경해주면 hover 같은 이벤트가 작동하지 않으므로 transform으로 조정해준다.
  // mouse.style.transform = `translate(${mX}px, ${mY}px)`;
  cursor.style.transform = `translate(${mX}px, ${mY}px) rotate(80deg)`;
  cursor.style.transition = '.05s';

}

//마우스가 움직일 때마다 좌표값은 mousemove event의 clientX, clientY
window.addEventListener('mousemove', mouseCursor);

