# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Account.destroy_all 
User.destroy_all 
Trainer.destroy_all
Lesson.destroy_all
Schedule.destroy_all

trainer = Account.create(
    account_type: "Trainer"
    );

client = Account.create(
    account_type: "Client"
    );

kay = User.create(
    email:'kay@ga.com.au', 
    password:'123456', 
    is_admin: true,
    account_id: 1
    );

otis = User.create(
    email:'otis@ga.com.au', 
    password:'123456', 
    is_admin: false,
    account_id: 1
    );

maeve = User.create(
    email:'maeve@ga.com.au', 
    password:'123456', 
    is_admin: false,
    account_id: 1
    );

otis = Trainer.create(
    photo: "https://imgur.com/EVLZoEe",
    first_name: "Otis",
    last_name: "Milburn",
    phone: "0449-855-177",
    bio: "An education in mixology that will shake you to your core.",
    experience:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam eleifend mi.",
    user_id: 2,
    account_id: 1
)

maeve = Trainer.create(
    photo: "https://imgur.com/L6xb9Hm",
    first_name: "Meave",
    last_name: "Wiley",
    phone: "0449-855-177",
    bio: "Keep it classy never trashy, just a little nasty.",
    experience:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam eleifend mi.",
    user_id: 3,
    account_id: 1
)
Lesson.create(
    url: 'https://imgur.com/RB8GlGk', 
    title: 'Basket Weaving Class',
    duration: "2.5",
    cost: 165,
    category: '',
    language: 'English',
    level: 'Biginner',
    description: 'In this two and a half hour workshop, with guest fibre artist Robyn Morris, we will work with a Bangalow palm inflorescence, which is the seed carrier of our Australian native tree. The inflorescence is freshly fallen and once prepared is deliciously soft and supple for weaving.'
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

Schedule.create(
    title:"Available", 
    start:"2020-02-15T09:00", 
    end:"2020-02-15T18:00", 
    trainer_id:1, 
    account_id:1,
    lesson_id:1
    );
Schedule.create(
    title:"Available", 
    start:"2020-02-16T09:00", 
    end:"2020-02-16T18:00", 
    trainer_id:2, 
    account_id:1,
    lesson_id:2
    );
    

puts "seeding Accounts database created #{Account.all.length}"
puts "seeding Users database created #{User.all.length}"
puts "seeding Trainers database created #{Trainer.all.length}"
puts "seeding Lessons database created #{Lesson.all.length}"
puts "seeding Schules database created #{Schedule.all.length}"