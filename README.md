# HeartGuardian - Team 2

![logo](smallogo.png)

## Table Of Contents

1. [Purpose](#Purpose)
2. [How To Set Up](#How-To-Set-Up)
3. [Framework And Technical details](#Framework-And-Technical-details)
4. [Functionality](#Functionality)
5. [Target Audience](#Target-Audience)
6. [Future Roadmap](#Future-Roadmap)

## Purpose

The purpose of this project is to develop an application that can monitor user's heart rate in real-time and send alarm notification to user's friends/parents. It can also give user come advices on diet to prevent heart diseases by tracking user's daily diet intake.

## How To Set Up

## Framework And Technical details

### Backend

We used flask to to be the server of our backend to interact with frontend. We used logestic regression to train the model and saved the model in `LR_Model.pdl` for later usage. For each heart rate data we recieved, together with some basic physical data of user, we can predict whether the user have heart disease using the model stated above. We also implemented a database using pymongo to store all the user's data and diet history.

### Frontend

We used React Native and Nativebase to design and implement the frontend. The intend of using these technology is to provide a cross-platform application that can be accessed from web or mobile.

## Functionality

### Send Alarm

Based on the blood pressure data collected, the app will predict whether the user have heart condition, and if so, the app will send a notification to the user and guardians that the user has set up earlier.

### Collect User's Dietary

By collecting the user's daily diet, the app will give user some advices on what you should eat and what should not to prevent a heart disease.

### Add and Edit Guardians

User can set some friends or family members to be guardians so that when there is a heart condition, they will get notified as soon as possible.

## Target Audience

This application is designed for those with heart disease or have a possible heart condition. With the help of our application, users and their friends or families can easily get to know the user's health condition and get notified when some abnormal heart activity sensed.

## Future Roadmap

1. Train a more accurate and machine learning model
2. Add functionality to receive diet-based advice
3. Add functionality for comparison of users’ heart health
4. Add functionality to share diet plans
