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


trainer = Account.create(
    account_type: "Trainer"
    );

client = Account.create(
    account_type: "Client"
    );

kay = User.create(
    email:'kay@ga.com.au', 
    password:'123456', 
    is_admin: true

    );

otis = User.create(
    email:'otis@ga.com.au', 
    password:'123456', 
    is_admin: false

    );

maeve = User.create(
    email:'maeve@ga.com.au', 
    password:'123456', 
    is_admin: false
 
    );

Lesson.create(
    url: 'https://via.placeholder.com/300/D5A4A8 ?Text=TestOnly', 
    title: 'Make Papaya Salad',
    duration: 1,
    cost:50,
    category: '',
    language: 'Thai',
    level: 'Intermediat',
    description: 'You will learn how to make Papaya Salad'
    );

Lesson.create(
    url: 'https://via.placeholder.com/300/D5A4A8 ?Text=TestOnly', 
    title: 'Make Beef Jerky',
    duration: 1-2,
    cost:100,
    category: '',
    language: 'English',
    level: 'Advance',
    description: 'You will learn how to make Beef Jerky'
    );
Lesson.create(
    url: 'https://via.placeholder.com/300/D5A4A8 ?Text=TestOnly', 
    title: 'Make Green Curry',
    duration: 1,
    cost:20,
    category: '',
    language: 'English',
    level: 'Beginner',
    description: 'You will learn how to make Green Curry'
    );
Lesson.create(
    url: 'https://via.placeholder.com/300/D5A4A8 ?Text=TestOnly', 
    title: 'Make Pad Thai',
    duration: 1-2,
    cost:50,
    category: '',
    language: 'English',
    level: 'Intermediate',
    description: 'You will learn how to make Pad Thai'
    );
Lesson.create(
    url: 'https://via.placeholder.com/300/D5A4A8 ?Text=TestOnly', 
    title: 'Make Basil Stirfry',
    duration: 1,
    cost:50,
    category: '',
    language: 'English',
    level: 'Beginner',
    description: 'You will learn how to make Basil Stirfry'
    );

puts "seeding Accounts database created #{Account.all.length}"
puts "seeding Users database created #{User.all.length}"
puts "seeding Lessons database created #{Lesson.all.length}"