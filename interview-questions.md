# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: Student model for all students and their information is assigned a personal id for each student. Through migration, an update can be made and column added for foreign key. Foreign key column allow rails magic to make the associations. For example, Cohort_has_many, foreign keys belongs_to Student.    

Researched answer: When creating new student or updating a students information, Rails automatically add primary key to each student in database.

2. Which RESTful routes must always be passed params? Why?

Your answer: RESTful routes, PATCH/PUT, allow users modify things. Params are need to ensure users are authorized to make any changes.

Researched answer: Params has access to frorms and URL queries. Params define what is required from a user. Prevents any malicious attempts to pass false data. 

3. Name three rails generator commands. What is created by each?

Your answer: 1. Generate model - create corresponding file structure to include a database schema. 2.Generate migrate, which is used to update datbase over time. 3.generate contoller, it's responsible getting request and displaying the correct data be to seen .

Researched answer: Generate commands, Rails set up corresponding file structure. The generator will make sure there are directories for models, controllers, helpers, layouts, creating views.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
```ruby
# retrieves the location of students. Sent to landing page(index)
```
action: "POST" location: /students
```ruby
#sends new location of student in database.
```
action: "GET" location: /students/new
```ruby
# retrieves location of new student.
```
action: "GET" location: /students/2
```ruby
# retrieves the location of student that is associated with student 2 primary key.
```
action: "GET" location: /students/2/edit
```ruby
#retrieves data for student 2 to edit. However, should be unable to. PUT request is needed to edit.
```
action: "PATCH" location: /students/2
```ruby
#updates student 2 location.
```
action: "DELETE" location: /students/2
```ruby
#student 2 data will be removed from database.
```
5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
1.
As a <user's role>
I want to <what ?> have a list of my errands/tasks to accomplish.
So that <why ?> a user can organize and track daily (e.g. feature proposals--weekly, or monthly) tasks that are scheduled to be completed.

2.
As a <user>
I want to <what> to see daily tasks to-do.
So that <why> a user, see task that are completed.

3.
As a <user>
I want to <what> check field to highlight tasks completed.
So that <why> a user, see indication of completed tasks.

4.
As a <user> a user can focus on remaining tasks.
I want to <what> have a button that deletes completed tasks.
So that <why> all completed tasks are deleted and from removed from memory too.

5.
As a <user> can have a clear, simple understanding and details of remaining tasks.
I want to <what> have ability to edit tasks list.
So that <why> a user, can have ability to rearrange order of tasks.

6.
As a <user>
I want to <what> reminded of remaining tasks.
So that <why> a user, can see list of tasks left to complete.

7.
As a <user> should have a button feature.
I want to <what> option to rearrange tasks by priority.
So that <why> a user can priortize task in schedule.

8.
As a <user> can access outdated and completed tasks can be removed.
I want to <what> remove/delete tasks(note--link_to user story 4).
So that <why> a user can click button to remove All task.

9.
As a <user> can add tasks
I want to <what> modify, to add tasks.
So that <why> tasks to-do lists can stay up to date 

10.
As a <user> reset list
I want to <what> reset list, empty all fields once all tasks are completed.
So that <why> a user have fresh list and can create new tasks list.
