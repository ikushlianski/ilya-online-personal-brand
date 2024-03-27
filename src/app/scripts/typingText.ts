export const typingText = (text: string, setText: (text: string) => void) =>{
  let i = 0;
  const speed = 60;

  const typeWriterInterval = setInterval(() => {
    if (i < text.length) {
      setText(text.substring(0, i + 1));
      i++;
    } else {
      clearInterval(typeWriterInterval);
    }
  }, speed);

  return () => clearInterval(typeWriterInterval);

  }

