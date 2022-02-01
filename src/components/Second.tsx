import React, { Component } from 'react';
import { registerElement, StyleSheet } from "react-nativescript";
import { EventData } from '@nativescript/core';
import { openUrl } from '@nativescript/core/utils';
import { Carousel, CarouselItem } from 'nativescript-carousel';
import { isNumber } from '@nativescript/core/utils/types';
React.createElement('Carousel', () => require('nativescript-carousel').Carousel);
React.createElement('CarouselItem', () => require('nativescript-carousel').CarouselItem)
registerElement('Carousel', () => require('nativescript-carousel').Carousel);
registerElement('CarouselItem', () => require('nativescript-carousel').CarouselItem);


// type SecondaryScreenProps = {
//     route: RouteProp<MainStackParamList, "Secondary">,
//     navigation: FrameNavigationProp<MainStackParamList, "Secondary">,
// }
var checkdata1;
var checkdata2;
var checkdata3;
var border1 = "black";
var border2 = "black";
var border3 = "black";
const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 24,
        color: "black",
    },
    form: {
        fontSize: 24,
        color: "black",
    },
    textfield: {
        borderWidth: '1',
        fontSize: 24,
        color: "black",
    },
});


export class Second extends Component<{}, any>{
    constructor(props) {
        super(props);
        this.switchImage = this.switchImage.bind(this);
        this.state = {
            currentImage: 0,
            images: [
                "~/./images/pic1.jpg",
                "~/./images/pic2.jpg",
                "~/./images/pic3.jpg",
                "~/./images/pic4.jpg"
            ]
        };
    }
    switchImage() {
        if (this.state.currentImage < this.state.images.length - 1) {
            this.setState({
                currentImage: this.state.currentImage + 1
            });
        } else {
            this.setState({
                currentImage: 0
            });
        }
        return this.state.currentImage;
    }
    gotowhatsapp(btargs) {
        var textField = btargs.object;
        var hasNumber = /\d/;
        var name = textField.page.getViewById("name").text;
        var age = textField.page.getViewById("age").text;
        var testname = textField.page.getViewById("test").text;

        if (name == '' || hasNumber.test(name)) {
            border1 = "red";
            checkdata1 = false;
        } else {
            border1 = "black";
            checkdata1 = true;
        }

        if (age == '') {
            border2 = "red";
            checkdata2 = false;
        } else {
            border2 = "black";
            checkdata2 = true;
        }

        if (testname == '' || hasNumber.test(testname)) {
            border3 = "red";
            checkdata3 = false;
        } else {
            border3 = "black";
            checkdata3 = true;
        }

        if (checkdata1 == true && checkdata2 == true && checkdata3 == true) {
            openUrl("https://wa.me/916376355499?text=" + "Name: " + name + "\nAge: " + age + "\nTest Name: " + testname);
        }
        console.log(name);
        console.log(age);
        console.log(testname);
    }

    componentDidMount() {
        setInterval(this.switchImage, 3000);
    }

    render() {
        return <>
            <gridLayout backgroundColor="#FFF951" height="20%" width="100%">
                <image horizontalAlignment="left" verticalAlignment="bottom" height="80" width="130"
                    src=" ~/./images/demologo.jpg"
                    stretch="fill"
                />
                <label horizontalAlignment="center" verticalAlignment="middle"
                    style={styles.text}
                >
                    Dr. PC LAB
                </label>
            </gridLayout>
            <flexboxLayout flexDirection="column" height="100%" width="100%" justifyContent="space-between">
                <image height="250" width="130" verticalAlignment='top'
                    src={this.state.images[this.state.currentImage]}
                    stretch="fill"
                />
                <label margin='5' style={styles.form}>Name</label>
                <textField style={styles.textfield} hint="Enter your name" color="black" borderColor={border1} backgroundColor="white" margin='10' id='name' />
                <label margin='5' style={styles.form}>Age</label>
                <textField style={styles.textfield} hint="Enter your age" color="black" borderColor={border2} backgroundColor="white" margin='10' id='age' keyboardType='number' maxLength='2' />
                <label margin='5' style={styles.form}>Test Name</label>
                <textField style={styles.textfield} hint="Test name" color="black" borderColor={border3} backgroundColor="white" margin='10' id='test' />
                <label marginBottom="20" padding="10" backgroundColor="#FFF951" fontSize='20' color="black" fontWeight='bold' width="150" textAlignment='center' alignSelf="center" onTap={this.gotowhatsapp}>Submit</label>
            </flexboxLayout >
        </>;
    }
}

export default Second;
