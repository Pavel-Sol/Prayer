import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import AddIcon from '../../icons/AddIcon/AddIcon';

type InputPropsType = {
  isIconLeft?: boolean;
  onIconPress?: () => void;
} & TextInputProps;

const Input: React.FC<InputPropsType> = props => {
  return (
    <View style={styles.container}>
      {props.isIconLeft ? (
        <TouchableOpacity style={styles.addBtn} onPress={props.onIconPress}>
          <AddIcon />
        </TouchableOpacity>
      ) : null}
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E5E5E5',
    paddingHorizontal: 5,
    marginBottom: 16,
  },
  input: {
    fontSize: 17,
  },
  addBtn: {
    marginHorizontal: 10,
  },
});

export default Input;
