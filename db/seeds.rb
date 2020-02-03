# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Account.destroy_all 
User.destroy_all 
Lesson.destroy_all
include BCrypt

trainer = Account.create(
    account_type: "Trainer"
    );

client = Account.create(
    account_type: "Client"
    );

# kay = User.create(
#     email:'kay@ga.com.au', 
#     password_digest:'123456', 
#     is_admin: true,
#     account_id: 1
#     );

# otis = User.create(
#     email:'otis@ga.com.au', 
#     password_digest:'123456', 
#     is_admin: false,
#     account_id: 1
#     );

# maeve = User.create(
#     email:'maeve@ga.com.au', 
#     password_digest:'123456', 
#     is_admin: false,
#     account_id: 1
#     );

Lesson.create(
    image: 'https://imgur.com/rYq0OJN', 
    title: 'Learn how to make Papaya Salad',
    duration: 30,
    cost:50,
    category: '',
    language: 'Thai',
    level: 'Beginner',
    description: 'You will learn how to make Papaya Salad'
    );

puts "seeding data base created #{Account.all.length}"
puts "seeding data base created #{User.all.length}"
puts "seeding data base created #{Lesson.all.length}"