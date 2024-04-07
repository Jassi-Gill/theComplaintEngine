import mysql.connector as mc


class Student:
    def __init__(self, stuId, stuName, emailId, stuDepartment, stuPass, gender, roomNo):
        self.stuId = stuId
        self.stuName = stuName
        self.emailId = emailId
        self.stuDepartment = stuDepartment
        self.stuPass = stuPass


mydb = mc.connect(
    host="localhost",
    user="root",
    password="JaswindaR@2105",
    database="theComplainEngine",
)

cursor = mydb.cursor()
