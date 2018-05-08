import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Card from './Card';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "restaurants": {
        _id: "5a56caa34585650014b52754",
        updatedAt: "2018-04-17T05:18:42.160Z",
        createdAt: "2018-01-11T02:23:31.614Z",
        title: "Des Pardes",
        popularFor: "",
        description:
          "We have got healthy foods to feed your family that are easy and quick as well as specialty drinks and cocktails that will wow your friends .",
        iconUrl: "https://tg-url.herokuapp.com/ht",
        budget: "High",
        location: {
          _id: "5a56caa34585650014b52753",
          updatedAt: "2018-03-23T07:23:39.562Z",
          createdAt: "2018-01-11T02:23:31.513Z",
          fullAddress:
            "Plot 314 , Street 1 - A, Sector O- 9 , National Police Foundation, Islamabad",
          loc: [73.133387, 33.566658],
          address: {
            city: "Islamabad",
            country: "Pakistan",
            zip: 44000,
            area: "Sector O-9, National Police Foundation"
          },
          active: true,
          __v: 0,
          locationOf: { item: "5a56caa34585650014b52754", kind: "Restaurant" }
        },
        active: true,
        ambience: { videoUrl: [], imageUrl: [] },
        contactDetails: {
          webUrl: "http://despardes.com.pk/",
          contactNumber: "0518445666",
          cellNumber: "0518443666",
          email: "",
          phoneNumber: "0517442666"
        },
        delivery: {
          minimumOrder: null,
          distanceRadius: null,
          chargePerKm: null,
          TimePerKm: null,
          delivers: 1
        },
        schedule: {
          deliveryHours: [],
          workingHours: [
            {
              day: "Monday",
              _id: "5ab4ab7b222b890014ff0808",
              times: [
                {
                  to: "12:00am",
                  from: "11:00pm",
                  _id: "5ab4ab7b222b890014ff0809"
                }
              ]
            },
            {
              day: "Tuesday",
              _id: "5ab4ab7b222b890014ff0806",
              times: [
                {
                  to: "12:00am",
                  from: "11:00pm",
                  _id: "5ab4ab7b222b890014ff0807"
                }
              ]
            },
            {
              day: "Wednesday",
              _id: "5ab4ab7b222b890014ff0804",
              times: [
                {
                  to: "12:00am",
                  from: "11:00pm",
                  _id: "5ab4ab7b222b890014ff0805"
                }
              ]
            },
            {
              day: "Thursday",
              _id: "5ab4ab7b222b890014ff0802",
              times: [
                {
                  to: "12:00am",
                  from: "11:00pm",
                  _id: "5ab4ab7b222b890014ff0803"
                }
              ]
            },
            {
              day: "Friday",
              _id: "5ab4ab7b222b890014ff0800",
              times: [
                {
                  to: "12:00am",
                  from: "11:00pm",
                  _id: "5ab4ab7b222b890014ff0801"
                }
              ]
            },
            {
              day: "Saturday",
              _id: "5ab4ab7b222b890014ff07fe",
              times: [
                {
                  to: "12:00am",
                  from: "9:00am",
                  _id: "5ab4ab7b222b890014ff07ff"
                }
              ]
            },
            {
              day: "Sunday",
              _id: "5ab4ab7b222b890014ff07fc",
              times: [
                {
                  to: "12:00am",
                  from: "9:00am",
                  _id: "5ab4ab7b222b890014ff07fd"
                }
              ]
            }
          ]
        },
        orderMethods: {
          preOrder: true,
          takeAway: true,
          dineIn: true,
          delivery: true
        },
        paymentMethods: {
          online: false,
          cash: true,
          swipe: true,
          cashOnDelivery: true
        },
        moreInfo: [],
        goodFor: {
          buffet: true,
          teaTime: true,
          dinner: true,
          lunch: true,
          breakFast: false
        },
        reviews: [],
        food: { videoUrl: [], imageUrl: [] },
        coverUrl: {
          imageUrl: [
            "https://storage.googleapis.com/fikifoo-577a5.appspot.com/data%2F1521789741176_dp_imgg1.jpg?GoogleAccessId=firebase-adminsdk-zwa2r@fikifoo-577a5.iam.gserviceaccount.com&Expires=16755033600&Signature=OZJGch45jnN0rug%2Fr%2Bl9vIWuYLzVA6%2BJZ%2Bgrveb5uiIN6XuD0Ampmvkpn%2Ff86sxAfxeKU9GPgJ1Nh3NBW8NHGkNJ7UEkxR87yTtmx4zon4Vo44M5khRsFt7b7tOGEKLLAZBwZpdjYkQQhUgX4JaGmj2H9UWYO%2FC4KH4Pa%2FWg34IX0mAj3du9wPk21x6DeQqnQYgDfZSxjwTYsMgQYDONuMehxfPP4y6SLWh1jg3pxilZDsNHVkljJi927r9Tv3ty8kl%2BmRI8fBY769DrF2m6PtItIFVvXUp64QGDNxCfR%2Bw9rgHkS%2FPtb4sfh2lsblGudfSC32hTQBohZZj4V5FiQg%3D%3D",
            "https://storage.googleapis.com/fikifoo-577a5.appspot.com/data%2F1521789758592_dp_imgg2.jpg?GoogleAccessId=firebase-adminsdk-zwa2r@fikifoo-577a5.iam.gserviceaccount.com&Expires=16755033600&Signature=Jit8v5v18whCOIoggnfAQ8E5nu5BXwwzSET74YruvH2guLTk5OxvBzw5iWOdjN%2BxEAMNSEv8pxEvHyp05j7FEkQryPExwsxrnwmSGaPwA4iHMKiN9Q506%2F0KJ3gDIACXGCXTIKs6Xa2zDbeub2hiwLUm5419EiwikJJnMlJXZgyyFa%2FgkoA5LQcG%2BJbwlxh2pCanPgNascIIV44RAB1WBdqzpRSf7U%2BsQzPoX0LmesGw%2FYvngGGug5lFuqGHELZFo%2BKSd4aKa9VqIc%2FiKxC6JWySPHrinFEoQ3EsnqaQz%2FHHNpyBx6UBD%2BDN9x6Ok6CO0uPzTNu2AHQEDgZLvRCDdA%3D%3D",
            "https://storage.googleapis.com/fikifoo-577a5.appspot.com/data%2F1521789782106_dp_imgg3.jpg?GoogleAccessId=firebase-adminsdk-zwa2r@fikifoo-577a5.iam.gserviceaccount.com&Expires=16755033600&Signature=ItgLoyDvZk2mMy1VicXBQ44Svk7%2FT%2F3f138%2FJGIL3JbmewKvaQFqmycv5aAKiCUbEOdg5DX6miIKqt%2FH4Ripfinyaj8Lfw%2BstgEsYIHvjm9XyOec9sp8iOj99mC%2FOS5BHe3dk7%2BVfVWfArNTQmoD%2BJ6Afjmo9v%2Fp2Cbf%2BT6gleYiHbCqhBjvASvrFl9SCdX1ncoA31ZKGhY0fz0fFXqfPa5Ott92h8XcBojPljHzjeorrM7C9iJ3rr5sWBUov2CSNWy0jULo%2FYdsOK54Xk54OXLkMzNB4XM5U1JDQy3nkTeHZrCMIVbZcYIGqWcNJvBVtWDJmFwJUn3unfVUXDOw6w%3D%3D"
          ]
        },
        rating: { overall: 0, service: 0, ambience: 0, hygiene: 0, taste: 0 },
        status: { premium: false, popular: false, featured: false },
        stats: { lovesCount: 0, distance: "0.60", orders: 0, reviews: 0 },
        loves: [],
        partial: true,
        franchise: "5a54381b9c34b200149227ad",
        __v: 0,
        liveStatus: { statusCode: 1 },
        gst: false,
        gstPercentage: null,
        internalStatus: "5acc9e5435e6a900145349f4"
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Card item={this.state.restaurants} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
