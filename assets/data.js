export const groups = [
    {
        id: 1,
        name: "Tajweed Class",
        teacher: "Sheikh Ahmad Al-Farsi",
        timing: { day: "Monday", hour: "5:00 PM" },
        description: "A detailed course on proper Quranic pronunciation and recitation rules.",
        image: "tajweed.jpg"
    },
    {
        id: 2,
        name: "Quran Memorization",
        teacher: "Sheikh Ibrahim Al-Najdi",
        timing: { day: "Wednesday", hour: "6:30 PM" },
        description: "A structured program to help students memorize the Holy Quran efficiently.",
        image: "quran-memorization.jpg"
    },
    {
        id: 3,
        name: "Islamic Studies",
        teacher: "Ustadh Maryam Al-Zahra",
        timing: { day: "Friday", hour: "4:00 PM" },
        description: "Covers Islamic history, Fiqh, and key principles of Islamic teachings.",
        image: "islamic-studies.jpg"
    },
    {
        id: 4,
        name: "Hadith Studies",
        teacher: "Sheikh AbdulRahman Al-Khattabi",
        timing: { day: "Tuesday", hour: "7:00 PM" },
        description: "A study of authentic Hadith collections and their applications in daily life.",
        image: "hadith-studies.jpg"
    },
    {
        id: 5,
        name: "Quran Tafsir",
        teacher: "Mufti Khalid Al-Makki",
        timing: { day: "Thursday", hour: "5:30 PM" },
        description: "An in-depth explanation of Quranic verses with historical and linguistic context.",
        image: "quran-tafsir.jpg"
    }
];
export const teachers = [
    {
        id: 1,
        name: "Sheikh Ahmad Al-Farsi",
        description: "Expert in Tajweed and Quranic recitation with over 15 years of teaching experience.",
        phoneNumber: "+1234567890",
        image: "https://images.pexels.com/photos/539727/pexels-photo-539727.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 2,
        name: "Sheikh Ibrahim Al-Najdi",
        description: "Specialist in Quran memorization techniques and personalized learning strategies.",
        phoneNumber: "+1987654321",
        image: "https://images.pexels.com/photos/539727/pexels-photo-539727.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 3,
        name: "Ustadh Maryam Al-Zahra",
        description: "Islamic scholar with deep knowledge of Islamic history, Fiqh, and core teachings.",
        phoneNumber: "+1122334455",
        image: "https://images.pexels.com/photos/539727/pexels-photo-539727.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 4,
        name: "Sheikh AbdulRahman Al-Khattabi",
        description: "Hadith scholar focusing on authentic narrations and their practical applications.",
        phoneNumber: "+1098765432",
        image: "https://images.pexels.com/photos/539727/pexels-photo-539727.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 5,
        name: "Mufti Khalid Al-Makki",
        description: "Renowned Quranic Tafsir expert, explaining verses with historical and linguistic insights.",
        phoneNumber: "+1555666777",
        image: "https://images.pexels.com/photos/539727/pexels-photo-539727.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
];


export const posts = [
    {
        id: 1,
        title: "The Beauty of Masjid Al-Haram",
        content: "Masjid Al-Haram in Makkah is the holiest site in Islam, where millions of Muslims gather for Hajj and Umrah. Learn about its spiritual significance and historical evolution.",
        image: "https://source.unsplash.com/800x600/?kaaba,mecca"
    },
    {
        id: 2,
        title: "The Serenity of Masjid Al-Nabawi",
        content: "Located in Madinah, Masjid Al-Nabawi is the resting place of Prophet Muhammad (peace be upon him). Discover its peaceful atmosphere and unique architectural beauty.",
        image: "https://source.unsplash.com/800x600/?prophets-mosque,medina"
    },
    {
        id: 3,
        title: "The Magnificence of Al-Aqsa Mosque",
        content: "Masjid Al-Aqsa in Jerusalem is one of Islam’s most sacred sites. Learn about its religious importance, historical background, and its connection to the Night Journey.",
        image: "https://source.unsplash.com/800x600/?al-aqsa,mosque"
    },
    {
        id: 4,

        title: "The Architecture of Ottoman Mosques",
        content: "The Ottomans built some of the most stunning mosques in history. Explore the grandeur of mosques like the Blue Mosque and Süleymaniye Mosque in Turkey.",
        image: "https://source.unsplash.com/800x600/?blue-mosque,istanbul"
    },
    {
        id: 5,
        title: "The Role of Mosques in Muslim Communities",
        content: "Mosques serve as centers of worship, education, and community gathering. Discover how they impact the spiritual and social lives of Muslims around the world.",
        image: "https://source.unsplash.com/800x600/?mosque,prayer"
    }
];

export const notifications = [
    {
        id: 1,
        title: "New Quran Class Added",
        message: "A new Tajweed class has been added to your schedule.",
        type: "info",
        timestamp: "2025-03-07T10:30:00Z",
        read: false,
        by:'user01'
    },
    {
        id: 2,
        title: "Class Reminder",
        message: "Reminder: Your Quran Memorization class starts at 5:00 PM.",
        type: "reminder",
        timestamp: "2025-03-07T09:00:00Z",
        read: false,
        by:'user02'
    },
    {
        id: 3,
        title: "Schedule Change",
        message: "Your Tafsir class has been rescheduled to Sunday at 3:00 PM.",
        type: "warning",
        timestamp: "2025-03-06T15:45:00Z",
        read: true,
        by:'nessrine'
    },
    {
        id: 4,
        title: "Achievement Unlocked",
        message: "Congratulations! You have memorized 10 new surahs.",
        type: "success",
        timestamp: "2025-03-05T18:10:00Z",
        read: false,
        by:'user01'
    },
    {
        id: 5,
        title: "System Update",
        message: "Our app has been updated with new features and bug fixes.",
        type: "info",
        timestamp: "2025-03-04T08:20:00Z",
        read: true,
        by:'user01'
    }
];


export const requests = [
    { id: 1, userId: 2, GroupId: 5, status: "pending" },
    { id: 2, userId: 4, GroupId: 3, status: "approved" },
    { id: 3, userId: 5, GroupId: 2, status: "rejected" },
    { id: 4, userId: 1, GroupId: 2, status: "pending" },
    { id: 5, userId: 4, GroupId: 2, status: "approved" },
    { id: 6, userId: 3, GroupId: 4, status: "rejected" },
    { id: 7, userId: 5, GroupId: 9, status: "pending" },
    { id: 8, userId: 7, GroupId: 4, status: "approved" },
]

export const users = [
    {
        id: 1,
        name: "Alice",
        speciality: "Math",
        email: "alice23@example.com",
        password: "abc123xy",
        token: "xyz456abc789",
        roles: ["Teacher", "Admin"]
    },
    {
        id: 2,
        name: "Bob",
        speciality: "Science",
        email: "bob45@test.com",
        password: "def456uv",
        token: "uvw789def123",
        roles: ["Student"]
    },
    {
        id: 3,
        name: "Charlie",
        speciality: "History",
        email: "charlie67@demo.com",
        password: "ghi789rs",
        token: "rst123ghi456",
        roles: ["Teacher", "Student"]
    },
    {
        id: 4,
        name: "David",
        speciality: "Art",
        email: "david12@example.com",
        password: "jkl012mn",
        token: "mno345jkl678",
        roles: ["Admin"]
    },
    {
        id: 5,
        name: "Eva",
        speciality: "Physics",
        email: "eva89@test.com",
        password: "opq345st",
        token: "stu678opq901",
        roles: ["Teacher", "Student", "Admin"]
    },
    {
        id: 6,
        name: "Bob",
        speciality: "Science",
        email: "bob45@test.com",
        password: "def456uv",
        token: "uvw789def123",
        roles: ["Student"]
    },
    {
        id: 7,
        name: "Bob",
        speciality: "Science",
        email: "bob45@test.com",
        password: "def456uv",
        token: "uvw789def123",
        roles: ["Student"]
    },
    {
        id: 8,
        name: "Bob",
        speciality: "Science",
        email: "bob45@test.com",
        password: "def456uv",
        token: "uvw789def123",
        roles: ["Student"]
    },
    {
        id: 9,
        name: "Bob",
        speciality: "Science",
        email: "bob45@test.com",
        password: "def456uv",
        token: "uvw789def123",
        roles: ["Student"]
    },
    {
        id: 10,
        name: "Bob",
        speciality: "Science",
        email: "bob45@test.com",
        password: "def456uv",
        token: "uvw789def123",
        roles: ["Student"]
    },
    {
        id: 11,
        name: "Bob",
        speciality: "Science",
        email: "bob45@test.com",
        password: "def456uv",
        token: "uvw789def123",
        roles: ["Student"]
    },
    {
        id: 12,
        name: "Bob",
        speciality: "Science",
        email: "bob45@test.com",
        password: "def456uv",
        token: "uvw789def123",
        roles: ["Student"]
    },
    {
        id: 13,
        name: "Bob",
        speciality: "Science",
        email: "bob45@test.com",
        password: "def456uv",
        token: "uvw789def123",
        roles: ["Student"]
    }
    
]


export const roles = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Teacher" },
    { id: 3, name: "Student" }
];

export const permissions = [
    { id: 1, name: "View Dashboard" },
    { id: 2, name: "Manage Users" },
    { id: 3, name: "Edit Content" },
    { id: 4, name: "Delete Content" },
    { id: 5, name: "Manage Permissions" },
    { id: 6, name: "Access Reports" },
    { id: 7, name: "Modify Settings" },
    { id: 8, name: "Create Posts" },
    { id: 9, name: "Approve Comments" }
];

export const rolePermissions = [
    { id: 1, roleId: 1, permissionId: 1 }, // Admin -> View Dashboard
    { id: 2, roleId: 1, permissionId: 2 }, // Admin -> Manage Users
    { id: 3, roleId: 1, permissionId: 3 }, // Admin -> Edit Content
    { id: 4, roleId: 1, permissionId: 4 }, // Admin -> Delete Content
    { id: 5, roleId: 1, permissionId: 5 }, // Admin -> Manage Permissions
    { id: 6, roleId: 1, permissionId: 6 }, // Admin -> Access Reports
    { id: 7, roleId: 1, permissionId: 7 }, // Admin -> Modify Settings
    { id: 8, roleId: 2, permissionId: 1 }, // Teacher -> View Dashboard
    { id: 9, roleId: 2, permissionId: 3 }, // Teacher -> Edit Content
    { id: 10, roleId: 2, permissionId: 8 }, // Teacher -> Create Posts
    { id: 11, roleId: 2, permissionId: 9 }, // Teacher -> Approve Comments
    { id: 12, roleId: 3, permissionId: 1 }, // Student -> View Dashboard
    { id: 13, roleId: 3, permissionId: 8 }  // Student -> Create Posts
];
