import mysql.connector as mc

mydb = mc.connect(
    host="localhost",
    user="root",
    password="JaswindaR@2105",
    database="jassi",
)

cursor = mydb.cursor()

cursor.execute("SELECT * FROM advisor")

rows = cursor.fetchall()

for row in rows:
    print(row)
