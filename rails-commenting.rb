# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# BlogPosts controller directs the flow of the application.
  #The controller collects information from database, stores local variable inside methods, and responsible for displaying the views.
class BlogPostsController < ApplicationController
  def index
    # ---2)
    #Method to all the blog post landing page
    @posts = BlogPost.all
  end

  # ---3)
   #Local variable, custom made method that will send back one instance of this model being queried. For example, Only blogpost that has an id will be displayed.Find Id that is passed through form or URL
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # Method to post a new blogpost and send that to the database.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5
    # Method to create a new blog post only meet specific parameters. If the blog pass all validations then redirect to instance variable that will post a new blogpost and send that to the database.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    #Method allowing user, in a HTML form to edit data in blog post that will update the instance of @post. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    #Overwrites existing instance the database and redirects backs to @post instance variable.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      #Removes item fom the database.
      redirect_to blog_posts_path
    end
  end

  # ---9)
  # Private method can only be called inside the blog_post_params method. 
  private
  def blog_post_params
    # ---10)
    # private method with strong parameters. Giving permission to allow validated creditials user to write a new blog post. Allowing the user to only create what attributes are given, which is title and content sections.
    params.require(:blog_post).permit(:title, :content)
  end
end
