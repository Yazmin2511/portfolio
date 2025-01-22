export function typeWriter(elementId: string, text: string, speed: number = 200) {
  let index = 0;
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = '';
    clearInterval((element as any)._typeWriterInterval);

    const interval = setInterval(() => {
      if (index < text.length) {
        if (text[index] === '\n') {
          element.innerHTML += '<br />';
        } else {
          element.innerHTML += text[index];
        }
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    (element as any)._typeWriterInterval = interval;
  }
}
