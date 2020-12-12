import pickle

with open("LR_Model.pkl", 'rb') as file:  
    classifier = pickle.load(file)

print(classifier.predict([[1,39,4,0,0,0,0,0,0,195,106,70,26.97,80,77]])[0])