!function(){var e,t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");t.disabled=!1,d.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,d.disabled=!1,e=setInterval((function(){document.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),700)})),d.addEventListener("click",(function(){t.disabled=!1,d.disabled=!0,clearInterval(e),document.body.style.background="white"}));var n=document.createElement("div");document.body.appendChild(n),n.appendChild(t),n.appendChild(d),n.style.display="flex",n.style.justifyContent="center",n.style.alignItems="center",n.style.gap="10px",n.style.padding="17%",t.style.fontSize="15px",t.style.padding="20px 35px",d.style.fontSize="15px",d.style.padding="20px 35px"}();
//# sourceMappingURL=01-color-switcher.2e039166.js.map