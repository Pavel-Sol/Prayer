import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

type SelectControllerPropsType = {
  OnSelectPrayersMode: (mode: 'MY_PRAYERS' | 'SUBSCRIBED') => void;
  mode: 'MY_PRAYERS' | 'SUBSCRIBED';
};
const SelectController: React.FC<SelectControllerPropsType> = ({
  mode,
  OnSelectPrayersMode,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.item,
          mode === 'MY_PRAYERS' && {borderBottomColor: '#72A8BC'},
        ]}
        onPress={() => OnSelectPrayersMode('MY_PRAYERS')}>
        <View style={styles.itemTextWrap}>
          <Text
            style={[
              styles.itemText,
              mode === 'MY_PRAYERS' && {color: '#72A8BC'},
            ]}>
            My prayers
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.item,
          mode === 'SUBSCRIBED' && {borderBottomColor: '#72A8BC'},
        ]}
        onPress={() => OnSelectPrayersMode('SUBSCRIBED')}>
        <View style={styles.itemTextWrap}>
          <Text
            style={[
              styles.itemText,
              mode === 'SUBSCRIBED' && {color: '#72A8BC'},
            ]}>
            Subscribed
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 0.5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(200, 200, 200, 1)',
  },

  itemTextWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },

  itemText: {
    color: 'rgba(200, 200, 200, 1)',
    fontSize: 13,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
});

export default SelectController;
