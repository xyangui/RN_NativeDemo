import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import {Calendar} from 'react-native-calendars';

const datas = {
  '2018-04-30': {selected: true},
  '2018-05-01': {selected: true},
};

export default class CalendarsScreen extends Component {
  constructor(props) {
    super(props);
    //this.state = {};
    //this.onDayPress = this.onDayPress.bind(this);

    this.state = {
      isGetData: false,
      lessonDates: null,
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Custom calendar with custom marking type</Text>
        <Calendar
          style={styles.calendar}

          hideExtraDays
          minDate={Date()}

          markedDates={
            datas
          }
          hideArrows={false}
        />
      </ScrollView>
    );
  }

  // onDayPress(day) {
  //   this.setState({
  //     selected: day.dateString
  //   });
  // }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});
