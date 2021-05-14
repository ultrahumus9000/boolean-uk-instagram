
let root = document.querySelector('#root')
let users = []
let posts = []

// header part add single user account then addusersaccount then create a header also pass the userinfo
function getusersinfo(){
     return fetch('http://localhost:3000/users')
            .then(function(resp){
                return resp.json()
            })
}

function getpostinfo(){
    return fetch('http://localhost:3000/posts')
            .then(function(resp){
                return resp.json()
            })
}

function createheader(){
    let wrapper = document.createElement('div')
    wrapper.setAttribute('class','wrapper')
    let header = document.createElement('header')
    header.append(wrapper)
    header.setAttribute('class','main-header')
    root.append(header)
    getusersinfo()
    .then(function(usersfromserver){
        users = usersfromserver
        adduseraccount(users)
    })
} 

function adduseraccount(users){
    let wrapper = document.querySelector('.wrapper')
    for( const user of users){
       let chipactive =  addsinglesuer(user)
       wrapper.append(chipactive)
    }
    
} 

function addsinglesuer(user){
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
    return chipactive
}

function createmain(){
let main = document.createElement('main')
main.setAttribute('class','wrapper')
let createpostsection = createpostform() 
let feedsection = createfeed(posts)
main.append(createpostsection,feedsection)
root.append(main)
}

function createpostform(){
let createpostsection = document.createElement('section')
createpostsection.setAttribute('class','create-post-section')
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
// previewbutton.setAttribute('type','submit')
let postbutton = document.createElement('button')
postbutton.setAttribute('class','postbutton')
postbutton.setAttribute('type','submit')
postbutton.innerText = 'Post'
buttondiv.append(previewbutton, postbutton)
formel.append(formtitle,labelimage,inputimage,labeltext,inputtext,labelcontent,textareael,buttondiv)
let useridvalue = 2

let previewcard = document.createElement('div')
previewcard.setAttribute('class','post preview-card')
 function createpreviewcard(){
    let user = {
        "username": "Salvador Dali",
        "avatar": "https://uploads5.wikiart.org/images/salvador-dali.jpg!Portrait.jpg"
    }
    let previewheader = addsinglesuer(user)
    
    let loadingdiv = document.createElement('div')
    loadingdiv.setAttribute('class','post--image loading-state')
    
    let previewcontent = document.createElement('div')
    previewcontent.setAttribute('class','post--content')
    
    let loadingtitle = document.createElement('h2')
    loadingtitle.setAttribute('class','loading-state')
    
    let loadingtext = document.createElement('p')
    loadingtext.setAttribute('class','loading-state')
    previewcontent.append(loadingtitle,loadingtext)
    
    previewcard.append(previewheader,loadingdiv,previewcontent)
    previewbutton.addEventListener('click',function(event){
        event.preventDefault()
        loadingtitle.innerText = inputtext.value           
        loadingtext.innerText = textareael.value
        let previewimg = document.createElement('img')
        previewimg.setAttribute('class','previewimg' )
        previewimg.setAttribute('src',"https://images.pexels.com/photos/7684196/pexels-photo-7684196.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500")
        loadingdiv.append(previewimg)
        formel.reset()                          
    })
 }
 createpreviewcard()

createpostsection.append(formel,previewcard) 
postbutton.addEventListener('submit', function(event){
    event.preventDefault()
    useridvalue++
    post = 
    {
    "title": inputtext.value,
    "content": textareael.value,
    "image": {
        "src": inputimage.value,
        "alt": "a tree in blossom"
    },
    "likes": 0,
    "userId": useridvalue,
    "comments": [ ]
    }
        let liFeedList = createsinglepost(post)
        ulFeedList = document.querySelector('ul')
        ulFeedList.append(liFeedList)

        function addnewpostdata(){
            fetch(`http://localhost:3000/posts`,{
                method:'POST',
                headers: {'Content-Type':"application/json"},
                body: JSON.stringify({
                    "title": inputtext.value,
                    "content": textareael.value,
                    "image": {
                        "src": inputimage.value,
                        "alt": "a tree in blossom"
                    },
                    "likes": 0,
                    "userId": useridvalue,
                    "comments": [ ]
                    })
                })
            }
        addnewpostdata()

    formel.reset()
})
return createpostsection
}

/* <section class="create-post-section">

  <!-- FOR THE CHALLENGE START -->
  <div class="post">
    <!-- Go to post.html and scroll down to the preveiw cards -->
  </div>
  <!-- FOR THE CHALLENGE END -->
</section> */
function commentsdisplay(comments){
    let divguestcomments = document.createElement('div')
    divguestcomments.setAttribute('class','post--comments')
    let h3Comment = document.createElement('h3')
    h3Comment.innerText = 'Comments'
    divguestcomments.append(h3Comment)
    for (const comment of comments ){
        let guestcomment = createcomment(comment)
        divguestcomments.append(guestcomment)  
    }
    return divguestcomments
}
function createcomment(comment){
    let guestcomment = document.createElement('div')
    guestcomment.setAttribute('class','post--comment') 
   
    let guestdivimage = document.createElement('div')
    guestdivimage.setAttribute('class','avatar-small') 
   
    let guestimage = document.createElement('img')
   //  variable
    let user = users.find(function(user){
        return user.id === comment.userId
    })
    guestimage.setAttribute('src', user.avatar) 
    guestdivimage.append(guestimage)
   
    let pComment = document.createElement('p')
    pComment.setAttribute('class','commentforp') 
    // variable
    pComment.innerText = comment.content

    let deletebtn = document.createElement('button')
    deletebtn.setAttribute('class','deletebtn') 
    deletebtn.innerText = 'Delete'
    pComment.append(deletebtn)
    guestcomment.append(guestdivimage,pComment)
   
    deletebtn.addEventListener('click', function(){
        let id = comment.id
        fetch(`http://localhost:3000/comments/${id}`,{
            method:'DELETE' 
        }).then(function(){
            guestcomment.remove()
        }
        )
        
    })
    return guestcomment
}

function createsinglepost(post){
    let liFeedList = document.createElement('li')
    liFeedList.setAttribute('class','post')
       let user =  users.find(function(user){
            return user.id === post.userId
        })

    let divchipactive = addsinglesuer(user)
        
    let divPostimage = document.createElement('div')
    divPostimage.setAttribute('class','post--image')
    
    let imgContent = document.createElement('img')
    // Variable
    imgContent.setAttribute('src',post.image.src)
    
    divPostimage.append(imgContent)
    
    let divPostContent = document.createElement('div')
    divPostContent.setAttribute('class','post--content')
    
    let h2Content = document.createElement('h2')
    // Variable
    h2Content.innerText = post.title
    let pContent = document.createElement('p')
    // variable
    pContent.innerText = post.content
    divPostContent.append(h2Content,pContent)
    
    let comments = post.comments
    let divguestcomments = commentsdisplay(comments)
         
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
    
    let submitbtn = document.createElement('button')
    submitbtn.setAttribute('type','submit')
    submitbtn.innerText = 'Comment'
    comentform.append(addcommentlabel,inputcomment,submitbtn)

    comentform.addEventListener('submit',function(event){
        event.preventDefault()
        fetch(`http://localhost:3000/comments`,{
            method:'POST',
            headers: {'Content-Type':"application/json"},
            body: JSON.stringify({
                "content": inputcomment.value,
                "userId": post.userId,
                "postId": post.id
            })
        }).then(function(){
            let comment = { 
                "content": inputcomment.value,
                "userId": post.userId,
                "postId": post.id
            }
            let guestcomment = createcomment(comment)
            divguestcomments.append(guestcomment)  
            comentform.reset()
        }
        )
    })
 
    liFeedList.append(divchipactive,divPostimage,divPostContent,divguestcomments,comentform)
    return liFeedList
}

function createallposts (posts){
    let ulFeedList = document.createElement('ul')
    ulFeedList.setAttribute('class','stack')
    getpostinfo().then(function(postfromserver){
        posts = postfromserver
        for(const post of posts){
            let liFeedList = createsinglepost(post)
            ulFeedList.append(liFeedList)
            }
    })
    return ulFeedList
}

function createfeed(posts){
let feedsection = document.createElement('section')
feedsection.setAttribute('class','feed')
let ulFeedList = createallposts (posts)
feedsection.append(ulFeedList)
return feedsection
}

createheader()
createmain()


