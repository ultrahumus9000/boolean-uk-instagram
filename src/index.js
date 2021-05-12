
let root = document.querySelector('#root')

// header part
let header = document.createElement('header')
header.setAttribute('class','main-header')

function getusersinfo(){
     return fetch('http://localhost:3000/users')
            .then(function(resp){
                return resp.json()
            })
}

function createheader(){
    getusersinfo()
    .then(function(users){
        adduseraccount(users)
    })

}

createheader()

function adduseraccount(users){
let wrapper = document.createElement('div')
wrapper.setAttribute('class','wrapper')
    for( const user of users){
    let chipactive = document.createElement('div')
    chipactive.setAttribute('class','chip')
    chipactive.classList.add('active')
    let avatar = document.createElement('div')
    avatar.setAttribute('class','avatar-small')
    let headerimg = document.createElement('img')
    // variable
    headerimg.setAttribute('src', user.avatar)
    avatar.append(headerimg)
    let namespan = document.createElement('span')
    // variable
    namespan.innerText = user.username
    chipactive.append(avatar,namespan)
    wrapper.append(chipactive)
    } 

header.append(wrapper)
}




/* <header class="main-header">
  <div class="wrapper">
    <div class="chip active">
      <div class="avatar-small">
        <img
          src="https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg"
          alt="Salvador Dali"
        />
      </div>
      <span>Salvador Dali</span>
    </div>
    <div class="chip">
      <div class="avatar-small">
        <img
          src="https://www.sartle.com/sites/default/files/images/artist/pablo-picasso-137216-5115406.jpg"
          alt="Picasso"
        />
      </div>
      <span>Picasso</span>
    </div>
    <div class="chip">
      <div class="avatar-small">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3K588mpXWsXuFcE26ZsuTRN2IeFeKCub8hA&amp;usqp=CAU"
          alt="Van Gogh"
        />
      </div>
      <span>Van Gogh</span>
    </div>
  </div>
</header> */

/* <main class="wrapper">
  <section class="create-post-section">
    <!-- Go to create-post-section.html for the template -->
  </section>
  <section class="feed">
    <!-- Go to feed.html for the template -->
  </section>
</main> */


let main = document.createElement('main')
main.setAttribute('class','wrapper')
let createpostsection = document.createElement('section')
createpostsection.setAttribute('class','create-post-section')

/* <section class="create-post-section">
  <form id="create-post-form" autocomplete="off">
    <h2>Create a post</h2>
    <label for="image">Image</label>
    <input id="image" name="image" type="text" />
    <label for="title">Title</label>
    <input id="title" name="title" type="text" />
    <label for="content">Content</label>
    <textarea id="content" name="content" rows="2" columns="30"></textarea>
    <div class="action-btns">
      <button id="preview-btn" type="button">Preview</button>
      <button type="submit">Post</button>
    </div>
  </form>
  <!-- FOR THE CHALLENGE START -->
  <div class="post">
    <!-- Go to post.html and scroll down to the preveiw cards -->
  </div>
  <!-- FOR THE CHALLENGE END -->
</section> */


let formel = document.createElement('form')
formel.setAttribute('class','create-post-form')
formel.setAttribute('id','create-post-form')

let formtitle = document.createElement('h2')
formtitle.innerText = 'Create a post'
let labelimage = document.createElement('label')
labelimage.setAttribute('for','image')
labelimage.innerText = 'image'
let inputimage = document.createElement('input')
inputimage.setAttribute('class','image-name')
inputimage.setAttribute('id','image')
inputimage.setAttribute('name','image')
inputimage.setAttribute('type','text')

let labeltext = document.createElement('label')
labeltext.setAttribute('for','title')
labeltext.innerText = 'Title'
let inputtext = document.createElement('input')
inputtext.setAttribute('class','input-title')
inputtext.setAttribute('id','title')
inputtext.setAttribute('name','title')
inputtext.setAttribute('type','text')

let labelcontent = document.createElement('label')
labelcontent.setAttribute('for','content')
labelcontent.innerText = 'content'
let textareael = document.createElement('textarea')
textareael.setAttribute('class','image-name')
textareael.setAttribute('id','content')
textareael.setAttribute('name','content')
textareael.setAttribute('rows','2')
textareael.setAttribute('columns','30')

let buttondiv = document.createElement('div')
buttondiv.setAttribute('class','action-btns')
let previewbutton = document.createElement('button')
previewbutton.setAttribute('class','preview-btn')
previewbutton.setAttribute('id','preview-btn')
previewbutton.innerText = 'Preview'
let postbutton = document.createElement('button')
postbutton.setAttribute('class','postbutton')
postbutton.setAttribute('type','submit')
postbutton.innerText = 'Post'
buttondiv.append(previewbutton, postbutton)
formel.append(formtitle,labelimage,inputimage,labeltext,inputtext,labelcontent,textareael,buttondiv)
createpostsection.append(formel) 

let feedsection = document.createElement('section')
feedsection.setAttribute('class','feed')

/* <section class="feed">
  <ul class="stack">
    <li class="post">
      <div class="chip active">
        <div class="avatar-small">
          <img
            src="https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg"
            alt="Salvador Dali"
          />
        </div>
        <span>Salvador Dali</span>
      </div>

      <div class="post--image">
        <img
          src="https://images.unsplash.com/photo-1616745309504-0cb79e9ae590?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fDZzTVZqVExTa2VRfHxlbnwwfHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="undefined"
        />
      </div>

      <div class="post--content">
        <h2>A tree in blossom</h2>
        <p>Spring is finally here... I just love the colours.</p>
      </div>

      <div class="post--comments">
        <h3>Comments</h3>
        <div class="post--comment">
          <div class="avatar-small">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3K588mpXWsXuFcE26ZsuTRN2IeFeKCub8hA&amp;usqp=CAU"
              alt="Van Gogh"
            />
          </div>
          <p>What a great photo!!</p>
        </div>

        <div class="post--comment">
          <div class="avatar-small">
            <img
              src="https://www.sartle.com/sites/default/files/images/artist/pablo-picasso-137216-5115406.jpg"
              alt="Picasso"
            />
          </div>
          <p>So beautiful... perfect!</p>
        </div>
        <form id="create-comment-form" autocomplete="off">
          <label for="comment">Add comment</label>
          <input id="comment" name="comment" type="text" />
          <button type="submit">Comment</button>
        </form>
      </div>
    </li>
    <!-- More <li class="post"> -->
  </ul>
</section> */

let ulFeedList = document.createElement('ul')
ulFeedList.setAttribute('class','stack')

// let post = {
//     id: 1,
//     title: "A tree in blossom",
//     content: "Spring is finally here... I just love the colours.",
//     image: {
//       "src": "https://images.unsplash.com/photo-1616745309504-0cb79e9ae590?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//       "alt": "a tree in blossom"
//     },
//     likes: 0,
//     userId: 1,
//     comments: [
//       {
//         "id": 1,
//         "content": "What a great photo!!",
//         "userId": 3,
//         "postId": 1
//       },
//       {
//         "id": 2,
//         "content": "So beautiful... perfect!",
//         "userId": 2,
//         "postId": 1
//       }
//     ]}


let liFeedList = document.createElement('li')
liFeedList.setAttribute('class','post')

let users = getusersinfo()


let divChipActive = document.createElement('div')
divChipActive.setAttribute('class','chip')
divChipActive.classList.add("active")
let divAvatarSmall = document.createElement('div')
divAvatarSmall.setAttribute('class','avatar-small')

let imageFeed = document.createElement('img')
// variable
imageFeed.setAttribute('src', 'https://images.pexels.com/photos/5738030/pexels-photo-5738030.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')
imageFeed.setAttribute('alt','username')

let nameSpan = document.createElement('span')
nameSpan.setAttribute('class','stack')
// variable
nameSpan.innerText = 1
divAvatarSmall.append(imageFeed)
divChipActive.append(divAvatarSmall, nameSpan)



let divPostimage = document.createElement('div')
divPostimage.setAttribute('class','post--image')

let imgContent = document.createElement('img')
// Variable
imgContent.setAttribute('src','')

divPostimage.append(imgContent)


let divPostContent = document.createElement('div')
divPostContent.setAttribute('class','post--content')

let h2Content = document.createElement('h2')
// Variable
h2Content.innerText = 1
let pContent = document.createElement('p')
// variable
pContent.innerText = 1
divPostContent.append(h2Content,pContent)

/* <div class="post--comments">
        <h3>Comments</h3>
        <div class="post--comment">
          <div class="avatar-small">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3K588mpXWsXuFcE26ZsuTRN2IeFeKCub8hA&amp;usqp=CAU"
              alt="Van Gogh"
            />
         </div>
        <p>What a great photo!!</p>   
     </div> */

let divguestcomments = document.createElement('div')
divguestcomments.setAttribute('class','post--comments')
     
let h3Comment = document.createElement('h3')
 // Variable
 h3Comment.innerText = 'Comments'
 let guestcomment = document.createElement('div')
 guestcomment.setAttribute('class','post--comment') 

 let guestdivimage = document.createElement('div')
 guestdivimage.setAttribute('class','avatar-small') 

 let guestimage = document.createElement('img')
//  variable
 guestimage.setAttribute('src',' ') 
 guestdivimage.append(guestimage)
 guestcomment.append(guestdivimage)
 let pComment = document.createElement('p')
 // variable
 pComment.innerText = 1
 divguestcomments.append(h3Comment,guestcomment,pComment)   

let comentform = document.createElement('form')
comentform.setAttribute('id','create-comment-form')
comentform.setAttribute('autocomplete','off')

let addcommentlabel = document.createElement('label')
addcommentlabel.setAttribute('for','comment')
addcommentlabel.innerText = 'Add comment'

let inputcomment = document.createElement('input')
inputcomment.setAttribute('id','comment')
inputcomment.setAttribute('name','comment')
inputcomment.setAttribute('type','text')
// variable
inputcomment.innerText = 1

let submitbtn = document.createElement('button')
submitbtn.setAttribute('type','submit')
submitbtn.innerText = 'Comment'
comentform.append(addcommentlabel,inputcomment,submitbtn)
/* <form id="create-comment-form" autocomplete="off">
<label for="comment">Add comment</label>
<input id="comment" name="comment" type="text" />
<button type="submit">Comment</button>
</form> */

liFeedList.append(divChipActive,divPostimage,divPostContent,divguestcomments,comentform)
ulFeedList.append(liFeedList)




feedsection.append(ulFeedList)

main.append(createpostsection,feedsection)
root.append(header,main)


