import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native'
import { Formik } from 'formik';

export default function EventForm() {


    return(
        <View style={styles.container}>
            <Formik
                initialValues={{ title: '', description: '', daysTillEvent: '', location: ''}}
                onSubmit={(values) => {

                }}
            >
                {(formikProps) => (
                    <View>
                        <TextInput 
                            style={styles.input}
                            placeholder='Event title'
                            onChangeText={formikProps.handleChange('title')}
                            value={formikProps.values.title}
                        />

                        <TextInput 
                            multiline
                            style={styles.input}
                            placeholder='Event description'
                            onChangeText={formikProps.handleChange('description')}
                            value={formikProps.values.description}
                        />

                        <TextInput 
                            style={styles.input}
                            placeholder='Days until event'
                            onChangeText={formikProps.handleChange('daysTillEvent')}
                            value={formikProps.values.daysTillEvent}
                        />

                        <TextInput 
                            style={styles.input}
                            placeholder='Location'
                            onChangeText={formikProps.handleChange('location')}
                            value={formikProps.values.location}
                        />
                    </View>
                )};
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    input: {

    }
});