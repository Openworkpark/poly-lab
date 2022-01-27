import React, { Component } from 'react';
import { StyleSheet } from "react-nativescript";
import { EventData } from '@nativescript/core';
import { openUrl } from '@nativescript/core/utils';
import { Carousel } from 'nativescript-carousel';
import { isNumber } from '@nativescript/core/utils/types';
React.createElement('Carousel', () => require('nativescript-carousel').Carousel);
React.createElement('CarouselItem', () => require('nativescript-carousel').CarouselItem)


// type SecondaryScreenProps = {
//     route: RouteProp<MainStackParamList, "Secondary">,
//     navigation: FrameNavigationProp<MainStackParamList, "Secondary">,
// }

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
        var alertValidation1 = '';
        var hasNumber = /\d/; 
        var name = textField.page.getViewById("name").text;
        var age = textField.page.getViewById("age").text;
        var testname = textField.page.getViewById("test").text;

        if (name == '' || age == '' || testname == '') {
            alertValidation1 += 'please fill all the details';
            alert(alertValidation1 + '\n');
        } else if (hasNumber.test(name)) {
            alertValidation1 += 'please enter valid details';
            alert(alertValidation1 + '\n');
        }else if (hasNumber.test(testname)) {
            alertValidation1 += 'please enter valid details';
            alert(alertValidation1 + '\n');
        } else {
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
            <absoluteLayout id='main_section' backgroundColor="#FFF951" height="80" marginTop="48">
                <image height="80" width="130"
                    src=" ~/./images/demologo.jpg"
                    stretch="fill"
                />
                <label
                    left="130"
                    top="20"
                    style={styles.text}
                >
                    Dr. PC LAB
                </label>
            </absoluteLayout>
            <image height="250" width="130" top="100"
                src={this.state.images[this.state.currentImage]}
                stretch="fill"
            />
            <label margin='5' style={styles.form}>Name</label>
            <textField hint="Enter your name" color="black" backgroundColor="white" borderWidth='1' borderColor='black' margin='10' id='name' />
            <label margin='5' style={styles.form}>Age</label>
            <textField hint="Enter your age" color="black" backgroundColor="white" borderWidth='1' borderColor='black' margin='10' id='age' keyboardType='number' maxLength='2' />
            <label margin='5' style={styles.form}>Test Name</label>
            <textField hint="Test name" color="black" backgroundColor="white" borderWidth='1' borderColor='black' margin='10' id='test' />
            <button backgroundColor="#FFF951" fontSize='20' onTap={this.gotowhatsapp}>
                Submit
            </button>
        </>;
    }
}

export default Second;
