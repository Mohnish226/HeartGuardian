# HeartGuardian - Team 2 
![](https://img.shields.io/static/v1?label=Microsoft%20Imagine%20Cup%202020&message=Team%202&color=success?style=flat-square&logo=microsoft)

![logo](smallogo.png)

## Table Of Contents

1. [Purpose](#Purpose)
2. [Framework And Technical details](#Framework-And-Technical-details)
3. [Functionality](#Functionality)
4. [Target Audience](#Target-Audience)
5. [Future Roadmap](#Future-Roadmap)
6. [App Previews](#App-Previews)

## Purpose

The purpose of this project is to develop an application that can monitor user's heart rate in real-time and send alarm notification to user's friends/parents. It can also give user come advices on diet to prevent heart diseases by tracking user's daily diet intake.

## Framework And Technical details

### Backend

We used flask to to be the server of our backend to interact with frontend. We used Sequential Model to train the model and saved the model for later usage. For each heart rate data we recieved, together with some basic physical data of user, we can predict whether the user have heart disease using the model stated above. We use mongoDB as a database to store all the user's data and diet history and Guardian Relations.

### Frontend

We used React Native and Nativebase to design and implement the frontend. The intend of using these technology is to provide a cross-platform application that can be accessed from web or mobile.

## Functionality

### Send Alarm

Based on the blood pressure data collected, the app will predict whether the user have heart condition, and if so, the app will send a notification to the user and guardians that the user has set up earlier.

### Add and Edit User's Medical details

As some health parameters change, the user can change their medical details to stay updated with their heart health details.

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
5. Help users call medical professionals via the app

## App Previews
#### Push Notification Preview
![Push Notification Preview](https://github.com/steven-lm/HeartGuardian/blob/main/previews/pushnotification.JPG)

#### Home Preview
![Home Preview](https://github.com/steven-lm/HeartGuardian/blob/main/previews/home.JPG)

#### Diet Preview
![Diet Preview](https://github.com/steven-lm/HeartGuardian/blob/main/previews/diet.JPG)
