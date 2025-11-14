import App from "../App.jsx";
import Layout from "../Layout.jsx";

export default function Debounce(callback, delay) {
  let timer;

  return (...args) => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
