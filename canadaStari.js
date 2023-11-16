nameToKeyConverter = ((name) => {

    // console.log(name.toLowerCase().replace(/ /g, '_'));
})('NGV (Natural Gas for Vehicle).');

getSubAttsThai = ((parent_key,englishValue) => {
    const cats = [
        {
            "id": 1,
            "english": "Car",
            "thai": "รถ"
        },
        {
            "id": 2,
            "english": "Bag",
            "thai": "กระเป๋า"
        },
        {
            "id": 3,
            "english": "Bicycle",
            "thai": "จักรยาน"
        },
        {
            "id": 4,
            "english": "Camera",
            "thai": "กล้อง"
        },
        {
            "id": 5,
            "english": "Watch",
            "thai": "นาฬิกา"
        },
        {
            "id": 6,
            "english": "Women's Clothing",
            "thai": "เสื้อผ้าผู้หญิง"
        },
        {
            "id": 7,
            "english": "Men's Clothing",
            "thai": "เสื้อผ้าผู้ชาย "
        },
        {
            "id": 8,
            "english": "Jewelry",
            "thai": "เครื่องประดับ"
        },
        {
            "id": 9,
            "english": "Fashion accessories",
            "thai": "เครื่องแต่งกาย"
        },
        {
            "id": 10,
            "english": "Collectibles",
            "thai": "ของสะสม"
        },
        {
            "id": 11,
            "english": "Computer",
            "thai": "คอมพิวเตอร์"
        },
        {
            "id": 12,
            "english": "Electronics",
            "thai": "เครื่องใช้ไฟฟ้า"
        },
        {
            "id": 13,
            "english": "Games",
            "thai": "เกม"
        },
        {
            "id": 14,
            "english": "Health and Beauty",
            "thai": "สุขภาพและความงาม"
        },
        {
            "id": 15,
            "english": "Hobbies",
            "thai": "งานอดิเรก"
        },
        {
            "id": 16,
            "english": "Furniture",
            "thai": "เฟอร์นิเจอร์ "
        },
        {
            "id": 17,
            "english": "kitchenware",
            "thai": "เครื่องครัว"
        },
        {
            "id": 18,
            "english": "Mobile Phones and Tablets",
            "thai": "มือถือและแท็บเล็ต"
        },
        {
            "id": 19,
            "english": "Maternity and Baby",
            "thai": "แม่และเด็ก"
        },
        {
            "id": 20,
            "english": "Motorcycle",
            "thai": "มอเตอร์ไซค์"
        },
        {
            "id": 21,
            "english": "Musical Instruments",
            "thai": "เครื่องดนตรี"
        },
        {
            "id": 22,
            "english": "Pets",
            "thai": "สัตว์เลี้ยง"
        },
        {
            "id": 23,
            "english": "Shoes",
            "thai": "รองเท้า"
        },
        {
            "id": 24,
            "english": "Sports",
            "thai": "กีฬา"
        },
        {
            "id": 25,
            "english": "amulet",
            "thai": "พระเครื่อง"
        }
    ];
    const subCats = [
        {
            "id": 101,
            "parent_id": 1,
            "english": "Sedan",
            "thai": "รถเก๋ง"
        },
        {
            "id": 102,
            "parent_id": 1,
            "english": "Hatchback",
            "thai": "แฮตช์แบ็ก "
        },
        {
            "id": 103,
            "parent_id": 1,
            "english": "Pickup",
            "thai": "กระบะ"
        },
        {
            "id": 104,
            "parent_id": 1,
            "english": "Van",
            "thai": "รถตู้"
        },
        {
            "id": 105,
            "parent_id": 1,
            "english": "MPV,SUV,PPV",
            "thai": "รถอเนกประสงค์ "
        },
        {
            "id": 106,
            "parent_id": 2,
            "english": "Shoulder bag",
            "thai": "กระเป๋าสะพาย "
        },
        {
            "id": 107,
            "parent_id": 2,
            "english": "Handbag",
            "thai": "กระเป๋าถือ"
        },
        {
            "id": 108,
            "parent_id": 2,
            "english": "Wallet",
            "thai": "กระเป๋าสตางค์"
        },
        {
            "id": 109,
            "parent_id": 2,
            "english": "Travel backpack",
            "thai": "กระเป๋าเป้ เดินทาง "
        },
        {
            "id": 110,
            "parent_id": 2,
            "english": "Clutch bag",
            "thai": "กระเป๋าคัท "
        },
        {
            "id": 111,
            "parent_id": 2,
            "english": "Tote bag",
            "thai": "กระเป๋าผ้า"
        },
        {
            "id": 112,
            "parent_id": 3,
            "english": "Mountain bike",
            "thai": "จักรยานเสือภูเขา"
        },
        {
            "id": 113,
            "parent_id": 3,
            "english": "Road Bike",
            "thai": "จักรยานเสือหมอบ"
        },
        {
            "id": 114,
            "parent_id": 3,
            "english": "Hybrid bike",
            "thai": "จักรยานไฮบริด"
        },
        {
            "id": 115,
            "parent_id": 3,
            "english": "Folding bike",
            "thai": "จักรยานพับ"
        },
        {
            "id": 116,
            "parent_id": 3,
            "english": "City bike",
            "thai": "จักรยานแม่บ้าน"
        },
        {
            "id": 117,
            "parent_id": 3,
            "english": "Electric bike",
            "thai": "จักรยานไฟฟ้า"
        },
        {
            "id": 118,
            "parent_id": 4,
            "english": "Digital camera",
            "thai": "กล้องดิจิตอล"
        },
        {
            "id": 119,
            "parent_id": 4,
            "english": "polaroid camera",
            "thai": "กล้องโพลารอยด์"
        },
        {
            "id": 120,
            "parent_id": 4,
            "english": "CCTV camera",
            "thai": "กล้องวงจรปิด"
        },
        {
            "id": 121,
            "parent_id": 4,
            "english": "Dashcam",
            "thai": "กล้องติดรถยนต์"
        },
        {
            "id": 122,
            "parent_id": 4,
            "english": "Other camera accessories",
            "thai": "อุปกรณ์เสริมกล้องอื่นๆ"
        },
        {
            "id": 123,
            "parent_id": 5,
            "english": "Women's watch",
            "thai": "นาฬิกาข้อมือสำหรับผู้หญิง"
        },
        {
            "id": 124,
            "parent_id": 5,
            "english": "Men's watch",
            "thai": "นาฬิกาข้อมือสำหรับผู้ชาย"
        },
        {
            "id": 125,
            "parent_id": 5,
            "english": "Watch accessories and parts",
            "thai": "อุปกรณ์และอะไหล่นาฬิกา"
        },
        {
            "id": 126,
            "parent_id": 6,
            "english": "jacket",
            "thai": "เสื้อแจ็คเก็ต/โค้ท"
        },
        {
            "id": 127,
            "parent_id": 6,
            "english": "T-Shirt",
            "thai": "เสื้อยืดแขนสั้น"
        },
        {
            "id": 128,
            "parent_id": 6,
            "english": "Sweater",
            "thai": "เสื้อสเวตเตอร์"
        },
        {
            "id": 129,
            "parent_id": 6,
            "english": "Polo Shirt",
            "thai": "เสื้อโปโล"
        },
        {
            "id": 130,
            "parent_id": 6,
            "english": "Office Shirt",
            "thai": "เสื้อเชิ้ตทำงาน"
        },
        {
            "id": 131,
            "parent_id": 6,
            "english": "Dress",
            "thai": "เดรส"
        },
        {
            "id": 132,
            "parent_id": 6,
            "english": "pants",
            "thai": "กางเกง"
        },
        {
            "id": 133,
            "parent_id": 6,
            "english": "Skirt",
            "thai": "กระโปรง"
        },
        {
            "id": 134,
            "parent_id": 7,
            "english": "Shirt",
            "thai": "เสื้อเชิ้ต"
        },
        {
            "id": 135,
            "parent_id": 7,
            "english": "T-Shirt",
            "thai": "เสื้อยืดแขนสั้น"
        },
        {
            "id": 136,
            "parent_id": 7,
            "english": "Sweater",
            "thai": "เสื้อสเวตเตอร์"
        },
        {
            "id": 137,
            "parent_id": 7,
            "english": "jacket",
            "thai": "เสื้อแจ็คเก็ต/โค้ท"
        },
        {
            "id": 138,
            "parent_id": 7,
            "english": "pants",
            "thai": "กางเกง"
        },
        {
            "id": 139,
            "parent_id": 8,
            "english": "necklace",
            "thai": "สร้อย"
        },
        {
            "id": 140,
            "parent_id": 8,
            "english": "ring",
            "thai": "แหวน "
        },
        {
            "id": 141,
            "parent_id": 8,
            "english": "Earrings",
            "thai": "ต่างหู"
        },
        {
            "id": 142,
            "parent_id": 8,
            "english": "Bracelet",
            "thai": "สร้อยข้อมือ"
        },
        {
            "id": 143,
            "parent_id": 8,
            "english": "Bangle",
            "thai": "กำไล"
        },
        {
            "id": 144,
            "parent_id": 8,
            "english": "Jewelry box",
            "thai": "กล่องเก็บเครื่องประดับ"
        },
        {
            "id": 145,
            "parent_id": 9,
            "english": "hats",
            "thai": "หมวก"
        },
        {
            "id": 146,
            "parent_id": 9,
            "english": "hair accessories",
            "thai": "อุปกรณ์ผม"
        },
        {
            "id": 147,
            "parent_id": 9,
            "english": "belt",
            "thai": "เข็มขัด"
        },
        {
            "id": 148,
            "parent_id": 9,
            "english": "sock",
            "thai": "ถุงเท้า "
        },
        {
            "id": 149,
            "parent_id": 9,
            "english": "scarf",
            "thai": "ผ้าพันคอ "
        },
        {
            "id": 150,
            "parent_id": 9,
            "english": "glove",
            "thai": "ถุงมือ"
        },
        {
            "id": 151,
            "parent_id": 9,
            "english": "glasses",
            "thai": "แว่นตา"
        },
        {
            "id": 152,
            "parent_id": 10,
            "english": "Stamps",
            "thai": "สแตมป์"
        },
        {
            "id": 153,
            "parent_id": 10,
            "english": "Coins",
            "thai": "เหรียญ "
        },
        {
            "id": 154,
            "parent_id": 10,
            "english": "Banknotes",
            "thai": "ธนบัตร"
        },
        {
            "id": 155,
            "parent_id": 10,
            "english": "Artwork",
            "thai": "งานศิลปะ"
        },
        {
            "id": 156,
            "parent_id": 10,
            "english": "Models",
            "thai": "โมเดล"
        },
        {
            "id": 157,
            "parent_id": 11,
            "english": "Desktop computer",
            "thai": "คอมพิวเตอร์ตั้งโต๊ะ"
        },
        {
            "id": 158,
            "parent_id": 11,
            "english": "Laptop",
            "thai": "โน๊ตบุ๊ค"
        },
        {
            "id": 159,
            "parent_id": 11,
            "english": "Printer Scanner",
            "thai": "เครื่องพิมพ์สแกนเนอร์"
        },
        {
            "id": 160,
            "parent_id": 11,
            "english": "Other computer peripherals",
            "thai": "อุปกรณ์คอมพิวเตอร์อื่นๆ"
        },
        {
            "id": 161,
            "parent_id": 12,
            "english": "Air conditioner",
            "thai": "เครื่องปรับอากาศ"
        },
        {
            "id": 162,
            "parent_id": 12,
            "english": "Refrigerator",
            "thai": "ตู้เย็น"
        },
        {
            "id": 163,
            "parent_id": 12,
            "english": "tv speaker audio",
            "thai": "ทีวี ลำโพง เครื่องเสียง"
        },
        {
            "id": 164,
            "parent_id": 12,
            "english": "Washing machine",
            "thai": "เครื่องซักผ้า"
        },
        {
            "id": 165,
            "parent_id": 12,
            "english": "cable  satellite dish",
            "thai": "เคเบิ้ล จานดาวเทียม"
        },
        {
            "id": 166,
            "parent_id": 12,
            "english": "Automatic Water Pump",
            "thai": "ปั๊มน้ำอัตโนมัติ"
        },
        {
            "id": 167,
            "parent_id": 12,
            "english": "coffee machine",
            "thai": "เครื่องชงกาแฟ"
        },
        {
            "id": 168,
            "parent_id": 12,
            "english": "iron",
            "thai": "เตารีด"
        },
        {
            "id": 169,
            "parent_id": 12,
            "english": "air fryer",
            "thai": "หม้อทอดไร้น้ำมัน "
        },
        {
            "id": 170,
            "parent_id": 12,
            "english": "Microwave",
            "thai": "ไมโครเวฟ"
        },
        {
            "id": 171,
            "parent_id": 12,
            "english": "Fan",
            "thai": "พัดลม"
        },
        {
            "id": 172,
            "parent_id": 13,
            "english": "Gaming consoles",
            "thai": "เครื่องเล่นเกม"
        },
        {
            "id": 173,
            "parent_id": 13,
            "english": "game board",
            "thai": "บอร์ดเกม"
        },
        {
            "id": 174,
            "parent_id": 13,
            "english": "Other gaming accessories",
            "thai": "อุปกรณ์เกมอื่นๆ"
        },
        {
            "id": 175,
            "parent_id": 14,
            "english": "Health equipment",
            "thai": "อุปกรณ์เกี่ยวกับสุขภาพ"
        },
        {
            "id": 176,
            "parent_id": 14,
            "english": "Perfume",
            "thai": "น้ำหอม"
        },
        {
            "id": 177,
            "parent_id": 14,
            "english": "Beauty accessories",
            "thai": "อุปกรณ์เสริมสวย"
        },
        {
            "id": 178,
            "parent_id": 15,
            "english": "Books",
            "thai": "หนังสือ"
        },
        {
            "id": 179,
            "parent_id": 15,
            "english": "Songs",
            "thai": "เพลง"
        },
        {
            "id": 180,
            "parent_id": 15,
            "english": "Gift shop, Handicrafts",
            "thai": "กิ๊ฟช็อป งานฝีมือ"
        },
        {
            "id": 181,
            "parent_id": 15,
            "english": "Toys",
            "thai": "ของเล่น"
        },
        {
            "id": 182,
            "parent_id": 15,
            "english": "Admission tickets",
            "thai": "บัตรเข้าชม "
        },
        {
            "id": 183,
            "parent_id": 16,
            "english": "Table",
            "thai": "โต๊ะ "
        },
        {
            "id": 184,
            "parent_id": 16,
            "english": "Cabinet",
            "thai": "ตู้"
        },
        {
            "id": 185,
            "parent_id": 16,
            "english": "Bed",
            "thai": "เตียง"
        },
        {
            "id": 186,
            "parent_id": 16,
            "english": "Chair",
            "thai": "เก้าอี้"
        },
        {
            "id": 187,
            "parent_id": 16,
            "english": "Sofa",
            "thai": "โซฟา"
        },
        {
            "id": 188,
            "parent_id": 16,
            "english": "Home decor",
            "thai": "ของแต่งบ้าน"
        },
        {
            "id": 189,
            "parent_id": 17,
            "english": "kitchen storage equipment",
            "thai": "อุปกรณ์สำหรับจัดเก็บภายในครัว"
        },
        {
            "id": 190,
            "parent_id": 17,
            "english": "Food bags and boxes",
            "thai": "ถุงและกล่องใส่อาหาร"
        },
        {
            "id": 191,
            "parent_id": 17,
            "english": "slicing equipment",
            "thai": "อุปกรณ์สำหรับตัดและหั่น"
        },
        {
            "id": 192,
            "parent_id": 17,
            "english": "Strainers and food strainers",
            "thai": "กระชอนและภาชนะกรองอาหาร"
        },
        {
            "id": 193,
            "parent_id": 17,
            "english": "pots and pans",
            "thai": "หม้อและกระทะ"
        },
        {
            "id": 194,
            "parent_id": 17,
            "english": "kitchen Tools",
            "thai": "อุปกรณ์เครื่องครัว"
        },
        {
            "id": 195,
            "parent_id": 17,
            "english": "Beverage equipment",
            "thai": "อุปกรณ์ทำเครื่องดื่ม"
        },
        {
            "id": 196,
            "parent_id": 17,
            "english": "Tableware",
            "thai": "อุปกรณ์บนโต๊ะอาหาร"
        },
        {
            "id": 197,
            "parent_id": 18,
            "english": "Mobile Phones",
            "thai": "โทรศัพท์มือถือ"
        },
        {
            "id": 198,
            "parent_id": 18,
            "english": "Tablets",
            "thai": "แท็บเล็ต"
        },
        {
            "id": 199,
            "parent_id": 18,
            "english": "Mobile and Tablet Accessories",
            "thai": "อุปกรณ์เสริมมือถือและแท็บเล็ต"
        },
        {
            "id": 200,
            "parent_id": 18,
            "english": "Radio communication",
            "thai": "วิทยุสื่อสาร"
        },
        {
            "id": 201,
            "parent_id": 19,
            "english": "Baby clothing",
            "thai": "เสื้อผ้าเด็กอ่อน"
        },
        {
            "id": 202,
            "parent_id": 19,
            "english": "Kids' clothing",
            "thai": "เสื้อผ้าเด็ก"
        },
        {
            "id": 203,
            "parent_id": 19,
            "english": "Children's shoes",
            "thai": "รองเท้าเด็ก"
        },
        {
            "id": 204,
            "parent_id": 19,
            "english": "Pregnant mothers",
            "thai": "คุณแม่ตั้งครรภ์"
        },
        {
            "id": 205,
            "parent_id": 19,
            "english": " Maternity and baby essentials",
            "thai": "ของใช้แม่และเด็ก"
        },
        {
            "id": 206,
            "parent_id": 19,
            "english": "Children's toys",
            "thai": "ของเล่นเด็ก"
        },
        {
            "id": 207,
            "parent_id": 20,
            "english": "Family bike",
            "thai": "รถบ้าน รถครอบครัว"
        },
        {
            "id": 208,
            "parent_id": 20,
            "english": "Scooter",
            "thai": "รถสกู๊ตเตอร์"
        },
        {
            "id": 209,
            "parent_id": 20,
            "english": "Sport Bike",
            "thai": "รถสปอร์ต"
        },
        {
            "id": 210,
            "parent_id": 21,
            "english": "Guitar",
            "thai": "กีตาร์"
        },
        {
            "id": 211,
            "parent_id": 21,
            "english": "Ukulele",
            "thai": "อูคูเลเล่"
        },
        {
            "id": 212,
            "parent_id": 21,
            "english": "Piano",
            "thai": "เปียโน"
        },
        {
            "id": 213,
            "parent_id": 21,
            "english": "Keyboard",
            "thai": "คีย์บอร์ด"
        },
        {
            "id": 214,
            "parent_id": 21,
            "english": "Drums",
            "thai": "กลอง"
        },
        {
            "id": 215,
            "parent_id": 21,
            "english": "Thai Musical Instruments",
            "thai": "เครื่องดนตรีไทย"
        },
        {
            "id": 216,
            "parent_id": 22,
            "english": "Dog",
            "thai": "หมา"
        },
        {
            "id": 217,
            "parent_id": 22,
            "english": "Cat",
            "thai": "แมว"
        },
        {
            "id": 218,
            "parent_id": 22,
            "english": "Fish",
            "thai": "ปลา"
        },
        {
            "id": 219,
            "parent_id": 22,
            "english": "Mouse",
            "thai": "หนู"
        },
        {
            "id": 220,
            "parent_id": 22,
            "english": "Bird",
            "thai": "นก"
        },
        {
            "id": 221,
            "parent_id": 22,
            "english": "snake",
            "thai": "งู"
        },
        {
            "id": 222,
            "parent_id": 22,
            "english": "Beetle",
            "thai": "ด้วง"
        },
        {
            "id": 223,
            "parent_id": 22,
            "english": "Pet accessories",
            "thai": "อุปกรณ์สำหรับสัตว์เลี้ยง"
        },
        {
            "id": 224,
            "parent_id": 23,
            "english": "Women's shoes",
            "thai": "รองเท้าผู้หญิง"
        },
        {
            "id": 225,
            "parent_id": 23,
            "english": "Men's shoes",
            "thai": "รองเท้าผู้ชาย"
        },
        {
            "id": 226,
            "parent_id": 23,
            "english": "Shoe accessories and parts",
            "thai": "อุปกรณ์และอะไหล่รองเท้า"
        },
        {
            "id": 227,
            "parent_id": 24,
            "english": "Exercise equipment",
            "thai": "เครื่องออกกำลังกาย"
        },
        {
            "id": 228,
            "parent_id": 24,
            "english": "Sports equipment",
            "thai": "อุปกรณ์กีฬา"
        },
        {
            "id": 229,
            "parent_id": 24,
            "english": "Sportswear",
            "thai": "ชุดกีฬา"
        },
        {
            "id": 230,
            "parent_id": 24,
            "english": "Sports shoes",
            "thai": "รองเท้ากีฬา"
        },
        {
            "id": 231,
            "parent_id": 25,
            "english": "Amulet",
            "thai": "พระเหรียญ"
        },
        {
            "id": 232,
            "parent_id": 25,
            "english": "Buddhist scripture",
            "thai": "พระเบญจภาคี"
        },
        {
            "id": 233,
            "parent_id": 25,
            "english": "Buddhist relic",
            "thai": "พระกริ่ง"
        },
        {
            "id": 234,
            "parent_id": 25,
            "english": "Buddhist rosary",
            "thai": "พระเกจิ"
        },
        {
            "id": 235,
            "parent_id": 25,
            "english": "Other sacred objects",
            "thai": "พระเครื่องอื่นๆ"
        },
        {
            "id": 236,
            "parent_id": 25,
            "english": "Religious paraphernalia and sacred objects",
            "thai": "เครื่องรางของมงคล"
        },
        {
            "id": 237,
            "parent_id": 25,
            "english": "Principal Buddha",
            "thai": "พระประธาน"
        }
    ];
    const atts = [
        {
            "id": 501,
            "parent_id": 101,
            "english": "Condition",
            "thai": "สภาพสินค้า "
        },
        {
            "id": 502,
            "parent_id": 101,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 503,
            "parent_id": 101,
            "english": "Year of the car",
            "thai": "ปีรถ"
        },
        {
            "id": 504,
            "parent_id": 101,
            "english": "Mileage",
            "thai": "ไมล์ "
        },
        {
            "id": 505,
            "parent_id": 101,
            "english": "Fuel",
            "thai": "เชื้อเพลิง "
        },
        {
            "id": 506,
            "parent_id": 101,
            "english": "Gasoline",
            "thai": "แก๊ส"
        },
        {
            "id": 507,
            "parent_id": 101,
            "english": "Transmission",
            "thai": "เกียร์ "
        },
        {
            "id": 508,
            "parent_id": 101,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 509,
            "parent_id": 102,
            "english": "Condition",
            "thai": "สภาพสินค้า "
        },
        {
            "id": 510,
            "parent_id": 102,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 511,
            "parent_id": 102,
            "english": "Year of the car",
            "thai": "ปีรถ"
        },
        {
            "id": 512,
            "parent_id": 102,
            "english": "Mileage",
            "thai": "ไมล์ "
        },
        {
            "id": 513,
            "parent_id": 102,
            "english": "Fuel",
            "thai": "เชื้อเพลิง "
        },
        {
            "id": 514,
            "parent_id": 102,
            "english": "Gasoline",
            "thai": "แก๊ส"
        },
        {
            "id": 515,
            "parent_id": 102,
            "english": "Transmission",
            "thai": "เกียร์ "
        },
        {
            "id": 516,
            "parent_id": 102,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 517,
            "parent_id": 103,
            "english": "Condition",
            "thai": "สภาพสินค้า "
        },
        {
            "id": 518,
            "parent_id": 103,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 519,
            "parent_id": 103,
            "english": "Year of the car",
            "thai": "ปีรถ"
        },
        {
            "id": 520,
            "parent_id": 103,
            "english": "Mileage",
            "thai": "ไมล์ "
        },
        {
            "id": 521,
            "parent_id": 103,
            "english": "Fuel",
            "thai": "เชื้อเพลิง "
        },
        {
            "id": 522,
            "parent_id": 103,
            "english": "Gasoline",
            "thai": "แก๊ส"
        },
        {
            "id": 523,
            "parent_id": 103,
            "english": "Transmission",
            "thai": "เกียร์ "
        },
        {
            "id": 524,
            "parent_id": 103,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 525,
            "parent_id": 104,
            "english": "Condition",
            "thai": "สภาพสินค้า "
        },
        {
            "id": 526,
            "parent_id": 104,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 527,
            "parent_id": 104,
            "english": "Year of the car",
            "thai": "ปีรถ"
        },
        {
            "id": 528,
            "parent_id": 104,
            "english": "Mileage",
            "thai": "ไมล์ "
        },
        {
            "id": 529,
            "parent_id": 104,
            "english": "Fuel",
            "thai": "เชื้อเพลิง "
        },
        {
            "id": 530,
            "parent_id": 104,
            "english": "Gasoline",
            "thai": "แก๊ส"
        },
        {
            "id": 531,
            "parent_id": 104,
            "english": "Transmission",
            "thai": "เกียร์ "
        },
        {
            "id": 532,
            "parent_id": 104,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 533,
            "parent_id": 105,
            "english": "Condition",
            "thai": "สภาพสินค้า "
        },
        {
            "id": 534,
            "parent_id": 105,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 535,
            "parent_id": 105,
            "english": "Year of the car",
            "thai": "ปีรถ"
        },
        {
            "id": 536,
            "parent_id": 105,
            "english": "Mileage",
            "thai": "ไมล์ "
        },
        {
            "id": 537,
            "parent_id": 105,
            "english": "Fuel",
            "thai": "เชื้อเพลิง "
        },
        {
            "id": 538,
            "parent_id": 105,
            "english": "Gasoline",
            "thai": "แก๊ส"
        },
        {
            "id": 539,
            "parent_id": 105,
            "english": "Transmission",
            "thai": "เกียร์ "
        },
        {
            "id": 540,
            "parent_id": 105,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 541,
            "parent_id": 106,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 542,
            "parent_id": 106,
            "english": "gender",
            "thai": "เพศ"
        },
        {
            "id": 543,
            "parent_id": 106,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 544,
            "parent_id": 106,
            "english": "color",
            "thai": "สี"
        },
        {
            "id": 545,
            "parent_id": 107,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 546,
            "parent_id": 107,
            "english": "gender",
            "thai": "เพศ"
        },
        {
            "id": 547,
            "parent_id": 107,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 548,
            "parent_id": 107,
            "english": "color",
            "thai": "สี"
        },
        {
            "id": 549,
            "parent_id": 108,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 550,
            "parent_id": 108,
            "english": "gender",
            "thai": "เพศ"
        },
        {
            "id": 551,
            "parent_id": 108,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 552,
            "parent_id": 108,
            "english": "color",
            "thai": "สี"
        },
        {
            "id": 553,
            "parent_id": 109,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 554,
            "parent_id": 109,
            "english": "gender",
            "thai": "เพศ"
        },
        {
            "id": 555,
            "parent_id": 109,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 556,
            "parent_id": 109,
            "english": "color",
            "thai": "สี"
        },
        {
            "id": 557,
            "parent_id": 110,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 558,
            "parent_id": 110,
            "english": "gender",
            "thai": "เพศ"
        },
        {
            "id": 559,
            "parent_id": 110,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 560,
            "parent_id": 110,
            "english": "color",
            "thai": "สี"
        },
        {
            "id": 561,
            "parent_id": 111,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 562,
            "parent_id": 111,
            "english": "gender",
            "thai": "เพศ"
        },
        {
            "id": 563,
            "parent_id": 111,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 564,
            "parent_id": 111,
            "english": "color",
            "thai": "สี"
        },
        {
            "id": 565,
            "parent_id": 112,
            "english": "Brand",
            "thai": "ยี่ห้อ "
        },
        {
            "id": 566,
            "parent_id": 112,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 567,
            "parent_id": 112,
            "english": "color",
            "thai": "สี "
        },
        {
            "id": 568,
            "parent_id": 113,
            "english": "Brand",
            "thai": "ยี่ห้อ "
        },
        {
            "id": 569,
            "parent_id": 113,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 570,
            "parent_id": 113,
            "english": "color",
            "thai": "สี "
        },
        {
            "id": 571,
            "parent_id": 114,
            "english": "Brand",
            "thai": "ยี่ห้อ "
        },
        {
            "id": 572,
            "parent_id": 114,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 573,
            "parent_id": 114,
            "english": "color",
            "thai": "สี "
        },
        {
            "id": 574,
            "parent_id": 115,
            "english": "Brand",
            "thai": "ยี่ห้อ "
        },
        {
            "id": 575,
            "parent_id": 115,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 576,
            "parent_id": 115,
            "english": "color",
            "thai": "สี "
        },
        {
            "id": 577,
            "parent_id": 116,
            "english": "Brand",
            "thai": "ยี่ห้อ "
        },
        {
            "id": 578,
            "parent_id": 116,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 579,
            "parent_id": 116,
            "english": "color",
            "thai": "สี "
        },
        {
            "id": 580,
            "parent_id": 117,
            "english": "Brand",
            "thai": "ยี่ห้อ "
        },
        {
            "id": 581,
            "parent_id": 117,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 582,
            "parent_id": 117,
            "english": "color",
            "thai": "สี "
        },
        {
            "id": 583,
            "parent_id": 118,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 584,
            "parent_id": 118,
            "english": "type",
            "thai": "ประเภท "
        },
        {
            "id": 585,
            "parent_id": 118,
            "english": "Waterproof",
            "thai": "กันน้ำ"
        },
        {
            "id": 586,
            "parent_id": 119,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 587,
            "parent_id": 119,
            "english": "type",
            "thai": "ประเภท "
        },
        {
            "id": 588,
            "parent_id": 119,
            "english": "Waterproof",
            "thai": "กันน้ำ"
        },
        {
            "id": 589,
            "parent_id": 120,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 590,
            "parent_id": 120,
            "english": "type",
            "thai": "ประเภท "
        },
        {
            "id": 591,
            "parent_id": 120,
            "english": "Waterproof",
            "thai": "กันน้ำ"
        },
        {
            "id": 592,
            "parent_id": 121,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 593,
            "parent_id": 121,
            "english": "type",
            "thai": "ประเภท "
        },
        {
            "id": 594,
            "parent_id": 121,
            "english": "Waterproof",
            "thai": "กันน้ำ"
        },
        {
            "id": 595,
            "parent_id": 122,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 596,
            "parent_id": 122,
            "english": "type",
            "thai": "ประเภท "
        },
        {
            "id": 597,
            "parent_id": 122,
            "english": "Waterproof",
            "thai": "กันน้ำ"
        },
        {
            "id": 598,
            "parent_id": 123,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 599,
            "parent_id": 123,
            "english": "color",
            "thai": "สี"
        },
        {
            "id": 600,
            "parent_id": 123,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 601,
            "parent_id": 123,
            "english": "dial size",
            "thai": "ขนาดหน้าปัด  "
        },
        {
            "id": 602,
            "parent_id": 124,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 603,
            "parent_id": 124,
            "english": "color",
            "thai": "สี"
        },
        {
            "id": 604,
            "parent_id": 124,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 605,
            "parent_id": 124,
            "english": "dial size",
            "thai": "ขนาดหน้าปัด  "
        },
        {
            "id": 606,
            "parent_id": 125,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 607,
            "parent_id": 125,
            "english": "color",
            "thai": "สี"
        },
        {
            "id": 608,
            "parent_id": 125,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 609,
            "parent_id": 125,
            "english": "dial size",
            "thai": "ขนาดหน้าปัด  "
        },
        {
            "id": 610,
            "parent_id": 126,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 611,
            "parent_id": 126,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 612,
            "parent_id": 126,
            "english": "size",
            "thai": "ขนาด"
        },
        {
            "id": 613,
            "parent_id": 126,
            "english": "material",
            "thai": "วัสดุ"
        },
        {
            "id": 614,
            "parent_id": 127,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 615,
            "parent_id": 127,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 616,
            "parent_id": 127,
            "english": "size",
            "thai": "ขนาด"
        },
        {
            "id": 617,
            "parent_id": 127,
            "english": "material",
            "thai": "วัสดุ"
        },
        {
            "id": 618,
            "parent_id": 128,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 619,
            "parent_id": 128,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 620,
            "parent_id": 128,
            "english": "size",
            "thai": "ขนาด"
        },
        {
            "id": 621,
            "parent_id": 128,
            "english": "material",
            "thai": "วัสดุ"
        },
        {
            "id": 622,
            "parent_id": 129,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 623,
            "parent_id": 129,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 624,
            "parent_id": 129,
            "english": "size",
            "thai": "ขนาด"
        },
        {
            "id": 625,
            "parent_id": 129,
            "english": "material",
            "thai": "วัสดุ"
        },
        {
            "id": 626,
            "parent_id": 130,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 627,
            "parent_id": 130,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 628,
            "parent_id": 130,
            "english": "size",
            "thai": "ขนาด"
        },
        {
            "id": 629,
            "parent_id": 130,
            "english": "material",
            "thai": "วัสดุ"
        },
        {
            "id": 630,
            "parent_id": 131,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 631,
            "parent_id": 131,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 632,
            "parent_id": 131,
            "english": "size",
            "thai": "ขนาด"
        },
        {
            "id": 633,
            "parent_id": 131,
            "english": "material",
            "thai": "วัสดุ"
        },
        {
            "id": 634,
            "parent_id": 132,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 635,
            "parent_id": 132,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 636,
            "parent_id": 132,
            "english": "size",
            "thai": "ขนาด"
        },
        {
            "id": 637,
            "parent_id": 132,
            "english": "material",
            "thai": "วัสดุ"
        },
        {
            "id": 638,
            "parent_id": 133,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 639,
            "parent_id": 133,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 640,
            "parent_id": 133,
            "english": "size",
            "thai": "ขนาด"
        },
        {
            "id": 641,
            "parent_id": 133,
            "english": "material",
            "thai": "วัสดุ"
        },
        {
            "id": 642,
            "parent_id": 134,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 643,
            "parent_id": 134,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 644,
            "parent_id": 134,
            "english": "size",
            "thai": "ขนาด"
        },
        {
            "id": 645,
            "parent_id": 134,
            "english": "material",
            "thai": "วัสดุ"
        },
        {
            "id": 646,
            "parent_id": 135,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 647,
            "parent_id": 135,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 648,
            "parent_id": 135,
            "english": "size",
            "thai": "ขนาด"
        },
        {
            "id": 649,
            "parent_id": 135,
            "english": "material",
            "thai": "วัสดุ"
        },
        {
            "id": 650,
            "parent_id": 136,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 651,
            "parent_id": 136,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 652,
            "parent_id": 136,
            "english": "size",
            "thai": "ขนาด"
        },
        {
            "id": 653,
            "parent_id": 136,
            "english": "material",
            "thai": "วัสดุ"
        },
        {
            "id": 654,
            "parent_id": 137,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 655,
            "parent_id": 137,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 656,
            "parent_id": 137,
            "english": "size",
            "thai": "ขนาด"
        },
        {
            "id": 657,
            "parent_id": 137,
            "english": "material",
            "thai": "วัสดุ"
        },
        {
            "id": 658,
            "parent_id": 138,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 659,
            "parent_id": 138,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 660,
            "parent_id": 138,
            "english": "size",
            "thai": "ขนาด"
        },
        {
            "id": 661,
            "parent_id": 138,
            "english": "material",
            "thai": "วัสดุ"
        },
        {
            "id": 662,
            "parent_id": 139,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 663,
            "parent_id": 139,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 664,
            "parent_id": 139,
            "english": "gems",
            "thai": "อัญมณี"
        },
        {
            "id": 665,
            "parent_id": 139,
            "english": "size",
            "thai": "ขนาด "
        },
        {
            "id": 666,
            "parent_id": 140,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 667,
            "parent_id": 140,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 668,
            "parent_id": 140,
            "english": "gems",
            "thai": "อัญมณี"
        },
        {
            "id": 669,
            "parent_id": 140,
            "english": "size",
            "thai": "ขนาด "
        },
        {
            "id": 670,
            "parent_id": 141,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 671,
            "parent_id": 141,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 672,
            "parent_id": 141,
            "english": "gems",
            "thai": "อัญมณี"
        },
        {
            "id": 673,
            "parent_id": 141,
            "english": "size",
            "thai": "ขนาด "
        },
        {
            "id": 674,
            "parent_id": 142,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 675,
            "parent_id": 142,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 676,
            "parent_id": 142,
            "english": "gems",
            "thai": "อัญมณี"
        },
        {
            "id": 677,
            "parent_id": 142,
            "english": "size",
            "thai": "ขนาด "
        },
        {
            "id": 678,
            "parent_id": 143,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 679,
            "parent_id": 143,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 680,
            "parent_id": 143,
            "english": "gems",
            "thai": "อัญมณี"
        },
        {
            "id": 681,
            "parent_id": 143,
            "english": "size",
            "thai": "ขนาด "
        },
        {
            "id": 682,
            "parent_id": 144,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 683,
            "parent_id": 144,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 684,
            "parent_id": 144,
            "english": "gems",
            "thai": "อัญมณี"
        },
        {
            "id": 685,
            "parent_id": 144,
            "english": "size",
            "thai": "ขนาด "
        },
        {
            "id": 686,
            "parent_id": 145,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 687,
            "parent_id": 145,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 688,
            "parent_id": 145,
            "english": "gender",
            "thai": "เพศ"
        },
        {
            "id": 689,
            "parent_id": 146,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 690,
            "parent_id": 147,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 691,
            "parent_id": 147,
            "english": "gender",
            "thai": "เพศ"
        },
        {
            "id": 692,
            "parent_id": 147,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 693,
            "parent_id": 148,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 694,
            "parent_id": 149,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 695,
            "parent_id": 149,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 696,
            "parent_id": 150,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 697,
            "parent_id": 150,
            "english": "gender",
            "thai": "เพศ"
        },
        {
            "id": 698,
            "parent_id": 150,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 699,
            "parent_id": 151,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 700,
            "parent_id": 151,
            "english": "shape",
            "thai": "รูปทรง "
        },
        {
            "id": 701,
            "parent_id": 152,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 702,
            "parent_id": 153,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 703,
            "parent_id": 154,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 704,
            "parent_id": 155,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 705,
            "parent_id": 156,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 706,
            "parent_id": 157,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 707,
            "parent_id": 158,
            "english": "Operating System ",
            "thai": "ระบบปฏิบัติการ"
        },
        {
            "id": 708,
            "parent_id": 158,
            "english": "Memory ",
            "thai": "หน่วยความจำ"
        },
        {
            "id": 709,
            "parent_id": 158,
            "english": "Ports ",
            "thai": "พอร์ต"
        },
        {
            "id": 710,
            "parent_id": 159,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 711,
            "parent_id": 159,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 712,
            "parent_id": 160,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 713,
            "parent_id": 161,
            "english": "Brand",
            "thai": "ยี่ห้อ "
        },
        {
            "id": 714,
            "parent_id": 161,
            "english": "BTU (British Thermal Unit )",
            "thai": "BTU "
        },
        {
            "id": 715,
            "parent_id": 161,
            "english": "Special characteristics",
            "thai": "ลักษพิเศษ"
        },
        {
            "id": 716,
            "parent_id": 162,
            "english": "Brand",
            "thai": "ยี่ห้อ "
        },
        {
            "id": 717,
            "parent_id": 162,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 718,
            "parent_id": 162,
            "english": "capacity",
            "thai": "ความจุ"
        },
        {
            "id": 719,
            "parent_id": 163,
            "english": "Brand",
            "thai": "ยี่ห้อ "
        },
        {
            "id": 720,
            "parent_id": 163,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 721,
            "parent_id": 164,
            "english": "Brand",
            "thai": "ยี่ห้อ "
        },
        {
            "id": 722,
            "parent_id": 164,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 723,
            "parent_id": 164,
            "english": "capacity",
            "thai": "ความจุ"
        },
        {
            "id": 724,
            "parent_id": 165,
            "english": "Brand",
            "thai": "ยี่ห้อ "
        },
        {
            "id": 725,
            "parent_id": 166,
            "english": "Brand",
            "thai": "ยี่ห้อ "
        },
        {
            "id": 726,
            "parent_id": 166,
            "english": "motor power",
            "thai": "กำลังมอเตอร์"
        },
        {
            "id": 727,
            "parent_id": 167,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 728,
            "parent_id": 167,
            "english": "Pressure",
            "thai": "แรงดัน"
        },
        {
            "id": 729,
            "parent_id": 167,
            "english": "color",
            "thai": "สี"
        },
        {
            "id": 730,
            "parent_id": 168,
            "english": "Brand",
            "thai": "ยี่ห้อ "
        },
        {
            "id": 731,
            "parent_id": 168,
            "english": "type",
            "thai": "ประเภท "
        },
        {
            "id": 732,
            "parent_id": 168,
            "english": "watt",
            "thai": "กำลังไฟ"
        },
        {
            "id": 733,
            "parent_id": 168,
            "english": "color",
            "thai": "สี"
        },
        {
            "id": 734,
            "parent_id": 169,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 735,
            "parent_id": 169,
            "english": "capacity",
            "thai": "ความจุ"
        },
        {
            "id": 736,
            "parent_id": 169,
            "english": "Temperature control",
            "thai": "ควบคุมอุณหภูมิ"
        },
        {
            "id": 737,
            "parent_id": 169,
            "english": "color",
            "thai": "สี"
        },
        {
            "id": 738,
            "parent_id": 170,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 739,
            "parent_id": 170,
            "english": "capacity",
            "thai": "ความจุ"
        },
        {
            "id": 740,
            "parent_id": 170,
            "english": "watt",
            "thai": "กำลังไฟ "
        },
        {
            "id": 741,
            "parent_id": 170,
            "english": "color",
            "thai": "สี"
        },
        {
            "id": 742,
            "parent_id": 171,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 743,
            "parent_id": 171,
            "english": "type",
            "thai": "ประเภท "
        },
        {
            "id": 744,
            "parent_id": 171,
            "english": "color",
            "thai": "สี"
        },
        {
            "id": 745,
            "parent_id": 171,
            "english": "size",
            "thai": "ขนาด"
        },
        {
            "id": 746,
            "parent_id": 172,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 747,
            "parent_id": 172,
            "english": "type",
            "thai": "ประเภท "
        },
        {
            "id": 748,
            "parent_id": 172,
            "english": "connection",
            "thai": "การเชื่อต่อ"
        },
        {
            "id": 749,
            "parent_id": 173,
            "english": "type",
            "thai": "ประเภท "
        },
        {
            "id": 750,
            "parent_id": 174,
            "english": "type",
            "thai": "ประเภท "
        },
        {
            "id": 751,
            "parent_id": 175,
            "english": "type",
            "thai": "ประเภท "
        },
        {
            "id": 752,
            "parent_id": 176,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 753,
            "parent_id": 176,
            "english": "gender",
            "thai": "เพศ "
        },
        {
            "id": 754,
            "parent_id": 177,
            "english": "type",
            "thai": "ประเภท "
        },
        {
            "id": 755,
            "parent_id": 178,
            "english": "type",
            "thai": "ประเภท "
        },
        {
            "id": 756,
            "parent_id": 179,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 757,
            "parent_id": 179,
            "english": "language",
            "thai": "ภาษา "
        },
        {
            "id": 758,
            "parent_id": 180,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 759,
            "parent_id": 181,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 760,
            "parent_id": 182,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 761,
            "parent_id": 183,
            "english": "type",
            "thai": "ประเภท "
        },
        {
            "id": 762,
            "parent_id": 183,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 763,
            "parent_id": 183,
            "english": "color",
            "thai": "สี"
        },
        {
            "id": 764,
            "parent_id": 184,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 765,
            "parent_id": 185,
            "english": "size",
            "thai": "ขนาด"
        },
        {
            "id": 766,
            "parent_id": 186,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 767,
            "parent_id": 186,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 768,
            "parent_id": 186,
            "english": "color",
            "thai": "สี"
        },
        {
            "id": 769,
            "parent_id": 187,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 770,
            "parent_id": 187,
            "english": "color",
            "thai": "สี"
        },
        {
            "id": 771,
            "parent_id": 187,
            "english": "seat",
            "thai": "ที่นั่ง"
        },
        {
            "id": 772,
            "parent_id": 188,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 773,
            "parent_id": 189,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 774,
            "parent_id": 190,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 775,
            "parent_id": 190,
            "english": "size",
            "thai": "ขนาด"
        },
        {
            "id": 776,
            "parent_id": 191,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 777,
            "parent_id": 191,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 778,
            "parent_id": 192,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 779,
            "parent_id": 192,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 780,
            "parent_id": 193,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 781,
            "parent_id": 194,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 782,
            "parent_id": 194,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 783,
            "parent_id": 195,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 784,
            "parent_id": 196,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 785,
            "parent_id": 196,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 786,
            "parent_id": 197,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 787,
            "parent_id": 197,
            "english": "capacity",
            "thai": "ความจุ"
        },
        {
            "id": 788,
            "parent_id": 197,
            "english": "operating system",
            "thai": "ระบบปฎิบัตรการ"
        },
        {
            "id": 789,
            "parent_id": 198,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 790,
            "parent_id": 198,
            "english": "capacity",
            "thai": "ความจุ"
        },
        {
            "id": 791,
            "parent_id": 198,
            "english": "operating system",
            "thai": "ระบบปฎิบัตรการ"
        },
        {
            "id": 792,
            "parent_id": 199,
            "english": "SIM card",
            "thai": "ซิมการ์ด "
        },
        {
            "id": 793,
            "parent_id": 199,
            "english": "Phone case",
            "thai": "เคสมือถือ แท็บเล็ต"
        },
        {
            "id": 794,
            "parent_id": 199,
            "english": "Battery Charging cable",
            "thai": "แบตเตอรี่ สายชาร์จ "
        },
        {
            "id": 795,
            "parent_id": 199,
            "english": "Headphones",
            "thai": "หูฟัง"
        },
        {
            "id": 796,
            "parent_id": 199,
            "english": "Screen protector",
            "thai": "ฟิล์มกันรอย"
        },
        {
            "id": 797,
            "parent_id": 199,
            "english": "Portable speaker",
            "thai": "สำโพงพกพา"
        },
        {
            "id": 798,
            "parent_id": 199,
            "english": "other",
            "thai": "อุปกรณ์มือถือแท็บเล็ตอื่นๆ "
        },
        {
            "id": 799,
            "parent_id": 200,
            "english": "Brand",
            "thai": "ยี่ห้อ "
        },
        {
            "id": 800,
            "parent_id": 200,
            "english": "MHz",
            "thai": "ความถี่"
        },
        {
            "id": 801,
            "parent_id": 200,
            "english": "battery",
            "thai": "แบตเตอรี่ สายชาร์จ "
        },
        {
            "id": 802,
            "parent_id": 201,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 803,
            "parent_id": 201,
            "english": "Age",
            "thai": "อายุ "
        },
        {
            "id": 804,
            "parent_id": 201,
            "english": "Sex",
            "thai": "เพศ"
        },
        {
            "id": 805,
            "parent_id": 201,
            "english": "size",
            "thai": "ขนาด"
        },
        {
            "id": 806,
            "parent_id": 201,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 807,
            "parent_id": 202,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 808,
            "parent_id": 202,
            "english": "Age",
            "thai": "อายุ "
        },
        {
            "id": 809,
            "parent_id": 202,
            "english": "Sex",
            "thai": "เพศ"
        },
        {
            "id": 810,
            "parent_id": 202,
            "english": "size",
            "thai": "ขนาด"
        },
        {
            "id": 811,
            "parent_id": 202,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 812,
            "parent_id": 203,
            "english": "gender",
            "thai": "เพศ"
        },
        {
            "id": 813,
            "parent_id": 203,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 814,
            "parent_id": 203,
            "english": "size",
            "thai": "ขนาด"
        },
        {
            "id": 815,
            "parent_id": 203,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 816,
            "parent_id": 204,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 817,
            "parent_id": 204,
            "english": "size",
            "thai": "ขนาด"
        },
        {
            "id": 818,
            "parent_id": 204,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 819,
            "parent_id": 205,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 820,
            "parent_id": 206,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 821,
            "parent_id": 207,
            "english": "Brand",
            "thai": "ยี่ห้อ "
        },
        {
            "id": 822,
            "parent_id": 207,
            "english": "Gear",
            "thai": "เกียร์ "
        },
        {
            "id": 823,
            "parent_id": 207,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 824,
            "parent_id": 207,
            "english": "Year of the motorcycle",
            "thai": "ปีรถ "
        },
        {
            "id": 825,
            "parent_id": 207,
            "english": "Engine displacement in cubic centimeters",
            "thai": "ซีซี"
        },
        {
            "id": 826,
            "parent_id": 208,
            "english": "Brand",
            "thai": "ยี่ห้อ "
        },
        {
            "id": 827,
            "parent_id": 208,
            "english": "Gear",
            "thai": "เกียร์ "
        },
        {
            "id": 828,
            "parent_id": 208,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 829,
            "parent_id": 208,
            "english": "Year of the motorcycle",
            "thai": "ปีรถ "
        },
        {
            "id": 830,
            "parent_id": 208,
            "english": "Engine displacement in cubic centimeters",
            "thai": "ซีซี"
        },
        {
            "id": 831,
            "parent_id": 209,
            "english": "Brand",
            "thai": "ยี่ห้อ "
        },
        {
            "id": 832,
            "parent_id": 209,
            "english": "Gear",
            "thai": "เกียร์ "
        },
        {
            "id": 833,
            "parent_id": 209,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 834,
            "parent_id": 209,
            "english": "Year of the motorcycle",
            "thai": "ปีรถ "
        },
        {
            "id": 835,
            "parent_id": 209,
            "english": "Engine displacement in cubic centimeters",
            "thai": "ซีซี"
        },
        {
            "id": 836,
            "parent_id": 210,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 837,
            "parent_id": 210,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 838,
            "parent_id": 211,
            "english": "size",
            "thai": "ขนาด"
        },
        {
            "id": 839,
            "parent_id": 212,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 840,
            "parent_id": 212,
            "english": "Type",
            "thai": "ประเภท"
        },
        {
            "id": 841,
            "parent_id": 213,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 842,
            "parent_id": 214,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 843,
            "parent_id": 214,
            "english": "Type",
            "thai": "ประเภท"
        },
        {
            "id": 844,
            "parent_id": 215,
            "english": "Type",
            "thai": "ประเภท"
        },
        {
            "id": 845,
            "parent_id": 216,
            "english": "species",
            "thai": "สายพันธุ์"
        },
        {
            "id": 846,
            "parent_id": 216,
            "english": "size",
            "thai": "ขนาด"
        },
        {
            "id": 847,
            "parent_id": 217,
            "english": "species",
            "thai": "สายพันธุ์"
        },
        {
            "id": 848,
            "parent_id": 218,
            "english": "species",
            "thai": "สายพันธุ์"
        },
        {
            "id": 849,
            "parent_id": 219,
            "english": "species",
            "thai": "สายพันธุ์"
        },
        {
            "id": 850,
            "parent_id": 220,
            "english": "species",
            "thai": "สายพันธุ์"
        },
        {
            "id": 851,
            "parent_id": 221,
            "english": "species",
            "thai": "สายพันธุ์"
        },
        {
            "id": 852,
            "parent_id": 222,
            "english": "species",
            "thai": "สายพันธุ์"
        },
        {
            "id": 853,
            "parent_id": 223,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 854,
            "parent_id": 224,
            "english": "Brand",
            "thai": "ยี่ห้อ "
        },
        {
            "id": 855,
            "parent_id": 224,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 856,
            "parent_id": 224,
            "english": "Size",
            "thai": "ขนาด "
        },
        {
            "id": 857,
            "parent_id": 224,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 858,
            "parent_id": 224,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 859,
            "parent_id": 225,
            "english": "Brand",
            "thai": "ยี่ห้อ "
        },
        {
            "id": 860,
            "parent_id": 225,
            "english": "Color",
            "thai": "สี"
        },
        {
            "id": 861,
            "parent_id": 225,
            "english": "Size",
            "thai": "ขนาด "
        },
        {
            "id": 862,
            "parent_id": 225,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 863,
            "parent_id": 225,
            "english": "Material",
            "thai": "วัสดุ"
        },
        {
            "id": 864,
            "parent_id": 226,
            "english": "type",
            "thai": "ประเภท"
        },
        {
            "id": 865,
            "parent_id": 227,
            "english": "Brand",
            "thai": "ยี่ห้อ "
        },
        {
            "id": 866,
            "parent_id": 228,
            "english": "Brand",
            "thai": "ยี่ห้อ "
        },
        {
            "id": 867,
            "parent_id": 229,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 868,
            "parent_id": 229,
            "english": "Type",
            "thai": "ประเภท"
        },
        {
            "id": 869,
            "parent_id": 229,
            "english": "Size",
            "thai": "ขนาด "
        },
        {
            "id": 870,
            "parent_id": 230,
            "english": "Brand",
            "thai": "ยี่ห้อ"
        },
        {
            "id": 871,
            "parent_id": 230,
            "english": "Type",
            "thai": "ประเภท"
        },
        {
            "id": 872,
            "parent_id": 230,
            "english": "Sex",
            "thai": "เพศ"
        },
        {
            "id": 873,
            "parent_id": 230,
            "english": "Color",
            "thai": "สี "
        }
    ];
    const subAtts = [
        {
            "id": 2001,
            "parent_id": 501,
            "english": "New",
            "thai": "ใหม่"
        },
        {
            "id": 2002,
            "parent_id": 501,
            "english": "Used",
            "thai": "เก่า"
        },
        {
            "id": 2003,
            "parent_id": 502,
            "english": "Toyota",
            "thai": "Toyota"
        },
        {
            "id": 2004,
            "parent_id": 502,
            "english": "Honda",
            "thai": "Honda"
        },
        {
            "id": 2005,
            "parent_id": 502,
            "english": "Nissan",
            "thai": "Nissan"
        },
        {
            "id": 2006,
            "parent_id": 502,
            "english": "Mitsubishi",
            "thai": "Mitsubishi"
        },
        {
            "id": 2007,
            "parent_id": 502,
            "english": "Isuzu",
            "thai": "Isuzu"
        },
        {
            "id": 2008,
            "parent_id": 502,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2009,
            "parent_id": 503,
            "english": 2022,
            "thai": 2022
        },
        {
            "id": 2010,
            "parent_id": 503,
            "english": 2021,
            "thai": 2021
        },
        {
            "id": 2011,
            "parent_id": 503,
            "english": 2020,
            "thai": 2020
        },
        {
            "id": 2012,
            "parent_id": 503,
            "english": 2019,
            "thai": 2019
        },
        {
            "id": 2013,
            "parent_id": 503,
            "english": 2018,
            "thai": 2018
        },
        {
            "id": 2014,
            "parent_id": 503,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2015,
            "parent_id": 504,
            "english": 20000,
            "thai": 20000
        },
        {
            "id": 2016,
            "parent_id": 504,
            "english": 50000,
            "thai": 50000
        },
        {
            "id": 2017,
            "parent_id": 504,
            "english": 80000,
            "thai": 80000
        },
        {
            "id": 2018,
            "parent_id": 504,
            "english": 100000,
            "thai": 100000
        },
        {
            "id": 2019,
            "parent_id": 504,
            "english": 125000,
            "thai": 125000
        },
        {
            "id": 2020,
            "parent_id": 504,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2021,
            "parent_id": 505,
            "english": "Petrol/Gasoline",
            "thai": "เบนซิน"
        },
        {
            "id": 2022,
            "parent_id": 505,
            "english": "Diesel",
            "thai": "ดีเซล"
        },
        {
            "id": 2023,
            "parent_id": 505,
            "english": "Hybrid",
            "thai": "ไฮบริด"
        },
        {
            "id": 2024,
            "parent_id": 506,
            "english": "NGV (Natural Gas for Vehicle)",
            "thai": "NGV (Natural Gas for Vehicle)"
        },
        {
            "id": 2025,
            "parent_id": 506,
            "english": "LPG (Liquefied Petroleum Gas)",
            "thai": "LPG (Liquefied Petroleum Gas)"
        },
        {
            "id": 2026,
            "parent_id": 506,
            "english": "Non-Gasoline",
            "thai": "ไม่ติดแก๊ส"
        },
        {
            "id": 2027,
            "parent_id": 507,
            "english": "Automatic transmission",
            "thai": "เกียร์อัตโนมัติ "
        },
        {
            "id": 2028,
            "parent_id": 507,
            "english": "Manual transmission",
            "thai": "เกียร์ธรรมดา "
        },
        {
            "id": 2029,
            "parent_id": 508,
            "english": "White",
            "thai": "ขาว "
        },
        {
            "id": 2030,
            "parent_id": 508,
            "english": "Gray",
            "thai": "เทา "
        },
        {
            "id": 2031,
            "parent_id": 508,
            "english": "Black",
            "thai": "ดำ "
        },
        {
            "id": 2032,
            "parent_id": 508,
            "english": "Bronze Silver",
            "thai": "บรอนซ์เงิน "
        },
        {
            "id": 2033,
            "parent_id": 508,
            "english": "Bronze Gold",
            "thai": "บรอนซ์ทอง "
        },
        {
            "id": 2034,
            "parent_id": 508,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2035,
            "parent_id": 509,
            "english": "New car",
            "thai": "รถมือหนึ่ง"
        },
        {
            "id": 2036,
            "parent_id": 509,
            "english": "Used car",
            "thai": "รถมือสอง"
        },
        {
            "id": 2037,
            "parent_id": 510,
            "english": "Toyota",
            "thai": "Toyota"
        },
        {
            "id": 2038,
            "parent_id": 510,
            "english": "Honda",
            "thai": "Honda"
        },
        {
            "id": 2039,
            "parent_id": 510,
            "english": "Nissan",
            "thai": "Nissan"
        },
        {
            "id": 2040,
            "parent_id": 510,
            "english": "Mitsubishi",
            "thai": "Mitsubishi"
        },
        {
            "id": 2041,
            "parent_id": 510,
            "english": "Isuzu",
            "thai": "Isuzu"
        },
        {
            "id": 2042,
            "parent_id": 510,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2043,
            "parent_id": 511,
            "english": 2022,
            "thai": 2022
        },
        {
            "id": 2044,
            "parent_id": 511,
            "english": 2021,
            "thai": 2021
        },
        {
            "id": 2045,
            "parent_id": 511,
            "english": 2020,
            "thai": 2020
        },
        {
            "id": 2046,
            "parent_id": 511,
            "english": 2019,
            "thai": 2019
        },
        {
            "id": 2047,
            "parent_id": 511,
            "english": 2018,
            "thai": 2018
        },
        {
            "id": 2048,
            "parent_id": 511,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2049,
            "parent_id": 512,
            "english": 20000,
            "thai": 20000
        },
        {
            "id": 2050,
            "parent_id": 512,
            "english": 50000,
            "thai": 50000
        },
        {
            "id": 2051,
            "parent_id": 512,
            "english": 80000,
            "thai": 80000
        },
        {
            "id": 2052,
            "parent_id": 512,
            "english": 100000,
            "thai": 100000
        },
        {
            "id": 2053,
            "parent_id": 512,
            "english": 125000,
            "thai": 125000
        },
        {
            "id": 2054,
            "parent_id": 512,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2055,
            "parent_id": 513,
            "english": "Petrol/Gasoline",
            "thai": "เบนซิน"
        },
        {
            "id": 2056,
            "parent_id": 513,
            "english": "Diesel",
            "thai": "ดีเซล"
        },
        {
            "id": 2057,
            "parent_id": 513,
            "english": "Hybrid",
            "thai": "ไฮบริด"
        },
        {
            "id": 2058,
            "parent_id": 514,
            "english": "LPG (Liquefied Petroleum Gas)",
            "thai": ""
        },
        {
            "id": 2059,
            "parent_id": 514,
            "english": "Non-Gasoline",
            "thai": "ไม่ติดแก๊ส"
        },
        {
            "id": 2060,
            "parent_id": 515,
            "english": "Automatic transmission",
            "thai": "เกียร์อัตโนมัติ"
        },
        {
            "id": 2061,
            "parent_id": 515,
            "english": "Manual transmission",
            "thai": "เกียร์ธรรมดา"
        },
        {
            "id": 2062,
            "parent_id": 516,
            "english": "White",
            "thai": "ขาว"
        },
        {
            "id": 2063,
            "parent_id": 516,
            "english": "Gray",
            "thai": "เทา"
        },
        {
            "id": 2064,
            "parent_id": 516,
            "english": "Black",
            "thai": "ดำ"
        },
        {
            "id": 2065,
            "parent_id": 516,
            "english": "Bronze Silver",
            "thai": "บรอนซ์เงิน"
        },
        {
            "id": 2066,
            "parent_id": 516,
            "english": "Bronze Gold",
            "thai": "บรอนซ์ทอง"
        },
        {
            "id": 2067,
            "parent_id": 516,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2068,
            "parent_id": 517,
            "english": "New car",
            "thai": "รถมือหนึ่ง"
        },
        {
            "id": 2069,
            "parent_id": 517,
            "english": "Used car",
            "thai": "รถมือสอง"
        },
        {
            "id": 2070,
            "parent_id": 518,
            "english": "Toyota",
            "thai": "Toyota"
        },
        {
            "id": 2071,
            "parent_id": 518,
            "english": "Nissan",
            "thai": "Nissan"
        },
        {
            "id": 2072,
            "parent_id": 518,
            "english": "Mitsubishi",
            "thai": "Mitsubishi"
        },
        {
            "id": 2073,
            "parent_id": 518,
            "english": "Isuzu",
            "thai": "Isuzu"
        },
        {
            "id": 2074,
            "parent_id": 518,
            "english": "Ford Ranger",
            "thai": "Ford Ranger"
        },
        {
            "id": 2075,
            "parent_id": 518,
            "english": "Others",
            "thai": "อื่่นๆ"
        },
        {
            "id": 2076,
            "parent_id": 519,
            "english": 2022,
            "thai": 2022
        },
        {
            "id": 2077,
            "parent_id": 519,
            "english": 2021,
            "thai": 2021
        },
        {
            "id": 2078,
            "parent_id": 519,
            "english": 2020,
            "thai": 2020
        },
        {
            "id": 2079,
            "parent_id": 519,
            "english": 2019,
            "thai": 2019
        },
        {
            "id": 2080,
            "parent_id": 519,
            "english": 2018,
            "thai": 2018
        },
        {
            "id": 2081,
            "parent_id": 519,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2082,
            "parent_id": 520,
            "english": 20000,
            "thai": 20000
        },
        {
            "id": 2083,
            "parent_id": 520,
            "english": 50000,
            "thai": 50000
        },
        {
            "id": 2084,
            "parent_id": 520,
            "english": 80000,
            "thai": 80000
        },
        {
            "id": 2085,
            "parent_id": 520,
            "english": 100000,
            "thai": 100000
        },
        {
            "id": 2086,
            "parent_id": 520,
            "english": 125000,
            "thai": 125000
        },
        {
            "id": 2087,
            "parent_id": 520,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2088,
            "parent_id": 521,
            "english": "Petrol/Gasoline",
            "thai": "เบนซิน"
        },
        {
            "id": 2089,
            "parent_id": 521,
            "english": "Diesel",
            "thai": "ดีเซล"
        },
        {
            "id": 2090,
            "parent_id": 521,
            "english": "Hybrid",
            "thai": "ไฮบริด"
        },
        {
            "id": 2091,
            "parent_id": 522,
            "english": "NGV (Natural Gas for Vehicle)",
            "thai": "NGV (Natural Gas for Vehicle)"
        },
        {
            "id": 2092,
            "parent_id": 522,
            "english": "LPG (Liquefied Petroleum Gas)",
            "thai": "LPG (Liquefied Petroleum Gas)"
        },
        {
            "id": 2093,
            "parent_id": 522,
            "english": "Non-Gasoline",
            "thai": "ไม่ติดแก๊ส"
        },
        {
            "id": 2094,
            "parent_id": 523,
            "english": "Automatic transmission",
            "thai": "เกียร์อัตโนมัติ"
        },
        {
            "id": 2095,
            "parent_id": 523,
            "english": "Manual transmission",
            "thai": "เกียร์ธรรมดา"
        },
        {
            "id": 2096,
            "parent_id": 524,
            "english": "White",
            "thai": "ขาว"
        },
        {
            "id": 2097,
            "parent_id": 524,
            "english": "Gray",
            "thai": "เทา"
        },
        {
            "id": 2098,
            "parent_id": 524,
            "english": "Black",
            "thai": "ดำ"
        },
        {
            "id": 2099,
            "parent_id": 524,
            "english": "Bronze Silver",
            "thai": "บรอนซ์เงิน"
        },
        {
            "id": 2100,
            "parent_id": 524,
            "english": "Bronze Gold",
            "thai": "บรอนซ์ทอง"
        },
        {
            "id": 2101,
            "parent_id": 524,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2102,
            "parent_id": 525,
            "english": "New car",
            "thai": "รถมือหนึ่ง"
        },
        {
            "id": 2103,
            "parent_id": 525,
            "english": "Used car",
            "thai": "รถมือสอง"
        },
        {
            "id": 2104,
            "parent_id": 526,
            "english": "Toyota",
            "thai": "Toyota"
        },
        {
            "id": 2105,
            "parent_id": 526,
            "english": "Nissan",
            "thai": "Nissan"
        },
        {
            "id": 2106,
            "parent_id": 526,
            "english": "Foton",
            "thai": "Foton"
        },
        {
            "id": 2107,
            "parent_id": 526,
            "english": "Hyundai",
            "thai": "Hyundai"
        },
        {
            "id": 2108,
            "parent_id": 526,
            "english": "Alphard",
            "thai": "Alphard"
        },
        {
            "id": 2109,
            "parent_id": 526,
            "english": "Others",
            "thai": "อื่่นๆ"
        },
        {
            "id": 2110,
            "parent_id": 527,
            "english": 2022,
            "thai": 2022
        },
        {
            "id": 2111,
            "parent_id": 527,
            "english": 2021,
            "thai": 2021
        },
        {
            "id": 2112,
            "parent_id": 527,
            "english": 2020,
            "thai": 2020
        },
        {
            "id": 2113,
            "parent_id": 527,
            "english": 2019,
            "thai": 2019
        },
        {
            "id": 2114,
            "parent_id": 527,
            "english": 2018,
            "thai": 2018
        },
        {
            "id": 2115,
            "parent_id": 527,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2116,
            "parent_id": 528,
            "english": 20000,
            "thai": 20000
        },
        {
            "id": 2117,
            "parent_id": 528,
            "english": 50000,
            "thai": 50000
        },
        {
            "id": 2118,
            "parent_id": 528,
            "english": 80000,
            "thai": 80000
        },
        {
            "id": 2119,
            "parent_id": 528,
            "english": 100000,
            "thai": 100000
        },
        {
            "id": 2120,
            "parent_id": 528,
            "english": 125000,
            "thai": 125000
        },
        {
            "id": 2121,
            "parent_id": 528,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2122,
            "parent_id": 529,
            "english": "Petrol/Gasoline",
            "thai": "เบนซิน"
        },
        {
            "id": 2123,
            "parent_id": 529,
            "english": "Diesel",
            "thai": "ดีเซล"
        },
        {
            "id": 2124,
            "parent_id": 529,
            "english": "Hybrid",
            "thai": "ไฮบริด"
        },
        {
            "id": 2125,
            "parent_id": 530,
            "english": "NGV (Natural Gas for Vehicle)",
            "thai": "NGV (Natural Gas for Vehicle)"
        },
        {
            "id": 2126,
            "parent_id": 530,
            "english": "LPG (Liquefied Petroleum Gas)",
            "thai": "LPG (Liquefied Petroleum Gas)"
        },
        {
            "id": 2127,
            "parent_id": 530,
            "english": "Non-Gasoline",
            "thai": "ไม่ติดแก๊ส"
        },
        {
            "id": 2128,
            "parent_id": 531,
            "english": "Automatic transmission",
            "thai": "เกียร์อัตโนมัติ"
        },
        {
            "id": 2129,
            "parent_id": 531,
            "english": "Manual transmission",
            "thai": "เกียร์ธรรมดา"
        },
        {
            "id": 2130,
            "parent_id": 532,
            "english": "White",
            "thai": "ขาว"
        },
        {
            "id": 2131,
            "parent_id": 532,
            "english": "Gray",
            "thai": "เทา"
        },
        {
            "id": 2132,
            "parent_id": 532,
            "english": "Black",
            "thai": "ดำ"
        },
        {
            "id": 2133,
            "parent_id": 532,
            "english": "Bronze Silver",
            "thai": "บรอนซ์เงิน"
        },
        {
            "id": 2134,
            "parent_id": 532,
            "english": "Bronze Gold",
            "thai": "บรอนซ์ทอง"
        },
        {
            "id": 2135,
            "parent_id": 532,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2136,
            "parent_id": 533,
            "english": "New car",
            "thai": "รถมือหนึ่ง"
        },
        {
            "id": 2137,
            "parent_id": 533,
            "english": "Used car",
            "thai": "รถมือสอง"
        },
        {
            "id": 2138,
            "parent_id": 534,
            "english": "Toyota",
            "thai": "Toyota"
        },
        {
            "id": 2139,
            "parent_id": 534,
            "english": "Isuzu",
            "thai": "Isuzu"
        },
        {
            "id": 2140,
            "parent_id": 534,
            "english": "Fortuner",
            "thai": "Fortuner"
        },
        {
            "id": 2141,
            "parent_id": 534,
            "english": "Ford",
            "thai": "Ford"
        },
        {
            "id": 2142,
            "parent_id": 534,
            "english": "Mitsubishi",
            "thai": "Mitsubishi"
        },
        {
            "id": 2143,
            "parent_id": 534,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2144,
            "parent_id": 535,
            "english": 2022,
            "thai": 2022
        },
        {
            "id": 2145,
            "parent_id": 535,
            "english": 2021,
            "thai": 2021
        },
        {
            "id": 2146,
            "parent_id": 535,
            "english": 2020,
            "thai": 2020
        },
        {
            "id": 2147,
            "parent_id": 535,
            "english": 2019,
            "thai": 2019
        },
        {
            "id": 2148,
            "parent_id": 535,
            "english": 2018,
            "thai": 2018
        },
        {
            "id": 2149,
            "parent_id": 535,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2150,
            "parent_id": 536,
            "english": 20000,
            "thai": 20000
        },
        {
            "id": 2151,
            "parent_id": 536,
            "english": 50000,
            "thai": 50000
        },
        {
            "id": 2152,
            "parent_id": 536,
            "english": 80000,
            "thai": 80000
        },
        {
            "id": 2153,
            "parent_id": 536,
            "english": 100000,
            "thai": 100000
        },
        {
            "id": 2154,
            "parent_id": 536,
            "english": 125000,
            "thai": 125000
        },
        {
            "id": 2155,
            "parent_id": 536,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2156,
            "parent_id": 537,
            "english": "Petrol/Gasoline",
            "thai": "เบนซิน"
        },
        {
            "id": 2157,
            "parent_id": 537,
            "english": " Diesel",
            "thai": "ดีเซล"
        },
        {
            "id": 2158,
            "parent_id": 537,
            "english": "Hybrid",
            "thai": "ไฮบริด"
        },
        {
            "id": 2159,
            "parent_id": 537,
            "english": "Electricity",
            "thai": "ไฟฟ้า"
        },
        {
            "id": 2160,
            "parent_id": 538,
            "english": "NGV (Natural Gas for Vehicle)",
            "thai": "NGV (Natural Gas for Vehicle)"
        },
        {
            "id": 2161,
            "parent_id": 538,
            "english": "LPG (Liquefied Petroleum Gas)",
            "thai": "LPG (Liquefied Petroleum Gas)"
        },
        {
            "id": 2162,
            "parent_id": 538,
            "english": "Non-Gasoline",
            "thai": "ไม่ติดแก๊ส"
        },
        {
            "id": 2163,
            "parent_id": 539,
            "english": "Automatic transmission",
            "thai": "เกียร์อัตโนมัติ"
        },
        {
            "id": 2164,
            "parent_id": 539,
            "english": "Manual transmission",
            "thai": "เกียร์ธรรมดา"
        },
        {
            "id": 2165,
            "parent_id": 540,
            "english": "White",
            "thai": "ขาว"
        },
        {
            "id": 2166,
            "parent_id": 540,
            "english": "Gray",
            "thai": "เทา"
        },
        {
            "id": 2167,
            "parent_id": 540,
            "english": "Black",
            "thai": "ดำ"
        },
        {
            "id": 2168,
            "parent_id": 540,
            "english": "Bronze Silver",
            "thai": "บรอนซ์เงิน"
        },
        {
            "id": 2169,
            "parent_id": 540,
            "english": "Bronze Gold",
            "thai": "บรอนซ์ทอง"
        },
        {
            "id": 2170,
            "parent_id": 540,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2171,
            "parent_id": 541,
            "english": "Anello",
            "thai": "Anello"
        },
        {
            "id": 2172,
            "parent_id": 541,
            "english": "Calvin Klein",
            "thai": "Calvin Klein"
        },
        {
            "id": 2173,
            "parent_id": 541,
            "english": "Coach",
            "thai": "Coach"
        },
        {
            "id": 2174,
            "parent_id": 541,
            "english": "Guess",
            "thai": "Guess"
        },
        {
            "id": 2175,
            "parent_id": 541,
            "english": "Kipling",
            "thai": "Kipling"
        },
        {
            "id": 2176,
            "parent_id": 541,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2177,
            "parent_id": 542,
            "english": "Men",
            "thai": "ผู้ชาย"
        },
        {
            "id": 2178,
            "parent_id": 542,
            "english": "Women",
            "thai": "ผู้หญิง"
        },
        {
            "id": 2179,
            "parent_id": 542,
            "english": "Unisex",
            "thai": "ไม่จำกัดเพศ"
        },
        {
            "id": 2180,
            "parent_id": 543,
            "english": "leather",
            "thai": "หนังแท้"
        },
        {
            "id": 2181,
            "parent_id": 543,
            "english": "Fabric",
            "thai": "ผ้า"
        },
        {
            "id": 2182,
            "parent_id": 543,
            "english": "PU leather",
            "thai": "หนัง PU"
        },
        {
            "id": 2183,
            "parent_id": 543,
            "english": "Canvas",
            "thai": "ผ้าใบ"
        },
        {
            "id": 2184,
            "parent_id": 543,
            "english": "Polyester",
            "thai": "โพลีเอสเตอร์"
        },
        {
            "id": 2185,
            "parent_id": 543,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2186,
            "parent_id": 544,
            "english": "black",
            "thai": "สีดำ"
        },
        {
            "id": 2187,
            "parent_id": 544,
            "english": "brown",
            "thai": "สีน้ำตาล"
        },
        {
            "id": 2188,
            "parent_id": 544,
            "english": "dark blue",
            "thai": "สีน้ำเงิน"
        },
        {
            "id": 2189,
            "parent_id": 544,
            "english": "beige",
            "thai": "สีเนื้อ"
        },
        {
            "id": 2190,
            "parent_id": 544,
            "english": "white",
            "thai": "สีขาว"
        },
        {
            "id": 2191,
            "parent_id": 544,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2192,
            "parent_id": 545,
            "english": "Carlyn",
            "thai": "Carlyn"
        },
        {
            "id": 2193,
            "parent_id": 545,
            "english": "Charles & Keith",
            "thai": "Charles & Keith"
        },
        {
            "id": 2194,
            "parent_id": 545,
            "english": "LYN",
            "thai": "LYN"
        },
        {
            "id": 2195,
            "parent_id": 545,
            "english": "Gentle Woman",
            "thai": "Gentle Woman"
        },
        {
            "id": 2196,
            "parent_id": 545,
            "english": "Zara",
            "thai": "Zara"
        },
        {
            "id": 2197,
            "parent_id": 545,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2198,
            "parent_id": 546,
            "english": "Men",
            "thai": "ผู้ชาย"
        },
        {
            "id": 2199,
            "parent_id": 546,
            "english": "Women",
            "thai": "ผู้หญิง"
        },
        {
            "id": 2200,
            "parent_id": 546,
            "english": "Unisex",
            "thai": "ไม่จำกัดเพศ"
        },
        {
            "id": 2201,
            "parent_id": 547,
            "english": "Polypropylene",
            "thai": "โพลีโพรพีลีน"
        },
        {
            "id": 2202,
            "parent_id": 547,
            "english": "Cotton",
            "thai": "ผ้าฝ้าย"
        },
        {
            "id": 2203,
            "parent_id": 547,
            "english": "Polyester",
            "thai": "โพลีเอสเตอร์"
        },
        {
            "id": 2204,
            "parent_id": 547,
            "english": "canvas",
            "thai": "ผ้าใบ"
        },
        {
            "id": 2205,
            "parent_id": 547,
            "english": "Leather",
            "thai": "หนังแท้"
        },
        {
            "id": 2206,
            "parent_id": 547,
            "english": "Others",
            "thai": "อื่น ๆ"
        },
        {
            "id": 2207,
            "parent_id": 548,
            "english": "black",
            "thai": "สีดำ"
        },
        {
            "id": 2208,
            "parent_id": 548,
            "english": "brown",
            "thai": "สีน้ำตาล"
        },
        {
            "id": 2209,
            "parent_id": 548,
            "english": "dark blue",
            "thai": "สีน้ำเงิน"
        },
        {
            "id": 2210,
            "parent_id": 548,
            "english": "beige",
            "thai": "สีเนื้อ"
        },
        {
            "id": 2211,
            "parent_id": 548,
            "english": "white",
            "thai": "สีขาว"
        },
        {
            "id": 2212,
            "parent_id": 548,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2213,
            "parent_id": 549,
            "english": "Coach",
            "thai": "Coach"
        },
        {
            "id": 2214,
            "parent_id": 549,
            "english": "Forever young",
            "thai": "Forever young"
        },
        {
            "id": 2215,
            "parent_id": 549,
            "english": "Charles & Keith",
            "thai": "Charles & Keith"
        },
        {
            "id": 2216,
            "parent_id": 549,
            "english": "Carlyn",
            "thai": "Carlyn"
        },
        {
            "id": 2217,
            "parent_id": 549,
            "english": "YSL",
            "thai": "YSL"
        },
        {
            "id": 2218,
            "parent_id": 549,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2219,
            "parent_id": 550,
            "english": "Men",
            "thai": "ผู้ชาย"
        },
        {
            "id": 2220,
            "parent_id": 550,
            "english": "Women",
            "thai": "ผู้หญิง"
        },
        {
            "id": 2221,
            "parent_id": 550,
            "english": "Unisex",
            "thai": "ไม่จำกัดเพศ"
        },
        {
            "id": 2222,
            "parent_id": 551,
            "english": "Polypropylene",
            "thai": "โพลีโพรพีลีน"
        },
        {
            "id": 2223,
            "parent_id": 551,
            "english": "Cotton",
            "thai": "ผ้าฝ้าย"
        },
        {
            "id": 2224,
            "parent_id": 551,
            "english": "Polyester",
            "thai": "โพลีเอสเตอร์"
        },
        {
            "id": 2225,
            "parent_id": 551,
            "english": "canvas",
            "thai": "ผ้าใบ"
        },
        {
            "id": 2226,
            "parent_id": 551,
            "english": "Leather",
            "thai": "หนังแท้"
        },
        {
            "id": 2227,
            "parent_id": 551,
            "english": "Others",
            "thai": "อื่น ๆ"
        },
        {
            "id": 2228,
            "parent_id": 552,
            "english": "black",
            "thai": "สีดำ"
        },
        {
            "id": 2229,
            "parent_id": 552,
            "english": "brown",
            "thai": "สีน้ำตาล"
        },
        {
            "id": 2230,
            "parent_id": 552,
            "english": "dark blue",
            "thai": "สีน้ำเงิน"
        },
        {
            "id": 2231,
            "parent_id": 552,
            "english": "beige",
            "thai": "สีเนื้อ"
        },
        {
            "id": 2232,
            "parent_id": 552,
            "english": "white",
            "thai": "สีขาว"
        },
        {
            "id": 2233,
            "parent_id": 552,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2234,
            "parent_id": 553,
            "english": "American Tourister",
            "thai": "American Tourister"
        },
        {
            "id": 2235,
            "parent_id": 553,
            "english": "Tpartnar",
            "thai": "Tpartnar"
        },
        {
            "id": 2236,
            "parent_id": 553,
            "english": "Baggage",
            "thai": "Baggage"
        },
        {
            "id": 2237,
            "parent_id": 553,
            "english": "ZTXB",
            "thai": "ZTXB"
        },
        {
            "id": 2238,
            "parent_id": 553,
            "english": "Swish Havy",
            "thai": "Swish Havy"
        },
        {
            "id": 2239,
            "parent_id": 553,
            "english": "Others",
            "thai": "Others"
        },
        {
            "id": 2240,
            "parent_id": 554,
            "english": "Men",
            "thai": "ผู้ชาย"
        },
        {
            "id": 2241,
            "parent_id": 554,
            "english": "Women",
            "thai": "ผู้หญิง"
        },
        {
            "id": 2242,
            "parent_id": 554,
            "english": "Unisex",
            "thai": "ไม่จำกัดเพศ"
        },
        {
            "id": 2243,
            "parent_id": 555,
            "english": "Polycarbonate",
            "thai": "โพลีคาร์บอเนต"
        },
        {
            "id": 2244,
            "parent_id": 555,
            "english": "Polypropylene",
            "thai": "โพลิโพรพิลีน"
        },
        {
            "id": 2245,
            "parent_id": 555,
            "english": "Aluminium",
            "thai": "อลูมิเนียม"
        },
        {
            "id": 2246,
            "parent_id": 555,
            "english": "Polyester",
            "thai": "ผ้าโพลีเอสเตอร์"
        },
        {
            "id": 2247,
            "parent_id": 555,
            "english": "Nylon",
            "thai": "ไนลอน"
        },
        {
            "id": 2248,
            "parent_id": 555,
            "english": "Others",
            "thai": "อื่น ๆ"
        },
        {
            "id": 2249,
            "parent_id": 556,
            "english": "black",
            "thai": "สีดำ"
        },
        {
            "id": 2250,
            "parent_id": 556,
            "english": "brown",
            "thai": "สีน้ำตาล"
        },
        {
            "id": 2251,
            "parent_id": 556,
            "english": "dark blue",
            "thai": "สีน้ำเงิน"
        },
        {
            "id": 2252,
            "parent_id": 556,
            "english": "beige",
            "thai": "สีเนื้อ"
        },
        {
            "id": 2253,
            "parent_id": 556,
            "english": "white",
            "thai": "สีขาว"
        },
        {
            "id": 2254,
            "parent_id": 556,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2255,
            "parent_id": 557,
            "english": "COACH",
            "thai": "COACH"
        },
        {
            "id": 2256,
            "parent_id": 557,
            "english": "LINGKY",
            "thai": "LINGKY"
        },
        {
            "id": 2257,
            "parent_id": 557,
            "english": "Kipling",
            "thai": "Kipling"
        },
        {
            "id": 2258,
            "parent_id": 557,
            "english": "Longchamp",
            "thai": "Longchamp"
        },
        {
            "id": 2259,
            "parent_id": 557,
            "english": "Jacob",
            "thai": "Jacob"
        },
        {
            "id": 2260,
            "parent_id": 557,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2261,
            "parent_id": 558,
            "english": "Men",
            "thai": "ผู้ชาย"
        },
        {
            "id": 2262,
            "parent_id": 558,
            "english": "Women",
            "thai": "ผู้หญิง"
        },
        {
            "id": 2263,
            "parent_id": 558,
            "english": "Unisex",
            "thai": "ไม่จำกัดเพศ"
        },
        {
            "id": 2264,
            "parent_id": 559,
            "english": "Canvas",
            "thai": "ผ้าใบ"
        },
        {
            "id": 2265,
            "parent_id": 559,
            "english": "Cotton",
            "thai": "ผ้าฝ้าย"
        },
        {
            "id": 2266,
            "parent_id": 559,
            "english": "Leather",
            "thai": "หนังแท้"
        },
        {
            "id": 2267,
            "parent_id": 559,
            "english": "Polyurethane",
            "thai": "หนังเทียม PU"
        },
        {
            "id": 2268,
            "parent_id": 559,
            "english": "Others",
            "thai": "อื่น ๆ"
        },
        {
            "id": 2269,
            "parent_id": 560,
            "english": "black",
            "thai": "สีดำ"
        },
        {
            "id": 2270,
            "parent_id": 560,
            "english": "brown",
            "thai": "สีน้ำตาล"
        },
        {
            "id": 2271,
            "parent_id": 560,
            "english": "dark blue",
            "thai": "สีน้ำเงิน"
        },
        {
            "id": 2272,
            "parent_id": 560,
            "english": "beige",
            "thai": "สีเนื้อ"
        },
        {
            "id": 2273,
            "parent_id": 560,
            "english": "white",
            "thai": "สีขาว"
        },
        {
            "id": 2274,
            "parent_id": 560,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2275,
            "parent_id": 561,
            "english": "Marimekko",
            "thai": "Marimekko"
        },
        {
            "id": 2276,
            "parent_id": 561,
            "english": "Hay",
            "thai": "Hay"
        },
        {
            "id": 2277,
            "parent_id": 561,
            "english": "Aland",
            "thai": "Aland"
        },
        {
            "id": 2278,
            "parent_id": 561,
            "english": "Muji",
            "thai": "Muji"
        },
        {
            "id": 2279,
            "parent_id": 561,
            "english": "Pale Petal",
            "thai": "Pale Petal"
        },
        {
            "id": 2280,
            "parent_id": 561,
            "english": "Gentle woman",
            "thai": "Gentle woman"
        },
        {
            "id": 2281,
            "parent_id": 561,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2282,
            "parent_id": 562,
            "english": "Men",
            "thai": "ผู้ชาย"
        },
        {
            "id": 2283,
            "parent_id": 562,
            "english": "Women",
            "thai": "ผู้หญิง"
        },
        {
            "id": 2284,
            "parent_id": 562,
            "english": "Unisex",
            "thai": "ไม่จำกัดเพศ"
        },
        {
            "id": 2285,
            "parent_id": 563,
            "english": "Polypropylene",
            "thai": "โพลีโพรพีลีน"
        },
        {
            "id": 2286,
            "parent_id": 563,
            "english": "Cotton",
            "thai": "ผ้าฝ้าย"
        },
        {
            "id": 2287,
            "parent_id": 563,
            "english": "Polyester",
            "thai": "โพลีเอสเตอร์"
        },
        {
            "id": 2288,
            "parent_id": 563,
            "english": "Canvas",
            "thai": "ผ้าใบ"
        },
        {
            "id": 2289,
            "parent_id": 563,
            "english": "Others",
            "thai": "อื่น ๆ"
        },
        {
            "id": 2290,
            "parent_id": 564,
            "english": "black",
            "thai": "สีดำ"
        },
        {
            "id": 2291,
            "parent_id": 564,
            "english": "brown",
            "thai": "สีน้ำตาล"
        },
        {
            "id": 2292,
            "parent_id": 564,
            "english": "dark blue",
            "thai": "สีน้ำเงิน"
        },
        {
            "id": 2293,
            "parent_id": 564,
            "english": "beige",
            "thai": "สีเนื้อ"
        },
        {
            "id": 2294,
            "parent_id": 564,
            "english": "white",
            "thai": "สีขาว"
        },
        {
            "id": 2295,
            "parent_id": 564,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2296,
            "parent_id": 565,
            "english": "TREK",
            "thai": "TREK"
        },
        {
            "id": 2297,
            "parent_id": 565,
            "english": "GIANT",
            "thai": "GIANT"
        },
        {
            "id": 2298,
            "parent_id": 565,
            "english": "BIANCHI",
            "thai": "BIANCHI"
        },
        {
            "id": 2299,
            "parent_id": 565,
            "english": "MERIDA\n",
            "thai": "MERIDA\n"
        },
        {
            "id": 2300,
            "parent_id": 565,
            "english": "TRINX",
            "thai": "TRINX"
        },
        {
            "id": 2301,
            "parent_id": 565,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2302,
            "parent_id": 566,
            "english": "Cross",
            "thai": "Cross"
        },
        {
            "id": 2303,
            "parent_id": 566,
            "english": "Country",
            "thai": "Country"
        },
        {
            "id": 2304,
            "parent_id": 566,
            "english": "Trail",
            "thai": "Trail"
        },
        {
            "id": 2305,
            "parent_id": 566,
            "english": "Enduro",
            "thai": "Enduro"
        },
        {
            "id": 2306,
            "parent_id": 566,
            "english": "Downhill",
            "thai": "Downhill"
        },
        {
            "id": 2307,
            "parent_id": 567,
            "english": " black",
            "thai": "ดำ"
        },
        {
            "id": 2308,
            "parent_id": 567,
            "english": " white",
            "thai": "ขาว"
        },
        {
            "id": 2309,
            "parent_id": 567,
            "english": " blue",
            "thai": "น้ำเงิน"
        },
        {
            "id": 2310,
            "parent_id": 567,
            "english": " green",
            "thai": "เขียว"
        },
        {
            "id": 2311,
            "parent_id": 567,
            "english": "orange",
            "thai": "ส้ม"
        },
        {
            "id": 2312,
            "parent_id": 567,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2313,
            "parent_id": 568,
            "english": "Java",
            "thai": "Java"
        },
        {
            "id": 2314,
            "parent_id": 568,
            "english": "Winn",
            "thai": "Winn"
        },
        {
            "id": 2315,
            "parent_id": 568,
            "english": "Richter",
            "thai": "Richter"
        },
        {
            "id": 2316,
            "parent_id": 568,
            "english": "GIANT",
            "thai": "GIANT"
        },
        {
            "id": 2317,
            "parent_id": 568,
            "english": "Pinarello",
            "thai": "Pinarello"
        },
        {
            "id": 2318,
            "parent_id": 568,
            "english": "other",
            "thai": "อื่นๆ"
        },
        {
            "id": 2319,
            "parent_id": 569,
            "english": "Cyclocross",
            "thai": "จักรยานไซโคลครอส"
        },
        {
            "id": 2320,
            "parent_id": 569,
            "english": "Touring",
            "thai": "จักรยานทัวริ่ง"
        },
        {
            "id": 2321,
            "parent_id": 569,
            "english": "Fixed-gear bicycle",
            "thai": "จักรยานฟิกเกียร์"
        },
        {
            "id": 2322,
            "parent_id": 569,
            "english": "BMX",
            "thai": "จักรยานวิบาก"
        },
        {
            "id": 2323,
            "parent_id": 569,
            "english": "Hardtail",
            "thai": "Hardtail"
        },
        {
            "id": 2324,
            "parent_id": 569,
            "english": "Racing bicycle",
            "thai": "Racing bicycle"
        },
        {
            "id": 2325,
            "parent_id": 569,
            "english": "Gravel bicycle",
            "thai": "Gravel bicycle"
        },
        {
            "id": 2326,
            "parent_id": 670,
            "english": " black",
            "thai": "ดำ"
        },
        {
            "id": 2327,
            "parent_id": 670,
            "english": " white",
            "thai": "ขาว"
        },
        {
            "id": 2328,
            "parent_id": 670,
            "english": " blue",
            "thai": "น้ำเงิน"
        },
        {
            "id": 2329,
            "parent_id": 670,
            "english": " green",
            "thai": "เขียว"
        },
        {
            "id": 2330,
            "parent_id": 670,
            "english": "orange",
            "thai": "ส้ม"
        },
        {
            "id": 2331,
            "parent_id": 571,
            "english": "TREK",
            "thai": "TREK"
        },
        {
            "id": 2332,
            "parent_id": 571,
            "english": "BIANCHI",
            "thai": "BIANCHI"
        },
        {
            "id": 2333,
            "parent_id": 571,
            "english": "MERIDA",
            "thai": "MERIDA"
        },
        {
            "id": 2334,
            "parent_id": 571,
            "english": "TRINX",
            "thai": "TRINX"
        },
        {
            "id": 2335,
            "parent_id": 571,
            "english": "GIANT",
            "thai": "GIANT"
        },
        {
            "id": 2336,
            "parent_id": 571,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 2337,
            "parent_id": 572,
            "english": "Cyclocross",
            "thai": "จักรยานไซโคลครอส"
        },
        {
            "id": 2338,
            "parent_id": 572,
            "english": "Touring",
            "thai": "จักรยานทัวริ่ง"
        },
        {
            "id": 2339,
            "parent_id": 572,
            "english": "Fixed-gear bicycle",
            "thai": "จักรยานฟิกเกียร์"
        },
        {
            "id": 2340,
            "parent_id": 572,
            "english": "BMX",
            "thai": "จักรยานวิบาก"
        },
        {
            "id": 2341,
            "parent_id": 572,
            "english": "Hardtail",
            "thai": "Hardtail"
        },
        {
            "id": 2342,
            "parent_id": 572,
            "english": "Racing bicycle",
            "thai": "Racing bicycle"
        },
        {
            "id": 2343,
            "parent_id": 572,
            "english": "Gravel bicycle",
            "thai": "Gravel bicycle"
        },
        {
            "id": 2344,
            "parent_id": 573,
            "english": " black",
            "thai": "ดำ"
        },
        {
            "id": 2345,
            "parent_id": 573,
            "english": " white",
            "thai": "ขาว"
        },
        {
            "id": 2346,
            "parent_id": 573,
            "english": " blue",
            "thai": "น้ำเงิน"
        },
        {
            "id": 2347,
            "parent_id": 573,
            "english": " green",
            "thai": "เขียว"
        },
        {
            "id": 2348,
            "parent_id": 573,
            "english": "orange",
            "thai": "ส้ม"
        },
        {
            "id": 2349,
            "parent_id": 574,
            "english": "TrinX",
            "thai": "TrinX"
        },
        {
            "id": 2350,
            "parent_id": 574,
            "english": "BACKER, RICHTER",
            "thai": "BACKER, RICHTER"
        },
        {
            "id": 2351,
            "parent_id": 574,
            "english": "JAVA",
            "thai": "JAVA"
        },
        {
            "id": 2352,
            "parent_id": 574,
            "english": "KAZE",
            "thai": "KAZE"
        },
        {
            "id": 2353,
            "parent_id": 574,
            "english": "DAHON",
            "thai": "DAHON"
        },
        {
            "id": 2354,
            "parent_id": 575,
            "english": "Cyclocross",
            "thai": "จักรยานไซโคลครอส"
        },
        {
            "id": 2355,
            "parent_id": 575,
            "english": "Touring",
            "thai": "จักรยานทัวริ่ง"
        },
        {
            "id": 2356,
            "parent_id": 575,
            "english": "Fixed-gear bicycle",
            "thai": "จักรยานฟิกเกียร์"
        },
        {
            "id": 2357,
            "parent_id": 575,
            "english": "BMX",
            "thai": "จักรยานวิบาก"
        },
        {
            "id": 2358,
            "parent_id": 575,
            "english": "Hardtail",
            "thai": "Hardtail"
        },
        {
            "id": 2359,
            "parent_id": 575,
            "english": "Racing bicycle",
            "thai": "Racing bicycle"
        },
        {
            "id": 2360,
            "parent_id": 575,
            "english": "Gravel bicycle",
            "thai": "Gravel bicycle"
        },
        {
            "id": 2361,
            "parent_id": 576,
            "english": " black",
            "thai": "ดำ"
        },
        {
            "id": 2362,
            "parent_id": 576,
            "english": " white",
            "thai": "ขาว"
        },
        {
            "id": 2363,
            "parent_id": 576,
            "english": " blue",
            "thai": "น้ำเงิน"
        },
        {
            "id": 2364,
            "parent_id": 576,
            "english": " green",
            "thai": "เขียว"
        },
        {
            "id": 2365,
            "parent_id": 576,
            "english": "orange",
            "thai": "ส้ม"
        },
        {
            "id": 2366,
            "parent_id": 577,
            "english": "OSAKA",
            "thai": "OSAKA"
        },
        {
            "id": 2367,
            "parent_id": 577,
            "english": "Trinx",
            "thai": "Trinx"
        },
        {
            "id": 2368,
            "parent_id": 577,
            "english": "Tiger Hokkaido",
            "thai": "Tiger Hokkaido"
        },
        {
            "id": 2369,
            "parent_id": 577,
            "english": "LA Bicycle City Bike",
            "thai": "LA Bicycle City Bike"
        },
        {
            "id": 2370,
            "parent_id": 577,
            "english": "PT",
            "thai": "PT"
        },
        {
            "id": 2371,
            "parent_id": 578,
            "english": "Cyclocross",
            "thai": "จักรยานไซโคลครอส"
        },
        {
            "id": 2372,
            "parent_id": 578,
            "english": "Touring",
            "thai": "จักรยานทัวริ่ง"
        },
        {
            "id": 2373,
            "parent_id": 578,
            "english": "Fixed-gear bicycle",
            "thai": "จักรยานฟิกเกียร์"
        },
        {
            "id": 2374,
            "parent_id": 578,
            "english": "BMX",
            "thai": "จักรยานวิบาก"
        },
        {
            "id": 2375,
            "parent_id": 578,
            "english": "Hardtail",
            "thai": "Hardtail"
        },
        {
            "id": 2376,
            "parent_id": 578,
            "english": "Racing bicycle",
            "thai": "Racing bicycle"
        },
        {
            "id": 2377,
            "parent_id": 578,
            "english": "Gravel bicycle",
            "thai": "Gravel bicycle"
        },
        {
            "id": 2378,
            "parent_id": 579,
            "english": " red",
            "thai": "แดง"
        },
        {
            "id": 2379,
            "parent_id": 579,
            "english": "green",
            "thai": "เขียว "
        },
        {
            "id": 2380,
            "parent_id": 579,
            "english": "sky blue",
            "thai": "ฟ้า"
        },
        {
            "id": 2381,
            "parent_id": 579,
            "english": "pink",
            "thai": "ชมพู"
        },
        {
            "id": 2382,
            "parent_id": 579,
            "english": "yellow",
            "thai": "เหลือง "
        },
        {
            "id": 2383,
            "parent_id": 580,
            "english": "HIMIWAY",
            "thai": "HIMIWAY"
        },
        {
            "id": 2384,
            "parent_id": 580,
            "english": "LULAE V8",
            "thai": "LULAE V9"
        },
        {
            "id": 2385,
            "parent_id": 580,
            "english": "Original INMOTION P2 mini E-bike",
            "thai": ""
        },
        {
            "id": 2386,
            "parent_id": 580,
            "english": "Zendrian ZYU-2",
            "thai": "Zendrian ZYU-3"
        },
        {
            "id": 2387,
            "parent_id": 580,
            "english": "SMLRO",
            "thai": "SMLRO"
        },
        {
            "id": 2388,
            "parent_id": 581,
            "english": "Pedelec  (Pedal Electric Cycle)",
            "thai": "Pedelec  (Pedal Electric Cycle)"
        },
        {
            "id": 2389,
            "parent_id": 581,
            "english": "e-Bike",
            "thai": "e-Bike"
        },
        {
            "id": 2390,
            "parent_id": 582,
            "english": "black",
            "thai": "ดำ"
        },
        {
            "id": 2391,
            "parent_id": 582,
            "english": "white",
            "thai": "ขาว "
        },
        {
            "id": 2392,
            "parent_id": 582,
            "english": "pink",
            "thai": "ชมพู "
        },
        {
            "id": 2393,
            "parent_id": 582,
            "english": "red",
            "thai": "แดง"
        },
        {
            "id": 2394,
            "parent_id": 582,
            "english": "green",
            "thai": "เขียว"
        },
        {
            "id": 2395,
            "parent_id": 583,
            "english": "Nikon",
            "thai": "Nikon"
        },
        {
            "id": 2396,
            "parent_id": 583,
            "english": "Olympus",
            "thai": "Olympus"
        },
        {
            "id": 2397,
            "parent_id": 583,
            "english": "Samsung",
            "thai": "Samsung"
        },
        {
            "id": 2398,
            "parent_id": 583,
            "english": "Sony",
            "thai": "Sony"
        },
        {
            "id": 2399,
            "parent_id": 583,
            "english": "Canon",
            "thai": "Canon"
        },
        {
            "id": 2400,
            "parent_id": 583,
            "english": "Fujifilm",
            "thai": "Fujifilm"
        },
        {
            "id": 2401,
            "parent_id": 583,
            "english": "Others",
            "thai": "Others"
        },
        {
            "id": 2402,
            "parent_id": 584,
            "english": " DSLR (DSLR Camera)",
            "thai": " DSLR (DSLR Camera)"
        },
        {
            "id": 2403,
            "parent_id": 584,
            "english": "Mirrorless Camera",
            "thai": "กล้องมิลเลอร์เลส"
        },
        {
            "id": 2404,
            "parent_id": 584,
            "english": "Compact Camera",
            "thai": "กล้องคอมแพค"
        },
        {
            "id": 2405,
            "parent_id": 584,
            "english": "Film Camera",
            "thai": "กล้องฟิล์ม"
        },
        {
            "id": 2406,
            "parent_id": 584,
            "english": "Instant Camera",
            "thai": "กล้องอินสแตนท์ "
        },
        {
            "id": 2407,
            "parent_id": 584,
            "english": "Others",
            "thai": "อื่น ๆ"
        },
        {
            "id": 2408,
            "parent_id": 585,
            "english": "waterproof",
            "thai": "กันน้ำ"
        },
        {
            "id": 2409,
            "parent_id": 585,
            "english": "not waterproof",
            "thai": "ไม่กันน้ำ "
        },
        {
            "id": 2410,
            "parent_id": 586,
            "english": "FUJIFILM",
            "thai": "FUJIFILM"
        },
        {
            "id": 2411,
            "parent_id": 586,
            "english": "Polaroid",
            "thai": "Polaroid"
        },
        {
            "id": 2412,
            "parent_id": 586,
            "english": "Kodak",
            "thai": "Kodak"
        },
        {
            "id": 2413,
            "parent_id": 586,
            "english": "instax",
            "thai": "instax"
        },
        {
            "id": 2414,
            "parent_id": 586,
            "english": "CANON",
            "thai": "CANON"
        },
        {
            "id": 2415,
            "parent_id": 587,
            "english": " DSLR (DSLR Camera)",
            "thai": " DSLR (DSLR Camera)"
        },
        {
            "id": 2416,
            "parent_id": 587,
            "english": "Mirrorless Camera",
            "thai": "กล้องมิลเลอร์เลส"
        },
        {
            "id": 2417,
            "parent_id": 587,
            "english": "Compact Camera",
            "thai": "กล้องคอมแพค"
        },
        {
            "id": 2418,
            "parent_id": 587,
            "english": "Film Camera",
            "thai": "กล้องฟิล์ม"
        },
        {
            "id": 2419,
            "parent_id": 587,
            "english": "Instant Camera",
            "thai": "กล้องอินสแตนท์ "
        },
        {
            "id": 2420,
            "parent_id": 587,
            "english": "Others",
            "thai": "อื่น ๆ"
        },
        {
            "id": 2421,
            "parent_id": 588,
            "english": "waterproof",
            "thai": "กันน้ำ"
        },
        {
            "id": 2422,
            "parent_id": 588,
            "english": "not waterproof",
            "thai": "ไม่กันน้ำ "
        },
        {
            "id": 2423,
            "parent_id": 589,
            "english": "PIXELS SMART SERIES",
            "thai": "PIXELS SMART SERIES"
        },
        {
            "id": 2424,
            "parent_id": 589,
            "english": "HIP Smart Camera",
            "thai": "HIP Smart Camera"
        },
        {
            "id": 2425,
            "parent_id": 589,
            "english": "VStarcam",
            "thai": "VStarcam"
        },
        {
            "id": 2426,
            "parent_id": 589,
            "english": "AXON Aero",
            "thai": "AXON Aero"
        },
        {
            "id": 2427,
            "parent_id": 589,
            "english": "Hamrol",
            "thai": "Hamrol"
        },
        {
            "id": 2428,
            "parent_id": 590,
            "english": "Box (Standard Camera ) ",
            "thai": "กล้องวงจรปิดแบบมาตรฐาน"
        },
        {
            "id": 2429,
            "parent_id": 590,
            "english": "Infared Camera )",
            "thai": "กล้องวงจรปิดอินฟาเรด "
        },
        {
            "id": 2430,
            "parent_id": 590,
            "english": "Dome Camera",
            "thai": "กล้องวงจรปิดแบบโดม   "
        },
        {
            "id": 2431,
            "parent_id": 590,
            "english": "Bullet Camera",
            "thai": "กล้องวงจรกระบอก  "
        },
        {
            "id": 2432,
            "parent_id": 590,
            "english": "Hidden Camera",
            "thai": "กล้องซ่อน "
        },
        {
            "id": 2433,
            "parent_id": 590,
            "english": "Speed Dome PTZ (Pan/Tilt/Zoom)",
            "thai": "สปีดโดม PTZ (แพน/เอียง/ซูม)"
        },
        {
            "id": 2434,
            "parent_id": 591,
            "english": "waterproof",
            "thai": "กันน้ำ"
        },
        {
            "id": 2435,
            "parent_id": 591,
            "english": "not waterproof",
            "thai": "ไม่กันน้ำ "
        },
        {
            "id": 2436,
            "parent_id": 592,
            "english": "Xiaomi",
            "thai": "Xiaomi"
        },
        {
            "id": 2437,
            "parent_id": 592,
            "english": "PROOF",
            "thai": "PROOF"
        },
        {
            "id": 2438,
            "parent_id": 592,
            "english": "DDPai",
            "thai": "DDPai"
        },
        {
            "id": 2439,
            "parent_id": 592,
            "english": "Anytek",
            "thai": "Anytek"
        },
        {
            "id": 2440,
            "parent_id": 592,
            "english": "ASTON SMART LIGHT",
            "thai": "ASTON SMART LIGHT"
        },
        {
            "id": 2441,
            "parent_id": 593,
            "english": "DVR",
            "thai": "DVR"
        },
        {
            "id": 2442,
            "parent_id": 593,
            "english": "HD DVR",
            "thai": "HD DVR"
        },
        {
            "id": 2443,
            "parent_id": 593,
            "english": "Vehicle Blackbox DVR",
            "thai": "Vehicle Blackbox DVR"
        },
        {
            "id": 2444,
            "parent_id": 593,
            "english": "NVR",
            "thai": "NVR"
        },
        {
            "id": 2445,
            "parent_id": 594,
            "english": "waterproof",
            "thai": "กันน้ำ"
        },
        {
            "id": 2446,
            "parent_id": 594,
            "english": "not waterproof",
            "thai": "ไม่กันน้ำ "
        },
        {
            "id": 2447,
            "parent_id": 595,
            "english": "Xiaomi",
            "thai": "Xiaomi"
        },
        {
            "id": 2448,
            "parent_id": 595,
            "english": "HIP Smart Camera",
            "thai": "HIP Smart Camera"
        },
        {
            "id": 2449,
            "parent_id": 595,
            "english": "FUJIFILM",
            "thai": "FUJIFILM"
        },
        {
            "id": 2450,
            "parent_id": 595,
            "english": "CANON",
            "thai": "CANON"
        },
        {
            "id": 2451,
            "parent_id": 595,
            "english": "Kodak",
            "thai": "Kodak"
        },
        {
            "id": 2452,
            "parent_id": 595,
            "english": "Samsung",
            "thai": "Samsung"
        },
        {
            "id": 2453,
            "parent_id": 595,
            "english": "Nikon",
            "thai": "Nikon"
        },
        {
            "id": 2454,
            "parent_id": 596,
            "english": "Lens Filters",
            "thai": "ฟิลเตอร์ป้องกันหน้าเลนส์"
        },
        {
            "id": 2455,
            "parent_id": 596,
            "english": "memory card",
            "thai": "เมมโมรี่การ์ด"
        },
        {
            "id": 2456,
            "parent_id": 596,
            "english": "cleaning kit",
            "thai": "ชุดทำความสะอาด"
        },
        {
            "id": 2457,
            "parent_id": 596,
            "english": "external flash",
            "thai": "แฟลชภายนอก"
        },
        {
            "id": 2458,
            "parent_id": 596,
            "english": "tripod",
            "thai": "ขาตั้งกล้อง"
        },
        {
            "id": 2459,
            "parent_id": 596,
            "english": "Others",
            "thai": "อื่นๆ "
        },
        {
            "id": 2460,
            "parent_id": 597,
            "english": "waterproof",
            "thai": "กันน้ำ"
        },
        {
            "id": 2461,
            "parent_id": 597,
            "english": "not waterproof",
            "thai": "ไม่กันน้ำ "
        },
        {
            "id": 2462,
            "parent_id": 598,
            "english": "Tag Heuer",
            "thai": "Tag Heuer"
        },
        {
            "id": 2463,
            "parent_id": 598,
            "english": "G-Shock",
            "thai": "G-Shock"
        },
        {
            "id": 2464,
            "parent_id": 598,
            "english": "Apple Watch",
            "thai": "Apple Watch"
        },
        {
            "id": 2465,
            "parent_id": 598,
            "english": "Casio",
            "thai": "Casio"
        },
        {
            "id": 2466,
            "parent_id": 598,
            "english": "aniel Wellington",
            "thai": "aniel Wellington"
        },
        {
            "id": 2467,
            "parent_id": 598,
            "english": "Others",
            "thai": "Others"
        },
        {
            "id": 2468,
            "parent_id": 599,
            "english": "Black",
            "thai": "ดำ"
        },
        {
            "id": 2469,
            "parent_id": 599,
            "english": "White",
            "thai": "ขาว"
        },
        {
            "id": 2470,
            "parent_id": 599,
            "english": "Silver",
            "thai": "เงิน"
        },
        {
            "id": 2471,
            "parent_id": 599,
            "english": "Gold",
            "thai": "ทอง"
        },
        {
            "id": 2472,
            "parent_id": 599,
            "english": "Grey",
            "thai": "เทา"
        },
        {
            "id": 2473,
            "parent_id": 599,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2474,
            "parent_id": 600,
            "english": "NATO Strap",
            "thai": "สายนาโต้"
        },
        {
            "id": 2475,
            "parent_id": 600,
            "english": "Leather Strap",
            "thai": "สายหนัง"
        },
        {
            "id": 2476,
            "parent_id": 600,
            "english": "Rubber Strap",
            "thai": "สายยาง"
        },
        {
            "id": 2477,
            "parent_id": 600,
            "english": "Metal Strap / Bracelet",
            "thai": "สายเหล็ก"
        },
        {
            "id": 2478,
            "parent_id": 601,
            "english": "26 mm.",
            "thai": "26 mm."
        },
        {
            "id": 2479,
            "parent_id": 601,
            "english": "32 mm.",
            "thai": "32 mm."
        },
        {
            "id": 2480,
            "parent_id": 601,
            "english": "36 mm.",
            "thai": "36 mm."
        },
        {
            "id": 2481,
            "parent_id": 602,
            "english": "CASIO",
            "thai": "CASIO"
        },
        {
            "id": 2482,
            "parent_id": 602,
            "english": "G-Shock",
            "thai": "G-Shock"
        },
        {
            "id": 2483,
            "parent_id": 602,
            "english": "Seiko",
            "thai": "Seiko"
        },
        {
            "id": 2484,
            "parent_id": 602,
            "english": "Tag Heuer",
            "thai": "Tag Heuer"
        },
        {
            "id": 2485,
            "parent_id": 602,
            "english": "Omega",
            "thai": "Omega"
        },
        {
            "id": 2486,
            "parent_id": 602,
            "english": "Others",
            "thai": "อื่่นๆ"
        },
        {
            "id": 2487,
            "parent_id": 603,
            "english": "Black",
            "thai": "ดำ"
        },
        {
            "id": 2488,
            "parent_id": 603,
            "english": "White",
            "thai": "ขาว"
        },
        {
            "id": 2489,
            "parent_id": 603,
            "english": "Silver",
            "thai": "เงิน"
        },
        {
            "id": 2490,
            "parent_id": 603,
            "english": "Gold",
            "thai": "ทอง"
        },
        {
            "id": 2491,
            "parent_id": 603,
            "english": "Grey",
            "thai": "เทา"
        },
        {
            "id": 2492,
            "parent_id": 603,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2493,
            "parent_id": 604,
            "english": "NATO Strap",
            "thai": "สายนาโต้"
        },
        {
            "id": 2494,
            "parent_id": 604,
            "english": "Leather Strap",
            "thai": "สายหนัง"
        },
        {
            "id": 2495,
            "parent_id": 604,
            "english": "Rubber Strap",
            "thai": "สายยาง"
        },
        {
            "id": 2496,
            "parent_id": 604,
            "english": "Metal Strap / Bracelet",
            "thai": "สายเหล็ก"
        },
        {
            "id": 2497,
            "parent_id": 605,
            "english": "38 mm.",
            "thai": "38 mm."
        },
        {
            "id": 2498,
            "parent_id": 605,
            "english": "40 mm.",
            "thai": "40 mm."
        },
        {
            "id": 2499,
            "parent_id": 605,
            "english": "42 mm.",
            "thai": "42 mm."
        },
        {
            "id": 2500,
            "parent_id": 606,
            "english": "Barrel arbor",
            "thai": "แกนกระปุกลาน"
        },
        {
            "id": 2501,
            "parent_id": 606,
            "english": "Mainspring",
            "thai": "ลานนาฬิกา"
        },
        {
            "id": 2502,
            "parent_id": 606,
            "english": "Great wheel",
            "thai": "จักรใหญ่"
        },
        {
            "id": 2503,
            "parent_id": 606,
            "english": "Balance wheel",
            "thai": "จักรกลอก"
        },
        {
            "id": 2504,
            "parent_id": 606,
            "english": "Cannon pinion",
            "thai": "จักรเข็มนาที"
        },
        {
            "id": 2505,
            "parent_id": 606,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2506,
            "parent_id": 607,
            "english": "Black",
            "thai": "ดำ"
        },
        {
            "id": 2507,
            "parent_id": 607,
            "english": "White",
            "thai": "ขาว"
        },
        {
            "id": 2508,
            "parent_id": 607,
            "english": "Silver",
            "thai": "เงิน"
        },
        {
            "id": 2509,
            "parent_id": 607,
            "english": "Gold",
            "thai": "ทอง"
        },
        {
            "id": 2510,
            "parent_id": 607,
            "english": "Grey",
            "thai": "เทา"
        },
        {
            "id": 2511,
            "parent_id": 607,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2512,
            "parent_id": 608,
            "english": "NATO Strap",
            "thai": "สายนาโต้"
        },
        {
            "id": 2513,
            "parent_id": 608,
            "english": "Leather Strap",
            "thai": "สายหนัง"
        },
        {
            "id": 2514,
            "parent_id": 608,
            "english": "Rubber Strap",
            "thai": "สายยาง"
        },
        {
            "id": 2515,
            "parent_id": 608,
            "english": "Metal Strap / Bracelet",
            "thai": "สายเหล็ก"
        },
        {
            "id": 2516,
            "parent_id": 609,
            "english": "38 mm.",
            "thai": "38 mm."
        },
        {
            "id": 2517,
            "parent_id": 609,
            "english": "40 mm.",
            "thai": "40 mm."
        },
        {
            "id": 2518,
            "parent_id": 609,
            "english": "42 mm.",
            "thai": "42 mm."
        },
        {
            "id": 2519,
            "parent_id": 610,
            "english": "UNIQLO",
            "thai": "UNIQLO"
        },
        {
            "id": 2520,
            "parent_id": 610,
            "english": "AIIZ",
            "thai": "AIIZ"
        },
        {
            "id": 2521,
            "parent_id": 610,
            "english": "H&M",
            "thai": "H&M"
        },
        {
            "id": 2522,
            "parent_id": 610,
            "english": "The North Face",
            "thai": "The North Face"
        },
        {
            "id": 2523,
            "parent_id": 610,
            "english": "Zara",
            "thai": "Zara"
        },
        {
            "id": 2524,
            "parent_id": 610,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2525,
            "parent_id": 611,
            "english": "black",
            "thai": "สีดำ"
        },
        {
            "id": 2526,
            "parent_id": 611,
            "english": "brown",
            "thai": "สีน้ำตาล"
        },
        {
            "id": 2527,
            "parent_id": 611,
            "english": "dark blue",
            "thai": "สีน้ำเงิน"
        },
        {
            "id": 2528,
            "parent_id": 611,
            "english": "beige",
            "thai": "สีเนื้อ"
        },
        {
            "id": 2529,
            "parent_id": 611,
            "english": "white",
            "thai": "สีขาว"
        },
        {
            "id": 2530,
            "parent_id": 611,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2531,
            "parent_id": 612,
            "english": "XS",
            "thai": "XS"
        },
        {
            "id": 2532,
            "parent_id": 612,
            "english": "S",
            "thai": "S"
        },
        {
            "id": 2533,
            "parent_id": 612,
            "english": "M",
            "thai": "M"
        },
        {
            "id": 2534,
            "parent_id": 612,
            "english": "L",
            "thai": "L"
        },
        {
            "id": 2535,
            "parent_id": 612,
            "english": "XL",
            "thai": "XL"
        },
        {
            "id": 2536,
            "parent_id": 612,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2537,
            "parent_id": 613,
            "english": "leather",
            "thai": "หนัง"
        },
        {
            "id": 2538,
            "parent_id": 613,
            "english": "Duck down",
            "thai": "ผ้าขนเป็ด"
        },
        {
            "id": 2539,
            "parent_id": 613,
            "english": "jeans",
            "thai": "ผ้ายีนส์"
        },
        {
            "id": 2540,
            "parent_id": 613,
            "english": "Polyester",
            "thai": "ผ้าใยสังเคราะห์"
        },
        {
            "id": 2541,
            "parent_id": 613,
            "english": "wool",
            "thai": "ผ้าวูล"
        },
        {
            "id": 2542,
            "parent_id": 613,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2543,
            "parent_id": 614,
            "english": "Uniqlo",
            "thai": "Uniqlo"
        },
        {
            "id": 2544,
            "parent_id": 614,
            "english": "CPS Chaps",
            "thai": "CPS Chaps"
        },
        {
            "id": 2545,
            "parent_id": 614,
            "english": "Jaspal",
            "thai": "Jaspal"
        },
        {
            "id": 2546,
            "parent_id": 614,
            "english": "MUJI",
            "thai": "MUJI"
        },
        {
            "id": 2547,
            "parent_id": 614,
            "english": "Yuedpao",
            "thai": "Yuedpao"
        },
        {
            "id": 2548,
            "parent_id": 614,
            "english": "CC-OO",
            "thai": "CC-OO"
        },
        {
            "id": 2549,
            "parent_id": 614,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2550,
            "parent_id": 615,
            "english": "white",
            "thai": "สีขาว"
        },
        {
            "id": 2551,
            "parent_id": 615,
            "english": "black",
            "thai": "สีดำ"
        },
        {
            "id": 2552,
            "parent_id": 615,
            "english": "light blue",
            "thai": "สีฟ้า"
        },
        {
            "id": 2553,
            "parent_id": 615,
            "english": "light grey",
            "thai": "สีเทา"
        },
        {
            "id": 2554,
            "parent_id": 615,
            "english": "light pink",
            "thai": "สีชมพู"
        },
        {
            "id": 2555,
            "parent_id": 615,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2556,
            "parent_id": 616,
            "english": "XS",
            "thai": "XS"
        },
        {
            "id": 2557,
            "parent_id": 616,
            "english": "S",
            "thai": "S"
        },
        {
            "id": 2558,
            "parent_id": 616,
            "english": "M",
            "thai": "M"
        },
        {
            "id": 2559,
            "parent_id": 616,
            "english": "L",
            "thai": "L"
        },
        {
            "id": 2560,
            "parent_id": 616,
            "english": "XL",
            "thai": "XL"
        },
        {
            "id": 2561,
            "parent_id": 616,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2562,
            "parent_id": 617,
            "english": "cotton",
            "thai": "ผ้าฝ้าย"
        },
        {
            "id": 2563,
            "parent_id": 617,
            "english": "spandex",
            "thai": "ผ้ายึด"
        },
        {
            "id": 2564,
            "parent_id": 617,
            "english": "polyester",
            "thai": "ผ้าใยสังเคราะห์"
        },
        {
            "id": 2565,
            "parent_id": 617,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2566,
            "parent_id": 618,
            "english": "Uniqlo",
            "thai": "Uniqlo"
        },
        {
            "id": 2567,
            "parent_id": 618,
            "english": "H&M",
            "thai": "H&M"
        },
        {
            "id": 2568,
            "parent_id": 618,
            "english": "Zara",
            "thai": "Zara"
        },
        {
            "id": 2569,
            "parent_id": 618,
            "english": "CC-OO",
            "thai": "CC-OO"
        },
        {
            "id": 2570,
            "parent_id": 618,
            "english": "Jaspal",
            "thai": "Jaspal"
        },
        {
            "id": 2571,
            "parent_id": 618,
            "english": "CPS Chaps",
            "thai": "CPS Chaps"
        },
        {
            "id": 2572,
            "parent_id": 618,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2573,
            "parent_id": 619,
            "english": "white",
            "thai": "สีขาว"
        },
        {
            "id": 2574,
            "parent_id": 619,
            "english": "black",
            "thai": "สีดำ"
        },
        {
            "id": 2575,
            "parent_id": 619,
            "english": "light blue",
            "thai": "สีฟ้า"
        },
        {
            "id": 2576,
            "parent_id": 619,
            "english": "light grey",
            "thai": "สีเทา"
        },
        {
            "id": 2577,
            "parent_id": 619,
            "english": "light pink",
            "thai": "สีชมพู"
        },
        {
            "id": 2578,
            "parent_id": 619,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2579,
            "parent_id": 620,
            "english": "XS",
            "thai": "XS"
        },
        {
            "id": 2580,
            "parent_id": 620,
            "english": "S",
            "thai": "S"
        },
        {
            "id": 2581,
            "parent_id": 620,
            "english": "M",
            "thai": "M"
        },
        {
            "id": 2582,
            "parent_id": 620,
            "english": "L",
            "thai": "L"
        },
        {
            "id": 2583,
            "parent_id": 620,
            "english": "XL",
            "thai": "XL"
        },
        {
            "id": 2584,
            "parent_id": 620,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2585,
            "parent_id": 621,
            "english": "cotton",
            "thai": "ผ้าฝ้าย"
        },
        {
            "id": 2586,
            "parent_id": 621,
            "english": "spandex",
            "thai": "ผ้ายึด"
        },
        {
            "id": 2587,
            "parent_id": 621,
            "english": "polyester",
            "thai": "ผ้าใยสังเคราะห์"
        },
        {
            "id": 2588,
            "parent_id": 621,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2589,
            "parent_id": 622,
            "english": "AIIZ",
            "thai": "AIIZ"
        },
        {
            "id": 2590,
            "parent_id": 622,
            "english": "BODY GLOVE",
            "thai": "BODY GLOVE"
        },
        {
            "id": 2591,
            "parent_id": 622,
            "english": "H&M",
            "thai": "H&M"
        },
        {
            "id": 2592,
            "parent_id": 622,
            "english": "Giordano",
            "thai": "Giordano"
        },
        {
            "id": 2593,
            "parent_id": 622,
            "english": "LACOSTE",
            "thai": "LACOSTE"
        },
        {
            "id": 2594,
            "parent_id": 622,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2595,
            "parent_id": 623,
            "english": "white",
            "thai": "สีขาว"
        },
        {
            "id": 2596,
            "parent_id": 623,
            "english": "black",
            "thai": "สีดำ"
        },
        {
            "id": 2597,
            "parent_id": 623,
            "english": "light blue",
            "thai": "สีฟ้า"
        },
        {
            "id": 2598,
            "parent_id": 623,
            "english": "light grey",
            "thai": "สีเทา"
        },
        {
            "id": 2599,
            "parent_id": 623,
            "english": "light pink",
            "thai": "สีชมพู"
        },
        {
            "id": 2600,
            "parent_id": 623,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2601,
            "parent_id": 624,
            "english": "XS",
            "thai": "XS"
        },
        {
            "id": 2602,
            "parent_id": 624,
            "english": "S",
            "thai": "S"
        },
        {
            "id": 2603,
            "parent_id": 624,
            "english": "M",
            "thai": "M"
        },
        {
            "id": 2604,
            "parent_id": 624,
            "english": "L",
            "thai": "L"
        },
        {
            "id": 2605,
            "parent_id": 624,
            "english": "XL",
            "thai": "XL"
        },
        {
            "id": 2606,
            "parent_id": 624,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2607,
            "parent_id": 625,
            "english": "cotton",
            "thai": "ผ้าฝ้าย"
        },
        {
            "id": 2608,
            "parent_id": 625,
            "english": "spandex",
            "thai": "ผ้ายึด"
        },
        {
            "id": 2609,
            "parent_id": 625,
            "english": "polyester",
            "thai": "ผ้าใยสังเคราะห์"
        },
        {
            "id": 2610,
            "parent_id": 625,
            "english": "Oxford",
            "thai": "ผ้าอ๊อกฟอร์ด"
        },
        {
            "id": 2611,
            "parent_id": 625,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2612,
            "parent_id": 626,
            "english": "Uniqlo",
            "thai": "Uniqlo"
        },
        {
            "id": 2613,
            "parent_id": 626,
            "english": "G2000",
            "thai": "G2000"
        },
        {
            "id": 2614,
            "parent_id": 626,
            "english": "Pomelo",
            "thai": "Pomelo"
        },
        {
            "id": 2615,
            "parent_id": 626,
            "english": "H&M",
            "thai": "H&M"
        },
        {
            "id": 2616,
            "parent_id": 626,
            "english": "ESP",
            "thai": "ESP"
        },
        {
            "id": 2617,
            "parent_id": 626,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2618,
            "parent_id": 627,
            "english": "white",
            "thai": "สีขาว"
        },
        {
            "id": 2619,
            "parent_id": 627,
            "english": "light blue",
            "thai": "สีฟ้า"
        },
        {
            "id": 2620,
            "parent_id": 627,
            "english": "light pink",
            "thai": "สีชมพู"
        },
        {
            "id": 2621,
            "parent_id": 627,
            "english": "beige",
            "thai": "สีเนื้อ"
        },
        {
            "id": 2622,
            "parent_id": 627,
            "english": "black",
            "thai": "สีดำ"
        },
        {
            "id": 2623,
            "parent_id": 627,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2624,
            "parent_id": 628,
            "english": "XS",
            "thai": "XS"
        },
        {
            "id": 2625,
            "parent_id": 628,
            "english": "S",
            "thai": "S"
        },
        {
            "id": 2626,
            "parent_id": 628,
            "english": "M",
            "thai": "M"
        },
        {
            "id": 2627,
            "parent_id": 628,
            "english": "L",
            "thai": "L"
        },
        {
            "id": 2628,
            "parent_id": 628,
            "english": "XL",
            "thai": "XL"
        },
        {
            "id": 2629,
            "parent_id": 628,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2630,
            "parent_id": 629,
            "english": "cotton",
            "thai": "ผ้าฝ้าย"
        },
        {
            "id": 2631,
            "parent_id": 629,
            "english": "linen",
            "thai": "ผ้าลินิน"
        },
        {
            "id": 2632,
            "parent_id": 629,
            "english": "polyester",
            "thai": "ผ้าใยสังเคราะห์"
        },
        {
            "id": 2633,
            "parent_id": 629,
            "english": "Chiffon",
            "thai": "ผ้าชีฟอง"
        },
        {
            "id": 2634,
            "parent_id": 629,
            "english": "Rayon",
            "thai": "ผ้าเรยอน"
        },
        {
            "id": 2635,
            "parent_id": 629,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2636,
            "parent_id": 630,
            "english": "Flynow",
            "thai": "Flynow"
        },
        {
            "id": 2637,
            "parent_id": 630,
            "english": "H&M",
            "thai": "H&M"
        },
        {
            "id": 2638,
            "parent_id": 630,
            "english": "Lyn Around",
            "thai": "Lyn Around"
        },
        {
            "id": 2639,
            "parent_id": 630,
            "english": "Zara",
            "thai": "Zara"
        },
        {
            "id": 2640,
            "parent_id": 630,
            "english": "CPS Chaps",
            "thai": "CPS Chaps"
        },
        {
            "id": 2641,
            "parent_id": 630,
            "english": "AIIZ",
            "thai": "AIIZ"
        },
        {
            "id": 2642,
            "parent_id": 630,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2643,
            "parent_id": 631,
            "english": "white",
            "thai": "สีขาว"
        },
        {
            "id": 2644,
            "parent_id": 631,
            "english": "black",
            "thai": "สีดำ"
        },
        {
            "id": 2645,
            "parent_id": 631,
            "english": "dark blue",
            "thai": "สีน้ำเงิน"
        },
        {
            "id": 2646,
            "parent_id": 631,
            "english": "beige",
            "thai": "สีเนื้อ"
        },
        {
            "id": 2647,
            "parent_id": 631,
            "english": "brown",
            "thai": "สีน้ำตาล"
        },
        {
            "id": 2648,
            "parent_id": 631,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2649,
            "parent_id": 632,
            "english": "XS",
            "thai": "XS"
        },
        {
            "id": 2650,
            "parent_id": 632,
            "english": "S",
            "thai": "S"
        },
        {
            "id": 2651,
            "parent_id": 632,
            "english": "M",
            "thai": "M"
        },
        {
            "id": 2652,
            "parent_id": 632,
            "english": "L",
            "thai": "L"
        },
        {
            "id": 2653,
            "parent_id": 632,
            "english": "XL",
            "thai": "XL"
        },
        {
            "id": 2654,
            "parent_id": 632,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2655,
            "parent_id": 633,
            "english": "cotton",
            "thai": "ผ้าฝ้าย"
        },
        {
            "id": 2656,
            "parent_id": 633,
            "english": "linen",
            "thai": "ผ้าลินิน"
        },
        {
            "id": 2657,
            "parent_id": 633,
            "english": "polyester",
            "thai": "ผ้าใยสังเคราะห์"
        },
        {
            "id": 2658,
            "parent_id": 633,
            "english": "Chiffon",
            "thai": "ผ้าชีฟอง"
        },
        {
            "id": 2659,
            "parent_id": 633,
            "english": "Rayon",
            "thai": "ผ้าเรยอน"
        },
        {
            "id": 2660,
            "parent_id": 633,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2661,
            "parent_id": 634,
            "english": "Uniqlo",
            "thai": "Uniqlo"
        },
        {
            "id": 2662,
            "parent_id": 634,
            "english": "Zara",
            "thai": "Zara"
        },
        {
            "id": 2663,
            "parent_id": 634,
            "english": "H&M",
            "thai": "H&M"
        },
        {
            "id": 2664,
            "parent_id": 634,
            "english": "Muji",
            "thai": "Muji"
        },
        {
            "id": 2665,
            "parent_id": 634,
            "english": "AIIZ",
            "thai": "AIIZ"
        },
        {
            "id": 2666,
            "parent_id": 634,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2667,
            "parent_id": 635,
            "english": "white",
            "thai": "สีขาว"
        },
        {
            "id": 2668,
            "parent_id": 635,
            "english": "black",
            "thai": "สีดำ"
        },
        {
            "id": 2669,
            "parent_id": 635,
            "english": "dark blue",
            "thai": "สีน้ำเงิน"
        },
        {
            "id": 2670,
            "parent_id": 635,
            "english": "beige",
            "thai": "สีเนื้อ"
        },
        {
            "id": 2671,
            "parent_id": 635,
            "english": "brown",
            "thai": "สีน้ำตาล"
        },
        {
            "id": 2672,
            "parent_id": 635,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2673,
            "parent_id": 636,
            "english": "XS",
            "thai": "XS"
        },
        {
            "id": 2674,
            "parent_id": 636,
            "english": "S",
            "thai": "S"
        },
        {
            "id": 2675,
            "parent_id": 636,
            "english": "M",
            "thai": "M"
        },
        {
            "id": 2676,
            "parent_id": 636,
            "english": "L",
            "thai": "L"
        },
        {
            "id": 2677,
            "parent_id": 636,
            "english": "XL",
            "thai": "XL"
        },
        {
            "id": 2678,
            "parent_id": 636,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2679,
            "parent_id": 637,
            "english": "cotton",
            "thai": "ผ้าฝ้าย"
        },
        {
            "id": 2680,
            "parent_id": 637,
            "english": "linen",
            "thai": "ผ้าลินิน"
        },
        {
            "id": 2681,
            "parent_id": 637,
            "english": "polyester",
            "thai": "ผ้าใยสังเคราะห์"
        },
        {
            "id": 2682,
            "parent_id": 637,
            "english": "Chiffon",
            "thai": "ผ้าชีฟอง"
        },
        {
            "id": 2683,
            "parent_id": 637,
            "english": "Rayon",
            "thai": "ผ้าเรยอน"
        },
        {
            "id": 2684,
            "parent_id": 637,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2685,
            "parent_id": 638,
            "english": "Uniqlo",
            "thai": "Uniqlo"
        },
        {
            "id": 2686,
            "parent_id": 638,
            "english": "Zara",
            "thai": "Zara"
        },
        {
            "id": 2687,
            "parent_id": 638,
            "english": "H&M",
            "thai": "H&M"
        },
        {
            "id": 2688,
            "parent_id": 638,
            "english": "Muji",
            "thai": "Muji"
        },
        {
            "id": 2689,
            "parent_id": 638,
            "english": "AIIZ",
            "thai": "AIIZ"
        },
        {
            "id": 2690,
            "parent_id": 638,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2691,
            "parent_id": 639,
            "english": "white",
            "thai": "สีขาว"
        },
        {
            "id": 2692,
            "parent_id": 639,
            "english": "black",
            "thai": "สีดำ"
        },
        {
            "id": 2693,
            "parent_id": 639,
            "english": "dark blue",
            "thai": "สีน้ำเงิน"
        },
        {
            "id": 2694,
            "parent_id": 639,
            "english": "beige",
            "thai": "สีเนื้อ"
        },
        {
            "id": 2695,
            "parent_id": 639,
            "english": "brown",
            "thai": "สีน้ำตาล"
        },
        {
            "id": 2696,
            "parent_id": 639,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2697,
            "parent_id": 640,
            "english": "XS",
            "thai": "XS"
        },
        {
            "id": 2698,
            "parent_id": 640,
            "english": "S",
            "thai": "S"
        },
        {
            "id": 2699,
            "parent_id": 640,
            "english": "M",
            "thai": "M"
        },
        {
            "id": 2700,
            "parent_id": 640,
            "english": "L",
            "thai": "L"
        },
        {
            "id": 2701,
            "parent_id": 640,
            "english": "XL",
            "thai": "XL"
        },
        {
            "id": 2702,
            "parent_id": 640,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2703,
            "parent_id": 641,
            "english": "cotton",
            "thai": "ผ้าฝ้าย"
        },
        {
            "id": 2704,
            "parent_id": 641,
            "english": "linen",
            "thai": "ผ้าลินิน"
        },
        {
            "id": 2705,
            "parent_id": 641,
            "english": "polyester",
            "thai": "ผ้าใยสังเคราะห์"
        },
        {
            "id": 2706,
            "parent_id": 641,
            "english": "Chiffon",
            "thai": "ผ้าชีฟอง"
        },
        {
            "id": 2707,
            "parent_id": 641,
            "english": "Rayon",
            "thai": "ผ้าเรยอน"
        },
        {
            "id": 2708,
            "parent_id": 641,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2709,
            "parent_id": 642,
            "english": "GQ",
            "thai": "GQ"
        },
        {
            "id": 2710,
            "parent_id": 642,
            "english": "Uniqlo",
            "thai": "Uniqlo"
        },
        {
            "id": 2711,
            "parent_id": 642,
            "english": "AIIZ",
            "thai": "AIIZ"
        },
        {
            "id": 2712,
            "parent_id": 642,
            "english": "Dapper",
            "thai": "Dapper"
        },
        {
            "id": 2713,
            "parent_id": 642,
            "english": "G2000",
            "thai": "G2001"
        },
        {
            "id": 2714,
            "parent_id": 642,
            "english": "Arrow",
            "thai": "Arrow"
        },
        {
            "id": 2715,
            "parent_id": 642,
            "english": "Hazard",
            "thai": "Hazard"
        },
        {
            "id": 2716,
            "parent_id": 642,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2717,
            "parent_id": 643,
            "english": "black",
            "thai": "สีดำ "
        },
        {
            "id": 2718,
            "parent_id": 643,
            "english": "white",
            "thai": "สีขาว "
        },
        {
            "id": 2719,
            "parent_id": 643,
            "english": "light blue",
            "thai": "สีฟ้า"
        },
        {
            "id": 2720,
            "parent_id": 643,
            "english": "Navy blue",
            "thai": "สีกรม"
        },
        {
            "id": 2721,
            "parent_id": 643,
            "english": "grey",
            "thai": "สีเทา "
        },
        {
            "id": 2722,
            "parent_id": 643,
            "english": "others",
            "thai": "อื่นๆ "
        },
        {
            "id": 2723,
            "parent_id": 644,
            "english": "s",
            "thai": "s"
        },
        {
            "id": 2724,
            "parent_id": 644,
            "english": "m",
            "thai": "m"
        },
        {
            "id": 2725,
            "parent_id": 644,
            "english": "l",
            "thai": "l"
        },
        {
            "id": 2726,
            "parent_id": 644,
            "english": "xl",
            "thai": "xl"
        },
        {
            "id": 2727,
            "parent_id": 644,
            "english": "xxl",
            "thai": "xxl"
        },
        {
            "id": 2728,
            "parent_id": 644,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2729,
            "parent_id": 645,
            "english": "cotton",
            "thai": "ผ้าฝ้าย"
        },
        {
            "id": 2730,
            "parent_id": 645,
            "english": "linen",
            "thai": "ผ้าลินิน"
        },
        {
            "id": 2731,
            "parent_id": 645,
            "english": " polyester",
            "thai": "ผ้าใยสังเคราะห์"
        },
        {
            "id": 2732,
            "parent_id": 645,
            "english": "Chiffon",
            "thai": "ผ้าชีฟอง"
        },
        {
            "id": 2733,
            "parent_id": 645,
            "english": "Rayon",
            "thai": "ผ้าเรยอน"
        },
        {
            "id": 2734,
            "parent_id": 645,
            "english": "others",
            "thai": "อื่นๆ "
        },
        {
            "id": 2735,
            "parent_id": 646,
            "english": "Vans Wansine",
            "thai": "Vans Wansine"
        },
        {
            "id": 2736,
            "parent_id": 646,
            "english": "H&M",
            "thai": "H&M"
        },
        {
            "id": 2737,
            "parent_id": 646,
            "english": "Uniqle",
            "thai": "Uniqle"
        },
        {
            "id": 2738,
            "parent_id": 646,
            "english": "AIIZ",
            "thai": "AIIZ"
        },
        {
            "id": 2739,
            "parent_id": 646,
            "english": "Yuedpao",
            "thai": "Yuedpao"
        },
        {
            "id": 2740,
            "parent_id": 646,
            "english": "CPS Chaps",
            "thai": "CPS Chaps"
        },
        {
            "id": 2741,
            "parent_id": 646,
            "english": "CC-OO",
            "thai": "CC-OO"
        },
        {
            "id": 2742,
            "parent_id": 646,
            "english": "Zara",
            "thai": "Zara"
        },
        {
            "id": 2743,
            "parent_id": 646,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2744,
            "parent_id": 647,
            "english": "black",
            "thai": "สีดำ "
        },
        {
            "id": 2745,
            "parent_id": 647,
            "english": "white",
            "thai": "สีขาว "
        },
        {
            "id": 2746,
            "parent_id": 647,
            "english": "light blue",
            "thai": "สีฟ้า"
        },
        {
            "id": 2747,
            "parent_id": 647,
            "english": "Navy blue",
            "thai": "สีกรม"
        },
        {
            "id": 2748,
            "parent_id": 647,
            "english": "grey",
            "thai": "สีเทา "
        },
        {
            "id": 2749,
            "parent_id": 647,
            "english": "others",
            "thai": "อื่นๆ "
        },
        {
            "id": 2750,
            "parent_id": 648,
            "english": "s",
            "thai": "s"
        },
        {
            "id": 2751,
            "parent_id": 648,
            "english": "m",
            "thai": "m"
        },
        {
            "id": 2752,
            "parent_id": 648,
            "english": "l",
            "thai": "l"
        },
        {
            "id": 2753,
            "parent_id": 648,
            "english": "xl",
            "thai": "xl"
        },
        {
            "id": 2754,
            "parent_id": 648,
            "english": "xxl",
            "thai": "xxl"
        },
        {
            "id": 2755,
            "parent_id": 648,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2756,
            "parent_id": 649,
            "english": "cotton",
            "thai": "ผ้าฝ้าย"
        },
        {
            "id": 2757,
            "parent_id": 649,
            "english": "spandex",
            "thai": "ผ้ายึด"
        },
        {
            "id": 2758,
            "parent_id": 649,
            "english": "polyester",
            "thai": "ผ้าใยสังเคราะห์ "
        },
        {
            "id": 2759,
            "parent_id": 649,
            "english": "others",
            "thai": "อื่นๆ "
        },
        {
            "id": 2760,
            "parent_id": 650,
            "english": "Vans Wansine",
            "thai": "Vans Wansine"
        },
        {
            "id": 2761,
            "parent_id": 650,
            "english": "H&M",
            "thai": "H&M"
        },
        {
            "id": 2762,
            "parent_id": 650,
            "english": "Uniqle",
            "thai": "Uniqle"
        },
        {
            "id": 2763,
            "parent_id": 650,
            "english": "AIIZ",
            "thai": "AIIZ"
        },
        {
            "id": 2764,
            "parent_id": 650,
            "english": "Yuedpao",
            "thai": "Yuedpao"
        },
        {
            "id": 2765,
            "parent_id": 650,
            "english": "CPS Chaps",
            "thai": "CPS Chaps"
        },
        {
            "id": 2766,
            "parent_id": 650,
            "english": "CC-OO",
            "thai": "CC-OO"
        },
        {
            "id": 2767,
            "parent_id": 650,
            "english": "Zara",
            "thai": "Zara"
        },
        {
            "id": 2768,
            "parent_id": 650,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2769,
            "parent_id": 651,
            "english": "black",
            "thai": "สีดำ "
        },
        {
            "id": 2770,
            "parent_id": 651,
            "english": "white",
            "thai": "สีขาว "
        },
        {
            "id": 2771,
            "parent_id": 651,
            "english": "light blue",
            "thai": "สีฟ้า"
        },
        {
            "id": 2772,
            "parent_id": 651,
            "english": "Navy blue",
            "thai": "สีกรม"
        },
        {
            "id": 2773,
            "parent_id": 651,
            "english": "grey",
            "thai": "สีเทา "
        },
        {
            "id": 2774,
            "parent_id": 651,
            "english": "others",
            "thai": "อื่นๆ "
        },
        {
            "id": 2775,
            "parent_id": 652,
            "english": "s",
            "thai": "s"
        },
        {
            "id": 2776,
            "parent_id": 652,
            "english": "m",
            "thai": "m"
        },
        {
            "id": 2777,
            "parent_id": 652,
            "english": "l",
            "thai": "l"
        },
        {
            "id": 2778,
            "parent_id": 652,
            "english": "xl",
            "thai": "xl"
        },
        {
            "id": 2779,
            "parent_id": 652,
            "english": "xxl",
            "thai": "xxl"
        },
        {
            "id": 2780,
            "parent_id": 652,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2781,
            "parent_id": 653,
            "english": "cotton",
            "thai": "ผ้าฝ้าย "
        },
        {
            "id": 2782,
            "parent_id": 653,
            "english": "spandex",
            "thai": "ผ้ายึด"
        },
        {
            "id": 2783,
            "parent_id": 653,
            "english": "polyester",
            "thai": "ผ้าใยสังเคราะห์ "
        },
        {
            "id": 2784,
            "parent_id": 653,
            "english": "others",
            "thai": "อื่นๆ "
        },
        {
            "id": 2785,
            "parent_id": 654,
            "english": "UNIQLO",
            "thai": "UNIQLO"
        },
        {
            "id": 2786,
            "parent_id": 654,
            "english": "AIIZ",
            "thai": "AIIZ"
        },
        {
            "id": 2787,
            "parent_id": 654,
            "english": "H&M",
            "thai": "H&M"
        },
        {
            "id": 2788,
            "parent_id": 654,
            "english": "The North Face",
            "thai": "The North Face"
        },
        {
            "id": 2789,
            "parent_id": 654,
            "english": "Zara",
            "thai": "Zara"
        },
        {
            "id": 2790,
            "parent_id": 654,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2791,
            "parent_id": 655,
            "english": "black",
            "thai": "สีดำ"
        },
        {
            "id": 2792,
            "parent_id": 655,
            "english": "brown",
            "thai": "สีน้ำตาล"
        },
        {
            "id": 2793,
            "parent_id": 655,
            "english": "dark blue",
            "thai": "สีน้ำเงิน"
        },
        {
            "id": 2794,
            "parent_id": 655,
            "english": "beige",
            "thai": "สีเนื้อ "
        },
        {
            "id": 2795,
            "parent_id": 655,
            "english": "white",
            "thai": "สีขาว"
        },
        {
            "id": 2796,
            "parent_id": 655,
            "english": "others",
            "thai": "อื่นๆ "
        },
        {
            "id": 2797,
            "parent_id": 656,
            "english": "s",
            "thai": "s"
        },
        {
            "id": 2798,
            "parent_id": 656,
            "english": "m",
            "thai": "m"
        },
        {
            "id": 2799,
            "parent_id": 656,
            "english": "l",
            "thai": "l"
        },
        {
            "id": 2800,
            "parent_id": 656,
            "english": "xl",
            "thai": "xl"
        },
        {
            "id": 2801,
            "parent_id": 656,
            "english": "xxl",
            "thai": "xxl"
        },
        {
            "id": 2802,
            "parent_id": 656,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2803,
            "parent_id": 657,
            "english": "leather",
            "thai": "หนัง"
        },
        {
            "id": 2804,
            "parent_id": 657,
            "english": "Duck down",
            "thai": "ผ้าขนเป็ด"
        },
        {
            "id": 2805,
            "parent_id": 657,
            "english": "jeans",
            "thai": "ผ้ายีนส์ "
        },
        {
            "id": 2806,
            "parent_id": 657,
            "english": "Polyester",
            "thai": "ผ้าใยสังเคราะห์ "
        },
        {
            "id": 2807,
            "parent_id": 657,
            "english": "wool",
            "thai": "ผ้าวูล"
        },
        {
            "id": 2808,
            "parent_id": 657,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2809,
            "parent_id": 658,
            "english": "Uniqlo",
            "thai": "Uniqlo"
        },
        {
            "id": 2810,
            "parent_id": 658,
            "english": "Dapper",
            "thai": "Dapper"
        },
        {
            "id": 2811,
            "parent_id": 658,
            "english": "GQ",
            "thai": "GQ"
        },
        {
            "id": 2812,
            "parent_id": 658,
            "english": "Arrow",
            "thai": "Arrow"
        },
        {
            "id": 2813,
            "parent_id": 658,
            "english": "H&M",
            "thai": "H&M"
        },
        {
            "id": 2814,
            "parent_id": 658,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2815,
            "parent_id": 659,
            "english": "black",
            "thai": "สีดำ"
        },
        {
            "id": 2816,
            "parent_id": 659,
            "english": "brown",
            "thai": "สีน้ำตาล"
        },
        {
            "id": 2817,
            "parent_id": 659,
            "english": "dark blue",
            "thai": "สีน้ำเงิน"
        },
        {
            "id": 2818,
            "parent_id": 659,
            "english": "beige",
            "thai": "สีเนื้อ"
        },
        {
            "id": 2819,
            "parent_id": 659,
            "english": "white",
            "thai": "สีขาว"
        },
        {
            "id": 2820,
            "parent_id": 659,
            "english": "grey",
            "thai": "สีเทา"
        },
        {
            "id": 2821,
            "parent_id": 659,
            "english": "others",
            "thai": "อื่นๆ "
        },
        {
            "id": 2822,
            "parent_id": 660,
            "english": "s",
            "thai": "s"
        },
        {
            "id": 2823,
            "parent_id": 660,
            "english": "m",
            "thai": "m"
        },
        {
            "id": 2824,
            "parent_id": 660,
            "english": "l",
            "thai": "l"
        },
        {
            "id": 2825,
            "parent_id": 660,
            "english": "xl",
            "thai": "xl"
        },
        {
            "id": 2826,
            "parent_id": 660,
            "english": "xxl",
            "thai": "xxl"
        },
        {
            "id": 2827,
            "parent_id": 660,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2828,
            "parent_id": 661,
            "english": "cotton",
            "thai": "ผ้าฝ้าย"
        },
        {
            "id": 2829,
            "parent_id": 661,
            "english": "linen",
            "thai": "ผ้าลินิน"
        },
        {
            "id": 2830,
            "parent_id": 661,
            "english": "polyester",
            "thai": "ผ้าใยสังเคราะห์"
        },
        {
            "id": 2831,
            "parent_id": 661,
            "english": "Chiffon",
            "thai": "ผ้าชีฟอง"
        },
        {
            "id": 2832,
            "parent_id": 661,
            "english": "Rayon",
            "thai": "ผ้าเรยอน"
        },
        {
            "id": 2833,
            "parent_id": 661,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2834,
            "parent_id": 662,
            "english": "Collar",
            "thai": "สร้อยคอแบบติดคอ"
        },
        {
            "id": 2835,
            "parent_id": 662,
            "english": "Choker",
            "thai": "สร้อยคอแบบโช๊คเกอร์"
        },
        {
            "id": 2836,
            "parent_id": 662,
            "english": "Short necklace",
            "thai": "สร้อยคอแบบสั้น"
        },
        {
            "id": 2837,
            "parent_id": 662,
            "english": "Long necklace",
            "thai": "สร้อยคอแบบยาว"
        },
        {
            "id": 2838,
            "parent_id": 662,
            "english": "Pendant with chain",
            "thai": "สร้อยคอพร้อมจี้"
        },
        {
            "id": 2839,
            "parent_id": 662,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2840,
            "parent_id": 663,
            "english": "Silver",
            "thai": "เงิน"
        },
        {
            "id": 2841,
            "parent_id": 663,
            "english": "White gold",
            "thai": "ทองคำขาว"
        },
        {
            "id": 2842,
            "parent_id": 663,
            "english": "Yellow gold",
            "thai": "ทองคำสีเหลือง"
        },
        {
            "id": 2843,
            "parent_id": 663,
            "english": "Pink gold",
            "thai": "ทองคำสีชมพู"
        },
        {
            "id": 2844,
            "parent_id": 663,
            "english": "Brass",
            "thai": "ทองเหลือง"
        },
        {
            "id": 2845,
            "parent_id": 663,
            "english": "Stainless steel",
            "thai": "สแตนเลต"
        },
        {
            "id": 2846,
            "parent_id": 663,
            "english": "Leather",
            "thai": "หนัง"
        },
        {
            "id": 2847,
            "parent_id": 663,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2848,
            "parent_id": 664,
            "english": "Dimaond",
            "thai": "เพชร"
        },
        {
            "id": 2849,
            "parent_id": 664,
            "english": "Ruby",
            "thai": "ทับทิม"
        },
        {
            "id": 2850,
            "parent_id": 664,
            "english": "Cubic Zirconia",
            "thai": "เพชรสังเคราะห์/เพชรรัสเซีย"
        },
        {
            "id": 2851,
            "parent_id": 664,
            "english": "Crystal",
            "thai": "พลอยคริสตัล"
        },
        {
            "id": 2852,
            "parent_id": 664,
            "english": "Natural Stones",
            "thai": "หินธรรมชาติ"
        },
        {
            "id": 2853,
            "parent_id": 664,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2854,
            "parent_id": 665,
            "english": "14 inches",
            "thai": "14 นิ้ว "
        },
        {
            "id": 2855,
            "parent_id": 665,
            "english": "16 inches",
            "thai": "16 นิ้ว "
        },
        {
            "id": 2856,
            "parent_id": 665,
            "english": "18 inches",
            "thai": "18 นิ้ว "
        },
        {
            "id": 2857,
            "parent_id": 665,
            "english": "20 inches",
            "thai": "20 นิ้ว "
        },
        {
            "id": 2858,
            "parent_id": 665,
            "english": "24 inches",
            "thai": "24 นิ้ว "
        },
        {
            "id": 2859,
            "parent_id": 665,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2860,
            "parent_id": 666,
            "english": "Solitaire Ring",
            "thai": "แหวนเม็ดเดี่ยว "
        },
        {
            "id": 2861,
            "parent_id": 666,
            "english": "3 Stone Ring",
            "thai": "แหวนแถวแบบเรียง 3 เม็ด "
        },
        {
            "id": 2862,
            "parent_id": 666,
            "english": "Eternity Ring",
            "thai": "แหวนรอบวงหรือแหวนรอบนิ้ว "
        },
        {
            "id": 2863,
            "parent_id": 666,
            "english": "Classic Ring",
            "thai": "แหวนแต่งงานหรือแหวนเกลี้ยง "
        },
        {
            "id": 2864,
            "parent_id": 666,
            "english": "Stakable Rings",
            "thai": "แหวนซ้อนกันหลายวง "
        },
        {
            "id": 2865,
            "parent_id": 666,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2866,
            "parent_id": 667,
            "english": "Silver",
            "thai": "เงิน "
        },
        {
            "id": 2867,
            "parent_id": 667,
            "english": "White gold",
            "thai": "ทองคำขาว "
        },
        {
            "id": 2868,
            "parent_id": 667,
            "english": "Yellow gold",
            "thai": "ทองคำสีเหลือง "
        },
        {
            "id": 2869,
            "parent_id": 667,
            "english": "Pink gold",
            "thai": "ทองคำสีชมพู "
        },
        {
            "id": 2870,
            "parent_id": 667,
            "english": "Brass",
            "thai": "ทองเหลือง "
        },
        {
            "id": 2871,
            "parent_id": 667,
            "english": "Stainless steel",
            "thai": "สแตนเลต "
        },
        {
            "id": 2872,
            "parent_id": 667,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2873,
            "parent_id": 668,
            "english": "Dimaond",
            "thai": "เพชร"
        },
        {
            "id": 2874,
            "parent_id": 668,
            "english": "Ruby",
            "thai": "ทับทิม"
        },
        {
            "id": 2875,
            "parent_id": 668,
            "english": "Cubic Zirconia",
            "thai": "เพชรสังเคราะห์/เพชรรัสเซีย"
        },
        {
            "id": 2876,
            "parent_id": 668,
            "english": "Crystal",
            "thai": "พลอยคริสตัล"
        },
        {
            "id": 2877,
            "parent_id": 668,
            "english": "Natural Stones",
            "thai": "หินธรรมชาติ"
        },
        {
            "id": 2878,
            "parent_id": 668,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2879,
            "parent_id": 669,
            "english": "Size 48",
            "thai": "ไซด์ 48"
        },
        {
            "id": 2880,
            "parent_id": 669,
            "english": "Size 50",
            "thai": "ไซด์ 50"
        },
        {
            "id": 2881,
            "parent_id": 669,
            "english": "Size  52",
            "thai": "ไซด์ 52"
        },
        {
            "id": 2882,
            "parent_id": 669,
            "english": "Size 54",
            "thai": "ไซด์ 54"
        },
        {
            "id": 2883,
            "parent_id": 669,
            "english": "Size 56",
            "thai": "ไซด์ 56"
        },
        {
            "id": 2884,
            "parent_id": 669,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2885,
            "parent_id": 670,
            "english": "Stud",
            "thai": "ต่างหูเม็ดเดียว"
        },
        {
            "id": 2886,
            "parent_id": 670,
            "english": "Leverback",
            "thai": "ต่างหูชนิดตะขอ"
        },
        {
            "id": 2887,
            "parent_id": 670,
            "english": "Huggie",
            "thai": "ต่างหูห่วงเล็ก"
        },
        {
            "id": 2888,
            "parent_id": 670,
            "english": "Hoop",
            "thai": "ต่างหูห่วงใหญ่"
        },
        {
            "id": 2889,
            "parent_id": 670,
            "english": "Chandelier",
            "thai": "ต่างหูระย้า"
        },
        {
            "id": 2890,
            "parent_id": 670,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2891,
            "parent_id": 671,
            "english": "Silver",
            "thai": "เงิน "
        },
        {
            "id": 2892,
            "parent_id": 671,
            "english": "White gold",
            "thai": "ทองคำขาว "
        },
        {
            "id": 2893,
            "parent_id": 671,
            "english": "Yellow gold",
            "thai": "ทองคำสีเหลือง "
        },
        {
            "id": 2894,
            "parent_id": 671,
            "english": "Pink gold",
            "thai": "ทองคำสีชมพู "
        },
        {
            "id": 2895,
            "parent_id": 671,
            "english": "Brass",
            "thai": "ทองเหลือง "
        },
        {
            "id": 2896,
            "parent_id": 671,
            "english": "Stainless steel",
            "thai": "สแตนเลต "
        },
        {
            "id": 2897,
            "parent_id": 671,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2898,
            "parent_id": 672,
            "english": "Dimaond",
            "thai": "เพชร"
        },
        {
            "id": 2899,
            "parent_id": 672,
            "english": "Ruby",
            "thai": "ทับทิม"
        },
        {
            "id": 2900,
            "parent_id": 672,
            "english": "Cubic Zirconia",
            "thai": "เพชรสังเคราะห์/เพชรรัสเซีย"
        },
        {
            "id": 2901,
            "parent_id": 672,
            "english": "Crystal",
            "thai": "พลอยคริสตัล"
        },
        {
            "id": 2902,
            "parent_id": 672,
            "english": "Natural Stones",
            "thai": "หินธรรมชาติ"
        },
        {
            "id": 2903,
            "parent_id": 672,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2904,
            "parent_id": 673,
            "english": "Size 48",
            "thai": "ไซด์ 48"
        },
        {
            "id": 2905,
            "parent_id": 673,
            "english": "Size 50",
            "thai": "ไซด์ 50"
        },
        {
            "id": 2906,
            "parent_id": 673,
            "english": "Size  52",
            "thai": "ไซด์ 52"
        },
        {
            "id": 2907,
            "parent_id": 673,
            "english": "Size 54",
            "thai": "ไซด์ 54"
        },
        {
            "id": 2908,
            "parent_id": 673,
            "english": "Size 56",
            "thai": "ไซด์ 56"
        },
        {
            "id": 2909,
            "parent_id": 673,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2910,
            "parent_id": 674,
            "english": "charm bracelet",
            "thai": "สร้อยข้อมือแบบมีจี้ห้อย"
        },
        {
            "id": 2911,
            "parent_id": 674,
            "english": "tennis bracelet",
            "thai": "สร้อยข้อมือเพชรแถว"
        },
        {
            "id": 2912,
            "parent_id": 674,
            "english": "fashion bracelet",
            "thai": "สร้อยข้อมือแบบแฟชั่น "
        },
        {
            "id": 2913,
            "parent_id": 674,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2914,
            "parent_id": 675,
            "english": "Silver",
            "thai": "เงิน "
        },
        {
            "id": 2915,
            "parent_id": 675,
            "english": "White gold",
            "thai": "ทองคำขาว "
        },
        {
            "id": 2916,
            "parent_id": 675,
            "english": "Yellow gold",
            "thai": "ทองคำสีเหลือง "
        },
        {
            "id": 2917,
            "parent_id": 675,
            "english": "Pink gold",
            "thai": "ทองคำสีชมพู "
        },
        {
            "id": 2918,
            "parent_id": 675,
            "english": "Brass",
            "thai": "ทองเหลือง "
        },
        {
            "id": 2919,
            "parent_id": 675,
            "english": "Stainless steel",
            "thai": "สแตนเลต "
        },
        {
            "id": 2920,
            "parent_id": 675,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2921,
            "parent_id": 676,
            "english": "Dimaond",
            "thai": "เพชร"
        },
        {
            "id": 2922,
            "parent_id": 676,
            "english": "Ruby",
            "thai": "ทับทิม"
        },
        {
            "id": 2923,
            "parent_id": 676,
            "english": "Cubic Zirconia",
            "thai": "เพชรสังเคราะห์/เพชรรัสเซีย"
        },
        {
            "id": 2924,
            "parent_id": 676,
            "english": "Crystal",
            "thai": "พลอยคริสตัล"
        },
        {
            "id": 2925,
            "parent_id": 676,
            "english": "Natural Stones",
            "thai": "หินธรรมชาติ"
        },
        {
            "id": 2926,
            "parent_id": 676,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2927,
            "parent_id": 677,
            "english": "14 inches",
            "thai": "14 นิ้ว "
        },
        {
            "id": 2928,
            "parent_id": 677,
            "english": "16 inches",
            "thai": "16 นิ้ว "
        },
        {
            "id": 2929,
            "parent_id": 677,
            "english": "18 inches",
            "thai": "18 นิ้ว "
        },
        {
            "id": 2930,
            "parent_id": 677,
            "english": "20 inches",
            "thai": "20 นิ้ว "
        },
        {
            "id": 2931,
            "parent_id": 677,
            "english": "24 inches",
            "thai": "24 นิ้ว "
        },
        {
            "id": 2932,
            "parent_id": 677,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2933,
            "parent_id": 678,
            "english": "Slip on bangle",
            "thai": "กำไลแบบสวม "
        },
        {
            "id": 2934,
            "parent_id": 678,
            "english": "Cuff bangle",
            "thai": "กำไลแบบเปิด "
        },
        {
            "id": 2935,
            "parent_id": 678,
            "english": "Hinged bangle",
            "thai": "กำไลแบบมีตัวล๊อก "
        },
        {
            "id": 2936,
            "parent_id": 678,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2937,
            "parent_id": 679,
            "english": "Silver",
            "thai": "เงิน "
        },
        {
            "id": 2938,
            "parent_id": 679,
            "english": "White gold",
            "thai": "ทองคำขาว "
        },
        {
            "id": 2939,
            "parent_id": 679,
            "english": "Yellow gold",
            "thai": "ทองคำสีเหลือง "
        },
        {
            "id": 2940,
            "parent_id": 679,
            "english": "Pink gold",
            "thai": "ทองคำสีชมพู "
        },
        {
            "id": 2941,
            "parent_id": 679,
            "english": "Brass",
            "thai": "ทองเหลือง "
        },
        {
            "id": 2942,
            "parent_id": 679,
            "english": "Stainless steel",
            "thai": "สแตนเลต "
        },
        {
            "id": 2943,
            "parent_id": 679,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2944,
            "parent_id": 680,
            "english": "Dimaond",
            "thai": "เพชร"
        },
        {
            "id": 2945,
            "parent_id": 680,
            "english": "Ruby",
            "thai": "ทับทิม"
        },
        {
            "id": 2946,
            "parent_id": 680,
            "english": "Cubic Zirconia",
            "thai": "เพชรสังเคราะห์/เพชรรัสเซีย"
        },
        {
            "id": 2947,
            "parent_id": 680,
            "english": "Crystal",
            "thai": "พลอยคริสตัล"
        },
        {
            "id": 2948,
            "parent_id": 680,
            "english": "Natural Stones",
            "thai": "หินธรรมชาติ"
        },
        {
            "id": 2949,
            "parent_id": 680,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2950,
            "parent_id": 681,
            "english": "16cm",
            "thai": "16 เซนติเมตร "
        },
        {
            "id": 2951,
            "parent_id": 681,
            "english": "17cm",
            "thai": "17 เซนติเมตร "
        },
        {
            "id": 2952,
            "parent_id": 681,
            "english": "18cm",
            "thai": "18 เซนติเมตร "
        },
        {
            "id": 2953,
            "parent_id": 681,
            "english": "19cm",
            "thai": "19 เซนติเมตร "
        },
        {
            "id": 2954,
            "parent_id": 681,
            "english": "20cm",
            "thai": "20 เซนติเมตร "
        },
        {
            "id": 2955,
            "parent_id": 681,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2956,
            "parent_id": 682,
            "english": "Cardboard box",
            "thai": "กล่องกำมะหยี่ "
        },
        {
            "id": 2957,
            "parent_id": 682,
            "english": "Wooden box",
            "thai": "กล่องไม้ "
        },
        {
            "id": 2958,
            "parent_id": 682,
            "english": "Acrylic box",
            "thai": "กล่องอคริลิก "
        },
        {
            "id": 2959,
            "parent_id": 682,
            "english": "Paper box",
            "thai": "กล่องกระดาษ "
        },
        {
            "id": 2960,
            "parent_id": 682,
            "english": "Jewelry box",
            "thai": "กล่องพลอย "
        },
        {
            "id": 2961,
            "parent_id": 682,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2962,
            "parent_id": 683,
            "english": "White gold",
            "thai": "ทองคำขาว "
        },
        {
            "id": 2963,
            "parent_id": 683,
            "english": "Yellow gold",
            "thai": "ทองคำสีเหลือง "
        },
        {
            "id": 2964,
            "parent_id": 683,
            "english": "Pink gold",
            "thai": "ทองคำสีชมพู "
        },
        {
            "id": 2965,
            "parent_id": 683,
            "english": "Brass",
            "thai": "ทองเหลือง "
        },
        {
            "id": 2966,
            "parent_id": 683,
            "english": "Stainless steel",
            "thai": "สแตนเลต "
        },
        {
            "id": 2967,
            "parent_id": 683,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2968,
            "parent_id": 684,
            "english": "Dimaond",
            "thai": "เพชร"
        },
        {
            "id": 2969,
            "parent_id": 684,
            "english": "Ruby",
            "thai": "ทับทิม"
        },
        {
            "id": 2970,
            "parent_id": 684,
            "english": "Cubic Zirconia",
            "thai": "เพชรสังเคราะห์/เพชรรัสเซีย"
        },
        {
            "id": 2971,
            "parent_id": 684,
            "english": "Crystal",
            "thai": "พลอยคริสตัล"
        },
        {
            "id": 2972,
            "parent_id": 684,
            "english": "Natural Stones",
            "thai": "หินธรรมชาติ"
        },
        {
            "id": 2973,
            "parent_id": 684,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2974,
            "parent_id": 685,
            "english": "16cm",
            "thai": "16 เซนติเมตร "
        },
        {
            "id": 2975,
            "parent_id": 685,
            "english": "17cm",
            "thai": "17 เซนติเมตร "
        },
        {
            "id": 2976,
            "parent_id": 685,
            "english": "18cm",
            "thai": "18 เซนติเมตร "
        },
        {
            "id": 2977,
            "parent_id": 685,
            "english": "19cm",
            "thai": "19 เซนติเมตร "
        },
        {
            "id": 2978,
            "parent_id": 685,
            "english": "20cm",
            "thai": "20 เซนติเมตร "
        },
        {
            "id": 2979,
            "parent_id": 685,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 2980,
            "parent_id": 686,
            "english": "Bucket Hat",
            "thai": "หมวกบักเก็ต "
        },
        {
            "id": 2981,
            "parent_id": 686,
            "english": "Beanie",
            "thai": "หมวกบีนนี่"
        },
        {
            "id": 2982,
            "parent_id": 686,
            "english": "Boater",
            "thai": "หมวกโบตเตอร์ "
        },
        {
            "id": 2983,
            "parent_id": 686,
            "english": "Floppy",
            "thai": "หมวกปีกกว้าง "
        },
        {
            "id": 2984,
            "parent_id": 686,
            "english": "Beret",
            "thai": "หมวกเบเร่ต์ "
        },
        {
            "id": 2985,
            "parent_id": 686,
            "english": "Others",
            "thai": "อื่นๆ "
        },
        {
            "id": 2986,
            "parent_id": 687,
            "english": "black",
            "thai": "สีดำ"
        },
        {
            "id": 2987,
            "parent_id": 687,
            "english": "brown",
            "thai": "สีน้ำตาล "
        },
        {
            "id": 2988,
            "parent_id": 687,
            "english": "dark blue",
            "thai": "สีน้ำเงิน "
        },
        {
            "id": 2989,
            "parent_id": 687,
            "english": "khaki",
            "thai": "สีกากี"
        },
        {
            "id": 2990,
            "parent_id": 687,
            "english": "red",
            "thai": "สีแดง"
        },
        {
            "id": 2991,
            "parent_id": 687,
            "english": "Others",
            "thai": "อื่นๆ "
        },
        {
            "id": 2992,
            "parent_id": 688,
            "english": "Men",
            "thai": "ผู้ชาย"
        },
        {
            "id": 2993,
            "parent_id": 688,
            "english": "Womem",
            "thai": "ผู้หญิง "
        },
        {
            "id": 2994,
            "parent_id": 688,
            "english": "Unisex",
            "thai": "ไม่จำกัดเพศ "
        },
        {
            "id": 2995,
            "parent_id": 689,
            "english": "Hair straighteners",
            "thai": "เครื่องหนีบผม"
        },
        {
            "id": 2996,
            "parent_id": 689,
            "english": "hair drier",
            "thai": "ไดร์เป่าผม"
        },
        {
            "id": 2997,
            "parent_id": 689,
            "english": "hair curler",
            "thai": "เครื่องดัดผม"
        },
        {
            "id": 2998,
            "parent_id": 689,
            "english": "comb and brush",
            "thai": "หวีและแปรง "
        },
        {
            "id": 2999,
            "parent_id": 689,
            "english": "Hair clip",
            "thai": "กิ๊บ"
        },
        {
            "id": 3000,
            "parent_id": 689,
            "english": "others",
            "thai": "อื่นๆ "
        },
        {
            "id": 3001,
            "parent_id": 690,
            "english": "black",
            "thai": "สีดำ"
        },
        {
            "id": 3002,
            "parent_id": 690,
            "english": "brown",
            "thai": "สีน้ำตาล "
        },
        {
            "id": 3003,
            "parent_id": 690,
            "english": "beige",
            "thai": "สีเนื้อ"
        },
        {
            "id": 3004,
            "parent_id": 690,
            "english": "white",
            "thai": "ขาว"
        },
        {
            "id": 3005,
            "parent_id": 690,
            "english": "red",
            "thai": "สีแดง"
        },
        {
            "id": 3006,
            "parent_id": 690,
            "english": "Others",
            "thai": "อื่นๆ "
        },
        {
            "id": 3007,
            "parent_id": 691,
            "english": "Men",
            "thai": "ผู้ชาย"
        },
        {
            "id": 3008,
            "parent_id": 691,
            "english": "Womem",
            "thai": "ผู้หญิง "
        },
        {
            "id": 3009,
            "parent_id": 691,
            "english": "Unisex",
            "thai": "ไม่จำกัดเพศ "
        },
        {
            "id": 3010,
            "parent_id": 692,
            "english": "leather ",
            "thai": "หนัง"
        },
        {
            "id": 3011,
            "parent_id": 692,
            "english": "Braided Leather",
            "thai": "หนังถัก"
        },
        {
            "id": 3012,
            "parent_id": 692,
            "english": "synthetic leather",
            "thai": "หนังสังเคราะห์"
        },
        {
            "id": 3013,
            "parent_id": 692,
            "english": "rope",
            "thai": "เชือก"
        },
        {
            "id": 3014,
            "parent_id": 692,
            "english": "Others",
            "thai": "อื่นๆ "
        },
        {
            "id": 3015,
            "parent_id": 693,
            "english": "No show",
            "thai": "ไม่โชว์ถุงเท้า "
        },
        {
            "id": 3016,
            "parent_id": 693,
            "english": "Ankle Socks",
            "thai": "หุ้มส้น"
        },
        {
            "id": 3017,
            "parent_id": 693,
            "english": "Quarter Socks",
            "thai": "ข้อสั้น"
        },
        {
            "id": 3018,
            "parent_id": 693,
            "english": "Crew Socks",
            "thai": "ครึ่งแข้ง"
        },
        {
            "id": 3019,
            "parent_id": 693,
            "english": " Knee Hight Socks",
            "thai": "ระดับเข่า"
        },
        {
            "id": 3020,
            "parent_id": 693,
            "english": " Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3021,
            "parent_id": 694,
            "english": "bucket yarn",
            "thai": "ไหมพรมถัก "
        },
        {
            "id": 3022,
            "parent_id": 694,
            "english": "cotton",
            "thai": "ผ้าฝ้าย"
        },
        {
            "id": 3023,
            "parent_id": 694,
            "english": "velvet ",
            "thai": "กำมะหยี่"
        },
        {
            "id": 3024,
            "parent_id": 694,
            "english": "polyester",
            "thai": "โพลีเอสเตอร์"
        },
        {
            "id": 3025,
            "parent_id": 694,
            "english": "wool",
            "thai": "ขนสัตว์"
        },
        {
            "id": 3026,
            "parent_id": 694,
            "english": "Others",
            "thai": "อื่นๆ "
        },
        {
            "id": 3027,
            "parent_id": 695,
            "english": "yellow",
            "thai": "สีเหลือง"
        },
        {
            "id": 3028,
            "parent_id": 695,
            "english": "brown",
            "thai": "สีน้ำตาล "
        },
        {
            "id": 3029,
            "parent_id": 695,
            "english": "beige",
            "thai": "สีเนื้อ"
        },
        {
            "id": 3030,
            "parent_id": 695,
            "english": "white",
            "thai": "สีขาว"
        },
        {
            "id": 3031,
            "parent_id": 695,
            "english": "black",
            "thai": "สีดำ "
        },
        {
            "id": 3032,
            "parent_id": 695,
            "english": "Others",
            "thai": "อื่นๆ "
        },
        {
            "id": 3033,
            "parent_id": 696,
            "english": "exercise gloves",
            "thai": "ถุงมือออกกำลังกาย "
        },
        {
            "id": 3034,
            "parent_id": 696,
            "english": "safety gloves",
            "thai": "ถุงมือเซฟตี้ "
        },
        {
            "id": 3035,
            "parent_id": 696,
            "english": "winter gloves",
            "thai": "ถุงมือกันหนาว "
        },
        {
            "id": 3036,
            "parent_id": 696,
            "english": "multi purpose gloves",
            "thai": "ถุงมืออเนกประสงค์"
        },
        {
            "id": 3037,
            "parent_id": 696,
            "english": "driving gloves",
            "thai": "ถงมือขับรถ "
        },
        {
            "id": 3038,
            "parent_id": 696,
            "english": "others",
            "thai": "อื่นๆ "
        },
        {
            "id": 3039,
            "parent_id": 697,
            "english": "Men",
            "thai": "ผู้ชาย"
        },
        {
            "id": 3040,
            "parent_id": 697,
            "english": "Womem",
            "thai": "ผู้หญิง "
        },
        {
            "id": 3041,
            "parent_id": 697,
            "english": "Unisex",
            "thai": "ไม่จำกัดเพศ "
        },
        {
            "id": 3042,
            "parent_id": 698,
            "english": "red black",
            "thai": "สีดำแดง "
        },
        {
            "id": 3043,
            "parent_id": 698,
            "english": "grey",
            "thai": "สีเทา"
        },
        {
            "id": 3044,
            "parent_id": 698,
            "english": "yellow",
            "thai": "สีเหลือง"
        },
        {
            "id": 3045,
            "parent_id": 698,
            "english": "white",
            "thai": "สีขาว"
        },
        {
            "id": 3046,
            "parent_id": 698,
            "english": "black",
            "thai": "สีดำ"
        },
        {
            "id": 3047,
            "parent_id": 698,
            "english": " Others",
            "thai": "อื่นๆ "
        },
        {
            "id": 3048,
            "parent_id": 699,
            "english": "Rayban",
            "thai": "Rayban"
        },
        {
            "id": 3049,
            "parent_id": 699,
            "english": "Oakley",
            "thai": "Oakley"
        },
        {
            "id": 3050,
            "parent_id": 699,
            "english": "Gucci",
            "thai": "Gucci"
        },
        {
            "id": 3051,
            "parent_id": 699,
            "english": "Anne Klein",
            "thai": "Anne Klein"
        },
        {
            "id": 3052,
            "parent_id": 699,
            "english": "DKNY",
            "thai": "DKNY"
        },
        {
            "id": 3053,
            "parent_id": 699,
            "english": "others",
            "thai": "อื่นๆ "
        },
        {
            "id": 3054,
            "parent_id": 700,
            "english": "Aviator Frame",
            "thai": "ทรงนักบิน "
        },
        {
            "id": 3055,
            "parent_id": 700,
            "english": "Round Frame",
            "thai": "ทรงกลม หรือ ทรงหยดน้ำ "
        },
        {
            "id": 3056,
            "parent_id": 700,
            "english": "Square Frame",
            "thai": "ทรงสี่เหลี่ยม "
        },
        {
            "id": 3057,
            "parent_id": 700,
            "english": "Geometric frames",
            "thai": "ทรงเรขาคณิต"
        },
        {
            "id": 3058,
            "parent_id": 700,
            "english": "Rectangular frames",
            "thai": "ทรงเหลี่ยม"
        },
        {
            "id": 3059,
            "parent_id": 700,
            "english": "others",
            "thai": "อื่น ๆ "
        },
        {
            "id": 3060,
            "parent_id": 701,
            "english": "Thai",
            "thai": "ไทย"
        },
        {
            "id": 3061,
            "parent_id": 701,
            "english": "abroad",
            "thai": "ต่างประเทศ"
        },
        {
            "id": 3062,
            "parent_id": 702,
            "english": "Thai",
            "thai": "ไทย"
        },
        {
            "id": 3063,
            "parent_id": 702,
            "english": "abroad",
            "thai": "ต่างประเทศ"
        },
        {
            "id": 3064,
            "parent_id": 703,
            "english": "Thai",
            "thai": "ไทย"
        },
        {
            "id": 3065,
            "parent_id": 703,
            "english": "abroad",
            "thai": "ต่างประเทศ"
        },
        {
            "id": 3066,
            "parent_id": 704,
            "english": "painting",
            "thai": "ภาพวาด"
        },
        {
            "id": 3067,
            "parent_id": 704,
            "english": "Sculpture",
            "thai": "รูปปั้น"
        },
        {
            "id": 3068,
            "parent_id": 704,
            "english": "otheres",
            "thai": "อื่นๆ"
        },
        {
            "id": 3069,
            "parent_id": 705,
            "english": "Gun model",
            "thai": "โมเดลปืน"
        },
        {
            "id": 3070,
            "parent_id": 705,
            "english": "Car model",
            "thai": "โมเดลรถยนต์"
        },
        {
            "id": 3071,
            "parent_id": 705,
            "english": "Race car model",
            "thai": "โมเดลรถแข่ง"
        },
        {
            "id": 3072,
            "parent_id": 705,
            "english": "Tank model",
            "thai": "โมเดลกันดั้ม"
        },
        {
            "id": 3073,
            "parent_id": 705,
            "english": "Sailboat model",
            "thai": "โมเดลเรือใบ"
        },
        {
            "id": 3074,
            "parent_id": 705,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3075,
            "parent_id": 706,
            "english": "Intel",
            "thai": "Intel"
        },
        {
            "id": 3076,
            "parent_id": 706,
            "english": "HP",
            "thai": "HP"
        },
        {
            "id": 3077,
            "parent_id": 706,
            "english": "DELL",
            "thai": "DELL"
        },
        {
            "id": 3078,
            "parent_id": 706,
            "english": "ASUS",
            "thai": "ASUS"
        },
        {
            "id": 3079,
            "parent_id": 706,
            "english": "LENOVO",
            "thai": "LENOVO"
        },
        {
            "id": 3080,
            "parent_id": 706,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3081,
            "parent_id": 707,
            "english": "Windows",
            "thai": "วินโดวส์"
        },
        {
            "id": 3082,
            "parent_id": 707,
            "english": "macOS",
            "thai": "แมค โอเอส"
        },
        {
            "id": 3083,
            "parent_id": 708,
            "english": "8 GB",
            "thai": "8 GB"
        },
        {
            "id": 3084,
            "parent_id": 708,
            "english": "16 GB",
            "thai": "16 GB"
        },
        {
            "id": 3085,
            "parent_id": 708,
            "english": "32 GB",
            "thai": "32 GB"
        },
        {
            "id": 3086,
            "parent_id": 708,
            "english": "64 GB",
            "thai": "64 GB"
        },
        {
            "id": 3087,
            "parent_id": 708,
            "english": "128 GB",
            "thai": "128 GB"
        },
        {
            "id": 3088,
            "parent_id": 708,
            "english": "128 GB UP",
            "thai": "มากกว่า 128 GB"
        },
        {
            "id": 3089,
            "parent_id": 709,
            "english": "VGA",
            "thai": "VGA"
        },
        {
            "id": 3090,
            "parent_id": 709,
            "english": "HDMI",
            "thai": "HDMI"
        },
        {
            "id": 3091,
            "parent_id": 709,
            "english": "USB",
            "thai": "USB"
        },
        {
            "id": 3092,
            "parent_id": 709,
            "english": "Micro HDMI",
            "thai": "Micro HDMI"
        },
        {
            "id": 3093,
            "parent_id": 709,
            "english": "Micro USB",
            "thai": "Micro USB"
        },
        {
            "id": 3094,
            "parent_id": 710,
            "english": "Epson",
            "thai": "Epson"
        },
        {
            "id": 3095,
            "parent_id": 710,
            "english": "Hp",
            "thai": "Hp"
        },
        {
            "id": 3096,
            "parent_id": 710,
            "english": "Canon",
            "thai": "Canon"
        },
        {
            "id": 3097,
            "parent_id": 710,
            "english": "Brother",
            "thai": "Brother"
        },
        {
            "id": 3098,
            "parent_id": 710,
            "english": "Fujixerox",
            "thai": "Fujixerox"
        },
        {
            "id": 3099,
            "parent_id": 710,
            "english": "others",
            "thai": "อื่น ๆ"
        },
        {
            "id": 3100,
            "parent_id": 711,
            "english": "Dot Matrix Printer",
            "thai": "เครื่องพิมพ์ดอตแมทริกซ์"
        },
        {
            "id": 3101,
            "parent_id": 711,
            "english": "Ink-Jet Printer",
            "thai": "เครื่องพิมพ์แบบพ่นหมึก"
        },
        {
            "id": 3102,
            "parent_id": 711,
            "english": "Laser Printer",
            "thai": "เครื่องพิมพ์เลเซอร์"
        },
        {
            "id": 3103,
            "parent_id": 711,
            "english": "plotter",
            "thai": "พล็อตเตอร์"
        },
        {
            "id": 3104,
            "parent_id": 711,
            "english": "others",
            "thai": "อื่น ๆ"
        },
        {
            "id": 3105,
            "parent_id": 712,
            "english": "Keyboard",
            "thai": "คีย์บอร์ด"
        },
        {
            "id": 3106,
            "parent_id": 712,
            "english": "Mouse",
            "thai": "เมาส์"
        },
        {
            "id": 3107,
            "parent_id": 712,
            "english": "CPU",
            "thai": "ซีพียู"
        },
        {
            "id": 3108,
            "parent_id": 712,
            "english": "Display Card",
            "thai": "การ์ดแสดงผล"
        },
        {
            "id": 3109,
            "parent_id": 712,
            "english": "Hard disk",
            "thai": "ฮาร์ดดิสก์"
        },
        {
            "id": 3110,
            "parent_id": 712,
            "english": "others",
            "thai": "อื่น ๆ"
        },
        {
            "id": 3111,
            "parent_id": 713,
            "english": "Samsung",
            "thai": "Samsung"
        },
        {
            "id": 3112,
            "parent_id": 713,
            "english": "Carrier",
            "thai": "Carrier"
        },
        {
            "id": 3113,
            "parent_id": 713,
            "english": "Mitsubishi",
            "thai": "Mitsubishi"
        },
        {
            "id": 3114,
            "parent_id": 713,
            "english": "Hitachi",
            "thai": "Hitachi"
        },
        {
            "id": 3115,
            "parent_id": 713,
            "english": "Daikin",
            "thai": "Daikin"
        },
        {
            "id": 3116,
            "parent_id": 713,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3117,
            "parent_id": 714,
            "english": 9000,
            "thai": 9000
        },
        {
            "id": 3118,
            "parent_id": 714,
            "english": 12000,
            "thai": 12000
        },
        {
            "id": 3119,
            "parent_id": 714,
            "english": 18000,
            "thai": 18000
        },
        {
            "id": 3120,
            "parent_id": 714,
            "english": 21000,
            "thai": 21000
        },
        {
            "id": 3121,
            "parent_id": 714,
            "english": 24000,
            "thai": 24000
        },
        {
            "id": 3122,
            "parent_id": 714,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3123,
            "parent_id": 715,
            "english": "Inverter system",
            "thai": "ระบบอินเวอร์เตอร์"
        },
        {
            "id": 3124,
            "parent_id": 715,
            "english": "PM 2.5 filter",
            "thai": "กรองพีเอ็ม 2.5"
        },
        {
            "id": 3125,
            "parent_id": 716,
            "english": "Hitachi",
            "thai": "Hitachi"
        },
        {
            "id": 3126,
            "parent_id": 716,
            "english": "Panasonic",
            "thai": "Panasonic"
        },
        {
            "id": 3127,
            "parent_id": 716,
            "english": "Mitsubishi",
            "thai": "Mitsubishi"
        },
        {
            "id": 3128,
            "parent_id": 716,
            "english": "Toshiba",
            "thai": "Toshiba"
        },
        {
            "id": 3129,
            "parent_id": 716,
            "english": "Electrolux",
            "thai": "Electrolux"
        },
        {
            "id": 3130,
            "parent_id": 716,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3131,
            "parent_id": 717,
            "english": "Refrigerator 1 door",
            "thai": "ตู้เย็น 1 ประตู"
        },
        {
            "id": 3132,
            "parent_id": 717,
            "english": "Refrigerator 2 door",
            "thai": "ตู้เย็น 2 ประตู"
        },
        {
            "id": 3133,
            "parent_id": 717,
            "english": "Multi door refrigerator",
            "thai": "ตู้เย็นมัลติดอร์"
        },
        {
            "id": 3134,
            "parent_id": 717,
            "english": "Side-by-Side Refrigerator",
            "thai": "ตู้เย็นไซด์-บาย-ไซด์"
        },
        {
            "id": 3135,
            "parent_id": 717,
            "english": "Freezer",
            "thai": "ตู้แช่แข็ง"
        },
        {
            "id": 3136,
            "parent_id": 717,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3137,
            "parent_id": 718,
            "english": "5 queue",
            "thai": "6 queue"
        },
        {
            "id": 3138,
            "parent_id": 718,
            "english": "6queue",
            "thai": "6queue"
        },
        {
            "id": 3139,
            "parent_id": 718,
            "english": "8queue",
            "thai": "8queue"
        },
        {
            "id": 3140,
            "parent_id": 718,
            "english": "12queue",
            "thai": "12queue"
        },
        {
            "id": 3141,
            "parent_id": 718,
            "english": "15queue",
            "thai": "15queue"
        },
        {
            "id": 3142,
            "parent_id": 718,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3143,
            "parent_id": 719,
            "english": "Aconatic",
            "thai": "Aconatic"
        },
        {
            "id": 3144,
            "parent_id": 719,
            "english": "Sony",
            "thai": "Sony"
        },
        {
            "id": 3145,
            "parent_id": 719,
            "english": "Tcl",
            "thai": "Tcl"
        },
        {
            "id": 3146,
            "parent_id": 719,
            "english": "Xiaomi",
            "thai": "Xiaomi"
        },
        {
            "id": 3147,
            "parent_id": 719,
            "english": "Samsung",
            "thai": "Samsung"
        },
        {
            "id": 3148,
            "parent_id": 719,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3149,
            "parent_id": 720,
            "english": "Sound bar",
            "thai": "ซาวด์บาร์"
        },
        {
            "id": 3150,
            "parent_id": 720,
            "english": "Home theater",
            "thai": "ชุดโฮมเธียเตอร์"
        },
        {
            "id": 3151,
            "parent_id": 720,
            "english": "Hi-fi audio",
            "thai": "เครื่องเสียงไฮไฟ"
        },
        {
            "id": 3152,
            "parent_id": 720,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3153,
            "parent_id": 721,
            "english": "CL",
            "thai": "CL"
        },
        {
            "id": 3154,
            "parent_id": 721,
            "english": "LG",
            "thai": "LG"
        },
        {
            "id": 3155,
            "parent_id": 721,
            "english": "Samsung",
            "thai": "Samsung"
        },
        {
            "id": 3156,
            "parent_id": 721,
            "english": "Panasonic",
            "thai": "Panasonic"
        },
        {
            "id": 3157,
            "parent_id": 721,
            "english": "Electrolux",
            "thai": "Electrolux"
        },
        {
            "id": 3158,
            "parent_id": 721,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3159,
            "parent_id": 722,
            "english": "Front-loading washing machine",
            "thai": "ฝาหน้า"
        },
        {
            "id": 3160,
            "parent_id": 722,
            "english": "Top-loading washing machine",
            "thai": "ฝาบน"
        },
        {
            "id": 3161,
            "parent_id": 722,
            "english": "Washing machine and dryer",
            "thai": "เครื่องซักผ้าอบผ้า"
        },
        {
            "id": 3162,
            "parent_id": 722,
            "english": "2 tub top loading washing machine",
            "thai": "ฝาบน 2 ถัง"
        },
        {
            "id": 3163,
            "parent_id": 722,
            "english": "Spin dryer",
            "thai": "เครื่องอบผ้า"
        },
        {
            "id": 3164,
            "parent_id": 723,
            "english": "7 KG",
            "thai": "8 KG"
        },
        {
            "id": 3165,
            "parent_id": 723,
            "english": "9 KG",
            "thai": "10 KG"
        },
        {
            "id": 3166,
            "parent_id": 723,
            "english": "11KG",
            "thai": "11KG"
        },
        {
            "id": 3167,
            "parent_id": 723,
            "english": "12KG",
            "thai": "12KG"
        },
        {
            "id": 3168,
            "parent_id": 723,
            "english": "15KG",
            "thai": "15KG"
        },
        {
            "id": 3169,
            "parent_id": 723,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3170,
            "parent_id": 724,
            "english": "Samart",
            "thai": "Samart"
        },
        {
            "id": 3171,
            "parent_id": 724,
            "english": "Apple",
            "thai": "Apple"
        },
        {
            "id": 3172,
            "parent_id": 724,
            "english": true,
            "thai": ""
        },
        {
            "id": 3173,
            "parent_id": 724,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3174,
            "parent_id": 725,
            "english": "ZINSANO",
            "thai": "ZINSANO"
        },
        {
            "id": 3175,
            "parent_id": 725,
            "english": "ujika",
            "thai": "ujika"
        },
        {
            "id": 3176,
            "parent_id": 725,
            "english": "MITSUBISHI",
            "thai": "MITSUBISHI"
        },
        {
            "id": 3177,
            "parent_id": 725,
            "english": "Hitachi",
            "thai": "Hitachi"
        },
        {
            "id": 3178,
            "parent_id": 725,
            "english": "Kanto",
            "thai": "Kanto"
        },
        {
            "id": 3179,
            "parent_id": 725,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3180,
            "parent_id": 726,
            "english": "150watt",
            "thai": "150watt"
        },
        {
            "id": 3181,
            "parent_id": 726,
            "english": "200watt",
            "thai": "200watt"
        },
        {
            "id": 3182,
            "parent_id": 726,
            "english": "250watt",
            "thai": "250watt"
        },
        {
            "id": 3183,
            "parent_id": 726,
            "english": "400watt",
            "thai": "400watt"
        },
        {
            "id": 3184,
            "parent_id": 726,
            "english": "450watt",
            "thai": "450watt"
        },
        {
            "id": 3185,
            "parent_id": 726,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3186,
            "parent_id": 727,
            "english": "Tefal",
            "thai": "Tefal"
        },
        {
            "id": 3187,
            "parent_id": 727,
            "english": "Duchess",
            "thai": "Duchess"
        },
        {
            "id": 3188,
            "parent_id": 727,
            "english": "OTTO",
            "thai": "OTTO"
        },
        {
            "id": 3189,
            "parent_id": 727,
            "english": "ETZEL",
            "thai": "ETZEL"
        },
        {
            "id": 3190,
            "parent_id": 727,
            "english": "Electrolux",
            "thai": "Electrolux"
        },
        {
            "id": 3191,
            "parent_id": 727,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3192,
            "parent_id": 728,
            "english": "8 bar",
            "thai": "9 bar"
        },
        {
            "id": 3193,
            "parent_id": 728,
            "english": "9 bar",
            "thai": "10 bar"
        },
        {
            "id": 3194,
            "parent_id": 728,
            "english": "18 bar",
            "thai": "19 bar"
        },
        {
            "id": 3195,
            "parent_id": 728,
            "english": "19 bar",
            "thai": "20 bar"
        },
        {
            "id": 3196,
            "parent_id": 728,
            "english": "20 bar",
            "thai": "21 bar"
        },
        {
            "id": 3197,
            "parent_id": 728,
            "english": "25 bar",
            "thai": "26 bar"
        },
        {
            "id": 3198,
            "parent_id": 728,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3199,
            "parent_id": 729,
            "english": "Light grey",
            "thai": "สีเทา"
        },
        {
            "id": 3200,
            "parent_id": 729,
            "english": "White",
            "thai": "สีขาว"
        },
        {
            "id": 3201,
            "parent_id": 729,
            "english": "Black",
            "thai": "สีดำ"
        },
        {
            "id": 3202,
            "parent_id": 729,
            "english": "Silver",
            "thai": "สีเงิน"
        },
        {
            "id": 3203,
            "parent_id": 729,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3204,
            "parent_id": 730,
            "english": "PHILIPS",
            "thai": "PHILIPS"
        },
        {
            "id": 3205,
            "parent_id": 730,
            "english": "Tefal",
            "thai": "Tefal"
        },
        {
            "id": 3206,
            "parent_id": 730,
            "english": "Xiaomi",
            "thai": "Xiaomi"
        },
        {
            "id": 3207,
            "parent_id": 730,
            "english": "Electrolux",
            "thai": "Electrolux"
        },
        {
            "id": 3208,
            "parent_id": 730,
            "english": "SHARP",
            "thai": "SHARP"
        },
        {
            "id": 3209,
            "parent_id": 730,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3210,
            "parent_id": 731,
            "english": "Electric Irons",
            "thai": "แบบธรรมดา"
        },
        {
            "id": 3211,
            "parent_id": 731,
            "english": "Automatic Electric Irons",
            "thai": "แบบอัตโนมัติ"
        },
        {
            "id": 3212,
            "parent_id": 731,
            "english": "Electric Steam Iron",
            "thai": "แบบไอน้ำ"
        },
        {
            "id": 3213,
            "parent_id": 732,
            "english": "750 Watt",
            "thai": "750 วัตต์"
        },
        {
            "id": 3214,
            "parent_id": 732,
            "english": "1200 Watt",
            "thai": "1200 วัตต์"
        },
        {
            "id": 3215,
            "parent_id": 732,
            "english": "1600 Watt",
            "thai": "1600วัตต์"
        },
        {
            "id": 3216,
            "parent_id": 732,
            "english": "1800 Watt",
            "thai": "1800วัตต์"
        },
        {
            "id": 3217,
            "parent_id": 732,
            "english": "2000 Watt",
            "thai": "2000วัตต์"
        },
        {
            "id": 3218,
            "parent_id": 732,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3219,
            "parent_id": 733,
            "english": "Light grey",
            "thai": "สีเทา"
        },
        {
            "id": 3220,
            "parent_id": 733,
            "english": "White",
            "thai": "สีขาว"
        },
        {
            "id": 3221,
            "parent_id": 733,
            "english": "Black",
            "thai": "สีดำ"
        },
        {
            "id": 3222,
            "parent_id": 733,
            "english": "Silver",
            "thai": "สีเงิน"
        },
        {
            "id": 3223,
            "parent_id": 733,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3224,
            "parent_id": 734,
            "english": "Gaabor",
            "thai": "Gaabor"
        },
        {
            "id": 3225,
            "parent_id": 734,
            "english": "PHILIPS",
            "thai": "PHILIPS"
        },
        {
            "id": 3226,
            "parent_id": 734,
            "english": "Tefal",
            "thai": "Tefal"
        },
        {
            "id": 3227,
            "parent_id": 734,
            "english": "Xiaomi",
            "thai": "Xiaomi"
        },
        {
            "id": 3228,
            "parent_id": 734,
            "english": "Haier",
            "thai": "Haier"
        },
        {
            "id": 3229,
            "parent_id": 734,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3230,
            "parent_id": 735,
            "english": "2.8 L",
            "thai": "2.8 ลิตร"
        },
        {
            "id": 3231,
            "parent_id": 735,
            "english": "3.5 L",
            "thai": "3.5 ลิตร"
        },
        {
            "id": 3232,
            "parent_id": 735,
            "english": "4 L",
            "thai": "4 ลิตร"
        },
        {
            "id": 3233,
            "parent_id": 735,
            "english": "6 L",
            "thai": "6 ลิตร"
        },
        {
            "id": 3234,
            "parent_id": 735,
            "english": "7.3 L",
            "thai": "7.3 ลิตร"
        },
        {
            "id": 3235,
            "parent_id": 735,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3236,
            "parent_id": 736,
            "english": "40 – 200 ํC",
            "thai": "40 – 200 ํC"
        },
        {
            "id": 3237,
            "parent_id": 736,
            "english": "70 – 200 °C",
            "thai": "70 – 200 °C"
        },
        {
            "id": 3238,
            "parent_id": 736,
            "english": "80 – 200 °C",
            "thai": "80 – 200 °C"
        },
        {
            "id": 3239,
            "parent_id": 736,
            "english": "90 – 200 ํC",
            "thai": "90 – 200 ํC"
        },
        {
            "id": 3240,
            "parent_id": 736,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3241,
            "parent_id": 737,
            "english": "Black",
            "thai": "สีดำ"
        },
        {
            "id": 3242,
            "parent_id": 737,
            "english": "Light grey",
            "thai": "สีเทา"
        },
        {
            "id": 3243,
            "parent_id": 737,
            "english": "White",
            "thai": "สีขาว"
        },
        {
            "id": 3244,
            "parent_id": 737,
            "english": "Silver",
            "thai": "สีเงิน"
        },
        {
            "id": 3245,
            "parent_id": 737,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3246,
            "parent_id": 738,
            "english": "Samsung",
            "thai": "Samsung"
        },
        {
            "id": 3247,
            "parent_id": 738,
            "english": "Electrolux",
            "thai": "Electrolux"
        },
        {
            "id": 3248,
            "parent_id": 738,
            "english": "Hafele",
            "thai": "Hafele"
        },
        {
            "id": 3249,
            "parent_id": 738,
            "english": "Toshiba",
            "thai": "Toshiba"
        },
        {
            "id": 3250,
            "parent_id": 738,
            "english": "Haier",
            "thai": "Haier"
        },
        {
            "id": 3251,
            "parent_id": 738,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3252,
            "parent_id": 739,
            "english": "20 L",
            "thai": "20 ลิตร"
        },
        {
            "id": 3253,
            "parent_id": 739,
            "english": "23 L",
            "thai": "23 ลิตร"
        },
        {
            "id": 3254,
            "parent_id": 739,
            "english": "25 L",
            "thai": "25 ลิตร"
        },
        {
            "id": 3255,
            "parent_id": 740,
            "english": "700 wat",
            "thai": "700 วัตต์"
        },
        {
            "id": 3256,
            "parent_id": 740,
            "english": "800 wat",
            "thai": "800 วัตต์"
        },
        {
            "id": 3257,
            "parent_id": 740,
            "english": "1200 wat",
            "thai": "1,200 วัตต์"
        },
        {
            "id": 3258,
            "parent_id": 740,
            "english": "1450 wat",
            "thai": "1,450 วัตต์"
        },
        {
            "id": 3259,
            "parent_id": 740,
            "english": "2450 wat",
            "thai": "2,450 วัตต์"
        },
        {
            "id": 3260,
            "parent_id": 740,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3261,
            "parent_id": 741,
            "english": "Black",
            "thai": "สีดำ"
        },
        {
            "id": 3262,
            "parent_id": 741,
            "english": "Light grey",
            "thai": "สีเทา"
        },
        {
            "id": 3263,
            "parent_id": 741,
            "english": "White",
            "thai": "สีขาว"
        },
        {
            "id": 3264,
            "parent_id": 741,
            "english": "Silver",
            "thai": "สีเงิน"
        },
        {
            "id": 3265,
            "parent_id": 741,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3266,
            "parent_id": 742,
            "english": "SHARP",
            "thai": "SHARP"
        },
        {
            "id": 3267,
            "parent_id": 742,
            "english": "Mitsubishi",
            "thai": "Mitsubishi"
        },
        {
            "id": 3268,
            "parent_id": 742,
            "english": "Hatari",
            "thai": "Hatari"
        },
        {
            "id": 3269,
            "parent_id": 742,
            "english": "Imarflex",
            "thai": "Imarflex"
        },
        {
            "id": 3270,
            "parent_id": 742,
            "english": "Xiaomi",
            "thai": "Xiaomi"
        },
        {
            "id": 3271,
            "parent_id": 742,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3272,
            "parent_id": 743,
            "english": "Table fan",
            "thai": "แบบตั้งโต๊ะ"
        },
        {
            "id": 3273,
            "parent_id": 743,
            "english": "Pedestal fan",
            "thai": "แบบตั้งพื้น"
        },
        {
            "id": 3274,
            "parent_id": 743,
            "english": "Wall mounted fan",
            "thai": "แบบติดผนัง"
        },
        {
            "id": 3275,
            "parent_id": 743,
            "english": "Fan fogger",
            "thai": "แบบไอน้ำ"
        },
        {
            "id": 3276,
            "parent_id": 743,
            "english": "Portable Fan",
            "thai": "แบบพกพา"
        },
        {
            "id": 3277,
            "parent_id": 743,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3278,
            "parent_id": 744,
            "english": "White",
            "thai": "ขาว"
        },
        {
            "id": 3279,
            "parent_id": 744,
            "english": "Black",
            "thai": "ดำ"
        },
        {
            "id": 3280,
            "parent_id": 744,
            "english": "Green",
            "thai": "เขียว"
        },
        {
            "id": 3281,
            "parent_id": 744,
            "english": "Purple",
            "thai": "ม่วง"
        },
        {
            "id": 3282,
            "parent_id": 744,
            "english": "Red",
            "thai": "แดง"
        },
        {
            "id": 3283,
            "parent_id": 744,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3284,
            "parent_id": 745,
            "english": "6 in",
            "thai": "6 นิ้ว"
        },
        {
            "id": 3285,
            "parent_id": 745,
            "english": "7 in",
            "thai": "7 นิ้ว"
        },
        {
            "id": 3286,
            "parent_id": 745,
            "english": "8 in",
            "thai": "8 นิ้ว"
        },
        {
            "id": 3287,
            "parent_id": 745,
            "english": "9 in",
            "thai": "9 นิ้ว"
        },
        {
            "id": 3288,
            "parent_id": 745,
            "english": "11 in",
            "thai": "11 นิ้ว"
        },
        {
            "id": 3289,
            "parent_id": 745,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3290,
            "parent_id": 746,
            "english": "Sony",
            "thai": "Sony"
        },
        {
            "id": 3291,
            "parent_id": 746,
            "english": "Nintendo",
            "thai": "Nintendo"
        },
        {
            "id": 3292,
            "parent_id": 746,
            "english": "Software Playstation",
            "thai": "Software Playstation"
        },
        {
            "id": 3293,
            "parent_id": 746,
            "english": "Xbox",
            "thai": "Xbox"
        },
        {
            "id": 3294,
            "parent_id": 746,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3295,
            "parent_id": 747,
            "english": "PlayStation accessories",
            "thai": "อุปกรณ์เสริมเพลสเตชั่น"
        },
        {
            "id": 3296,
            "parent_id": 747,
            "english": "nintendo game machine",
            "thai": "เครื่องเกมส์นินเทนโด"
        },
        {
            "id": 3297,
            "parent_id": 747,
            "english": "Nintendo and accessories",
            "thai": "เกมส์นินเทนโด และอุปกรณ์"
        },
        {
            "id": 3298,
            "parent_id": 747,
            "english": "Xbox game machine",
            "thai": "เครื่องเกมส์ Xbox"
        },
        {
            "id": 3299,
            "parent_id": 747,
            "english": "Xbox games and accessories",
            "thai": "เกมส์ Xbox และอุปกรณ์"
        },
        {
            "id": 3300,
            "parent_id": 747,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3301,
            "parent_id": 748,
            "english": "wireless connection",
            "thai": "เชื่อมต่อไร้สายได้"
        },
        {
            "id": 3302,
            "parent_id": 748,
            "english": "can't connect to wireless",
            "thai": "เชื่อมต่อไร้สายไม่ได้"
        },
        {
            "id": 3303,
            "parent_id": 749,
            "english": "Family Game",
            "thai": "เกมครอบครัว"
        },
        {
            "id": 3304,
            "parent_id": 749,
            "english": "Party Game",
            "thai": "ปาร์ตี้เกม"
        },
        {
            "id": 3305,
            "parent_id": 749,
            "english": "Strategy Game",
            "thai": "เกมวางแผน"
        },
        {
            "id": 3306,
            "parent_id": 750,
            "english": "games",
            "thai": "เกม"
        },
        {
            "id": 3307,
            "parent_id": 750,
            "english": "earphones",
            "thai": "หูฟัง"
        },
        {
            "id": 3308,
            "parent_id": 750,
            "english": "mouse",
            "thai": "เม้าส์"
        },
        {
            "id": 3309,
            "parent_id": 750,
            "english": "mouse mat",
            "thai": "แผ่นรองเม้าส์"
        },
        {
            "id": 3310,
            "parent_id": 750,
            "english": "keyboard",
            "thai": "คีย์บอร์ด"
        },
        {
            "id": 3311,
            "parent_id": 750,
            "english": "other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3312,
            "parent_id": 751,
            "english": "weighing machine",
            "thai": "เครื่องชั่งน้ำหนัก"
        },
        {
            "id": 3313,
            "parent_id": 751,
            "english": "blood pressure monitor",
            "thai": "เครื่องวัดความดันโลหิต"
        },
        {
            "id": 3314,
            "parent_id": 751,
            "english": "Thermometer",
            "thai": "ปรอทวัดอุณหภูมิ"
        },
        {
            "id": 3315,
            "parent_id": 751,
            "english": "patient bed",
            "thai": "เตียงผู้ป่วย"
        },
        {
            "id": 3316,
            "parent_id": 751,
            "english": "air mattress against pressure sores",
            "thai": "ที่นอนลมกันแผลกดทับ"
        },
        {
            "id": 3317,
            "parent_id": 751,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3318,
            "parent_id": 752,
            "english": "SÌ",
            "thai": "SÌ"
        },
        {
            "id": 3319,
            "parent_id": 752,
            "english": "Dior",
            "thai": "Dior"
        },
        {
            "id": 3320,
            "parent_id": 752,
            "english": "CK",
            "thai": "CK"
        },
        {
            "id": 3321,
            "parent_id": 752,
            "english": "Gucci",
            "thai": "Gucci"
        },
        {
            "id": 3322,
            "parent_id": 752,
            "english": "CHANEL",
            "thai": "CHANEL"
        },
        {
            "id": 3323,
            "parent_id": 752,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3324,
            "parent_id": 753,
            "english": "Men",
            "thai": "ผู้ชาย"
        },
        {
            "id": 3325,
            "parent_id": 753,
            "english": "Womem",
            "thai": "ผู้หญิง"
        },
        {
            "id": 3326,
            "parent_id": 753,
            "english": "Unisex",
            "thai": "ไม่จำกัดเพศ"
        },
        {
            "id": 3327,
            "parent_id": 754,
            "english": "Beauty accessories",
            "thai": "อุปกรณ์เสริมสวย"
        },
        {
            "id": 3328,
            "parent_id": 754,
            "english": "nail products",
            "thai": "ผลิตภัณฑ์สำหรับเล็บ"
        },
        {
            "id": 3329,
            "parent_id": 754,
            "english": "personal belongings",
            "thai": "ของใช้ส่วนตัว"
        },
        {
            "id": 3330,
            "parent_id": 754,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3331,
            "parent_id": 755,
            "english": "Education & test preparation",
            "thai": "หนังสือเรียนและคู่มือสอบ"
        },
        {
            "id": 3332,
            "parent_id": 755,
            "english": "Comic Books",
            "thai": "การ์ตูน"
        },
        {
            "id": 3333,
            "parent_id": 755,
            "english": "Romantic Fiction",
            "thai": "นิยายโรแมนติก"
        },
        {
            "id": 3334,
            "parent_id": 755,
            "english": "Children Books ",
            "thai": "หนังสือเด็ก "
        },
        {
            "id": 3335,
            "parent_id": 755,
            "english": "Y Fiction",
            "thai": "นิยายวาย "
        },
        {
            "id": 3336,
            "parent_id": 755,
            "english": "others",
            "thai": "อื่นๆ "
        },
        {
            "id": 3337,
            "parent_id": 756,
            "english": "CD",
            "thai": "ซีดี"
        },
        {
            "id": 3338,
            "parent_id": 756,
            "english": "record",
            "thai": "แผ่นเสียง "
        },
        {
            "id": 3339,
            "parent_id": 756,
            "english": " tape",
            "thai": "เทป"
        },
        {
            "id": 3340,
            "parent_id": 756,
            "english": "others",
            "thai": "อื่นๆ "
        },
        {
            "id": 3341,
            "parent_id": 757,
            "english": "English",
            "thai": "ภาษาอังกฤษ"
        },
        {
            "id": 3342,
            "parent_id": 757,
            "english": "Thai",
            "thai": "ภาษาไทย"
        },
        {
            "id": 3343,
            "parent_id": 757,
            "english": "Chinese",
            "thai": "ภาษาจีน"
        },
        {
            "id": 3344,
            "parent_id": 757,
            "english": " Japanese",
            "thai": "ภาษาญี่ปุ่น"
        },
        {
            "id": 3345,
            "parent_id": 757,
            "english": "Korean",
            "thai": "ภาษาเกาหลี "
        },
        {
            "id": 3346,
            "parent_id": 757,
            "english": " other languages",
            "thai": "ภาษาอื่นๆ"
        },
        {
            "id": 3347,
            "parent_id": 758,
            "english": "sewing machine",
            "thai": "จักรเย็บผ้า"
        },
        {
            "id": 3348,
            "parent_id": 758,
            "english": "Quilt",
            "thai": "งานควิลท์ "
        },
        {
            "id": 3349,
            "parent_id": 758,
            "english": "cross stitch supplies",
            "thai": "อุปกรณ์ปักครอสติส "
        },
        {
            "id": 3350,
            "parent_id": 758,
            "english": " Knitting and Crochet",
            "thai": "ถักนิตติ้ง และ ถักโครเชต์"
        },
        {
            "id": 3351,
            "parent_id": 758,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3352,
            "parent_id": 759,
            "english": "lego jigsaw puzzle",
            "thai": "ตัวต่อ เลโก้ จิ้กซอว์"
        },
        {
            "id": 3353,
            "parent_id": 759,
            "english": "doll",
            "thai": "ตุ๊กตา "
        },
        {
            "id": 3354,
            "parent_id": 759,
            "english": "radio controlled toy drone",
            "thai": "ของเล่นบังคับวิทยุ โดรน"
        },
        {
            "id": 3355,
            "parent_id": 759,
            "english": "card card",
            "thai": "การ์ด ไพ่"
        },
        {
            "id": 3356,
            "parent_id": 759,
            "english": "Jugsaw",
            "thai": "จั๊กซอว์"
        },
        {
            "id": 3357,
            "parent_id": 759,
            "english": "others",
            "thai": "อื่นๆ o"
        },
        {
            "id": 3358,
            "parent_id": 760,
            "english": "sports tickets",
            "thai": "บัตรชมกีฬา"
        },
        {
            "id": 3359,
            "parent_id": 760,
            "english": "concert tickets",
            "thai": "บัตรคอนเสิร์ต"
        },
        {
            "id": 3360,
            "parent_id": 760,
            "english": " show ticket",
            "thai": "บัตรชมการแสดง"
        },
        {
            "id": 3361,
            "parent_id": 760,
            "english": "voucher",
            "thai": "คูปอง"
        },
        {
            "id": 3362,
            "parent_id": 760,
            "english": "Other tickets",
            "thai": "อื่นๆ"
        },
        {
            "id": 3363,
            "parent_id": 761,
            "english": "Computer desk",
            "thai": "โต๊ะคอมพิวเตอร์ "
        },
        {
            "id": 3364,
            "parent_id": 761,
            "english": "Writing desk",
            "thai": "โต๊ะเขียนหนังสือ "
        },
        {
            "id": 3365,
            "parent_id": 761,
            "english": "Desk",
            "thai": "โต๊ะทำงาน"
        },
        {
            "id": 3366,
            "parent_id": 761,
            "english": "Wall mounted leaning table",
            "thai": "โต๊ะเอนติดผนัง"
        },
        {
            "id": 3367,
            "parent_id": 761,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3368,
            "parent_id": 762,
            "english": "Wood",
            "thai": "ไม้ "
        },
        {
            "id": 3369,
            "parent_id": 762,
            "english": "Aluminum",
            "thai": "อะลูมิเนียม "
        },
        {
            "id": 3370,
            "parent_id": 762,
            "english": "Fabric",
            "thai": "ผ้าใบ "
        },
        {
            "id": 3371,
            "parent_id": 762,
            "english": "Stainless Steel",
            "thai": "สแตนเลสสตีล "
        },
        {
            "id": 3372,
            "parent_id": 762,
            "english": "Plastic",
            "thai": "พลาสติก "
        },
        {
            "id": 3373,
            "parent_id": 762,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3374,
            "parent_id": 763,
            "english": "Cream",
            "thai": "ครีม"
        },
        {
            "id": 3375,
            "parent_id": 763,
            "english": "Brown",
            "thai": "น้ำตาล "
        },
        {
            "id": 3376,
            "parent_id": 763,
            "english": "Black",
            "thai": "ดำ"
        },
        {
            "id": 3377,
            "parent_id": 763,
            "english": "Yellow",
            "thai": "เหลือง"
        },
        {
            "id": 3378,
            "parent_id": 763,
            "english": "Blue",
            "thai": "น้ำเงิน"
        },
        {
            "id": 3379,
            "parent_id": 764,
            "english": "Wood",
            "thai": "ไม้ "
        },
        {
            "id": 3380,
            "parent_id": 764,
            "english": "Aluminum",
            "thai": "อะลูมิเนียม "
        },
        {
            "id": 3381,
            "parent_id": 764,
            "english": "Metal",
            "thai": "เหล็ก "
        },
        {
            "id": 3382,
            "parent_id": 764,
            "english": "Stainless Steel",
            "thai": "สแตนเลสสตีล "
        },
        {
            "id": 3383,
            "parent_id": 764,
            "english": "Rattan",
            "thai": "หวาย "
        },
        {
            "id": 3384,
            "parent_id": 764,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3385,
            "parent_id": 765,
            "english": "3.5 feet",
            "thai": "3.5 feet"
        },
        {
            "id": 3386,
            "parent_id": 765,
            "english": "5 feet",
            "thai": "5 feet"
        },
        {
            "id": 3387,
            "parent_id": 765,
            "english": "6 feet",
            "thai": "6 feet"
        },
        {
            "id": 3388,
            "parent_id": 765,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3389,
            "parent_id": 766,
            "english": "Armchair/chair with armrests",
            "thai": "เก้าอี้นวม/เก้าอี้มีที่เท้าแขน"
        },
        {
            "id": 3390,
            "parent_id": 766,
            "english": "High bar stool",
            "thai": "เก้าอี้บาร์สูง"
        },
        {
            "id": 3391,
            "parent_id": 766,
            "english": "Round chair",
            "thai": "เก้าอี้ทรงกลม"
        },
        {
            "id": 3392,
            "parent_id": 766,
            "english": "Office chair",
            "thai": "เก้าอี้สำนักงาน"
        },
        {
            "id": 3393,
            "parent_id": 766,
            "english": "Side chair/dining room chair",
            "thai": "เก้าอี้ตั้งข้างห้อง/เก้าอี้โต๊ะอาหาร"
        },
        {
            "id": 3394,
            "parent_id": 766,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3395,
            "parent_id": 767,
            "english": "Velvet fabric",
            "thai": "ผ้ากำมะหยี่"
        },
        {
            "id": 3396,
            "parent_id": 767,
            "english": "Leather ",
            "thai": "หนัง "
        },
        {
            "id": 3397,
            "parent_id": 767,
            "english": "Cotton",
            "thai": "ผ้าฝ้าย"
        },
        {
            "id": 3398,
            "parent_id": 767,
            "english": "Upholstery fabric",
            "thai": "ผ้าหุ้มเบาะ"
        },
        {
            "id": 3399,
            "parent_id": 767,
            "english": "Artificial leather",
            "thai": "หนังเทียม"
        },
        {
            "id": 3400,
            "parent_id": 767,
            "english": "Polyester/Polyester Blend)",
            "thai": "โพลีเอสเตอร์/โพลีเอสเตอร์เบลนด์"
        },
        {
            "id": 3401,
            "parent_id": 767,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3402,
            "parent_id": 768,
            "english": "Flesh",
            "thai": "เนื้อ "
        },
        {
            "id": 3403,
            "parent_id": 768,
            "english": "Brown",
            "thai": "น้ำตาล"
        },
        {
            "id": 3404,
            "parent_id": 768,
            "english": "Black",
            "thai": "ดำ"
        },
        {
            "id": 3405,
            "parent_id": 768,
            "english": "Multicolored)",
            "thai": "หลากสี"
        },
        {
            "id": 3406,
            "parent_id": 768,
            "english": "Dark brown",
            "thai": "น้ำตาลเข้ม"
        },
        {
            "id": 3407,
            "parent_id": 768,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3408,
            "parent_id": 769,
            "english": "Wood",
            "thai": "ไม้ "
        },
        {
            "id": 3409,
            "parent_id": 769,
            "english": "Leather ",
            "thai": "หนัง "
        },
        {
            "id": 3410,
            "parent_id": 769,
            "english": "Fabric",
            "thai": "ผ้าใบ "
        },
        {
            "id": 3411,
            "parent_id": 769,
            "english": "Plastic",
            "thai": "พลาสติก "
        },
        {
            "id": 3412,
            "parent_id": 769,
            "english": "Rattan",
            "thai": "หวาย "
        },
        {
            "id": 3413,
            "parent_id": 769,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3414,
            "parent_id": 770,
            "english": "Dark gray",
            "thai": "เทา "
        },
        {
            "id": 3415,
            "parent_id": 770,
            "english": "Brown",
            "thai": "น้ำตาล"
        },
        {
            "id": 3416,
            "parent_id": 770,
            "english": "Black",
            "thai": "ดำ"
        },
        {
            "id": 3417,
            "parent_id": 770,
            "english": "Multicolored",
            "thai": "หลากสี"
        },
        {
            "id": 3418,
            "parent_id": 770,
            "english": "Dark brown",
            "thai": "น้ำตาลเข้ม"
        },
        {
            "id": 3419,
            "parent_id": 770,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3420,
            "parent_id": 771,
            "english": "1 Seat",
            "thai": "1 ที่นั่ง"
        },
        {
            "id": 3421,
            "parent_id": 771,
            "english": "2 Seat",
            "thai": "2 ที่นั่ง"
        },
        {
            "id": 3422,
            "parent_id": 771,
            "english": "3 Seat",
            "thai": "3 ที่นั่ง"
        },
        {
            "id": 3423,
            "parent_id": 771,
            "english": "4 Seat",
            "thai": "4 ที่นั่ง"
        },
        {
            "id": 3424,
            "parent_id": 771,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3425,
            "parent_id": 772,
            "english": "Wall sticker",
            "thai": "สติกเกอร์ติดผนัง"
        },
        {
            "id": 3426,
            "parent_id": 772,
            "english": "Carpets and mats",
            "thai": "พรมและเสื่อ"
        },
        {
            "id": 3427,
            "parent_id": 772,
            "english": "Curtain",
            "thai": "ผ้าม่าน"
        },
        {
            "id": 3428,
            "parent_id": 772,
            "english": "Wall clock",
            "thai": "นาฬิกาแขวน"
        },
        {
            "id": 3429,
            "parent_id": 772,
            "english": "Wall pictures",
            "thai": "รูปติดผนัง"
        },
        {
            "id": 3430,
            "parent_id": 772,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3431,
            "parent_id": 773,
            "english": "kitchen shelf",
            "thai": "ชั้นวางของในครัว"
        },
        {
            "id": 3432,
            "parent_id": 773,
            "english": "corner shelf / corner shelf",
            "thai": "ชั้นเข้ามุม / ชั้นวางเข้ามุม"
        },
        {
            "id": 3433,
            "parent_id": 773,
            "english": "Tall cabinet drawers / tall cabinet shelves for the kitchen",
            "thai": "ลิ้นชักตู้สูง / ชั้นตู้สูงสำหรับห้องครัว"
        },
        {
            "id": 3434,
            "parent_id": 773,
            "english": "dish rack",
            "thai": "ตะแกรงวางจาน"
        },
        {
            "id": 3435,
            "parent_id": 773,
            "english": "cutlery tray",
            "thai": "ถาดใส่ช้อนส้อม"
        },
        {
            "id": 3436,
            "parent_id": 773,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3437,
            "parent_id": 774,
            "english": "Earth-saving Food Box",
            "thai": "กล่องอาหารรักษ์โลก"
        },
        {
            "id": 3438,
            "parent_id": 774,
            "english": "Compartment Food Box",
            "thai": "กล่องอาหารหลายช่อง"
        },
        {
            "id": 3439,
            "parent_id": 774,
            "english": "delivery food box",
            "thai": "กล่องอาหารเดลิเวอรี่"
        },
        {
            "id": 3440,
            "parent_id": 774,
            "english": "round food box",
            "thai": "กล่องอาหารทรงกลม"
        },
        {
            "id": 3441,
            "parent_id": 774,
            "english": "corrugated box",
            "thai": "กล่องลูกฟูก"
        },
        {
            "id": 3442,
            "parent_id": 774,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3443,
            "parent_id": 775,
            "english": "600 ml. ",
            "thai": "600 มล. "
        },
        {
            "id": 3444,
            "parent_id": 775,
            "english": "725 ml. ",
            "thai": "725 มล. "
        },
        {
            "id": 3445,
            "parent_id": 775,
            "english": "1300ml. ",
            "thai": "1300มล. "
        },
        {
            "id": 3446,
            "parent_id": 775,
            "english": "1600 ml. ",
            "thai": "1600 มล. "
        },
        {
            "id": 3447,
            "parent_id": 775,
            "english": "2000 ml. ",
            "thai": "2000 มล. "
        },
        {
            "id": 3448,
            "parent_id": 775,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3449,
            "parent_id": 776,
            "english": "Chef’s Knife",
            "thai": "มีดเซฟ"
        },
        {
            "id": 3450,
            "parent_id": 776,
            "english": "Cleaver Knife",
            "thai": "มีดสับ "
        },
        {
            "id": 3451,
            "parent_id": 776,
            "english": "Carving Knife",
            "thai": "มีดแล่เนื้อ"
        },
        {
            "id": 3452,
            "parent_id": 776,
            "english": "Boning Knife",
            "thai": "มีดเลาะกระดูก"
        },
        {
            "id": 3453,
            "parent_id": 776,
            "english": "Filleting Knife",
            "thai": "มีดแล่ปลา"
        },
        {
            "id": 3454,
            "parent_id": 776,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3455,
            "parent_id": 777,
            "english": "Stainless Steel",
            "thai": "สเตนเลสสตีล "
        },
        {
            "id": 3456,
            "parent_id": 777,
            "english": "High Carbon Steel",
            "thai": "เหล็กไฮคาร์บอน"
        },
        {
            "id": 3457,
            "parent_id": 777,
            "english": "Ceramic",
            "thai": "เซรามิก"
        },
        {
            "id": 3458,
            "parent_id": 778,
            "english": "Mesh Sieve",
            "thai": "กระชอนแบบตาข่ายสาน"
        },
        {
            "id": 3459,
            "parent_id": 778,
            "english": "Perforated Sieve",
            "thai": "กระชอนแบบเจาะรู"
        },
        {
            "id": 3460,
            "parent_id": 778,
            "english": "Stainless Steel Sieve",
            "thai": "กระชอนสเตนเลส"
        },
        {
            "id": 3461,
            "parent_id": 778,
            "english": "Fluorine Resin Sieve",
            "thai": "กระชอนฟลูออรีนเรซิ่น"
        },
        {
            "id": 3462,
            "parent_id": 778,
            "english": "PVC Sieve",
            "thai": "กระชอนพีวีซี "
        },
        {
            "id": 3463,
            "parent_id": 778,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3464,
            "parent_id": 779,
            "english": "Aluminum",
            "thai": "อลูมิเนียม"
        },
        {
            "id": 3465,
            "parent_id": 779,
            "english": "Stainless Steel",
            "thai": "เหล็กสเตนเลส"
        },
        {
            "id": 3466,
            "parent_id": 779,
            "english": "Composite",
            "thai": "เหล็กผสม"
        },
        {
            "id": 3467,
            "parent_id": 779,
            "english": "Titanium",
            "thai": "ไททาเนียม"
        },
        {
            "id": 3468,
            "parent_id": 779,
            "english": "Plastic",
            "thai": "พลาสติก"
        },
        {
            "id": 3469,
            "parent_id": 779,
            "english": "others",
            "thai": "อื่น ๆ"
        },
        {
            "id": 3470,
            "parent_id": 780,
            "english": "aluminum ",
            "thai": "อลูมิเนียม"
        },
        {
            "id": 3471,
            "parent_id": 780,
            "english": "stainless steel ",
            "thai": "สแตนเลส"
        },
        {
            "id": 3472,
            "parent_id": 780,
            "english": "enamel ",
            "thai": "เคลือบ"
        },
        {
            "id": 3473,
            "parent_id": 780,
            "english": "iron ",
            "thai": "เหล็ก"
        },
        {
            "id": 3474,
            "parent_id": 780,
            "english": "teflon ",
            "thai": "เทฟลอน"
        },
        {
            "id": 3475,
            "parent_id": 781,
            "english": "Chinese Ladles, Turner, ladle",
            "thai": "ตะบวย ตะหลิว ทัพพี"
        },
        {
            "id": 3476,
            "parent_id": 781,
            "english": "Tongs",
            "thai": "ที่คีบ"
        },
        {
            "id": 3477,
            "parent_id": 781,
            "english": "Cutting",
            "thai": "เขียง"
        },
        {
            "id": 3478,
            "parent_id": 781,
            "english": "Squeezer",
            "thai": "ที่คั้นสัม,มะนาว"
        },
        {
            "id": 3479,
            "parent_id": 781,
            "english": "Grates",
            "thai": "ตะแกรง"
        },
        {
            "id": 3480,
            "parent_id": 781,
            "english": "others",
            "thai": "อื่น ๆ"
        },
        {
            "id": 3481,
            "parent_id": 782,
            "english": "Aluminum",
            "thai": "อลูมิเนียม"
        },
        {
            "id": 3482,
            "parent_id": 782,
            "english": "Stainless Steel",
            "thai": "เหล็กสเตนเลส"
        },
        {
            "id": 3483,
            "parent_id": 782,
            "english": "Composite",
            "thai": "เหล็กผสม"
        },
        {
            "id": 3484,
            "parent_id": 782,
            "english": "Titanium",
            "thai": "ไททาเนียม"
        },
        {
            "id": 3485,
            "parent_id": 782,
            "english": "Plastic",
            "thai": "พลาสติก"
        },
        {
            "id": 3486,
            "parent_id": 782,
            "english": "others",
            "thai": "อื่น ๆ"
        },
        {
            "id": 3487,
            "parent_id": 783,
            "english": "Jigger",
            "thai": "จิ๊กเกอร์"
        },
        {
            "id": 3488,
            "parent_id": 783,
            "english": "shaker",
            "thai": "เชคเกอร์"
        },
        {
            "id": 3489,
            "parent_id": 783,
            "english": "Hawthorne strainer",
            "thai": "ที่กรองน้ำแข็ง"
        },
        {
            "id": 3490,
            "parent_id": 783,
            "english": "Bar spoon",
            "thai": "ช้อนบาร์ "
        },
        {
            "id": 3491,
            "parent_id": 783,
            "english": "Juicer",
            "thai": "ที่คั้นน้ำผลไม้"
        },
        {
            "id": 3492,
            "parent_id": 783,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3493,
            "parent_id": 784,
            "english": "plate, bowl, cup",
            "thai": "จาน ชาม ถ้วย"
        },
        {
            "id": 3494,
            "parent_id": 784,
            "english": "spoon, fork, chopsticks",
            "thai": "ช้อน ส้อม ตะเกียบ "
        },
        {
            "id": 3495,
            "parent_id": 784,
            "english": "pepper and salt , Seasoning set",
            "thai": "ขวดพริกไทย ขวดเกลือ ชุดเครื่องปรุง"
        },
        {
            "id": 3496,
            "parent_id": 784,
            "english": "Water Jug",
            "thai": "เหยือกน้ำ "
        },
        {
            "id": 3497,
            "parent_id": 784,
            "english": "Teapot Set",
            "thai": "ชุดกาน้ำชา "
        },
        {
            "id": 3498,
            "parent_id": 784,
            "english": "others",
            "thai": "อื่น ๆ"
        },
        {
            "id": 3499,
            "parent_id": 785,
            "english": "ceramic",
            "thai": "เซรามิค"
        },
        {
            "id": 3500,
            "parent_id": 785,
            "english": "plastic",
            "thai": "พลาสติก "
        },
        {
            "id": 3501,
            "parent_id": 785,
            "english": "Stainless Steel",
            "thai": "เหล็กสเตนเลส"
        },
        {
            "id": 3502,
            "parent_id": 785,
            "english": "glass",
            "thai": "แก้ว "
        },
        {
            "id": 3503,
            "parent_id": 785,
            "english": "Aluminum",
            "thai": "อลูมิเนียม"
        },
        {
            "id": 3504,
            "parent_id": 785,
            "english": "others",
            "thai": "อื่น ๆ"
        },
        {
            "id": 3505,
            "parent_id": 786,
            "english": "iPhone",
            "thai": "iPhone"
        },
        {
            "id": 3506,
            "parent_id": 786,
            "english": "Samsung",
            "thai": "Samsung"
        },
        {
            "id": 3507,
            "parent_id": 786,
            "english": "Vivo",
            "thai": "Vivo"
        },
        {
            "id": 3508,
            "parent_id": 786,
            "english": "OPPO",
            "thai": "OPPO"
        },
        {
            "id": 3509,
            "parent_id": 786,
            "english": "Xiaomi",
            "thai": "Xiaomi"
        },
        {
            "id": 3510,
            "parent_id": 786,
            "english": "others",
            "thai": "อื่่นๆ"
        },
        {
            "id": 3511,
            "parent_id": 787,
            "english": "64 GB",
            "thai": "65 GB"
        },
        {
            "id": 3512,
            "parent_id": 787,
            "english": "128GB",
            "thai": "128GB"
        },
        {
            "id": 3513,
            "parent_id": 787,
            "english": "256GB",
            "thai": "256GB"
        },
        {
            "id": 3514,
            "parent_id": 787,
            "english": "512GB",
            "thai": "512GB"
        },
        {
            "id": 3515,
            "parent_id": 787,
            "english": "1T",
            "thai": "1T"
        },
        {
            "id": 3516,
            "parent_id": 787,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3517,
            "parent_id": 788,
            "english": "Android",
            "thai": "Android"
        },
        {
            "id": 3518,
            "parent_id": 788,
            "english": "IOS",
            "thai": "IOS"
        },
        {
            "id": 3519,
            "parent_id": 789,
            "english": "iPhone",
            "thai": "iPhone"
        },
        {
            "id": 3520,
            "parent_id": 789,
            "english": "Samsung",
            "thai": "Samsung"
        },
        {
            "id": 3521,
            "parent_id": 789,
            "english": "Vivo",
            "thai": "Vivo"
        },
        {
            "id": 3522,
            "parent_id": 789,
            "english": "OPPO",
            "thai": "OPPO"
        },
        {
            "id": 3523,
            "parent_id": 789,
            "english": "Xiaomi",
            "thai": "Xiaomi"
        },
        {
            "id": 3524,
            "parent_id": 789,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3525,
            "parent_id": 790,
            "english": "64 GB",
            "thai": "65 GB"
        },
        {
            "id": 3526,
            "parent_id": 790,
            "english": "128GB",
            "thai": "128GB"
        },
        {
            "id": 3527,
            "parent_id": 790,
            "english": "256GB",
            "thai": "256GB"
        },
        {
            "id": 3528,
            "parent_id": 790,
            "english": "512GB",
            "thai": "512GB"
        },
        {
            "id": 3529,
            "parent_id": 790,
            "english": "1T",
            "thai": "1T"
        },
        {
            "id": 3530,
            "parent_id": 790,
            "english": "others",
            "thai": "อื่นๆ "
        },
        {
            "id": 3531,
            "parent_id": 791,
            "english": "Android",
            "thai": "Android"
        },
        {
            "id": 3532,
            "parent_id": 791,
            "english": "IOS",
            "thai": "IOS"
        },
        {
            "id": 3533,
            "parent_id": 792,
            "english": "daily",
            "thai": "รายวัน"
        },
        {
            "id": 3534,
            "parent_id": 792,
            "english": "monthly",
            "thai": "รายเดือน"
        },
        {
            "id": 3535,
            "parent_id": 793,
            "english": "-",
            "thai": "-"
        },
        {
            "id": 3536,
            "parent_id": 794,
            "english": "-",
            "thai": "-"
        },
        {
            "id": 3537,
            "parent_id": 795,
            "english": "-",
            "thai": "-"
        },
        {
            "id": 3538,
            "parent_id": 796,
            "english": "-",
            "thai": "-"
        },
        {
            "id": 3539,
            "parent_id": 797,
            "english": "-",
            "thai": "-"
        },
        {
            "id": 3540,
            "parent_id": 798,
            "english": "-",
            "thai": "-"
        },
        {
            "id": 3541,
            "parent_id": 799,
            "english": "ICOM",
            "thai": "ICOM"
        },
        {
            "id": 3542,
            "parent_id": 799,
            "english": "SPENDER",
            "thai": "SPENDER"
        },
        {
            "id": 3543,
            "parent_id": 799,
            "english": "Xiaomi",
            "thai": "Xiaomi"
        },
        {
            "id": 3544,
            "parent_id": 799,
            "english": "SPENDER",
            "thai": "SPENDER"
        },
        {
            "id": 3545,
            "parent_id": 799,
            "english": "COMMANDER",
            "thai": "COMMANDER"
        },
        {
            "id": 3546,
            "parent_id": 799,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3547,
            "parent_id": 800,
            "english": "28.000 - 29.70 MHz",
            "thai": "28.000 - 29.70 MHz"
        },
        {
            "id": 3548,
            "parent_id": 800,
            "english": "50 - 54 MHz",
            "thai": "51 - 54 MHz"
        },
        {
            "id": 3549,
            "parent_id": 800,
            "english": "144 - 148 MHz",
            "thai": "145 - 148 MHz"
        },
        {
            "id": 3550,
            "parent_id": 800,
            "english": "430 - 440 MHz",
            "thai": "431 - 440 MHz"
        },
        {
            "id": 3551,
            "parent_id": 800,
            "english": "1240 - 1300 MHz",
            "thai": "1241 - 1300 MHz"
        },
        {
            "id": 3552,
            "parent_id": 800,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3553,
            "parent_id": 801,
            "english": "1100mAh",
            "thai": "1100mAh"
        },
        {
            "id": 3554,
            "parent_id": 801,
            "english": "1350mAh",
            "thai": "1350mAh"
        },
        {
            "id": 3555,
            "parent_id": 801,
            "english": "2190mAh",
            "thai": "2190mAh"
        },
        {
            "id": 3556,
            "parent_id": 801,
            "english": "2,250 mAh",
            "thai": "2,250 mAh"
        },
        {
            "id": 3557,
            "parent_id": 801,
            "english": "3,100mAh",
            "thai": "3,100mAh"
        },
        {
            "id": 3558,
            "parent_id": 801,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3559,
            "parent_id": 802,
            "english": "Carter's",
            "thai": "Carter's"
        },
        {
            "id": 3560,
            "parent_id": 802,
            "english": "Baby Gap",
            "thai": "Baby Gap"
        },
        {
            "id": 3561,
            "parent_id": 802,
            "english": "Gymboree",
            "thai": "Gymboree"
        },
        {
            "id": 3562,
            "parent_id": 802,
            "english": "Mini Boden",
            "thai": "Mini Boden"
        },
        {
            "id": 3563,
            "parent_id": 802,
            "english": "H&M Baby",
            "thai": "H&M Baby"
        },
        {
            "id": 3564,
            "parent_id": 802,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3565,
            "parent_id": 803,
            "english": "0-1 years old",
            "thai": "0 - 1 ปี"
        },
        {
            "id": 3566,
            "parent_id": 803,
            "english": "1-4 years old",
            "thai": "1 - 4 ปี"
        },
        {
            "id": 3567,
            "parent_id": 804,
            "english": "Girl",
            "thai": "เด็กผู้หญิง"
        },
        {
            "id": 3568,
            "parent_id": 804,
            "english": "Boy",
            "thai": "เด็กผู้ชาย"
        },
        {
            "id": 3569,
            "parent_id": 805,
            "english": "60 CM",
            "thai": "60 CM"
        },
        {
            "id": 3570,
            "parent_id": 805,
            "english": "70 CM",
            "thai": "70 CM"
        },
        {
            "id": 3571,
            "parent_id": 805,
            "english": "80 CM",
            "thai": "80 CM"
        },
        {
            "id": 3572,
            "parent_id": 805,
            "english": "90 CM",
            "thai": "90 CM"
        },
        {
            "id": 3573,
            "parent_id": 805,
            "english": "100 CM",
            "thai": "100 CM"
        },
        {
            "id": 3574,
            "parent_id": 805,
            "english": "others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3575,
            "parent_id": 806,
            "english": "White",
            "thai": "สีขาว"
        },
        {
            "id": 3576,
            "parent_id": 806,
            "english": "Pink",
            "thai": "สีชมพู"
        },
        {
            "id": 3577,
            "parent_id": 806,
            "english": "Beige",
            "thai": "สีเบจ"
        },
        {
            "id": 3578,
            "parent_id": 806,
            "english": "Blue",
            "thai": "สีฟ้า"
        },
        {
            "id": 3579,
            "parent_id": 806,
            "english": "Orange",
            "thai": "สีส้ม"
        },
        {
            "id": 3580,
            "parent_id": 806,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3581,
            "parent_id": 807,
            "english": "Enfant",
            "thai": "Enfant"
        },
        {
            "id": 3582,
            "parent_id": 807,
            "english": "Disney",
            "thai": "Disney"
        },
        {
            "id": 3583,
            "parent_id": 807,
            "english": "GAP",
            "thai": "GAP"
        },
        {
            "id": 3584,
            "parent_id": 807,
            "english": "H&M",
            "thai": "H&M"
        },
        {
            "id": 3585,
            "parent_id": 807,
            "english": "Uniqlo",
            "thai": "Uniqlo"
        },
        {
            "id": 3586,
            "parent_id": 807,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3587,
            "parent_id": 808,
            "english": "5-6 years old",
            "thai": "5 - 6 ปี"
        },
        {
            "id": 3588,
            "parent_id": 808,
            "english": "7- 8years old",
            "thai": "7- 8 ปี"
        },
        {
            "id": 3589,
            "parent_id": 808,
            "english": "9 and up",
            "thai": "9 ปีขึ้นไป"
        },
        {
            "id": 3590,
            "parent_id": 809,
            "english": "Girl",
            "thai": "เด็กผู้หญิง"
        },
        {
            "id": 3591,
            "parent_id": 809,
            "english": "Boy",
            "thai": "เด็กผู้ชาย"
        },
        {
            "id": 3592,
            "parent_id": 810,
            "english": "100 CM",
            "thai": "100 CM"
        },
        {
            "id": 3593,
            "parent_id": 810,
            "english": "110 CM",
            "thai": "110 CM"
        },
        {
            "id": 3594,
            "parent_id": 810,
            "english": "120 CM",
            "thai": "120 CM"
        },
        {
            "id": 3595,
            "parent_id": 810,
            "english": "130 CM",
            "thai": "130 CM"
        },
        {
            "id": 3596,
            "parent_id": 810,
            "english": "140 CM",
            "thai": "140 CM"
        },
        {
            "id": 3597,
            "parent_id": 810,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3598,
            "parent_id": 811,
            "english": "Blue",
            "thai": "สีน้ำเงิน"
        },
        {
            "id": 3599,
            "parent_id": 811,
            "english": "Pink",
            "thai": "สีชมพู"
        },
        {
            "id": 3600,
            "parent_id": 811,
            "english": "White",
            "thai": "สีขาว"
        },
        {
            "id": 3601,
            "parent_id": 811,
            "english": "Brown",
            "thai": "สีน้ำตาล"
        },
        {
            "id": 3602,
            "parent_id": 811,
            "english": "Red",
            "thai": "สีแดง"
        },
        {
            "id": 3603,
            "parent_id": 812,
            "english": "Women",
            "thai": "ผู้หญิง"
        },
        {
            "id": 3604,
            "parent_id": 812,
            "english": "Men",
            "thai": "ผู้ชาย"
        },
        {
            "id": 3605,
            "parent_id": 812,
            "english": "Unisex",
            "thai": "ไม่จำกัดเพศ"
        },
        {
            "id": 3606,
            "parent_id": 813,
            "english": "Nike",
            "thai": "Nike"
        },
        {
            "id": 3607,
            "parent_id": 813,
            "english": "New Balance",
            "thai": "New Balance"
        },
        {
            "id": 3608,
            "parent_id": 813,
            "english": "Adidas",
            "thai": "Adidas"
        },
        {
            "id": 3609,
            "parent_id": 813,
            "english": "Skechers",
            "thai": "Skechers"
        },
        {
            "id": 3610,
            "parent_id": 813,
            "english": "Disney",
            "thai": "Disney"
        },
        {
            "id": 3611,
            "parent_id": 813,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3612,
            "parent_id": 814,
            "english": "3 UK",
            "thai": "3 UK"
        },
        {
            "id": 3613,
            "parent_id": 814,
            "english": "4 UK",
            "thai": "4 UK"
        },
        {
            "id": 3614,
            "parent_id": 814,
            "english": "5 UK",
            "thai": "5 UK"
        },
        {
            "id": 3615,
            "parent_id": 814,
            "english": "6 UK",
            "thai": "6 UK"
        },
        {
            "id": 3616,
            "parent_id": 814,
            "english": "7 UK",
            "thai": "7 UK"
        },
        {
            "id": 3617,
            "parent_id": 814,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3618,
            "parent_id": 815,
            "english": "pink",
            "thai": "สีชมพู"
        },
        {
            "id": 3619,
            "parent_id": 815,
            "english": "purple",
            "thai": "สีม่วง"
        },
        {
            "id": 3620,
            "parent_id": 815,
            "english": "red",
            "thai": "สีแดง"
        },
        {
            "id": 3621,
            "parent_id": 815,
            "english": "white",
            "thai": "สีขาว"
        },
        {
            "id": 3622,
            "parent_id": 815,
            "english": "black",
            "thai": "สีดำ"
        },
        {
            "id": 3623,
            "parent_id": 815,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3624,
            "parent_id": 816,
            "english": "Maternity Outerwear",
            "thai": "ชุดคลุมท้อง"
        },
        {
            "id": 3625,
            "parent_id": 816,
            "english": "Maternity Pants",
            "thai": "กางเกงท้อง"
        },
        {
            "id": 3626,
            "parent_id": 816,
            "english": "Maternity Dresses",
            "thai": "เดรสท้อง"
        },
        {
            "id": 3627,
            "parent_id": 817,
            "english": "S",
            "thai": "S"
        },
        {
            "id": 3628,
            "parent_id": 817,
            "english": "M",
            "thai": "M"
        },
        {
            "id": 3629,
            "parent_id": 817,
            "english": "L",
            "thai": "L"
        },
        {
            "id": 3630,
            "parent_id": 817,
            "english": "XL",
            "thai": "XL"
        },
        {
            "id": 3631,
            "parent_id": 817,
            "english": "XXL",
            "thai": "XXL"
        },
        {
            "id": 3632,
            "parent_id": 817,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3633,
            "parent_id": 818,
            "english": "grey",
            "thai": "เทา"
        },
        {
            "id": 3634,
            "parent_id": 818,
            "english": "black",
            "thai": "ดำ"
        },
        {
            "id": 3635,
            "parent_id": 818,
            "english": "Blue",
            "thai": "ฟ้า"
        },
        {
            "id": 3636,
            "parent_id": 818,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3637,
            "parent_id": 819,
            "english": "Baby crib",
            "thai": "เตียงเด็ก"
        },
        {
            "id": 3638,
            "parent_id": 819,
            "english": "Car seat",
            "thai": "คาร์ซีท"
        },
        {
            "id": 3639,
            "parent_id": 819,
            "english": "Breast pump",
            "thai": "เครื่องปั้มนม"
        },
        {
            "id": 3640,
            "parent_id": 819,
            "english": "Bottle warmer",
            "thai": "เครื่องนึ่งขวดนม"
        },
        {
            "id": 3641,
            "parent_id": 819,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3642,
            "parent_id": 820,
            "english": "activity tiger",
            "thai": "เสื่อกิจกรรม"
        },
        {
            "id": 3643,
            "parent_id": 820,
            "english": "Educational toys for preschoolers",
            "thai": "ของเล่นเสริมทักษะก่อนวัยเรียน"
        },
        {
            "id": 3644,
            "parent_id": 820,
            "english": "a toy with a music player",
            "thai": "ของเล่นที่มีเสียงคนตรี"
        },
        {
            "id": 3645,
            "parent_id": 820,
            "english": "blocks and toys",
            "thai": "บล็อคและของเล่นตัวต่อ"
        },
        {
            "id": 3646,
            "parent_id": 820,
            "english": "ball",
            "thai": "ลูกบอล"
        },
        {
            "id": 3647,
            "parent_id": 820,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3648,
            "parent_id": 821,
            "english": "Honda",
            "thai": "ฮอนด้า"
        },
        {
            "id": 3649,
            "parent_id": 821,
            "english": "Yamaha",
            "thai": "ยามาฮ่า"
        },
        {
            "id": 3650,
            "parent_id": 821,
            "english": "Kawasaki",
            "thai": "คาวาซากิ"
        },
        {
            "id": 3651,
            "parent_id": 821,
            "english": "Suzuki",
            "thai": "ซูซูกิ"
        },
        {
            "id": 3652,
            "parent_id": 821,
            "english": "Vespa",
            "thai": "เวสป้า"
        },
        {
            "id": 3653,
            "parent_id": 821,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3654,
            "parent_id": 822,
            "english": "Manual",
            "thai": "เกียร์ธรรมดา "
        },
        {
            "id": 3655,
            "parent_id": 822,
            "english": "Automatic",
            "thai": "เกียร์ออโต้ "
        },
        {
            "id": 3656,
            "parent_id": 823,
            "english": "Red",
            "thai": "แดง"
        },
        {
            "id": 3657,
            "parent_id": 823,
            "english": "Black",
            "thai": "ดำ"
        },
        {
            "id": 3658,
            "parent_id": 823,
            "english": "White",
            "thai": "ขาว"
        },
        {
            "id": 3659,
            "parent_id": 823,
            "english": "Green",
            "thai": "เขียว"
        },
        {
            "id": 3660,
            "parent_id": 823,
            "english": "Pink",
            "thai": "ชมพู"
        },
        {
            "id": 3661,
            "parent_id": 823,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3662,
            "parent_id": 824,
            "english": 2022,
            "thai": 2022
        },
        {
            "id": 3663,
            "parent_id": 824,
            "english": 2021,
            "thai": 2021
        },
        {
            "id": 3664,
            "parent_id": 824,
            "english": 2020,
            "thai": 2020
        },
        {
            "id": 3665,
            "parent_id": 824,
            "english": 2019,
            "thai": 2019
        },
        {
            "id": 3666,
            "parent_id": 824,
            "english": 2018,
            "thai": 2018
        },
        {
            "id": 3667,
            "parent_id": 824,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3668,
            "parent_id": 825,
            "english": "110cc",
            "thai": "110cc"
        },
        {
            "id": 3669,
            "parent_id": 825,
            "english": "125cc",
            "thai": "125cc"
        },
        {
            "id": 3670,
            "parent_id": 825,
            "english": "150cc",
            "thai": "150cc"
        },
        {
            "id": 3671,
            "parent_id": 825,
            "english": "200cc",
            "thai": "200cc"
        },
        {
            "id": 3672,
            "parent_id": 825,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3673,
            "parent_id": 826,
            "english": "Yamaha",
            "thai": "ยามาฮ่า"
        },
        {
            "id": 3674,
            "parent_id": 826,
            "english": "Honda",
            "thai": "ฮอนด้า"
        },
        {
            "id": 3675,
            "parent_id": 826,
            "english": "Suzuki",
            "thai": "ซูซูกิ"
        },
        {
            "id": 3676,
            "parent_id": 826,
            "english": "Kawasaki",
            "thai": "คาวาซากิ"
        },
        {
            "id": 3677,
            "parent_id": 826,
            "english": "Xiaomi",
            "thai": "เสี่ยวมี่"
        },
        {
            "id": 3678,
            "parent_id": 826,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3679,
            "parent_id": 827,
            "english": "Manual",
            "thai": "เกียร์ธรรมดา "
        },
        {
            "id": 3680,
            "parent_id": 827,
            "english": "Automatic",
            "thai": "เกียร์ออโต้ "
        },
        {
            "id": 3681,
            "parent_id": 828,
            "english": "Red",
            "thai": "แดง"
        },
        {
            "id": 3682,
            "parent_id": 828,
            "english": "Black",
            "thai": "ดำ"
        },
        {
            "id": 3683,
            "parent_id": 828,
            "english": "White",
            "thai": "ขาว"
        },
        {
            "id": 3684,
            "parent_id": 828,
            "english": "Green",
            "thai": "เขียว"
        },
        {
            "id": 3685,
            "parent_id": 828,
            "english": "Pink",
            "thai": "ชมพู"
        },
        {
            "id": 3686,
            "parent_id": 828,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3687,
            "parent_id": 829,
            "english": 2022,
            "thai": 2022
        },
        {
            "id": 3688,
            "parent_id": 829,
            "english": 2021,
            "thai": 2021
        },
        {
            "id": 3689,
            "parent_id": 829,
            "english": 2020,
            "thai": 2020
        },
        {
            "id": 3690,
            "parent_id": 829,
            "english": 2019,
            "thai": 2019
        },
        {
            "id": 3691,
            "parent_id": 829,
            "english": 2018,
            "thai": 2018
        },
        {
            "id": 3692,
            "parent_id": 829,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3693,
            "parent_id": 830,
            "english": "110cc",
            "thai": "110cc"
        },
        {
            "id": 3694,
            "parent_id": 830,
            "english": "125cc",
            "thai": "125cc"
        },
        {
            "id": 3695,
            "parent_id": 830,
            "english": "150cc",
            "thai": "150cc"
        },
        {
            "id": 3696,
            "parent_id": 830,
            "english": "200cc",
            "thai": "200cc"
        },
        {
            "id": 3697,
            "parent_id": 830,
            "english": "other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3698,
            "parent_id": 831,
            "english": "Yamaha",
            "thai": "ยามาฮ่า"
        },
        {
            "id": 3699,
            "parent_id": 831,
            "english": "Honda",
            "thai": "ฮอนด้า"
        },
        {
            "id": 3700,
            "parent_id": 831,
            "english": "Suzuki",
            "thai": "ซูซูกิ"
        },
        {
            "id": 3701,
            "parent_id": 831,
            "english": "BMW",
            "thai": "บีเอ็มดับเบิลยู"
        },
        {
            "id": 3702,
            "parent_id": 831,
            "english": "Ducati Multistrada",
            "thai": "ดูคาติ มัลติสตราด้า"
        },
        {
            "id": 3703,
            "parent_id": 831,
            "english": "Others",
            "thai": "อื่่นๆ"
        },
        {
            "id": 3704,
            "parent_id": 832,
            "english": "Manual",
            "thai": "เกียร์ธรรมดา "
        },
        {
            "id": 3705,
            "parent_id": 832,
            "english": "Automatic",
            "thai": "เกียร์ออโต้ "
        },
        {
            "id": 3706,
            "parent_id": 833,
            "english": "Red",
            "thai": "แดง"
        },
        {
            "id": 3707,
            "parent_id": 833,
            "english": "Black",
            "thai": "ดำ"
        },
        {
            "id": 3708,
            "parent_id": 833,
            "english": "White",
            "thai": "ขาว"
        },
        {
            "id": 3709,
            "parent_id": 833,
            "english": "Green",
            "thai": "เขียว"
        },
        {
            "id": 3710,
            "parent_id": 833,
            "english": "Pink",
            "thai": "ชมพู"
        },
        {
            "id": 3711,
            "parent_id": 833,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3712,
            "parent_id": 834,
            "english": 2020,
            "thai": 2020
        },
        {
            "id": 3713,
            "parent_id": 834,
            "english": 2019,
            "thai": 2019
        },
        {
            "id": 3714,
            "parent_id": 834,
            "english": 2018,
            "thai": 2018
        },
        {
            "id": 3715,
            "parent_id": 834,
            "english": 2017,
            "thai": 2017
        },
        {
            "id": 3716,
            "parent_id": 834,
            "english": 2016,
            "thai": 2016
        },
        {
            "id": 3717,
            "parent_id": 834,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3718,
            "parent_id": 835,
            "english": "300cc",
            "thai": "300cc"
        },
        {
            "id": 3719,
            "parent_id": 835,
            "english": "400cc",
            "thai": "400cc"
        },
        {
            "id": 3720,
            "parent_id": 835,
            "english": "500cc",
            "thai": "500cc"
        },
        {
            "id": 3721,
            "parent_id": 835,
            "english": "600cc",
            "thai": "600cc"
        },
        {
            "id": 3722,
            "parent_id": 835,
            "english": "800cc",
            "thai": "800cc"
        },
        {
            "id": 3723,
            "parent_id": 835,
            "english": "1000cc",
            "thai": "1000cc"
        },
        {
            "id": 3724,
            "parent_id": 835,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3725,
            "parent_id": 836,
            "english": "Kazuki",
            "thai": "กาซูกิ"
        },
        {
            "id": 3726,
            "parent_id": 836,
            "english": "Tyma",
            "thai": "ไทม์มา"
        },
        {
            "id": 3727,
            "parent_id": 836,
            "english": "Taylor",
            "thai": "เทเลอร์"
        },
        {
            "id": 3728,
            "parent_id": 836,
            "english": "Martin",
            "thai": "มาร์ติน"
        },
        {
            "id": 3729,
            "parent_id": 836,
            "english": "Yamaha",
            "thai": "ยามาฮ่า"
        },
        {
            "id": 3730,
            "parent_id": 836,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3731,
            "parent_id": 837,
            "english": "Acoustic guitar",
            "thai": "กีต้าร์โปร่ง"
        },
        {
            "id": 3732,
            "parent_id": 837,
            "english": "Electric guitar",
            "thai": "กีต้าร์ไฟฟ้า"
        },
        {
            "id": 3733,
            "parent_id": 837,
            "english": "Bass guitar",
            "thai": "เบส"
        },
        {
            "id": 3734,
            "parent_id": 837,
            "english": "Classical guitar",
            "thai": "กีตาร์คลาสสิก"
        },
        {
            "id": 3735,
            "parent_id": 837,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3736,
            "parent_id": 838,
            "english": "Soprano (21In)",
            "thai": "Soprano (21นิ้ว)"
        },
        {
            "id": 3737,
            "parent_id": 838,
            "english": "Concert (23In)",
            "thai": "Concert (23นิ้ว)"
        },
        {
            "id": 3738,
            "parent_id": 838,
            "english": "Tenor(26In)",
            "thai": "Tenor(26นิ้ว)"
        },
        {
            "id": 3739,
            "parent_id": 839,
            "english": "Yamaha",
            "thai": "ยามาฮ่า"
        },
        {
            "id": 3740,
            "parent_id": 839,
            "english": "Samick",
            "thai": "ซามิค"
        },
        {
            "id": 3741,
            "parent_id": 839,
            "english": "Kawai",
            "thai": "คะวาย"
        },
        {
            "id": 3742,
            "parent_id": 840,
            "english": "Grand piano",
            "thai": "แกรนด์เปียโน"
        },
        {
            "id": 3743,
            "parent_id": 840,
            "english": "Upright piano",
            "thai": "อัพไรท์เปียโน"
        },
        {
            "id": 3744,
            "parent_id": 840,
            "english": "Electric piano",
            "thai": "เปียโนไฟฟ้า"
        },
        {
            "id": 3745,
            "parent_id": 841,
            "english": "Yamaha",
            "thai": "ยามาฮ่า"
        },
        {
            "id": 3746,
            "parent_id": 841,
            "english": "Casio",
            "thai": "คาสิโอ"
        },
        {
            "id": 3747,
            "parent_id": 841,
            "english": "Roland",
            "thai": "โรแลนด์"
        },
        {
            "id": 3748,
            "parent_id": 841,
            "english": "Korg",
            "thai": "คอร์ก"
        },
        {
            "id": 3749,
            "parent_id": 842,
            "english": "Brady",
            "thai": "Brady"
        },
        {
            "id": 3750,
            "parent_id": 842,
            "english": "Mapex",
            "thai": "Mapex"
        },
        {
            "id": 3751,
            "parent_id": 842,
            "english": "Premier",
            "thai": "Premier"
        },
        {
            "id": 3752,
            "parent_id": 842,
            "english": "Remo",
            "thai": "Remo"
        },
        {
            "id": 3753,
            "parent_id": 842,
            "english": "Yamaha",
            "thai": "Yamaha"
        },
        {
            "id": 3754,
            "parent_id": 842,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3755,
            "parent_id": 843,
            "english": "Acoustic drum set",
            "thai": "กลองชุด"
        },
        {
            "id": 3756,
            "parent_id": 843,
            "english": "Electronic drum set",
            "thai": "กลองไฟฟ้า"
        },
        {
            "id": 3757,
            "parent_id": 844,
            "english": "Thai Plucked",
            "thai": "เครื่องดีด"
        },
        {
            "id": 3758,
            "parent_id": 844,
            "english": "Thai String",
            "thai": "เครื่องสี"
        },
        {
            "id": 3759,
            "parent_id": 844,
            "english": "Thai Melodic Percussion",
            "thai": "เครื่องตี"
        },
        {
            "id": 3760,
            "parent_id": 844,
            "english": "Thai Wind",
            "thai": "เครื่องเป่า"
        },
        {
            "id": 3761,
            "parent_id": 845,
            "english": "Chihuahua",
            "thai": "ชิวาวา"
        },
        {
            "id": 3762,
            "parent_id": 845,
            "english": "Pomeranian",
            "thai": "ปอมเมอเรเนียน"
        },
        {
            "id": 3763,
            "parent_id": 845,
            "english": "French bulldog",
            "thai": "เฟรนบลูด็อก "
        },
        {
            "id": 3764,
            "parent_id": 845,
            "english": "Golden retriever",
            "thai": "โกลเดินริทรีฟเวอร์ "
        },
        {
            "id": 3765,
            "parent_id": 845,
            "english": "Siberian husky",
            "thai": "ไซบีเรียน"
        },
        {
            "id": 3766,
            "parent_id": 845,
            "english": "other",
            "thai": "อื่น ๆ"
        },
        {
            "id": 3767,
            "parent_id": 846,
            "english": "small",
            "thai": "เล็ก"
        },
        {
            "id": 3768,
            "parent_id": 846,
            "english": "center",
            "thai": "กลาง"
        },
        {
            "id": 3769,
            "parent_id": 846,
            "english": "big",
            "thai": "ใหญ่"
        },
        {
            "id": 3770,
            "parent_id": 847,
            "english": "Persian",
            "thai": "เปอร์เซีย"
        },
        {
            "id": 3771,
            "parent_id": 847,
            "english": "sphynx",
            "thai": "สฟิงซ์ "
        },
        {
            "id": 3772,
            "parent_id": 847,
            "english": "Scottish Fold",
            "thai": "สก็อตติช โฟลด์"
        },
        {
            "id": 3773,
            "parent_id": 847,
            "english": "British Shorthair",
            "thai": "บริติช ชอทแฮร์"
        },
        {
            "id": 3774,
            "parent_id": 847,
            "english": "Khao Manee",
            "thai": "ขาวมณี"
        },
        {
            "id": 3775,
            "parent_id": 847,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3776,
            "parent_id": 848,
            "english": "Guppy",
            "thai": "หางนกยูง"
        },
        {
            "id": 3777,
            "parent_id": 848,
            "english": "betta",
            "thai": "กัด"
        },
        {
            "id": 3778,
            "parent_id": 848,
            "english": "Koi",
            "thai": "คราฟ"
        },
        {
            "id": 3779,
            "parent_id": 848,
            "english": "Chorakhe",
            "thai": "จระเข้"
        },
        {
            "id": 3780,
            "parent_id": 848,
            "english": "goldfish",
            "thai": "ทอง"
        },
        {
            "id": 3781,
            "parent_id": 848,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3782,
            "parent_id": 849,
            "english": "hamster",
            "thai": "แฮมเตอร์"
        },
        {
            "id": 3783,
            "parent_id": 849,
            "english": "gatsby",
            "thai": "แกสบี้"
        },
        {
            "id": 3784,
            "parent_id": 849,
            "english": "guinea pig",
            "thai": "หนูตะเภา"
        },
        {
            "id": 3785,
            "parent_id": 849,
            "english": "chinchilla",
            "thai": "ชินชิล่า "
        },
        {
            "id": 3786,
            "parent_id": 849,
            "english": "Baldwins",
            "thai": "ฮิปโปแคระ"
        },
        {
            "id": 3787,
            "parent_id": 849,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3788,
            "parent_id": 850,
            "english": "Forpus",
            "thai": "ฟอพัส "
        },
        {
            "id": 3789,
            "parent_id": 850,
            "english": "parrot",
            "thai": "นกแก้ว"
        },
        {
            "id": 3790,
            "parent_id": 850,
            "english": "Cockatiel",
            "thai": "คอกคาเทล"
        },
        {
            "id": 3791,
            "parent_id": 850,
            "english": "Lovebirds",
            "thai": "เลิฟเบิร์ด"
        },
        {
            "id": 3792,
            "parent_id": 850,
            "english": "Sun Conure",
            "thai": "ซันคอนัวร์"
        },
        {
            "id": 3793,
            "parent_id": 850,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3794,
            "parent_id": 851,
            "english": "Corn Snake",
            "thai": "ข้าวโพด"
        },
        {
            "id": 3795,
            "parent_id": 851,
            "english": "Ball Python",
            "thai": "บอลไพธ่อน"
        },
        {
            "id": 3796,
            "parent_id": 851,
            "english": "Mexican Black KingSnake",
            "thai": "แบล็คคิง, งูดำ"
        },
        {
            "id": 3797,
            "parent_id": 851,
            "english": "Rainbow Water Snake",
            "thai": "สายรุ้ง"
        },
        {
            "id": 3798,
            "parent_id": 851,
            "english": "Hognose Snake",
            "thai": "งูฮ็อกโนส, งูจมูกหมู "
        },
        {
            "id": 3799,
            "parent_id": 851,
            "english": "Other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3800,
            "parent_id": 852,
            "english": "Mushi King",
            "thai": "มูชิคิง"
        },
        {
            "id": 3801,
            "parent_id": 852,
            "english": "Hercules beetle",
            "thai": "เฮอร์คิวลีส "
        },
        {
            "id": 3802,
            "parent_id": 852,
            "english": "Atlus Bettle",
            "thai": "แอตลัส"
        },
        {
            "id": 3803,
            "parent_id": 852,
            "english": "Siamese rhinoceros beetle",
            "thai": "กว่างโซ้ง"
        },
        {
            "id": 3804,
            "parent_id": 852,
            "english": "Allomyrina dichotoma",
            "thai": "แรดญี่ปุ่น"
        },
        {
            "id": 3805,
            "parent_id": 852,
            "english": "other",
            "thai": "อื่น ๆ"
        },
        {
            "id": 3806,
            "parent_id": 853,
            "english": "pet cage",
            "thai": "กรงสัตว์เลี้ยง"
        },
        {
            "id": 3807,
            "parent_id": 853,
            "english": "Hair vacuum",
            "thai": "เครื่องดูดขน"
        },
        {
            "id": 3808,
            "parent_id": 853,
            "english": "towel",
            "thai": "แผ่นเช็ดตัวหมา-แมว"
        },
        {
            "id": 3809,
            "parent_id": 853,
            "english": "food scoop",
            "thai": "ช้อนตักอาหาร "
        },
        {
            "id": 3810,
            "parent_id": 853,
            "english": "pet nail clipper",
            "thai": "กรรไกรตัดเล็บสัตว์เลี้ยง"
        },
        {
            "id": 3811,
            "parent_id": 853,
            "english": "other",
            "thai": "อื่น ๆ"
        },
        {
            "id": 3812,
            "parent_id": 854,
            "english": "Nike",
            "thai": "Nike"
        },
        {
            "id": 3813,
            "parent_id": 854,
            "english": "Adidas",
            "thai": "Adidas"
        },
        {
            "id": 3814,
            "parent_id": 854,
            "english": "Converse",
            "thai": "Converse"
        },
        {
            "id": 3815,
            "parent_id": 854,
            "english": "Skechers",
            "thai": "Skechers"
        },
        {
            "id": 3816,
            "parent_id": 854,
            "english": "Crocs",
            "thai": "Crocs"
        },
        {
            "id": 3817,
            "parent_id": 854,
            "english": "other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3818,
            "parent_id": 855,
            "english": "ดำ black",
            "thai": "ดำ "
        },
        {
            "id": 3819,
            "parent_id": 856,
            "english": "beige",
            "thai": "เบจ"
        },
        {
            "id": 3820,
            "parent_id": 856,
            "english": "white",
            "thai": "ขาว"
        },
        {
            "id": 3821,
            "parent_id": 856,
            "english": "blue",
            "thai": "น้ำเงิน"
        },
        {
            "id": 3822,
            "parent_id": 856,
            "english": "brown",
            "thai": "น้ำตาล"
        },
        {
            "id": 3823,
            "parent_id": 856,
            "english": "other",
            "thai": "อื่น ๆ"
        },
        {
            "id": 3824,
            "parent_id": 857,
            "english": "UK 4 | EU 36 2/3 | US 5.5",
            "thai": "UK 4 | EU 36 2/3 | US 5.6"
        },
        {
            "id": 3825,
            "parent_id": 857,
            "english": "UK 4.5 | EU 37 1/3 | US 6",
            "thai": "UK 4.5 | EU 37 1/3 | US 7"
        },
        {
            "id": 3826,
            "parent_id": 857,
            "english": "UK 5 | EU 38 | US 6.5",
            "thai": "UK 5 | EU 38 | US 6.6"
        },
        {
            "id": 3827,
            "parent_id": 857,
            "english": "UK 5.5 | EU 38 2/3 | US 7",
            "thai": "UK 5.5 | EU 38 2/3 | US 8"
        },
        {
            "id": 3828,
            "parent_id": 857,
            "english": "UK 6 | EU 39 1/3 | US 7.5",
            "thai": "UK 6 | EU 39 1/3 | US 7.6"
        },
        {
            "id": 3829,
            "parent_id": 858,
            "english": "Fabric",
            "thai": "ผ้า "
        },
        {
            "id": 3830,
            "parent_id": 858,
            "english": "Synthetic",
            "thai": "หนังเทียม"
        },
        {
            "id": 3831,
            "parent_id": 858,
            "english": "Grain Leather",
            "thai": "หนังแท้"
        },
        {
            "id": 3832,
            "parent_id": 858,
            "english": "other",
            "thai": "อื่น ๆ"
        },
        {
            "id": 3833,
            "parent_id": 859,
            "english": "Adidas",
            "thai": "Adidas"
        },
        {
            "id": 3834,
            "parent_id": 859,
            "english": "Converse",
            "thai": "Converse"
        },
        {
            "id": 3835,
            "parent_id": 859,
            "english": "New Balance",
            "thai": "New Balance"
        },
        {
            "id": 3836,
            "parent_id": 859,
            "english": "Skechers",
            "thai": "Skechers"
        },
        {
            "id": 3837,
            "parent_id": 859,
            "english": "Puma",
            "thai": "Puma"
        },
        {
            "id": 3838,
            "parent_id": 859,
            "english": "other",
            "thai": "อื่นๆ"
        },
        {
            "id": 3839,
            "parent_id": 860,
            "english": "black",
            "thai": "ดำ"
        },
        {
            "id": 3840,
            "parent_id": 860,
            "english": "beige",
            "thai": "เบจ"
        },
        {
            "id": 3841,
            "parent_id": 860,
            "english": "white",
            "thai": "ขาว"
        },
        {
            "id": 3842,
            "parent_id": 860,
            "english": "blue",
            "thai": "น้ำเงิน"
        },
        {
            "id": 3843,
            "parent_id": 860,
            "english": "brown",
            "thai": "น้ำตาล"
        },
        {
            "id": 3844,
            "parent_id": 860,
            "english": "other",
            "thai": "อื่น ๆ "
        },
        {
            "id": 3845,
            "parent_id": 861,
            "english": "UK 4.5 | EU 37 1/3 | US 5",
            "thai": "UK 4.5 | EU 37 1/3 | US 6"
        },
        {
            "id": 3846,
            "parent_id": 861,
            "english": "UK 5 | EU 38 | US 5.5",
            "thai": "UK 5 | EU 38 | US 5.6"
        },
        {
            "id": 3847,
            "parent_id": 861,
            "english": "UK 5.5 | EU 38 2/3 | US 6",
            "thai": "UK 5.5 | EU 38 2/3 | US 7"
        },
        {
            "id": 3848,
            "parent_id": 861,
            "english": "UK 6 | EU 39 1/3 | US 6.5",
            "thai": "UK 6 | EU 39 1/3 | US 6.6"
        },
        {
            "id": 3849,
            "parent_id": 861,
            "english": "UK 6.5 | EU 40 | US 7",
            "thai": "UK 6.5 | EU 40 | US 8"
        },
        {
            "id": 3850,
            "parent_id": 862,
            "english": "High-top sneakers",
            "thai": "รองเท้าหุ้มข้อทรงสูง"
        },
        {
            "id": 3851,
            "parent_id": 862,
            "english": "Closed-toe shoes",
            "thai": "รองเท้าหุ้มส้น "
        },
        {
            "id": 3852,
            "parent_id": 862,
            "english": "Sneakers",
            "thai": "รองเท้าผ้าใบ "
        },
        {
            "id": 3853,
            "parent_id": 862,
            "english": "Sandals",
            "thai": "รองเท้าแตะที่มีสายรัด"
        },
        {
            "id": 3854,
            "parent_id": 862,
            "english": "SLIP-ON",
            "thai": "รองเท้าผ้าใบแบบสวม"
        },
        {
            "id": 3855,
            "parent_id": 862,
            "english": " other",
            "thai": "อื่น ๆ"
        },
        {
            "id": 3856,
            "parent_id": 863,
            "english": "Fabric",
            "thai": "ผ้า "
        },
        {
            "id": 3857,
            "parent_id": 863,
            "english": "Synthetic",
            "thai": "หนังเทียม"
        },
        {
            "id": 3858,
            "parent_id": 863,
            "english": "Grain Leather",
            "thai": "หนังแท้"
        },
        {
            "id": 3859,
            "parent_id": 863,
            "english": "other",
            "thai": "อื่น ๆ"
        },
        {
            "id": 3860,
            "parent_id": 864,
            "english": "shoe pad",
            "thai": "แผ่นรองเท้า "
        },
        {
            "id": 3861,
            "parent_id": 864,
            "english": "shoe sheet",
            "thai": "แผ่นกันสึก"
        },
        {
            "id": 3862,
            "parent_id": 864,
            "english": "other",
            "thai": "อื่น ๆ"
        },
        {
            "id": 3863,
            "parent_id": 865,
            "english": "360fitness",
            "thai": "360fitness"
        },
        {
            "id": 3864,
            "parent_id": 865,
            "english": "G-Sports",
            "thai": "G-Sports"
        },
        {
            "id": 3865,
            "parent_id": 865,
            "english": "Horizon",
            "thai": "Horizon"
        },
        {
            "id": 3866,
            "parent_id": 865,
            "english": "Johnson",
            "thai": "Johnson"
        },
        {
            "id": 3867,
            "parent_id": 865,
            "english": "Jacky Fitness",
            "thai": "Jacky Fitness"
        },
        {
            "id": 3868,
            "parent_id": 866,
            "english": "Thaisport",
            "thai": "ไทยสปอร์ต "
        },
        {
            "id": 3869,
            "parent_id": 866,
            "english": "Salomon",
            "thai": "ซาลอมอน "
        },
        {
            "id": 3870,
            "parent_id": 866,
            "english": "FBT",
            "thai": "FBT"
        },
        {
            "id": 3871,
            "parent_id": 866,
            "english": "Jason",
            "thai": "เจสัน "
        },
        {
            "id": 3872,
            "parent_id": 866,
            "english": "360fitness",
            "thai": "360ฟิตเนส "
        },
        {
            "id": 3873,
            "parent_id": 867,
            "english": "Adidas",
            "thai": "อาดิดาส "
        },
        {
            "id": 3874,
            "parent_id": 867,
            "english": "Grandsport",
            "thai": "แกรนด์สปอร์ต "
        },
        {
            "id": 3875,
            "parent_id": 867,
            "english": "Nike",
            "thai": "ไนกี้ "
        },
        {
            "id": 3876,
            "parent_id": 867,
            "english": "Under Armour",
            "thai": "อันเดอร์อาร์มอร์ "
        },
        {
            "id": 3877,
            "parent_id": 867,
            "english": "Puma",
            "thai": "พูม่า "
        },
        {
            "id": 3878,
            "parent_id": 867,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3879,
            "parent_id": 868,
            "english": "Shirt",
            "thai": "เสื้อ "
        },
        {
            "id": 3880,
            "parent_id": 868,
            "english": "Pants",
            "thai": "กางเกง "
        },
        {
            "id": 3881,
            "parent_id": 868,
            "english": "Football uniform",
            "thai": "ชุดฟุตบอล "
        },
        {
            "id": 3882,
            "parent_id": 868,
            "english": "Cycling outfit",
            "thai": "ชุดปั่นจักรยาน "
        },
        {
            "id": 3883,
            "parent_id": 868,
            "english": "Swimsuit",
            "thai": "ชุดว่ายน้ำ "
        },
        {
            "id": 3884,
            "parent_id": 869,
            "english": "S",
            "thai": "S"
        },
        {
            "id": 3885,
            "parent_id": 869,
            "english": "M",
            "thai": "M"
        },
        {
            "id": 3886,
            "parent_id": 869,
            "english": "L",
            "thai": "L"
        },
        {
            "id": 3887,
            "parent_id": 869,
            "english": "XL",
            "thai": "XL"
        },
        {
            "id": 3888,
            "parent_id": 869,
            "english": "XXL",
            "thai": "XXL"
        },
        {
            "id": 3889,
            "parent_id": 870,
            "english": "Asics",
            "thai": "Asics"
        },
        {
            "id": 3890,
            "parent_id": 870,
            "english": "Reebok",
            "thai": "Reebok"
        },
        {
            "id": 3891,
            "parent_id": 870,
            "english": "Nike",
            "thai": "ไนกี้"
        },
        {
            "id": 3892,
            "parent_id": 870,
            "english": "Puma",
            "thai": "พูม่า"
        },
        {
            "id": 3893,
            "parent_id": 870,
            "english": "New Balance",
            "thai": "นิวบาลานซ์ "
        },
        {
            "id": 3894,
            "parent_id": 871,
            "english": "Running shoes",
            "thai": "รองเท้าวิ่ง "
        },
        {
            "id": 3895,
            "parent_id": 871,
            "english": "Basketball shoes",
            "thai": "รองเท้าบาสเกตบอล "
        },
        {
            "id": 3896,
            "parent_id": 871,
            "english": "Skateboarding shoes",
            "thai": "รองเท้าสเก็ตบอร์ด "
        },
        {
            "id": 3897,
            "parent_id": 871,
            "english": "Golf shoes",
            "thai": "รองเท้ากอล์ฟ "
        },
        {
            "id": 3898,
            "parent_id": 871,
            "english": "Football/soccer shoes",
            "thai": "รองเท้าฟุตซอล "
        },
        {
            "id": 3899,
            "parent_id": 871,
            "english": "Others",
            "thai": "อื่นๆ"
        },
        {
            "id": 3900,
            "parent_id": 872,
            "english": "Women",
            "thai": "ผู้หญิง "
        },
        {
            "id": 3901,
            "parent_id": 872,
            "english": "Men",
            "thai": "ผู้ชาย "
        },
        {
            "id": 3902,
            "parent_id": 873,
            "english": "Black",
            "thai": "ดำ "
        },
        {
            "id": 3903,
            "parent_id": 873,
            "english": "White",
            "thai": "ขาว "
        },
        {
            "id": 3904,
            "parent_id": 873,
            "english": "Gray",
            "thai": "เทา "
        },
        {
            "id": 3905,
            "parent_id": 873,
            "english": "Navy blue",
            "thai": "น้ำเงินเข้ม "
        },
        {
            "id": 3906,
            "parent_id": 873,
            "english": "Red",
            "thai": "แดง "
        },
        {
            "id": 3907,
            "parent_id": 873,
            "english": "Others",
            "thai": "อื่นๆ"
        }
    ];
    // // subAtts -> atts -> subCats -> cats
    // const catId = cats.find(cat => cat.english === name).id;
    // const subCatIds = subCats.filter(subCat => subCat.parent_id === catId).map(subCat => subCat.id);
    // const attIds = atts.filter(att => subCatIds.includes(att.parent_id)).map(att => att.id);
    // const subAttIds = subAtts.filter(subAtt => attIds.includes(subAtt.parent_id)).map(subAtt => subAtt.id);
    // const filteredSubAtts = subAttIds.map(subAttId => subAtts.find(subAtt => subAtt.id === subAttId));
    // console.log(filteredSubAtts);
    const keys = parent_key.split('.');
    const catName = keys[0];
    const subCatName = keys[1];
    const attName = keys[2];
    console.log(catName);
    const catId = cats.find(cat => cat.english.toLowerCase().replace(/ /g, '_') === catName).id;
    const subCatId = subCats.find(subCat => subCat.english.toLowerCase().replace(/ /g, '_') === subCatName && subCat.parent_id === catId).id;
    const attId = atts.find(att => att.english.toLowerCase().replace(/ /g, '_') === attName && att.parent_id === subCatId).id;
    // 
    const subAttIds = subAtts.filter(subAtt => subAtt.parent_id === attId).map(subAtt => subAtt.id);
    const filteredSubAtt = subAttIds.map(subAttId => subAtts.find(subAtt => subAtt.id === subAttId));

    const subAtt = filteredSubAtt.find(subAtt => subAtt.english.toLowerCase() == englishValue.toLowerCase());
    console.log(subAtt);
    const subAttThaiValue = subAtt.thai;
    console.log(subAttThaiValue);
    // console.log(catId)
});