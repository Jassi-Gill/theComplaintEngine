import mysql.connector as mc

mydb = mc.connect(
    host="localhost",
    user="root",
    password="JaswindaR@2105",
    database="theComplainEngine",
)

cursor = mydb.cursor()

sql = "INSERT INTO Student (stuId, stuName, emailId, stuDepartment, roomNo) VALUES (%d, %s, %s, %s, %s)"
val = [
    (2201001, "ABHIJEET KUMAR", "abhijeet.kumar22b@iiitg.ac.in", "CSE", "011"),
    (2201002, "ABHIJEET RAJ", "abhijeet.raj22b@iiitg.ac.in", "ECE", "210"),
    (2201003, "ABHINABA GHOSHAL", "abhinaba.ghoshal22b@iiitg.ac.in", "ECE", "510"),
    (2201004, "ABHINAV KUMAR", "abhinav.kumar22b@iiitg.ac.in", "CSE", "620"),
    (2201005, "ABHINAV PANGARIA", "abhinav.pangaria22b@iiitg.ac.in", "ECE", "630"),
    (2201006, "ABHISHEK KUMAR", "abhishek.kumar22b@iiitg.ac.in", "CSE", "113"),
    (2201007, "ABHISHEK KUMAR", "abhishek.kumar22b@iiitg.ac.in", "ECE", "254"),
    (2201008, "ABHYUDAY PRATAP SINGH", "abhyuday.singh22b@iiitg.ac.in", "CSE", "263"),
    (2201009, "ACHANTA VENKATA ANAND", "achanta.anand22b@iiitg.ac.in", "ECE", "227"),
    (2201010, "ADITYA CHOWDHURY", "aditya.chowdhury22b@iiitg.ac.in", "CSE", "232"),
    (2201011, "ADITYA KRISHNA JAISWAL", "aditya.jaiswal22b@iiitg.ac.in", "ECE", "332"),
    (2201012, "ADITYA KUMAR", "aditya.kumar22b@iiitg.ac.in", "ECE", "334"),
]

cursor.executemany(sql, val)

mydb.commit()

print(cursor.rowcount, "was inserted.")

mydb.commit()
