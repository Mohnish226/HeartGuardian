import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
import tensorflow as tf
from tensorflow.keras.models import model_from_json
import warnings
warnings.filterwarnings("ignore")
import os
PATH = os.path.dirname(os.path.abspath(__file__))
print(PATH)

def load_model():
    with open(PATH+'/model_data/model.json', 'r') as json_file:
        model = model_from_json(json_file.read())
    model.load_weights(PATH+'/model_data/model.h5')
    return model

def get_vals(vals):
    model = load_model()
    op = model.predict([vals])
    return op[0][0]