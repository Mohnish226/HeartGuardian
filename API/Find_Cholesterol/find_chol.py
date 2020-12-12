import tensorflow as tf
from tensorflow.keras.models import model_from_json

def load_model():
    with open('model_data/model.json', 'r') as json_file:
        model = model_from_json(json_file.read())
    model.load_weights("model_data/model.h5")
    #model._make_predict_function()
    return model

def get_vals(male, age, currentSmoker, cigsPerDay, BMI, heartRate):
    print("Loading")
    model = load_model()
    vals = [[male, age, currentSmoker, cigsPerDay, BMI, heartRate]]
    print('Print')
    op = model.predict(vals)
    return op


print(get_vals(1, 39, 0, 0, 26.97, 80.0))