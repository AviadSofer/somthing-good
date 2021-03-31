import { generate } from 'text-to-image';

function textToImage(text) {
    generate(text, {
        direction: 'rtl',
        textAlign: 'center',
        margin: 15,
        fontSize: 24,
        fontFamily: 'Secular One, sans-serif',
    }).then((dataUri) => {
        const link = document.createElement('a');
        link.download = 'good-thing.jpeg';
        link.href = dataUri;
        link.click();
      });
}

export default textToImage
