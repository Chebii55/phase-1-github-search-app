document.addEventListener("DOMContentLoaded",()=>{
    console.log("load is done!")

    const submit=document.querySelector("#github-form")
    submit.addEventListener("submit",(e)=>{
        e.preventDefault()
        
    const searchValue=document.getElementById("search").value;
    const url=`https://api.github.com/search/users?q=${searchValue}`
    fetch(url)
    .then((response)=>response.json())
    .then(searching)
    .catch(error=>
        console.log(error))
})
function searching(data){
    const items=data.items
    console.log(items)
    const userList=document.getElementById("user-list");
    const results=document.createElement('li')
    userList.appendChild(results)
    items.forEach(items => {
        const name=document.createElement("h3");
        const image=document.createElement("img");
        const profileView=document.createElement("a");

        name.textContent=items.login;
        image.src=items.avatar_url;
       profileView.textContent="View Profile";
       profileView.href=items.html_url;

        results.appendChild(name);
         results.appendChild(image);
         results.appendChild(profileView)
        
    });

}
});