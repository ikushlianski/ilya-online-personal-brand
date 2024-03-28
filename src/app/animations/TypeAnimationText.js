import {TypeAnimation}  from 'react-type-animation';

export const typeAnimationText = (text1, text2, text3) => {

  return (
    <TypeAnimation
      sequence={[
        1000,
        text1, // Types 'One'
      1000, // Waits 1s
      text2, // Deletes 'One' and types 'Two'
      1000, // Waits 2s
      text3, // Types 'Three' without deleting 'Two'
      () => {
    console.log('Sequence completed');
  },
]}
  wrapper="span"
  cursor={true}
  // repeat={Infinity}
  style={{ fontSize: '2em', display: 'inline-block' }}
  />
);
};
