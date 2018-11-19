// mock client only functions to be ssr friendly
if (window === undefined) {
  requestAnimationFrame = function(callback) {
    setTimeout(callback, 0);
  };
}

export { default as Slide } from './components/slideshow/slide';
export { default as Fade } from './components/slideshow/fade';
export { default as Zoom } from './components/slideshow/zoom';
