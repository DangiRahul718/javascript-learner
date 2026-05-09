const coding = ["js", "ds", "javascript", "java"]
// coding.forEach( function (val){
//     console.log(val);
    
// })

// coding.forEach(
//    (item)=>{
//     console.log(item)}
// )

const mycoding = [
    {
        languagename : "javascript",
        languagefile : "js"
    },
    {
        languagename : "java",
        languagefile : "java"
    },

    {
        languagename : "python",
        languagefile : "python"
    }
]

mycoding.forEach(
    (item) => {
        console.log(item.languagename);
        
    }
)