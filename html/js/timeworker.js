let cnt = 0;

function timedCount() {
  cnt = cnt + 1;
  postMessage(cnt);
  setTimeout("timedCount()",5);
}

timedCount();