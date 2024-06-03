import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions
} from 'react-native';


import EventCalendar from 'react-native-events-calendar';


let {width} = Dimensions.get('window');

const eventcalendar = () => {
  const [events, setEvents] = useState([
    {
      start: '2020-12-23 10:30:00',
      end: '2020-12-23 12:00:00',
      title: 'Webinar',
      summary: 'Monthly Webinar',
    },
    {
      start: '2022-12-25 07:00:00',
      end: '2022-12-25 12:30:00',
      title: 'Meetup',
      summary: 'Arrange the Hall',
    },
    {
      start: '2022-12-27 09:30:00',
      end: '2022-12-27 11:30:00',
      title: 'Food Stall',
      summary: 'Create post and awareness',
    },
    {
      start: '2022-12-31 08:30:00',
      end: '2022-12-31 09:20:00',
      title: 'Year End Meeting',
      summary: 'Discussing the work expected to be done as an association ',
    },
    {
      start: '2023-01-04 07:10:00',
      end: '2023-01-04 08:40:00',
      title: 'New Year First Meeting',
      summary: 'Making a new start for the association',
    },
  ]);

  const eventClicked = (event) => {
    
    alert(JSON.stringify(event));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <EventCalendar
          eventTapped={eventClicked}
          
          events={events}
          
          width={width}
          
          size={60}
          
          initDate={'2022-12-22'}
          
          scrollToFirst
          
        />
      </View>
    </SafeAreaView>
  );
};
export default eventcalendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});