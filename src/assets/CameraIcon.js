import * as React from 'react';
import Svg, { Path, } from 'react-native-svg';

export default function CameraIcon({size = '60'}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M53.3333 13.3333H41.1666L39.3999 8.79997C39.1582 8.17351 38.7329 7.63467 38.1798 7.25401C37.6266 6.87335 36.9714 6.66862 36.2999 6.66663H23.6999C23.0256 6.66525 22.3667 6.86842 21.8103 7.2493C21.2538 7.63018 20.826 8.17086 20.5833 8.79997L18.8333 13.3333H6.66659C5.78253 13.3333 4.93468 13.6845 4.30956 14.3096C3.68444 14.9347 3.33325 15.7826 3.33325 16.6666V50C3.33325 50.884 3.68444 51.7319 4.30956 52.357C4.93468 52.9821 5.78253 53.3333 6.66659 53.3333H53.3333C54.2173 53.3333 55.0652 52.9821 55.6903 52.357C56.3154 51.7319 56.6666 50.884 56.6666 50V16.6666C56.6666 15.7826 56.3154 14.9347 55.6903 14.3096C55.0652 13.6845 54.2173 13.3333 53.3333 13.3333ZM10.2833 22.7166C9.92963 22.7166 9.59049 22.5762 9.34044 22.3261C9.09039 22.0761 8.94992 21.7369 8.94992 21.3833C8.94992 21.0297 9.09039 20.6905 9.34044 20.4405C9.59049 20.1904 9.92963 20.05 10.2833 20.05H14.2833C14.6369 20.05 14.976 20.1904 15.2261 20.4405C15.4761 20.6905 15.6166 21.0297 15.6166 21.3833C15.6166 21.7369 15.4761 22.0761 15.2261 22.3261C14.976 22.5762 14.6369 22.7166 14.2833 22.7166H10.2833ZM29.9999 46.6666C27.0332 46.6666 24.1331 45.7869 21.6664 44.1387C19.1996 42.4905 17.277 40.1478 16.1417 37.4069C15.0064 34.666 14.7094 31.65 15.2881 28.7403C15.8669 25.8306 17.2955 23.1578 19.3933 21.06C21.4911 18.9622 24.1638 17.5336 27.0736 16.9549C29.9833 16.3761 32.9993 16.6731 35.7402 17.8084C38.4811 18.9438 40.8237 20.8663 42.472 23.3331C44.1202 25.7998 44.9999 28.6999 44.9999 31.6666C44.9999 35.6449 43.4196 39.4602 40.6065 42.2732C37.7935 45.0863 33.9782 46.6666 29.9999 46.6666Z" fill="#F1ECE6"/>
    <Path d="M18.5168 31.7666C18.5202 34.0154 19.167 36.2162 20.3807 38.1093C21.5945 40.0023 23.3247 41.5085 25.3668 42.45L27.1835 39.55C26.077 39.0791 25.0854 38.3742 24.277 37.4839C23.4686 36.5936 22.8625 35.5388 22.5003 34.392C22.1381 33.2453 22.0284 32.0337 22.1787 30.8406C22.329 29.6474 22.7357 28.5009 23.371 27.4798C24.0063 26.4588 24.8551 25.5873 25.859 24.9252C26.863 24.2632 27.9983 23.8263 29.1871 23.6445C30.3759 23.4627 31.5899 23.5404 32.7458 23.8722C33.9017 24.204 34.9721 24.782 35.8835 25.5666L37.7002 22.6333C35.974 21.2318 33.886 20.3481 31.6781 20.0845C29.4703 19.821 27.2329 20.1884 25.2253 21.1443C23.2177 22.1001 21.5221 23.6052 20.3348 25.4852C19.1475 27.3652 18.5172 29.5431 18.5168 31.7666Z" fill="#F1ECE6"/>
    </Svg>
    

  );
}