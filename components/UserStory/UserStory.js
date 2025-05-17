import React from 'react';
import {View, Image} from 'react-native';
import PropTypes from 'prop-types';
import style from '../UserStory/style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';

const UserStory = (props)=>{
    return (
            <View style={style.userImageContainer}>
            <UserProfileImage 
                    profileImage={props.profileImage}
                    imageDimensions={65}
                />
            <Image source={props.profileImage} style={style.image}/>
            </View>
    );
};


UserStory.propTypes ={
    firstName: PropTypes.string.isRequired,
};

export default UserStory;