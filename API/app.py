from flask import Flask, request, jsonify, render_template, json
from Find_Cholesterol import find_chol

app = Flask(__name__)
main_url = 'http://127.0.0.1:5000/'



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
        return jsonify({"Error": 500})
    

if __name__ == '__main__':
    app.run(debug=True)