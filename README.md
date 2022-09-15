Objective:

    
Build a simple blog to practice managing more complex components and application states. SIGN IN
    ● As a user, I should be able to enter my name and the URL for a profile picture to log into
    the app.
    ● Once I am logged in I should be able to post and remove posts from the wall.
        state:
            name(str)
            url (str)

Acceptance criteria:
    ● The first page should have a sign-in form where the user will enter a user name and the
    URL for a profile picture.
        ○ Use state to keep track of the user data (username and profile pic).
        ○ Website for sample profile pictures: https://www.uifaces.co/browse-avatars/
    ● After the user has signed in, the sign-in form should disappear from the screen and a
    post prompt(<textarea>) should show up that allows the user to make a post.
        ○ Use state to keep track of the list of posts, and assign a post id to each post to
        help you identify each post.

    ● Each post the user makes should display below the post prompt(<textarea>) as shown in
    the design.
    ● Each should have a delete post button that removes the post from the screen.
        ○ Remove the post with a certain id from the state.
    ● The right top corner of the header should show the image the user entered in the sign-in
    form after they signed in.
        ○ The header should show the profile picture if the user information is in the state.
    ● No back end needed.
    ● Data does not have to be persisted after refreshes.
