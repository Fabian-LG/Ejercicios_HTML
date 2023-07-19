const testimonials = [
    {
        name: "Annamarie W.",
        photoUrl: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=900&q=60",
        text: "Not able to tell you how happy I am with apple. You guys rock! It fits our needs perfectly."
    },
    {
        name: "Evette D.",
        photoUrl: "https://images.unsplash.com/photo-1516695554846-842fc913388e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1481&q=80",
        text: "We've seen amazing results already. Apple has got everything I need. It really saves me time and effort. apple is exactly what our business has been lacking."
    },
    {
        name: "Tome B.",
        photoUrl: "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
        text: "Dude, your stuff is the bomb! Thank you so much for your help. No matter where you go, apple is the coolest, most happening thing around! I can't say enough about apple."
    }
];

const imgE1 = document.querySelector("img");
const textE1 = document.querySelector(".text");
const usernameE1 = document.querySelector(".username");

let index = 0;

updateTestimonial();

function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[index];
    imgE1.src = photoUrl;
    textE1.innerText = text;
    usernameE1.innerText = name;
    
    index++;

    if(index===testimonials.length){
        index=0;
    }
    setTimeout(()=>{
        updateTestimonial()
    }, 2000);
}