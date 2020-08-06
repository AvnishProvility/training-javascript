var map1 = new Map();

map1.set("name", "avnish");
map1.set(1, "kumar");
map1.set(false, "status");

// console.log(map1);

// console.log(map1.get("name"));

// console.log(map1.size);

// console.log(map1.delete(1));

// console.log(map1);

map1.forEach((value, key) => {
    console.log(`${key} ${value}`);
})