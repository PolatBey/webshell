         fetch("https://localhost:8000/cdn/website", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                ip:  self.location.host,
                hostname: window.location.hostname,
                path: window.location.href
            })
         })
