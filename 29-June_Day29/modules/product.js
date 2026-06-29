console.log("Product Page");

export let product={
    pname:"Protein",
    ppice:"2500",
}


export function show(){
    console.log("watch,6000");
    console.log(product);
    
    
}
export default function display(){
    console.log("ikigai is writen by abc");
    
}

//exports
//1.Default export-a pagae can can cosnist single default export
//2.named export-a page can consist  multiple named export
                        //while importing named exports using curly braces and original name