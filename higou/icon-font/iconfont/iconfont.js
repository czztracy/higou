(function(window){var svgSprite='<svg><symbol id="icon-bangzhuzhongxin" viewBox="0 0 1024 1024"><path d="M342.677 595.002"  ></path><path d="M512 927C282.804 927 97 741.2 97 512 97 282.804 282.804 97 512 97c229.2 0 415 185.804 415 415C927 741.2 741.2 927 512 927zM470.5 761l83 0 0-83-83 0L470.5 761zM674.439 392.252C665.479 312.958 611.214 269.163 512 263c-117.312-4.1-142.797 51.431-166 149.172L423.738 429c16.09-65.699 25.087-85.021 88.262-83 54.133 4.142 71.293 9.001 76.655 53.386 3.565 30.15-6.93 62.914-71.106 100.169-59.76 35.412-47.049 63.105-45.127 109.556 0 11.632 0 20.775 0 27.39l74.414 0c0-3.308 0-10.778 0-22.41-1.926-34.86-6.042-50.261 47.078-78.207C678 491.163 678 441.429 674.439 392.252z"  ></path></symbol><symbol id="icon-icon-test" viewBox="0 0 1024 1024"><path d="M510.403642 171.635055c-140.490731 0-254.358105 111.477954-254.358105 249.02668 0 137.53133 113.867374 249.02361 254.358105 249.02361 140.495848 0 254.361175-111.491257 254.361175-249.02361 0.002047-137.547703-113.865327-249.02668-254.361175-249.02668M216.694297 516.250814V286.345634c-3.218298 0-6.412037 0.132006-9.565866 0.382716C259.252579 173.574221 375.34462 94.76941 510.443551 94.76941c135.094838 0 251.190973 78.805834 303.311027 191.95894a120.621195 120.621195 0 0 0-9.565866-0.382716V516.250814c64.878636 0 117.508297-51.472302 117.508297-114.947985 0-43.110867-24.276916-80.675414-60.173474-100.350523C811.010071 158.665673 673.104211 56.468083 510.444575 56.468083c-162.661683 0-300.558333 102.189404-351.076914 244.469897-35.907815 19.673062-60.175521 57.243749-60.175521 100.360755-0.001023 63.479777 52.588729 114.952078 117.502157 114.952079m547.534308 131.796722c-66.464761 60.730153-155.700131 97.916077-253.824963 97.916077-97.942683 0-187.024557-37.048801-253.451456-97.577363C138.068566 708.276269 60.018955 814.874075 60.018955 959.683159h903.861806c-0.001023-145.079236-79.509868-251.80598-199.652156-311.635623m0 0"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)