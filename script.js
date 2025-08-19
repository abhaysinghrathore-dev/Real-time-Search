let users = [
    {
        name: "Abhay Singh ",
        pic:"https://images.unsplash.com/photo-1598198414976-ddb788ec80c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxwcm9maWxlfGVufDB8fDB8fHww",
        bio: "Silent chaos in a loud world ✨ | not for everyone",
    },
    {
    name: "Shreyansh Rajput",
    pic: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    bio: "Dreamer 🌌 | Coffee before chaos ☕ | Learning to live"
    },
    {
    name: "Shanti Sharma",
    pic: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxwcm9maWxlfGVufDB8fDB8fHww",
    bio: "Radiating positivity ✨ | tea > everything ☕✨"
    },
    {
    name: "Prateek Seghal",
    pic: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    bio: "Half human, half code 💻 | Gym + JavaScript = Me"
    },
    {
    name: "Tara Sharma",
    pic: "https://images.unsplash.com/photo-1676149038599-f04c37d58850?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHBpbmslMjBnaXJsfGVufDB8fDB8fHww",
    bio: "Lost in books 📚 | Found in travel 🌍"
    },
    {
    name: "Bishal Pradhan",
    pic: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    bio: "Introvert vibes 🌙 | Friends > Followers"
    },
    {
    name: "Divya Singh",
    pic: "https://plus.unsplash.com/premium_photo-1669704098876-2a38eb10e56a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGdpcmwlMjBwcm9maWxlfGVufDB8fDB8fHww",
    bio: "Art is my escape 🎨 | Living one sketch at a time"
    },
    {
    name: "Pradeep Kumar",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    bio: "Foodie at heart 🍕 | Adventure seeker ⛰️"
    },
    {
    name: "Aarav Mehta",
    pic: "https://plus.unsplash.com/premium_photo-1727894728677-b4d6f7f172af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM2fHxtb2RlbGluZyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Chasing sunsets 🌅 | Coding my dreams 💡"
},
{
    name: "Ishita Verma",
    pic: "https://images.unsplash.com/photo-1631885986951-b1e177f3e89f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDc4fHxnaXJsfGVufDB8fDB8fHww",
    bio: "Coffee in hand ☕ | Confidence in heart 💃"
},
{
    name: "Rohit Yadav",
    pic: "https://plus.unsplash.com/premium_photo-1727942418440-d085b3b5f065?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYxfHxtb2RlbGluZyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Work hard 💪 | Chill harder 😎"
},
{
    name: "Simran Kaur",
    pic: "https://plus.unsplash.com/premium_photo-1664875849194-0adbac28529f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTUzfHxnaXJsfGVufDB8fDB8fHww",
    bio: "Dream big ✨ | Hustle every day 🚀"
},
{
    name: "Kabir Malhotra",
    pic: "https://images.unsplash.com/photo-1654514435401-7e5ea64ee6df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxtb2RlbGluZyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Fitness + Focus = Life 🏋️ | Future CEO 👔"
},
{
    name: "Neha Patel",
    pic: "https://images.unsplash.com/photo-1619024370140-d625f2e354f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTU5fHxnaXJsfGVufDB8fDB8fHww",
    bio: "Butterflies & Books 🦋📖 | Calm soul 🌸"
},
{
    name: "Aditya Sharma",
    pic: "https://images.unsplash.com/photo-1616165680859-60a8039e3695?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVsaW5nJTIwbWVufGVufDB8fDB8fHww",
    bio: "Building ideas into reality 💡 | Sports addict ⚽"
},
{
    name: "Riya Kapoor",
    pic: "https://images.unsplash.com/photo-1575818184258-1ceb64f40ff8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTY2fHxnaXJsfGVufDB8fDB8fHww",
    bio: "Smile = my signature 😊 | Wanderlust mode on 🌍"
},
{
    name: "Arjun Nair",
    pic: "https://images.unsplash.com/photo-1642886513133-cdbee2639272?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1vZGVsaW5nJTIwbWVufGVufDB8fDB8fHww",
    bio: "Engineer of code 🔧 | Lover of music 🎶"
},
{
    name: "Meera Joshi",
    pic: "https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
    bio: "Lost in art 🎨 | Found in kindness 💕"
},
  {
    name: "Ananya Gupta",
    pic: "https://images.unsplash.com/photo-1684961415565-80383f48c0c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYWRpdGlvbmFsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Be kind 🌸 | Live free ✨"
  },
  {
    name: "Karan Sethi",
    pic: "https://images.unsplash.com/photo-1635583365913-aebde2caf6df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vZGVsaW5nJTIwbWVufGVufDB8fDB8fHww",
    bio: "Tech geek 💻 | Always curious 🤔"
  },
  {
    name: "Priya Rathi",
    pic: "https://images.unsplash.com/photo-1631005436794-ccaa79de61ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHRyYWRpdGlvbmFsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Coffee first ☕ | Smiles forever 😊"
  },
  {
    name: "Manish Yadav",
    pic: "https://images.unsplash.com/photo-1694457454567-0000233229d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxib3l8ZW58MHx8MHx8fDA%3D",
    bio: "Sports buff ⚽ | Code junkie 👨‍💻"
  },
  {
    name: "Sanya Mehta",
    pic: "https://images.unsplash.com/photo-1659541869669-97012d7e66fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYWRpdGlvbmFsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Dancing through life 💃 | Dreaming big ✨"
  },
  {
    name: "Vikram Chauhan",
    pic: "https://images.unsplash.com/photo-1664856514301-08d72e3f1d4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGJveXxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Fitness is life 💪 | Food is love 🍲"
  },
  {
    name: "Pooja Nair",
    pic: "https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Creative soul 🎨 | Ocean lover 🌊"
  },
  {
    name: "Siddharth Malhotra",
    pic: "https://images.unsplash.com/photo-1630871191426-8a6d1419a716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBmb3JtYWwlMjBtZW58ZW58MHx8MHx8fDA%3D",
    bio: "Think different 💡 | Break limits 🚀"
  },
  {
    name: "Nikita Arora",
    pic: "https://images.unsplash.com/photo-1621786030484-4c855eed6974?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Radiating positivity 🌟 | Books are bae 📚"
  },
  {
    name: "Rajeev Khanna",
    pic: "https://images.unsplash.com/photo-1738928887692-24d41eb610cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg4fHxtb2RlbCUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Hustle in silence 🤫 | Shine loud ✨"
  },
  {
    name: "Sneha Iyer",
    pic: "https://images.unsplash.com/photo-1728458519921-191b57462451?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Amit Bansal",
    pic: "https://plus.unsplash.com/premium_photo-1673734625279-2738ecf66fa1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg1fHxtb2RlbCUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Traveler 🌍 | Explorer ⛰️"
  },
  {
    name: "Radhika Kapoor",
    pic: "https://images.unsplash.com/photo-1650612546797-4b8cf3625a11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Poetry is life ✍️ | Dream is reality ✨"
  },
  {
    name: "Aakash Jain",
    pic: "https://images.unsplash.com/photo-1640537522197-21d47395c8ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc5fHxtb2RlbCUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Code. Sleep. Repeat. 👨‍💻"
  },
  {
    name: "Ira Khurana",
    pic: "https://plus.unsplash.com/premium_photo-1682095661711-f5d67d0e75a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Ocean child 🌊 | Sky dreamer ☁️"
  },
  {
    name: "Harsh Sharma",
    pic: "https://images.unsplash.com/photo-1709675153622-5aeb5d33557a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU0fHxtb2RlbCUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Cricket fan 🏏 | Startup mindset 🚀"
  },
  {
    name: "Tanvi Deshmukh",
    pic: "https://images.unsplash.com/photo-1620993208551-ec648b0468bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ2fHxtb2RlbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
    bio: "Lost in novels 📖 | Found in coffee ☕"
  },
  {
    name: "Dhruv Ahuja",
    pic: "https://plus.unsplash.com/premium_photo-1664876514376-e684971ec8d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxtb2RlbCUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Future innovator 💡 | Always learning 📚"
  },
  {
    name: "Megha Singh",
    pic: "https://images.unsplash.com/photo-1671712292920-44d2e96d00d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHxtb2RlbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
    bio: "Smile often 😊 | Love deeply ❤️"
  },
  {
    name: "Parth Patel",
    pic: "https://images.unsplash.com/photo-1633116176661-2b43baa87452?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxtb2RlbCUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Gamer at heart 🎮 | Coder by brain 👨‍💻"
  },
  {
    name: "Ayesha Khan",
    pic: "https://images.unsplash.com/photo-1699421099066-f4dd219945f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI3fHxtb2RlbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
    bio: "Fashion lover 👗 | Peace seeker 🌸"
  },
  {
    name: "Naman Verma",
    pic: "https://images.unsplash.com/photo-1743792395257-60bdc120b8e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxtb2RlbCUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Adventurer ⛰️ | Dream catcher 🌌"
  },
  {
    name: "Kritika Joshi",
    pic: "https://images.unsplash.com/photo-1624610806209-82a4cbb4339a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU1fHxtb2RlbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
    bio: "Dancing in the rain 🌧️ | Smiling in pain 🌸"
  },
  {
    name: "Rohit Sharma",
    pic: "https://images.unsplash.com/photo-1666979569182-2ec7306a8944?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxtb2RlbCUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Cricket crazy 🏏 | Tech lover ⚡"
  },
  {
    name: "Avantika Mishra",
    pic: "https://plus.unsplash.com/premium_photo-1668896123844-be3aec7a4776?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDUzfHxnaXJsfGVufDB8fDB8fHww",
    bio: "Sunshine mixed with a little chaos ☀️✨"
  },
  {
    name: "Varun Saxena",
    pic: "https://plus.unsplash.com/premium_photo-1670948083554-dde9411f3d1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxtb2RlbCUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Music heals 🎶 | Gym builds 💪"
  },
  {
    name: "Shruti Sharma",
    pic: "https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzIxfHxnaXJsfGVufDB8fDB8fHww",
    bio: "Silence speaks volumes 🤫 | Books whisper 📚"
  },
  {
    name: "Rajat Gupta",
    pic: "https://images.unsplash.com/photo-1649544944398-cc481b99b8aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxtb2RlbCUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Designing tomorrow 🎨 | Living today 🌍"
  },
  {
    name: "Neeraj Kumar",
    pic: "https://plus.unsplash.com/premium_photo-1664875849419-3dc59ec24433?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxtb2RlbCUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Sports, travel, repeat ⚽✈️"
  },
  {
    name: "Tanya Oberoi",
    pic: "https://images.unsplash.com/photo-1534083220759-4c3c00112ea0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY2fHxnaXJsfGVufDB8fDB8fHww",
    bio: "Doodle addict ✏️ | Living in colors 🌈"
  },
  {
    name: "Ankit Tiwari",
    pic: "https://plus.unsplash.com/premium_photo-1727942421523-13ef5b5ebd78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fG1vZGVsJTIwbWVufGVufDB8fDB8fHww",
    bio: "Problem solver 🧩 | Code lover 💻"
  },
  {
    name: "Shalini Sharma",
    pic: "https://images.unsplash.com/photo-1516195851888-6f1a981a862e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQzfHxnaXJsfGVufDB8fDB8fHww",
    bio: "Peace seeker 🌸 | Nature lover 🌳"
  },
  {
    name: "Kabir Arora",
    pic: "https://images.unsplash.com/photo-1656238763579-f4cb2928119a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fG1vZGVsJTIwbWVufGVufDB8fDB8fHww",
    bio: "Work smart 🧠 | Play harder 😎"
  },
  {
    name: "Ritika Chauhan",
    pic: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg4fHxnaXJsfGVufDB8fDB8fHww",
    bio: "Lost in melodies 🎶 | Found in art 🎨"
  },
  {
    name: "Mohit Sharma",
    pic: "https://images.unsplash.com/photo-1665753534790-d11b1d68926d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fG1vZGVsJTIwbWVufGVufDB8fDB8fHww",
    bio: "Learning. Unlearning. Relearning 📘"
  },
  {
    name: "Surbhi Sinha",
    pic: "https://plus.unsplash.com/premium_photo-1687188208286-adab13d34175?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM3fHxnaXJsfGVufDB8fDB8fHww",
    bio: "Sky above ☁️ | Earth below 🌍"
  },
  {
    name: "Devendra Singh",
    pic: "https://images.unsplash.com/photo-1656697891325-59492d92d542?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fG1vZGVsJTIwbWVufGVufDB8fDB8fHww",
    bio: "Engineer of dreams 👷 | Builder of ideas 💡"
  },
  {
    name: "Pallavi Jain",
    pic: "https://images.unsplash.com/photo-1578979879663-4ba6a968a50a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGdpcmx8ZW58MHx8MHx8fDA%3D",
    bio: "Smiles and sunshine ☀️ | Love and laughter 💕"
  },
  {
    name: "Rohan Kapoor",
    pic: "https://images.unsplash.com/photo-1660816610195-ce09f2b37c05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fG1vZGVsJTIwbWVufGVufDB8fDB8fHww",
    bio: "Code warrior 👨‍💻 | Life explorer 🌍"
  },
  {
    name: "Alisha Das",
    pic: "https://images.unsplash.com/photo-1604004215402-e0be233f39be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fGdpcmx8ZW58MHx8MHx8fDA%3D",
    bio: "Lost in thoughts 💭 | Living in art 🎨"
  },
  {
    name: "Naveen Joshi",
    pic: "https://images.unsplash.com/photo-1709004915865-38bc70f4cb78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fG1vZGVsJTIwbWVufGVufDB8fDB8fHww",
    bio: "Coding is poetry 💻✨"
  },
  {
    name: "Maya Singh",
    pic: "https://images.unsplash.com/photo-1542996966-2e31c00bae31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxnaXJsfGVufDB8fDB8fHww",
    bio: "Books + Coffee = Happiness ☕📚"
  },
  {
    name: "Rajat Mehra",
    pic: "https://images.unsplash.com/photo-1709746460182-51940c3f9a43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fG1vZGVsJTIwbWVufGVufDB8fDB8fHww",
    bio: "Never stop exploring ✈️"
  },
  {
    name: "Shreya Desai",
    pic: "https://plus.unsplash.com/premium_photo-1673792327196-891fb07c0e3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGdpcmx8ZW58MHx8MHx8fDA%3D",
    bio: "Sunshine mixed with determination ☀️"
  },
  {
    name: "Aryan Khurana",
    pic: "https://plus.unsplash.com/premium_photo-1664868839978-8fba95c0cdc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWwlMjBtZW58ZW58MHx8MHx8fDA%3D",
    bio: "Sportsman spirit 🏏 | Learner forever 📚"
  },
  {
    name: "Khushi Verma",
    pic: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGdpcmx8ZW58MHx8MHx8fDA%3D",
    bio: "Love. Laugh. Live. ❤️✨"
  },
  {
    name: "Yashwant Rao",
    pic: "https://images.unsplash.com/photo-1622519407650-3df9883f76a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWwlMjBtZW58ZW58MHx8MHx8fDA%3D",
    bio: "Driven by passion 🚀 | Guided by faith 🙏"
},
{
    name: "Navya Agarwal",
    pic: "https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
    bio: "Smile is my superpower 🌸"
}
];

let cardsContainer = document.querySelector(".cards");
let inp = document.querySelector(".inp");

// Function to create & render user cards
function showUsers(arr) {

    // Use DocumentFragment for performance
    const fragment = document.createDocumentFragment();

    arr.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("card");

        // Image
        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        // Blurred Layer
        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.classList.add("blurred-layer");

        // Content
        const content = document.createElement("div");
        content.classList.add("content");

        const h3 = document.createElement("h3");
        h3.textContent = user.name;

        const p = document.createElement("p");
        p.textContent = user.bio;

        content.appendChild(h3);
        content.appendChild(p);

        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        fragment.appendChild(card);
    });

    // Clear old cards & append all at once
    cardsContainer.innerHTML = "";
    cardsContainer.appendChild(fragment);
}

// Initial render
showUsers(users);

// Debounce function
function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Input filter with debounce
inp.addEventListener("input", debounce(function () {
    let search = inp.value.toLowerCase();
    let newUsers = users.filter(user => user.name.toLowerCase().startsWith(search));
    showUsers(newUsers);
}, 300));

//saare users show karnaa
// filter karna har baar input karne pe
// show karna filtered users ko