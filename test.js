let hostname = window.location.host;
     const URL = 'https://random-data-api.com/api/address/random_address' + hostname;
     console.log(URL)
        fetch(URL)
        .then(res => res.text())
        .then(text => {
//             var d = document.createElement("div");
//             d.style.cssText = "display:none";
//             d.appendChild(document.createTextNode(text));
//             document.body.appendChild(d);
             return text;
        })
        .catch(err => console.log(err));
