import { StyleSheet, Platform } from 'react-native'


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        flex: 1,
        justifyContent: 'center',
    },
    body: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 44,
        color:'#000000',
    },
    circle: {
        width: 216,
        height: 216,
        borderRadius: 200,
    },
    circleTopLeft: {
        marginLeft:79,
        left: 54,
        top: 54,
        backgroundColor: '#e0c3fc',
        opacity: 0.5,
        position: 'relative',
        zIndex: 0,
    },
    circleTopRight: {
        marginRight: 79,
        right: 54,
        top: 54,
        backgroundColor: '#e0c3fc',
        opacity: 0.5,
        position: 'relative',
        zIndex: 1,
    },
    circleBottomLeft: {
        marginLeft: 79,
        left: 54,
        bottom: 54,
        backgroundColor: '#8ec5fc',
        opacity: 0.5,
        position: 'relative',
        zIndex: 2,
    },  
    circleBottomRight: {
        marginRight: 79,
        right: 54,
        bottom: 54,
        backgroundColor: '#8ec5fc',
        opacity: 0.5,
        position: 'relative',
        zIndex: 3,
    },  
    centerCircle: {
        position: 'relative',
        zIndex: 10,
        bottom: 270
    },
    headerBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
    },
    profilepicWrap: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderColor: 'rgba(0,0,0, 0.4)',
        borderWidth: 14,
    },
});

export default styles