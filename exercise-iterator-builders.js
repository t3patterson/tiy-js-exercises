// EXERCISE 1 (string building from an array)
// ------------------------
// Create a concatenated html string that loops over an array of objects 
//   and converts each one them to this:
//   <span class='article-tags'> «..string..» </span>
//  

var articleTags = ['interesting','hilarious','society','wtf','awesome']

function createArticleSpanTags(arr){
  var articleSpanTags=""
  for (var i = 0; i < arr.length ; i++;){
    articleSpanTags += "<span class='article-tags'>"+arr[i]+"</span>";
  }

  return articleSpanTags
}

// EXERCISE 2 (string building from an array of objects)
// ------------------------
// Create a concatenated html string that loops over an array of objects 
//   and converts each one them to this:
// <li>
//   <a href="«..url..»"> «..title..» </a>
// </li>

var myFavoriteProducts = [ 
  {title: "Snuggie", url: "http://www.awmok.com/wp-content/uploads/2009/11/snuggy1-550x549.jpg"},
  {title: "Ronco Showtime Rotisserie", url: "http://www.asseenontv.com/imgcache/product/resized/000/296/048/catl/00296048-314496_500.jpg"},
  {title: "Oxiclean", url: "http://www.oxiclean.com/siteimages/Product/Large/517b5d4f-cee2-4651-a62e-0d976169c652.png"},
  {title: "Shamwow", url: "http://media3.s-nbcnews.com/j/streams/2013/september/130906/8c8881134-shamwowguy.nbcnews-ux-2880-1000.jpg"}
]

function generateHTMLUnorderedListLinks(arr){
  var htmlString = '';

  for (var i = 0; i < arr.length; i++){
      htmlString += '<li>'
      htmlString += '<a href="'+el.url+'">' + el.title + '</a>'
      htmlString += '</li>'
  }

  return htmlString
}

// EXERCISE 3 (building an array of objects from an array of strings)
// ------------------------
// Convert the array of strings into an array of objects for the 

// eg. result = [
//  {firstName: 'Chuck', lastName: 'Norris'}
// ]
//

var realNinjas = [
  'Chuck Norris',
  'Jackie Chan',
  'Lucy Liu',
  'Billy Blanks',
  'Michelle Yeoh',
  'Jet Li'
]

function stringArrayToObjectArray(arr){
  var arrayOfObjects = []
  
  for (var i = 0; i < arr.length; i++){
    var firstLastArray = arr[i].split(" ");
    var firstLastObject = {
      firstName: firstLastArray[0],
      lastName: firstLastArray[1]
    };
    arrayOfObjects.push(firstLastObject);
  } 

  return arrayOfObjects
}


