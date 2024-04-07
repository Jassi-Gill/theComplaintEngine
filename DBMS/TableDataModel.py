class Student:
    def __init__(
        self,
        stuId,
        stuName,
        emailId,
        stuDepartment,
        stuPass,
        stuGender,
        stuBatch,
        roomNo,
    ):
        self.stuId = stuId
        self.stuName = stuName
        self.emailId = emailId
        self.stuDepartment = stuDepartment
        self.stuPass = stuPass
        self.stuGender = stuGender
        self.stuBatch = stuBatch
        self.roomNo = roomNo


class StuMobile:
    def __init__(self, stuId, stuMobileNo):
        self.stuId = stuId
        self.stuMobileNo = stuMobileNo


class WorkerDepartment:
    def __init__(self, dId, dName, dLocation, dEmail, dHead):
        self.dId = dId
        self.dName = dName
        self.dLocation = dLocation
        self.dEmail = dEmail
        self.dHead = dHead


class Worker:
    def __init__(self, workerId, workerName, dId, workerDesig):
        self.workerId = workerId
        self.workerName = workerName
        self.dId = dId
        self.workerDesig = workerDesig


class WorkerMobile:
    def __init__(self, workerId, workerMobileNo):
        self.workerId = workerId
        self.workerMobileNo = workerMobileNo


class Faculty:
    def __init__(self, facId, facName, facEmail, facDesig, facPass):
        self.facId = facId
        self.facName = facName
        self.facEmail = facEmail
        self.facDesig = facDesig
        self.facPass = facPass


class FacMobile:
    def __init__(self, facId, facMobileNo):
        self.facId = facId
        self.facMobileNo = facMobileNo


class OngoingWorks:
    def __init__(self, cId, iniDate, expCompDate):
        self.cId = cId
        self.iniDate = iniDate
        self.expCompDate = expCompDate


class OngoingWorksWorker:
    def __init__(self, cId, workerId):
        self.cId = cId
        self.workerId = workerId


class OngoingWorksStudent:
    def __init__(self, cId, stuId):
        self.cId = cId
        self.stuId = stuId


class OngoingWorksFaculty:
    def __init__(self, cId, facId):
        self.cId = cId
        self.facId = facId


class SuperAdmin:
    def __init__(self, adUserName, adPass, adName, adEmail, adLocation):
        self.adUserName = adUserName
        self.adPass = adPass
        self.adName = adName
        self.adEmail = adEmail
        self.adLocation = adLocation


class SupAdmMobileNo:
    def __init__(self, adUserName, supAdMobileNo):
        self.adUserName = adUserName
        self.supAdMobileNo = supAdMobileNo


class FiledComplaint:
    def __init__(self, tempComplainId, stuId, cDesc, dId):
        self.tempComplainId = tempComplainId
        self.stuId = stuId
        self.cDesc = cDesc
        self.dId = dId


class Thread:
    def __init__(self, cId, reply):
        self.cId = cId
        self.reply = reply
