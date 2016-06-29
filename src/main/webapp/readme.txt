/**
 * Intro
 */
Full Name: Steven Zhou
Email: stevenz@udel.edu
Browsers tested: Safari(Latest), Chrome(Latest), iOS(iPhone)

/**
 * List of libraries used.
 */
Lib1: angular-route.js 
Reason: Routing page based on url. Single page application.

Lib2: moment.js 
Reason: Localize date and display things like ¡°post x days ago¡±.

Lib3: require.js 
Reason: Organize js files and dependencies.

Lib4: ngToast.js animate.js
Reason: Show success and error msg as toast message.

Lib5: bootstrap.js boostrap.css
Reason: Implement modal dialog. Building responsive sites for different size of devices.

Lib6: confirm.js
Reason: Confirm dialog.

Lib7: trix-editor.js (Tested but unused)
Reason: A rich text editor that make user more expresive.
Reason not use: Conflict with bootstrap modal.


/**
 * List of Files.
 */

# AngularJS config file
./app.js

# A header directive using to display header section of blog.
# including ¡°NewPost¡± and ¡°DeleteAll¡± functions.
./components/blog-header/blog-header-directive.js
./components/blog-header/blog-header.css
./components/blog-header/blog-header.html
./components/blog-header/blog-header.js

# Central css file.
./css/app.css

# Main landing html page.
./index.html

# RequireJs config file.
./main.js

# Blog Project description.
./readme.txt

# Delete post service for making deleting request.
./services/post-delete/post-delete-service.js
./services/post-delete/post-delete.js

# Get post service for making get post request.
./services/post-get/post-get-service.js
./services/post-get/post-get.js

# Post post service for making post/update request.
./services/post-post/post-post-service.js
./services/post-post/post-post.js

# View for main section with lists of posts with maximum length of content.
./views/main/main.css
./views/main/main.html
./views/main/main.js

# View for full post section with only one post with full conent.
./views/post/post.css
./views/post/post.html
./views/post/post.js

# View of modal dialog for editing or updating a post.
./views/post-edit/post-edit.css
./views/post-edit/post-edit.html
./views/post-edit/post-edit.js


/**
 * Tests unfinisted.
 */

1. Put trix-editor in a modal. Spent hours looking for solutions for this issue, but it seems like a very common one and no available solutions for it. Would like to dive into it more to get it work eventually, but it would probably take much longer time than this evaluation process.

2. Minify the file into one single css or js file to reduce their size. The speed for now is totally acceptable, but there is still space for optimizing it. But it would take much for handling namespaces and types defs before we can get it minified.
