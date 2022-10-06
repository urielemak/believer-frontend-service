export function all(){
    fetch("http://localhost:8080/believers")
	.then(response => {
	    console.log(response);
	});
}
