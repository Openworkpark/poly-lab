import React, { Component } from 'react';
import { Dialogs } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "./NavigationParamList";
import { StyleSheet } from "react-nativescript";
import { EventData } from '@nativescript/core';


// type SecondaryScreenProps = {
//     route: RouteProp<MainStackParamList, "Secondary">,
//     navigation: FrameNavigationProp<MainStackParamList, "Secondary">,
// }

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "white",
    },
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
            text:'',
            currentImage: 0,
            images: [
                "~/./images/pic1.jpg",
                "~/./images/pic2.jpg",
                "~/./images/pic3.jpg",
                "~/./images/pic4.jpg"
            ]
        };
    }
    onInputchange(event) {
        this.setState({
            text: event.target.text
        });
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
        return this.currentImage;
    }
    gotowhatsapp(btargs) {
        var textField = btargs.object;
        const name = textField.page.getViewById("name").text;
        const age = textField.page.getViewById("age").text;
        const test = textField.page.getViewById("test").text;

        // var url = "https://wa.me/916376355499?text="
        //     + "name: " + name + "age" + age + "test" + test ;

        // window.open(url, '_blank').focus();
        var utilityModule = require("utils/utils");
        utilityModule.openUrl("https://www.thepolyglotdeveloper.com");
        console.log(name);
        console.log(age);
        console.log(test);
        Dialogs.alert("Details submitted!")
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
            <textField text={this.state.text} hint="Nishant" color="black" backgroundColor="white" borderWidth='1' borderColor='black' margin='10'  id='name' />
            <label margin='5' style={styles.form}>Age</label>
            <textField hint="24" color="black" backgroundColor="white" borderWidth='1' borderColor='black' margin='10' id='age' />
            <label margin='5' style={styles.form}>Test Name</label>
            <textField hint="HB" color="black" backgroundColor="white" borderWidth='1' borderColor='black' margin='10' id='test' />
            <button backgroundColor="#FFF951" fontSize='20' onTap={this.gotowhatsapp}>
                Submit
            </button>
        </>;
    }
}

export default Second;
