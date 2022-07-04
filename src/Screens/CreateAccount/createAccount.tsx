import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../../component/customTextInput';
import CheckBox from '@react-native-community/checkbox';
import {images} from '../../Utils/images';
import {
  emailRegex,
  passwordRegex,
  mobilenoRegex,
  nameRegex,
} from '../../Utils/constant';
import {styles} from './style';
import {STRINGS} from '../../Utils/string';

interface userdefined {
  val?: any;
  value?: any;
}

export default function CreateAccount(props: userdefined) {
  const navigation = useNavigation<any>();
  const [isSelected, setSelection] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [emailValidError, setEmailValidError] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [mobno, setMobno] = React.useState('');
  const [mobnoerror, setMobnoerror] = React.useState('');
  const [name, setName] = React.useState('');
  const [nameerror, setnameError] = useState('');

  const handleName = (val: any) => {
    if (val.length === 0) {
      setnameError('name should be minimum 3 character');
    } else if (nameRegex.test(val) === false) {
      setnameError('Please enter a valid name');
    } else if (nameRegex.test(val) === true) {
      setnameError('');
    }
  };

  const handleValidEmail = (val: any) => {
    if (val.length === 0) {
      setEmailValidError('email address must be enter');
    } else if (emailRegex.test(val) === false) {
      setEmailValidError('Please enter a valid email address');
    } else if (emailRegex.test(val) === true) {
      setEmailValidError('');
    }
  };

  const handlePassword = (val: any) => {
    if (val.length === 0) {
      setPasswordError('password must be enter');
    } else if (passwordRegex.test(val) === false) {
      setPasswordError('enter valid password');
    } else if (passwordRegex.test(val) === true) {
      setPasswordError('');
    }
  };

  const handleValidMobno = (val: any) => {
    if (val.length === 0) {
      setMobnoerror('Phone Number must be enter');
    } else if (mobilenoRegex.test(val) == false) {
      setMobnoerror('Enter valid Phone Number');
    } else if (mobilenoRegex.test(val) == true) {
      setMobnoerror('');
    }
  };

  return (
    <View style={styles.mainparent}>
      <View style={styles.leftview}>
        <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
          <Image style={styles.leftarrowimg} source={images.left} />
        </TouchableOpacity>
      </View>
      <View style={styles.createparent}>
        <View>
          <Text style={styles.createtext}>{STRINGS.LABEL.CREATEACC}</Text>
        </View>
        <View style={styles.innercreatesign}>
          <Text style={styles.signuptext}>{STRINGS.LABEL.SIGN}</Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <CustomTextInput
            label="Full Name"
            placeholder="Full Name"
            onChangeText={(value: any) => {
              setName(value);
              handleName(value);
            }}
          />

          {nameerror ? (
            <Text style={styles.handlingAll}>{nameerror}</Text>
          ) : null}
          <CustomTextInput
            label="Mobile Number"
            placeholder="Mobile Number"
            value={mobno}
            onChangeText={(value: any) => {
              setMobno(value);
              handleValidMobno(value);
            }}
            keyboardtype="number-pad"
          />
          {mobnoerror ? (
            <Text style={styles.handlingAll}>{mobnoerror}</Text>
          ) : null}

          <CustomTextInput
            label="Email"
            placeholder="Email"
            value={email}
            onChangeText={(value: any) => {
              setEmail(value);
              handleValidEmail(value);
            }}
          />
          {emailValidError ? (
            <Text style={styles.handlingAll}>{emailValidError}</Text>
          ) : null}

          <CustomTextInput
            label="Password"
            placeholder="Password"
            value={password}
            securetextentry={true}
            onChangeText={(value: any) => {
              setPassword(value);
              handlePassword(value);
            }}
          />
          {passwordError ? (
            <Text style={styles.handlingAll}>{passwordError}</Text>
          ) : null}
        </View>

        <View style={styles.checkboxparent}>
          <View style={styles.innercheckbox}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              boxType={'square'}
              onFillColor="#44C2E3"
              lineWidth={2}
              onCheckColor="black"
              animationDuration={0.2}
              style={styles.checkBox}
              onTintColor="#44C2E3"
            />
          </View>
          <View style={styles.agree}>
            <Text style={styles.agreetext}>{STRINGS.LABEL.AGREE}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
            <View style={styles.terms}>
              <Text style={styles.termstext}>{STRINGS.LABEL.TERMSUSE}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Verification')}
            disabled={!isSelected}
            style={
              !isSelected
                ? {...styles.createbutton, backgroundColor: '#1F1B1B'}
                : styles.createbutton
            }>
            <Text style={styles.buttontext}>{STRINGS.LABEL.CREATE}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.orparent}>
          <View style={styles.orinner} />
          <View>
            <Text style={styles.ortext}>{'OR'}</Text>
          </View>
          <View style={styles.orouter} />
        </View>
        <TouchableOpacity>
          <View style={styles.parentgoogle}>
            <Image style={styles.googleimg} source={images.google} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.parentgoogle}>
            <Image style={styles.googleimg} source={images.apple} />
          </View>
        </TouchableOpacity>
        <View style={styles.bottomsign}>
          <View>
            <Text style={styles.alreadyuser}>{STRINGS.LABEL.ALREADY}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
            <View>
              <Text style={styles.sign}>{STRINGS.LABEL.SIGNIN}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
