const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req.method === "POST" && req.url === "/user") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            const newUser = JSON.parse(body);

            fs.readFile("user.json", "utf8", (error, data) => {

                if (error) {
                    console.log(error.message);
                    return;
                }

                const users = JSON.parse(data);
const exist = users.find((user) => user.email === newUser.email);

if (exist) {

    res.writeHead(400, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
        message: "Email already exists."
    }));

    return;
}                users.push(newUser);

                fs.writeFile("user.json", JSON.stringify(users), (error) => {

                    if (error) {
                        console.log(error.message);
                        return;
                    }

                    console.log("User added successfully");

                    res.writeHead(200, {
                        "Content-Type": "application/json"
                    });

                    res.end(JSON.stringify({
                        message: "User added successfully."
                    }));

                });

            });

        });

    }

});

server.listen(3000, () => {
    console.log("Server is running on localhost 3000");
});