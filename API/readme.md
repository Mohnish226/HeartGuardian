# How to use this API:

I will share a password on discord, please paste that as a string in variable `PASSWORD` in [KEYS.py](PRIVATE/KEYS.py)

I will try to host it so everyone can work on it Asap

| Parameter       | Meaning    | Data Type     |
| ------------- | ---------- | ----------- |
`<URL>` | `http://127.0.0.1:5000/` |  | 
`isMale` | `0` if female; `1` if male | int |
`age` | Age of a person | int | 
`smoker` | `0` if non smoker, `1` if smoker | int |
`numbSmokes` | Number of smokes in a day | int |
`bmi` | BMI | float |
`height` | Height in meters | float |
`weight` | Weight in KG | float |
`heartRate` | Heart Rate | int |
`userId` | Unique user id from after registering | string |

- ##### To get predicted cholesterol levels:
    
    URL: `<URL>/cholesterol/<isMale>/<age>/<smoker>/<numbSmokes>/<bmi>/<heartRate>`

- ##### To get BMI :

    URL: `<URL>/BMI/<weight>/<height>`

- ##### To signup :

    URL: `<URL>/signup?usr=<EMAIL>&pss=<PASSWORD>`

- ##### To login :

    URL: `<URL>/login?usr=<EMAIL>&pss=<PASSWORD>`

- ##### To add more user details :

    URL: `<URL>/add/<userId>?gender=<isMale>&age=<age>&smokes=<smoker>&numbSmokes=<numbSmokes>&heartRate=<heartRate>&height=<height>&weight=<weight>`

    NOTE: parameters are optional