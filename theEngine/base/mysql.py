import mysql.connector as mc

mydb = mc.connect(
    host="localhost",
    user="root",
    password="JaswindaR@2105",
    database="theComplainEngine",
)


def addTable(user):
    cursor = mydb.cursor()
    try:
        cursor.execute("delete from student where stuId = %d", int({user.username}))
    finally:
        sql = "INSERT INTO Student (stuId, stuName, emailId, stuDepartment, stuGender, stuBatch, roomNo) VALUES (%d, %s, %s, %s, %s, %s, %s)"
        val = (
            int({user.username}),
            {user.name},
            {user.email},
            None,
            None,
            {user.batch} + {user.year},
            {user.roomno},
        )
        cursor.execute(sql, val)
        mydb.commit()

    cursor.close()
