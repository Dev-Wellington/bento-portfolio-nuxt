<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <!-- Icon from Material Line Icons by Vjacheslav Trushkin - https://github.com/cyberalien/line-md/blob/master/license.txt -->
    <defs>
      <mask id="lineMdLightDarkLoop0">
        <circle cx="7.5" cy="7.5" r="5.5" fill="#fff"></circle>
        <circle cx="7.5" cy="7.5" r="5.5">
          <animate
            fill="freeze"
            attributeName="cx"
            dur="0.4s"
            values="7.5;11"
          ></animate>
          <animate
            fill="freeze"
            attributeName="r"
            dur="0.4s"
            values="5.5;6.5"
          ></animate>
        </circle>
      </mask>
      <mask id="lineMdLightDarkLoop1">
        <g fill="#fff">
          <circle cx="12" cy="9" r="5.5">
            <animate
              fill="freeze"
              attributeName="cy"
              begin="1s"
              dur="0.5s"
              values="9;15"
            ></animate>
          </circle>
          <g fillOpacity="0">
            <use
              href="#lineMdLightDarkLoop2"
              transform="rotate(-75 12 15)"
            ></use>
            <use
              href="#lineMdLightDarkLoop2"
              transform="rotate(-25 12 15)"
            ></use>
            <use
              href="#lineMdLightDarkLoop2"
              transform="rotate(25 12 15)"
            ></use>
            <use
              href="#lineMdLightDarkLoop2"
              transform="rotate(75 12 15)"
            ></use>
            <set
              fill="freeze"
              attributeName="fill-opacity"
              begin="1.5s"
              to="1"
            ></set>
            <animateTransform
              attributeName="transform"
              dur="5s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 15;50 12 15"
            ></animateTransform>
          </g>
        </g>
        <path d="M0 10h26v5h-26z"></path>
        <path
          stroke="#fff"
          stroke-dasharray="26"
          stroke-dashoffset="26"
          stroke-width="2"
          d="M22 12h-22"
        >
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="M22 12h-22;M24 12h-22;M22 12h-22"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.5s"
            dur="0.4s"
            values="26;0"
          ></animate>
        </path>
      </mask>
      <symbol id="lineMdLightDarkLoop2">
        <path d="M11 18h2L12 20z" opacity="0">
          <animate
            fill="freeze"
            attributeName="d"
            begin="1.5s"
            dur="0.4s"
            values="M11 18h2L12 20z;M10.5 21.5h3L12 24z"
          ></animate>
          <set fill="freeze" attributeName="opacity" begin="1.5s" to="1"></set>
        </path>
      </symbol>
    </defs>
    <g fill="currentColor">
      <rect
        width="13"
        height="13"
        x="1"
        y="1"
        mask="url(#lineMdLightDarkLoop0)"
      ></rect>
      <path
        d="M-2 11h28v13h-28z"
        mask="url(#lineMdLightDarkLoop1)"
        transform="rotate(-45 12 12)"
      ></path>
    </g>
  </svg>
</template>

<script lang="ts">
export default {
  name: "LineMdLightDarkLoop",
};
</script>
