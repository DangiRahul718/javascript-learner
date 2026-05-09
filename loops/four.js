const myobject = {
    js: "javascript",
    CPP : "c++",
    ds: "data science"

}
for (const key in myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`);
}