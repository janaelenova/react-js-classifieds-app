const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt')
async function main() {
    await prisma.favorite.deleteMany()
    await prisma.ad.deleteMany()
    await prisma.user.deleteMany()
    const hashedPassword = await bcrypt.hash("123123", 10)

    const davor = await prisma.user.create({
        data: {
            email: "davor@example.com",
            password: hashedPassword,
            name: "Davor",
        },
    })

    const jana = await prisma.user.create({
        data: {
            email: "jana@example.com",
            password: hashedPassword,
            name: "Jana",
        },
    })

    const ads = [
        // --- ПРЕТХОДНИТЕ 6 ---
        {
            title: "Audi A4 2.0 TDI S-Line",
            description: "Увезена од Германија, со сервисна книшка и реални километри. Full опрема.",
            price: 18500,
            category: "vehicles",
            location: "Скопје",
            image: "/audi-a4-grey-quattro.jpg",
            userId: davor.id,
            phone: "070111222",
            email: davor.email,
            details: JSON.stringify({ brand: "Audi", model: "A4", year: 2019, fuelType: "Дизел" })
        },
        {
            title: "Луксузен стан со поглед на езеро",
            description: "Станот е во нова зграда, веднаш до кејот. Идеален за фамилија или за издавање.",
            price: 120000,
            category: "real-estate",
            location: "Охрид",
            image: "/luxury-penthouse-terrace-city-view.jpg",
            userId: jana.id,
            phone: "078555444",
            email: jana.email,
            details: JSON.stringify({ area: 85, rooms: 3, propertyType: "Стан" })
        },
        {
            title: "MacBook Pro M2 14-inch",
            description: "Користен само неколку месеци, без никаква гребнатинка. Батерија на 100%.",
            price: 1600,
            category: "electronics",
            location: "Битола",
            image: "/macbook-pro-laptop-silver.jpg",
            userId: davor.id,
            phone: "075333999",
            email: davor.email,
            details: JSON.stringify({ condition: "Како нов" })
        },
        {
            title: "Се бара Готвач за ресторан",
            description: "Потребно е претходно искуство. Одлични услови и почетна плата.",
            price: 800,
            category: "jobs",
            location: "Тетово",
            image: "/restaurant-waiter-serving.jpg",
            userId: jana.id,
            phone: "044123456",
            email: jana.email,
            details: JSON.stringify({ jobType: "Полно работно време" })
        },
        {
            title: "Аголна гарнитура од природна кожа",
            description: "Купена пред една година, добро сочувана. Се продава поради преселба.",
            price: 450,
            category: "furniture",
            location: "Куманово",
            image: "/leather-sofa-set-brown.jpg",
            userId: davor.id,
            phone: "071222444",
            email: davor.email,
            details: JSON.stringify({ condition: "На старо" })
        },
        {
            title: "Професионално молерисување",
            description: "Брза и квалитетна изведба на сите видови внатрешно уредување.",
            price: 5,
            category: "services",
            location: "Скопје",
            image: "/painter-painting-wall.png",
            userId: jana.id,
            phone: "072666777",
            email: jana.email,
            details: JSON.stringify({ serviceType: "Градежништво" })
        },

        // --- НОВИТЕ 10 ОГЛАСИ ---
        {
            title: "BMW 320d M-Sport",
            description: "Перфектна состојба, ниска потрошувачка, регистрирана цела година.",
            price: 22000,
            category: "vehicles",
            location: "Битола",
            image: "/bmw-320d-black-sedan.jpg",
            userId: davor.id,
            phone: "070111222",
            email: davor.email,
            details: JSON.stringify({ brand: "BMW", model: "320d", year: 2020, fuelType: "Дизел" })
        },
        {
            title: "Викендица во Маврово",
            description: "Прекрасна викендица опкружена со шума, комплетно реновирана минатата година.",
            price: 65000,
            category: "real-estate",
            location: "Тетово",
            image: "/traditional-macedonian-house-with-garden.jpg",
            userId: jana.id,
            phone: "078555444",
            email: jana.email,
            details: JSON.stringify({ area: 120, rooms: 4, propertyType: "Куќа" })
        },
        {
            title: "Sony PlayStation 5 + 2 џојстици",
            description: "Малку користен, доаѓа со 3 игри и преостаната гаранција од 6 месеци.",
            price: 480,
            category: "electronics",
            location: "Скопје",
            image: "/playstation-5-gaming-console.jpg",
            userId: davor.id,
            phone: "075333999",
            email: davor.email,
            details: JSON.stringify({ condition: "Користен" })
        },
        {
            title: "Програмер (Frontend React)",
            description: "Се бара искусен React програмер за работа на меѓународни проекти.",
            price: 2500,
            category: "jobs",
            location: "Скопје",
            image: "/modern-office-interior.png",
            userId: davor.id,
            phone: "070000111",
            email: davor.email,
            details: JSON.stringify({ jobType: "Далечински" })
        },
        {
            title: "Трпезариска маса од масивно дрво",
            description: "Рачна изработка, уникатен дизајн, димензии 200x100цм.",
            price: 350,
            category: "furniture",
            location: "Охрид",
            image: "/dining-table-wooden-chairs.jpg",
            userId: jana.id,
            phone: "078555444",
            email: jana.email,
            details: JSON.stringify({ material: "Даб" })
        },
        {
            title: "Транспорт на мебел и роба",
            description: "Вршиме транспорт низ цела Македонија со сопствено комбе. Брзо и сигурно.",
            price: 30,
            category: "services",
            location: "Куманово",
            image: "/moving-truck-boxes.jpg",
            userId: davor.id,
            phone: "071222444",
            email: davor.email,
            details: JSON.stringify({ serviceType: "Транспорт" })
        },
        {
            title: "Samsung Galaxy S24 Ultra",
            description: "Неотпакуван, титаниум црна боја. Купен од Телеком.",
            price: 1050,
            category: "electronics",
            location: "Куманово",
            image: "/samsung-galaxy-s24-ultra-phone.jpg",
            userId: jana.id,
            phone: "071999888",
            email: jana.email,
            details: JSON.stringify({ condition: "Нов" })
        },
        {
            title: "Mercedes-Benz C220 AMG",
            description: "Атрактивен изглед, сервисна историја, сочуван ентериер.",
            price: 25000,
            category: "vehicles",
            location: "Скопје",
            image: "/mercedes-c-class-white-amg.jpg",
            userId: davor.id,
            phone: "070111222",
            email: davor.email,
            details: JSON.stringify({ brand: "Mercedes", year: 2021 })
        },
        {
            title: "Плац во прва линија до море",
            description: "Атрактивна локација за изградба на хотел или луксузна вила.",
            price: 300000,
            category: "real-estate",
            location: "Охрид",
            image: "/building-land-plot-countryside.jpg",
            userId: jana.id,
            phone: "078555444",
            email: jana.email,
            details: JSON.stringify({ area: 1500, propertyType: "Плац" })
        },
        {
            title: "Курсеви по Англиски јазик",
            description: "Индивидуални часови за почетници и напредни нивоа. Подготовка за IELTS.",
            price: 10,
            category: "services",
            location: "Битола",
            image: "/math-tutoring-student.jpg",
            userId: jana.id,
            phone: "071555666",
            email: jana.email,
            details: JSON.stringify({ serviceType: "Едукација" })
        }
    ]

    for (const ad of ads) {
        await prisma.ad.create({ data: ad })
    }

    console.log("Успешно додадени 16 огласи!")
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })