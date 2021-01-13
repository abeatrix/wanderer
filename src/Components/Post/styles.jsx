import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 3/2,
        resizeMode: 'cover',
        borderRadius: 10,
        opacity: 20,
    },
    bedrooms: {
        marginVertical: 10,
        fontSize: 15,
        color: '#94B7D7',
    },
    description: {
        fontSize: 17,
        lineHeight: 25
    },
    prices: {
        marginVertical: 10,
        fontSize: 17
    },
    oldPrice: {
        color: '#94B7D7',
        textDecorationLine: 'line-through',
        fontWeight: 'bold',
    },
    price: {
        fontWeight: 'bold'
    },
    finalprice: {
        color: '#94B7D7', //#2D57A7
        textDecorationLine: 'underline',
    },
});

export default styles;
