from flask import Flask, request, jsonify, render_template, json
from Find_Cholesterol import find_chol
from PRIVATE import KEYS
from pymongo import MongoClient
import uuid

app = Flask(__name__)
main_url = 'http://127.0.0.1:5000/'



def auth():
    """ Authentication for DataBase """
    cluster = MongoClient(KEYS.URL)
    db = cluster['test']
    collection = db['test']
    return cluster, db, collection


def genID():
    """ Generates Unique ID """
    return str(uuid.uuid4())


def throwError(reason):
    return jsonify({"Error": reason})

@app.route('/cholesterol/<int:isMale>/<int:age>/<int:smoker>/<int:numbSmokes>/<float:bmi>/<int:heartRate>', methods=['GET'])
@app.route('/cholesterol/<int:isMale>/<int:age>/<int:smoker>/<int:numbSmokes>/<int:bmi>/<float:heartRate>', methods=['GET'])
def getCholesterol(isMale, age, smoker, numbSmokes, bmi, heartRate):
    """Cholesterol level in mg/dL

    Args:
        isMale (bool): Female -> 0, Male -> 1
        age (int): Persons age
        smoker (bool): Does not smoke ->0, Smokes -> 1
        numbSmokes (int): Numbers of smokes in a day (0 if non smoker)
        bmi (float): BMI of a person can be calculated from '/BMI/<float:weight>/<float:height>'
        heartRate (int): Heart Beats/Min

    Returns:
        Cholesterol: Cholesterol level in mg/dL
    """
    try:
        pred = find_chol.get_vals([isMale, age, smoker, numbSmokes, float(bmi), int(heartRate)])
        return jsonify({"Cholesterol mg/dL": str(pred)})
    except Exception as e:
        print(e)
        return jsonify({"Error": 500})


@app.route('/BMI/<float:weight>/<float:height>', methods=['GET'])
@app.route('/BMI/<int:weight>/<float:height>', methods=['GET'])
@app.route('/BMI/<int:weight>/<int:height>', methods=['GET'])
def getBMI(weight, height):
    """BMI of a person

    Args:
        weight (float): Weight in KG
        height (float): Height in meters
    Returns:
        BMI: BMI of a person
    """
    try:
        bmi = weight/(height*height)
        return jsonify({"BMI": str(bmi)})
    except Exception as e:
        print(e)
        return throwError(500)


@app.route('/signup', methods=['GET'])
def signup():
    """Signup 
    sample: http://127.0.0.1:5000/signup?usr="email"&pss="password"
    Returns:
        UID: Returns Unique ID
    """
    try:
        email =  request.args.get('usr', None)
        password =  request.args.get('pss', None)
        cluster, _, collection = auth()
        _id = genID()
        idExists = collection.find({'_id': _id})
        for _ in idExists:
            _id = genID()
        emailExists = collection.find({'email': str(email)})
        Flag = True
        for _ in emailExists:
            Flag = False
        if Flag:
            post = {'_id':_id, 'email': str(email), 'paswrd': str(password)}
            collection.insert_one(post)
        cluster.close()
        return jsonify({'ID': _id})
    except Exception as e:
        print(e)
        return throwError(str(e))
    

@app.route('/login', methods=['GET'])
def login():
    """Login
    sample: http://127.0.0.1:5000/login?usr="email"&pss="password"

    Returns:
        UserID: Unique User ID for further Operations
    """
    try:
        email =  request.args.get('usr', None)
        password =  request.args.get('pss', None)
        cluster, _, collection = auth()
        credExists  = collection.find({'email': str(email), 'paswrd': str(password)})
        login = False
        for profiles in credExists:
            if profiles['email'] == str(email) and profiles['paswrd'] == str(password):
                login = True
                return profiles['_id']
        cluster.close()
        if not login:
            raise Exception('User not Found')
    except Exception as e:
        print(e)
        return throwError("Username or password invalid")


@app.route('/add/<userId>', methods=['GET'])
def addData(userId):
    print(userId)

    return


if __name__ == '__main__':
    app.run(debug=True)