//تكليف 1

/*
first one won't work because the script will run before loding of the element 
second one will work because the script will run after loding the page
third one will work also because it after the element 
*/

//تكليف 2
setTimeout(() => {
    const h1 = document.createElement('h1')
    h1.style.color = 'blue'
    h1.innerText = "Ahmed Zain"
    h1.style.fontSize = '80px'
    h1.style.fontWeight = '50px'
    h1.style.textAlign = 'center'
    h1.style.fontFamily = 'Arial'
    document.body.appendChild(h1)
}, 2000)



//تكليف 3
setTimeout(() => {
    console.log("%cELZERO %cWEB %cSHCOOL", "color:red;font-size:40px", "color:green;font-weight:bold;font-size:40px", "color:blue;font-size:40px")

}, 4000)


//تكليف 4
setTimeout(() => {
    console.group("group one")
    console.log("message one")
    console.log("message two")
    console.group("child group")
    console.log("message one")
    console.log("message two")
    console.group("grand child group")
    console.log("message one")
    console.log("message two")
    console.groupEnd()
    console.groupEnd()
    console.groupEnd()
    console.group("group two")
    console.log("message one")
    console.log("message two")

}, 6000)



//تكليف 5
setTimeout(() => {
    console.table(['ahmed', 'zain', 's3ody', 'Bahaa'])
}, 8000)


//تكليف 6

setTimeout(() => {
    alert("don't execute the code ")
    console.log("Iam In Console");
    document.write("Iam In Page");
}, 10000)








