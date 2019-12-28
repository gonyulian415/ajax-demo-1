getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("request CSS succeed");
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        console.log("request CSS failed");
      }
    }
  };
  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("request JS succeed");
        const js = document.createElement("script");
        js.innerHTML = request.response;
        document.body.appendChild(js);
      } else {
        console.log("request JS failed");
      }
    }
  };
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("request HTML succeed");
        const html = document.createElement("div");
        html.innerHTML = request.response;
        document.body.appendChild(html);
      } else {
        console.log("request HTML failed");
      }
    }
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("request XML succeed");
        const xml = request.responseXML;
        console.log(xml);
        const text = xml.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      } else {
        console.log("request XML failed");
      }
    }
  };
  request.send();
};
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log("request JSON succeed");
        const obj = JSON.parse(request.response);
        console.log(obj);
      } else {
        console.log("request JSON failed");
      }
    }
  };
  request.send();
};
