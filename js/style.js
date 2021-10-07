// const 
let moviessection = document.getElementById('the-movies-div');
let getmoviesbyword = document.getElementById('getmoviesbyword') ;
let yourname = document.getElementById('yourname');
let youremail = document.getElementById('youremail');
let yourphone = document.getElementById('yourphone');
let yourage = document.getElementById('yourage');
let yourpassword = document.getElementById('yourpassword');
let reyourpassword = document.getElementById('reyourpassword');
let submitbtn = document.getElementById('submitbtn');

let data = [];         //for the data came from the API
let contactdata = [];  //for the information entered by the user


function fetchdata() {
  // fetchbody
  // console.log(fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k'));
  fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k').then(response =>{
    return response.json();
  }).then(moviesdata =>{
    // console.log(moviesdata.results);
    for(var i = 0 ; i<= moviesdata.results.length ; i++){
      data.push(moviesdata.results[i]);
    }
    
    // console.log(moviesdata.results[2])
    // console.log(data)

    for(var i = 0 ; i<=data.length ; i++){

      let unit = `<div class="col-lg-4  col-sm-12  movie-card mb-5 item">
      <img src="https://image.tmdb.org/t/p/w500/${data[i].poster_path}" width="100%" height="auto" alt="Movies-photo">
      <div class="item-overlay top p-5 ">
      <h4>${data[i].original_title}</h4>
      <p>${data[i].overview}</p>
      <p>rate : ${data[i].vote_average}</p>
      <p>${data[i].release_date}</p>
      </div>
      </div>`
      moviessection.innerHTML += unit ;
    }
  })
}
fetchdata();

console.log(data)

// the filtering movies by their names
getmoviesbyword.addEventListener('keyup',function(){
  moviessection.innerHTML = '' ;
  for(var i = 0 ; i<=data.length ; i++){
    console.log(getmoviesbyword.value)
    console.log( data[i].original_title)
    
    if(getmoviesbyword.value == data[i].original_title){
      let sw = `<div class="col-lg-4  col-sm-12  movie-card mb-5 item">
      <img src="https://image.tmdb.org/t/p/w500/${data[i].poster_path}" width="100%" height="auto" alt="Movies-photo">
      <div class="item-overlay top p-5 ">
      <h4>${data[i].original_title}</h4>
      <p>${data[i].overview}</p>
      <p>rate : ${data[i].vote_average}</p>
      <p>${data[i].release_date}</p>
      </div>
      </div>`
      moviessection.innerHTML += sw ;
      console.log('yes');
    }else 
      console.log('no')
    }
  
})




// the crud system for contact us 
class person{
  constructor(name,email,phone,age,password,repassword){
    this.name=name;
    this.email=email;
    this.phone=phone;
    this.age=age;
    this.password=password;
    this.repassword=repassword;
  }
  
}
// the submition bottin
submitbtn.addEventListener('click' , function(){
  
 contactdata.push(new person(yourname.value,youremail.value,yourphone.value,yourage.value,yourpassword.value,reyourpassword.value));
console.log(contactdata);
localStorage.setItem('contacts',JSON.stringify(contactdata))
yourname.value = '';
youremail.value = '';
yourphone.value = '';
yourage.value = '';
yourpassword.value = '';
reyourpassword.value = '';
})



// yourname
// youremail
// yourphone
// yourage
// yourpassword
// reyourpassword















// **************************************************************************************
// results: Array(20)
// 0:
// adult: false
// backdrop_path: "/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg"
// genre_ids: (4) [35, 28, 12, 878]
// id: 550988
// original_language: "en"
// original_title: "Free Guy"
// overview: "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline."
// popularity: 8808.702
// poster_path: "/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg"
// release_date: "2021-08-11"
// title: "Free Guy"
// video: false
// vote_average: 7.9
// vote_count: 2162
// *********************************************************************************